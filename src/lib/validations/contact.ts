import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.enum([
    "under-1000",
    "1000-3000",
    "3000-10000",
    "10000-plus",
    "not-sure",
  ]),
  timeline: z.enum(["asap", "1-month", "1-3-months", "flexible"]),
  message: z.string().trim().min(20, "Please share a bit more detail (at least 20 characters).").max(3000),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const budgetOptions: { value: ContactFormValues["budget"]; label: string }[] = [
  { value: "under-1000", label: "Under $1,000" },
  { value: "1000-3000", label: "$1,000 – $3,000" },
  { value: "3000-10000", label: "$3,000 – $10,000" },
  { value: "10000-plus", label: "$10,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const timelineOptions: { value: ContactFormValues["timeline"]; label: string }[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "flexible", label: "Flexible" },
];

export const preferredContactOptions: { value: ContactFormValues["preferredContact"]; label: string }[] = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
];
