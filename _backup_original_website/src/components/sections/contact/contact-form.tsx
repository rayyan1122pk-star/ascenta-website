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

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
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
      preferredContact: "email",
    },
  });

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
        <h3 className="mt-4 text-lg font-semibold text-white">Message Sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — we&apos;ll review your project details and get back to you within 24 hours.
        </p>
        <Button variant="outline" size="lg" className="mt-6 rounded-full" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" placeholder="+1 234 567 8900" {...register("phone")} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" placeholder="Acme Inc." {...register("company")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label>Project Budget</Label>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a budget" />
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
          <Label>Timeline</Label>
          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a timeline" />
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
        <Label>Preferred Contact Method</Label>
        <Controller
          control={control}
          name="preferredContact"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a method" />
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
        <Label htmlFor="message">Project Description</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, and anything else that would help us understand what you need..."
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

      <Button type="submit" variant="gradient" size="xl" className="rounded-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" data-icon="inline-start" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
