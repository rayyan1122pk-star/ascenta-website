"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { processSteps } from "@/config/process";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.7"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(processSteps.length - 1, Math.max(0, Math.floor(v * processSteps.length)));
    setActive(index);
  });

  const ActiveIcon = processSteps[active].icon;

  return (
    <Section>
      <SectionHeading
        badge="How We Work"
        title="From Idea to Launch"
        description="A clear, structured process from first call to launch — and beyond."
      />

      {/* Desktop: sticky narrative */}
      <div ref={containerRef} className="mt-16 hidden lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="sticky top-32 h-fit">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_-24px_rgba(0,0,0,0.7)]">
            <span className="font-mono text-xs text-primary">
              {String(active + 1).padStart(2, "0")} / {String(processSteps.length).padStart(2, "0")}
            </span>
            <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
              <ActiveIcon size={28} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{processSteps[active].title}</h3>
            <p className="mt-3 text-base text-muted-foreground">{processSteps[active].description}</p>
          </div>
        </div>

        <div className="flex flex-col">
          {processSteps.map((step, i) => (
            <div key={step.step} className="flex min-h-[22vh] items-center border-t border-white/[0.07] py-6 last:border-b">
              <div className="flex items-start gap-5">
                <span
                  className={cn(
                    "font-mono text-sm transition-colors duration-300",
                    active === i ? "text-primary" : "text-muted-foreground/50"
                  )}
                >
                  {String(step.step).padStart(2, "0")}
                </span>
                <h4
                  className={cn(
                    "text-2xl font-semibold uppercase tracking-tight transition-colors duration-300",
                    active === i ? "text-white" : "text-white/25"
                  )}
                >
                  {step.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 flex flex-col gap-8 border-l border-white/10 pl-8 lg:hidden"
      >
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              <span className="absolute -left-[2.6rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary/15 text-primary">
                <Icon size={14} />
              </span>
              <span className="font-mono text-xs text-primary">{String(step.step).padStart(2, "0")}</span>
              <h4 className="mt-1 text-lg font-semibold text-white">{step.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
