import { NextResponse } from "next/server";
import { z } from "zod";
import { CHATBOT_SYSTEM_PROMPT, getFallbackResponse } from "@/lib/ai/chatbot-context";

const messageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(1000),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(12),
});

export async function POST(req: Request) {
  try {
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

    // Detect if this is OpenRouter (either key format sk-or-* or provider config)
    const isOpenRouter =
      !!process.env.OPENROUTER_API_KEY ||
      Boolean(apiKey && apiKey.startsWith("sk-or-"));

    const rawApiUrl = isOpenRouter
      ? (process.env.OPENROUTER_API_URL || "https://openrouter.ai/api/v1")
      : (process.env.OMNIROUTE_API_URL || "https://api.omniroute.ai/v1");

    const model = isOpenRouter
      ? (process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini")
      : (process.env.OMNIROUTE_MODEL || "gpt-4o-mini");

    // If no API key is configured, provide seamless grounded local fallback
    if (!apiKey) {
      const fallbackReply = getFallbackResponse(lastUserMessage.content);
      return NextResponse.json({
        reply: fallbackReply,
        source: "local-grounded",
        model: "ascenta-offline-preview",
      });
    }

    // Normalize endpoint URL to /chat/completions
    const endpoint = rawApiUrl.endsWith("/chat/completions")
      ? rawApiUrl
      : `${rawApiUrl.replace(/\/+$/, "")}/chat/completions`;

    // Keep only the most recent 6 messages to minimize token usage and latency
    const recentMessages = messages.slice(-6);

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
      headers["HTTP-Referer"] = "https://ascenta.dev";
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
        const errorText = await response.text().catch(() => "");
        console.error("AI Gateway responded with error status:", response.status, errorText);

        // Graceful fallback on API key error (e.g. 401, quota exceeded, etc.)
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
        console.error("Malformed AI response payload:", data);
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

      // Graceful fallback on network timeout/failure
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
