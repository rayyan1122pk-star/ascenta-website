"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, MessageCircle, MessageSquare, Phone, Calendar, Mail, Database, Bot, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const automationSlugs = ["whatsapp-agent", "instagram-crm", "voice-calling-agent", "form-automation"];
const automationServices = automationSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

const flow = ["Lead", "AI", "Automation", "CRM", "Follow-Up"];

const integrationNodes = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Bot, label: "AI Agent" },
  { icon: Users, label: "CRM" },
  { icon: Database, label: "Database" },
  { icon: MessageSquare, label: "Instagram" },
  { icon: Phone, label: "Voice" },
  { icon: Calendar, label: "Calendar" },
  { icon: Mail, label: "Email" },
];

export function AutomationShowcase() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Section tint className="overflow-hidden">
      <SectionHeading
        badge="AI Automation"
        title={
          <>
            We don&apos;t just build the website.
            <br />
            <span className="font-serif italic text-primary">We build the system behind it.</span>
          </>
        }
        description="Beyond websites, we build AI agents and automation that handle leads, bookings, and busywork — so nothing falls through the cracks."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0"
      >
        {flow.map((step, i) => (
          <div key={step} className="flex items-center gap-2 sm:gap-0">
            <span className="rounded-full border border-primary/25 bg-primary/[0.06] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {step}
            </span>
            {i < flow.length - 1 && (
              <span className="flex h-8 w-8 shrink-0 rotate-90 items-center justify-center text-primary/50 sm:mx-2 sm:w-10 sm:rotate-0">
                <ArrowRight size={16} />
              </span>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3"
      >
        {integrationNodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.label}
              variants={fadeUp}
              animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 } }}
              className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <Icon size={14} className="text-primary" />
              <span className="text-xs font-medium text-white/80">{node.label}</span>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {automationServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <GlassCard key={service.slug} delay={i * 0.06} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                  From {service.startingPrice}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-accent"
              >
                Learn More
                <ArrowUpRight size={14} />
              </Link>
            </GlassCard>
          );
        })}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Button variant="outline" size="lg" className="rounded-full" render={<Link href="/services" />}>
          Explore All Automation Services
        </Button>
        <Button variant="gradient" size="lg" className="rounded-full" render={<Link href="/contact" />}>
          Get a Custom Quote
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </motion.div>
    </Section>
  );
}
