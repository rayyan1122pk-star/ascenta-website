"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, Bot, Users, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic-button";
import { Section } from "@/components/shared/section";
import { fadeUp, viewportOnce } from "@/lib/motion";

const fragments = [
  { icon: Globe, className: "left-[8%] top-[15%]" },
  { icon: Bot, className: "right-[10%] top-[20%]" },
  { icon: Workflow, className: "left-[12%] bottom-[18%]" },
  { icon: Users, className: "right-[8%] bottom-[15%]" },
];

export function FinalCta({
  title = "Let's Build What's Next.",
  description = "Tell us about your project and we'll get back to you within 24 hours with next steps — no pressure, no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Section>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#17100F] px-6 py-20 text-center sm:px-12 sm:py-28"
      >
        {fragments.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.span
              key={i}
              aria-hidden="true"
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className={`pointer-events-none absolute hidden h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary/60 sm:flex ${f.className}`}
            >
              <Icon size={20} />
            </motion.span>
          );
        })}

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">{description}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Button variant="gradient" size="xl" className="rounded-full" render={<Link href="/contact" />}>
                Book a Free Consultation
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="glass" size="xl" className="rounded-full" render={<Link href="/contact#audit" />}>
                Request a Free Website Audit
              </Button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
