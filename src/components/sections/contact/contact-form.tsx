"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactFormSchema,
  type ContactFormValues,
  budgetOptions,
  timelineOptions,
  preferredContactOptions,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/app/contact/actions";

const scopePresets = [
  { label: "AI Agent (WhatsApp / IG)", text: "I'm interested in building an autonomous AI agent for lead qualification and customer interactions on WhatsApp / Instagram..." },
  { label: "n8n Workflow Automation", text: "We have repetitive manual processes across Google Sheets, forms, and tools that we want to automate via n8n..." },
  { label: "Low-Latency Voice AI", text: "We are exploring a conversational voice calling assistant for inbound phone support and appointment scheduling..." },
  { label: "Next.js Web Platform", text: "We want to build or redesign a high-performance web platform with modern UI/UX and sub-second load times..." },
  { label: "Custom CRM / Dashboard", text: "We want to build a custom internal operational dashboard to manage our client data and replace spreadsheets..." },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "not-sure",
      timeline: "flexible",
      message: "",
      preferredContact: "whatsapp",
    },
  });

  function handlePresetClick(text: string) {
    const currentMessage = getValues("message");
    if (!currentMessage || currentMessage.trim().length === 0) {
      setValue("message", text);
    } else {
      setValue("message", `${currentMessage}\n\n${text}`);
    }
  }

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const result = await submitContactForm(values);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-success/20 bg-success/[0.04] px-6 py-16 text-center"
      >
        <CheckCircle2 size={40} className="text-success" />
        <h3 className="mt-4 text-lg font-semibold text-white">Project Inquiry Received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. Muhammad Rayyan will review your project requirements and follow up with a technical roadmap within 24 hours.
        </p>
        <Button variant="outline" size="lg" className="mt-6 rounded-full" onClick={() => setStatus("idle")}>
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#1D1413] p-6 sm:p-8 shadow-xl">
      {/* Quick Category Chips */}
      <div>
        <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Quick Interest Selection (Click to pre-fill):
        </Label>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {scopePresets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handlePresetClick(preset.text)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/80 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-white"
            >
              + {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone / WhatsApp (optional)</Label>
          <Input id="phone" placeholder="+1 234 567 8900" {...register("phone")} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company / Project Name (optional)</Label>
          <Input id="company" placeholder="Acme Inc." {...register("company")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label>Project Scope & Investment Tier</Label>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select project scope" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Target Timeline</Label>
          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Preferred Reply Channel</Label>
        <Controller
          control={control}
          name="preferredContact"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select channel" />
              </SelectTrigger>
              <SelectContent>
                {preferredContactOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Problem & Project Description</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell me about what you are trying to build, automate, or fix. What is the current bottleneck?"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
          >
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <Button type="submit" variant="gradient" size="xl" className="rounded-full font-medium" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" data-icon="inline-start" />
            Sending Inquiry...
          </>
        ) : (
          "Submit Project Inquiry"
        )}
      </Button>
    </form>
  );
}
