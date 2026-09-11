import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.enum([
    "under-150",
    "150-300",
    "300-600",
    "600-plus",
    "not-sure",
  ]),
  timeline: z.enum(["asap", "1-month", "1-3-months", "flexible"]),
  message: z.string().trim().min(20, "Please share a bit more detail (at least 20 characters).").max(3000),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const budgetOptions: { value: ContactFormValues["budget"]; label: string }[] = [
  { value: "not-sure", label: "Flexible / Let's Scope the Project Together" },
  { value: "under-150", label: "Focused Automation / Script / Single Feature" },
  { value: "150-300", label: "Workflow Pipeline / AI Agent Integration" },
  { value: "300-600", label: "Comprehensive AI Agent or Custom Dashboard" },
  { value: "600-plus", label: "Full-Scale Web Platform or Multi-System Build" },
];

export const timelineOptions: { value: ContactFormValues["timeline"]; label: string }[] = [
  { value: "asap", label: "Urgent — As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "flexible", label: "Flexible / Planning Phase" },
];

export const preferredContactOptions: { value: ContactFormValues["preferredContact"]; label: string }[] = [
  { value: "whatsapp", label: "WhatsApp (Fastest)" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
];
