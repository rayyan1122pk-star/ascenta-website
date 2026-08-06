"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeading } from "@/components/shared/section";
import { processSteps } from "@/config/process";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section>
      <SectionHeading
        badge="How I Work"
        title="My Process"
        description="A clear, structured process from first call to launch — and beyond."
      />

      <div ref={containerRef} className="relative mt-16">
        <div className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-1/2" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-5 top-0 w-px bg-primary sm:left-1/2"
        />

        <div className="flex flex-col gap-10">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className={`relative flex items-start gap-5 sm:gap-8 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-background text-primary sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <Icon size={17} />
                </div>
                <div className={`flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:w-[calc(50%-3rem)] ${isEven ? "sm:mr-auto" : "sm:ml-auto"}`}>
                  <span className="text-xs font-medium text-accent">Step {step.step}</span>
                  <h3 className="mt-1 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
