"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { journeyMilestones } from "@/config/journey";
import { cn } from "@/lib/utils";

export function JourneyTimeline() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const activeMilestone = journeyMilestones[selectedPhase];

  return (
    <Section id="journey" className="relative bg-[#130B0A]/60 py-24 border-y border-white/[0.08]">
      <SectionHeading
        badge="Evolution & Growth"
        title={
          <>
            My Engineering Journey.{" "}
            <span className="font-display italic text-primary">From Code to Complex Systems.</span>
          </>
        }
        description="A progression grounded in curiosity, deliberate practice, and solving increasingly sophisticated technical challenges for clients."
      />

      {/* Horizontal Phase Stepper (Desktop) / Flow */}
      <div className="mt-14 hidden lg:grid lg:grid-cols-6 gap-2">
        {journeyMilestones.map((m, idx) => {
          const isSelected = idx === selectedPhase;
          return (
            <button
              key={m.phase}
              type="button"
              onClick={() => setSelectedPhase(idx)}
              className={cn(
                "group relative flex flex-col rounded-2xl border p-4 text-left transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/15 shadow-[0_0_20px_rgba(230,57,70,0.3)]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              )}
            >
              <span className="font-mono text-[11px] font-bold text-primary">PHASE {m.phase}</span>
              <h4 className="mt-2 text-xs font-bold text-white transition-colors group-hover:text-primary">
                {m.stage}
              </h4>
              <span className="mt-1 text-[10px] font-mono text-muted-foreground">{m.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Selector */}
      <div className="mt-8 flex flex-wrap gap-2 lg:hidden justify-center">
        {journeyMilestones.map((m, idx) => (
          <button
            key={m.phase}
            type="button"
            onClick={() => setSelectedPhase(idx)}
            className={cn(
              "rounded-full px-3.5 py-1 text-xs font-mono transition-colors",
              selectedPhase === idx
                ? "bg-primary text-white"
                : "border border-white/10 bg-white/[0.02] text-muted-foreground"
            )}
          >
            {m.phase}. {m.stage}
          </button>
        ))}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Phase {activeMilestone.phase} · {activeMilestone.badge}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  {activeMilestone.title}
                </h3>
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary font-medium">
                {activeMilestone.stage}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#F5EFE6] sm:text-base max-w-3xl">
              {activeMilestone.description}
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeMilestone.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#140D0C] p-4 text-xs text-white/90"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            {/* Skills acquired in this stage */}
            <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.08] pt-4">
              <span className="font-mono text-xs text-muted-foreground mr-2">Skills in this phase:</span>
              {activeMilestone.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
