import { NextResponse } from "next/server";
import { z } from "zod";
import { CHATBOT_SYSTEM_PROMPT, getFallbackResponse } from "@/lib/ai/chatbot-context";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";

// Maximum 12 messages, max 1000 chars per message to prevent payload bloat
const messageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().trim().min(1).max(1000),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(12),
});

const MAX_PAYLOAD_BYTES = 32 * 1024; // 32KB

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const targetHeader = origin || referer;

  if (!targetHeader) {
    return true;
  }

  try {
    const url = new URL(targetHeader);
    const hostname = url.hostname.toLowerCase();
    const allowed = [
      "localhost",
      "127.0.0.1",
      "ascenta-agency.vercel.app",
      "ascenta.dev",
      "www.ascenta.dev",
    ];
    return allowed.includes(hostname) || hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
}

// Strip special control tokens often used in jailbreak and prompt injection attempts
function sanitizePromptText(text: string): string {
  return text
    .replace(/<\|im_start\|>/gi, "")
    .replace(/<\|im_end\|>/gi, "")
    .replace(/<\|endoftext\|>/gi, "")
    .replace(/\[\s*SYSTEM\s*\]/gi, "")
    .replace(/\[\s*\/SYSTEM\s*\]/gi, "")
    .replace(/\[\s*INST\s*\]/gi, "")
    .replace(/\[\s*\/INST\s*\]/gi, "");
}

export async function POST(req: Request) {
  try {
    // 1. Origin / Referer validation (Anti-CSRF / Anti-Cross-Origin abuse)
    if (!isAllowedOrigin(req)) {
      return NextResponse.json(
        { error: "Forbidden. Cross-origin request not allowed." },
        { status: 403 }
      );
    }

    // 2. Content-Length check to reject oversized payloads early
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: "Payload too large. Maximum request size is 32KB." },
        { status: 413 }
      );
    }

    // 3. Sliding-window rate limiting (15 requests per 60 seconds per IP)
    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(`chat:${clientIp}`, {
      limit: 15,
      windowMs: 60 * 1000,
    });

    if (!rateCheck.success) {
      return NextResponse.json(
        {
          reply:
            "You have sent several messages quickly. Please wait a moment before sending another message, or connect with Muhammad Rayyan directly on WhatsApp.",
          source: "rate-limited",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(rateCheck.resetMs / 1000).toString(),
          },
        }
      );
    }

    const json = await req.json();
    const parsed = chatRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request payload. Messages must be non-empty strings under 1000 characters." },
        { status: 400 }
      );
    }

    const { messages } = parsed.data;
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No user message found in the conversation." },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.OPENROUTER_API_KEY ||
      process.env.OMNIROUTE_API_KEY;

    const isOpenRouter =
      !!process.env.OPENROUTER_API_KEY ||
      Boolean(apiKey && apiKey.startsWith("sk-or-"));

    const rawApiUrl = isOpenRouter
      ? (process.env.OPENROUTER_API_URL || "https://openrouter.ai/api/v1")
      : (process.env.OMNIROUTE_API_URL || "https://api.omniroute.ai/v1");

    const model = isOpenRouter
      ? (process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini")
      : (process.env.OMNIROUTE_MODEL || "gpt-4o-mini");

    // Seamless grounded local fallback when external keys are not configured
    if (!apiKey) {
      const fallbackReply = getFallbackResponse(lastUserMessage.content);
      return NextResponse.json({
        reply: fallbackReply,
        source: "local-grounded",
        model: "ascenta-offline-preview",
      });
    }

    const endpoint = rawApiUrl.endsWith("/chat/completions")
      ? rawApiUrl
      : `${rawApiUrl.replace(/\/+$/, "")}/chat/completions`;

    // Sanitize and keep only the most recent 6 messages to avoid context bleed & token exhaustion
    const recentMessages = messages.slice(-6).map((m) => ({
      role: m.role,
      content: sanitizePromptText(m.content),
    }));

    const payload = {
      model,
      messages: [
        { role: "system", content: CHATBOT_SYSTEM_PROMPT },
        ...recentMessages,
      ],
      temperature: 0.4,
      max_tokens: 450,
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    if (isOpenRouter || endpoint.includes("openrouter.ai")) {
      headers["HTTP-Referer"] = "https://ascenta-agency.vercel.app";
      headers["X-Title"] = "Ascenta Portfolio";
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        // Log status securely without exposing keys or full external bodies
        console.error("AI Gateway responded with non-200 status:", response.status);

        const fallbackReply = getFallbackResponse(lastUserMessage.content);
        return NextResponse.json({
          reply: fallbackReply,
          source: "fallback-on-api-error",
          model,
        });
      }

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content;

      if (!reply || typeof reply !== "string") {
        const fallbackReply = getFallbackResponse(lastUserMessage.content);
        return NextResponse.json({
          reply: fallbackReply,
          source: "fallback-on-malformed-response",
          model,
        });
      }

      return NextResponse.json({
        reply: reply.trim(),
        source: isOpenRouter ? "openrouter" : "omniroute",
        model,
      });
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      console.error("Error communicating with AI Gateway:", fetchErr);

      const fallbackReply = getFallbackResponse(lastUserMessage.content);
      return NextResponse.json({
        reply: fallbackReply,
        source: "fallback-on-network-timeout",
        model,
      });
    }
  } catch (err: unknown) {
    console.error("Unexpected error in /api/chat route:", err);
    return NextResponse.json(
      {
        reply:
          "I encountered a temporary delay. You can reach Muhammad Rayyan directly on [WhatsApp](https://wa.me/923328444557) or via the [Contact](/contact) page!",
        source: "server-error-fallback",
      },
      { status: 200 }
    );
  }
}
