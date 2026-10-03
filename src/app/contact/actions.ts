"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { getSupabaseServerClient } from "@/lib/supabase";
import { siteConfig } from "@/config/site";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

function sanitizeHeaderField(input?: string | null): string {
  if (!input) return "";
  // Strip control characters, carriage returns, and newlines to prevent email header injection
  return input.replace(/[\r\n\x00-\x1F\x7F]/g, " ").trim();
}

function sanitizeBodyField(input: string): string {
  // Strip dangerous ASCII control characters but keep legitimate newlines
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();
}

export async function submitContactForm(values: ContactFormValues): Promise<ContactActionResult> {
  // 1. Silent Honeypot Detection (Bot Trap)
  if (values.honeypot && values.honeypot.trim().length > 0) {
    // Return fake success so automated scrapers don't retry with varied parameters
    return { success: true };
  }

  // 2. Strict Input Validation via Zod
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Please check the form for errors and try again." };
  }

  const data = parsed.data;

  // 3. IP Extraction & Abuse Rate Limiting (5 requests per 10 minutes per IP)
  try {
    const reqHeaders = await headers();
    const ip = getClientIp(reqHeaders);
    const rl = checkRateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });

    if (!rl.success) {
      return {
        success: false,
        error: "Too many requests from your network. Please wait a few minutes before trying again or email us directly.",
      };
    }
  } catch {
    // If headers cannot be read in some execution context, continue safely
  }

  // 4. Sanitize fields
  const cleanName = sanitizeHeaderField(data.name);
  const cleanEmail = sanitizeHeaderField(data.email);
  const cleanPhone = sanitizeHeaderField(data.phone);
  const cleanCompany = sanitizeHeaderField(data.company);
  const cleanMessage = sanitizeBodyField(data.message);

  try {
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = getSupabaseServerClient();
      const { error } = await supabase.from("contact_submissions").insert({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone || null,
        company: cleanCompany || null,
        budget: data.budget,
        timeline: data.timeline,
        message: cleanMessage,
        preferred_contact: data.preferredContact,
      });

      if (error) {
        console.error("Supabase insert error:", error.message);
      }
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
        to: siteConfig.email,
        replyTo: cleanEmail,
        subject: `New project inquiry from ${cleanName}`,
        text: [
          `Name: ${cleanName}`,
          `Email: ${cleanEmail}`,
          `Phone: ${cleanPhone || "—"}`,
          `Company: ${cleanCompany || "—"}`,
          `Budget: ${data.budget}`,
          `Timeline: ${data.timeline}`,
          `Preferred Contact: ${data.preferredContact}`,
          "",
          "Message:",
          cleanMessage,
        ].join("\n"),
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      success: false,
      error: "Something went wrong on our end. Please email us directly or try again shortly.",
    };
  }
}
