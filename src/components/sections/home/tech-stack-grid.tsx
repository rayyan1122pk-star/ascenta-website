"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { techStack } from "@/config/techstack";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TechStackGrid() {
  return (
    <Section tint className="overflow-hidden">
      <SectionHeading
        badge="Tools of the Trade"
        title="The Technology We Build With"
        description="A modern, battle-tested stack chosen for performance, reliability, and long-term maintainability."
      />

      <div className="mt-16 flex flex-col items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-full border border-primary/25 bg-primary/[0.06] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_40px_-12px_rgba(230,57,70,0.5)]"
        >
          Ascenta Tech Stack
        </motion.div>

        <div className="h-10 w-px bg-gradient-to-b from-primary/50 to-white/10" />
        <div className="h-px w-full max-w-4xl bg-white/10" />

        <motion.div
          variants={staggerContainer(0.03)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-0 flex max-w-4xl flex-wrap items-start justify-center gap-x-4 gap-y-8"
        >
          {techStack.map((tech) => (
            <motion.div key={tech.name} variants={fadeUp} className="flex flex-col items-center">
              <div className="h-6 w-px bg-white/10" />
              <div className="group rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.06]">
                <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
