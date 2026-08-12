"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { whyModernWebsites } from "@/config/stats";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhyModernWebsites() {
  return (
    <Section>
      <SectionHeading
        badge="The Problem & The Fix"
        title="Why Modern Websites Actually Matter"
        description="An outdated website isn't just a design issue — it's a business problem with a measurable cost."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-3xl border border-destructive/20 bg-destructive/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.6)] sm:p-8"
        >
          <h3 className="text-lg font-semibold text-white">Common Business Problems</h3>
          <div className="mt-6 flex flex-col gap-4">
            {whyModernWebsites.problems.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                  <X size={13} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-3xl border border-success/20 bg-success/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.6)] sm:p-8"
        >
          <h3 className="text-lg font-semibold text-white">How We Solve Them</h3>
          <div className="mt-6 flex flex-col gap-4">
            {whyModernWebsites.solutions.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check size={13} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
