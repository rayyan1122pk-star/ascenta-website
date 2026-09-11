"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { getSupabaseServerClient } from "@/lib/supabase";
import { siteConfig } from "@/config/site";

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(values: ContactFormValues): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Please check the form for errors and try again." };
  }

  const data = parsed.data;

  try {
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = getSupabaseServerClient();
      const { error } = await supabase.from("contact_submissions").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message,
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
        replyTo: data.email,
        subject: `New project inquiry from ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || "—"}`,
          `Company: ${data.company || "—"}`,
          `Budget: ${data.budget}`,
          `Timeline: ${data.timeline}`,
          `Preferred Contact: ${data.preferredContact}`,
          "",
          "Message:",
          data.message,
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
