"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { fadeUp, viewportOnce } from "@/lib/motion";

const automationSlugs = ["whatsapp-agent", "instagram-crm", "voice-calling-agent", "form-automation"];
const automationServices = automationSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export function AutomationShowcase() {
  return (
    <Section tint>
      <SectionHeading
        badge="AI Automation"
        title="We Also Build The Systems Behind Your Website"
        description="Beyond websites, we build AI agents and automation that handle leads, bookings, and busywork — so nothing falls through the cracks."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
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
