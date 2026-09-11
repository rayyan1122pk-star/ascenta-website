"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { whyModernWebsites } from "@/config/stats";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const pairs = whyModernWebsites.problems.map((problem, i) => ({
  problem,
  solution: whyModernWebsites.solutions[i],
}));

export function WhyModernWebsites() {
  return (
    <Section className="overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          The Problem &amp; The Fix
        </span>
        <h2 className="mt-6 text-balance text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
          Your website
          <br />
          should work <span className="font-serif italic text-primary">harder.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          An outdated website isn&apos;t just a design issue — it&apos;s a business problem with a measurable cost.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-16 flex max-w-4xl flex-col"
      >
        {pairs.map((row) => (
          <motion.div
            key={row.problem.title}
            variants={fadeUp}
            className="group grid grid-cols-1 items-center gap-3 border-t border-white/[0.07] py-5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:py-6"
          >
            <div className="flex items-center gap-4 sm:justify-end sm:text-right">
              <div className="order-2 sm:order-1">
                <p className="text-sm font-medium text-white/70 line-through decoration-destructive/50 sm:text-base">
                  {row.problem.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{row.problem.description}</p>
              </div>
              <span className="order-1 shrink-0 rounded-full border border-destructive/30 bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-destructive sm:order-2">
                Before
              </span>
            </div>

            <div className="hidden h-px w-10 items-center justify-center sm:flex">
              <div className="relative h-px w-full bg-gradient-to-r from-destructive/40 via-primary to-transparent">
                <ArrowRight
                  size={14}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-primary transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                After
              </span>
              <div>
                <p className="text-sm font-semibold text-white sm:text-base">{row.solution.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{row.solution.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-white/[0.07]" />
      </motion.div>
    </Section>
  );
}
