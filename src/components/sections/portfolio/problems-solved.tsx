"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { solutions } from "@/config/solutions";
import { cn } from "@/lib/utils";

export function ProblemsSolved() {
  const [activeSolutionId, setActiveSolutionId] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeSolutionId) ?? solutions[0];

  return (
    <Section id="solutions" className="relative">
      <SectionHeading
        badge="Problems I've Solved"
        title={
          <>
            I Solve Technical Bottlenecks.{" "}
            <span className="font-display italic text-primary">Not Just Sell Code.</span>
          </>
        }
        description="Clients don't come to me for buzzwords. They come with operational friction, delayed leads, manual busywork, or broken workflows. Here is how I approach and solve those challenges."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Solution Selector */}
        <div className="flex flex-col gap-2.5 lg:col-span-5">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
            Select a technical challenge:
          </p>
          {solutions.map((item, idx) => {
            const isSelected = item.id === activeSolutionId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSolutionId(item.id)}
                className={cn(
                  "group flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200",
                  isSelected
                    ? "border-primary bg-primary/[0.08] shadow-[0_0_24px_rgba(230,57,70,0.25)]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-semibold",
                    isSelected
                      ? "bg-primary text-white"
                      : "bg-white/[0.05] text-muted-foreground group-hover:text-white"
                  )}
                >
                  0{idx + 1}
                </span>
                <div className="flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                    {item.badge}
                  </span>
                  <h4
                    className={cn(
                      "text-sm font-semibold transition-colors mt-0.5",
                      isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                    )}
                  >
                    {item.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Problem -> Approach -> Solution -> Value Deep Dive */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2.5">
                    <Lightbulb size={18} className="text-primary" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                      Problem & Architecture Breakdown
                    </span>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
                    {activeSolution.category}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">{activeSolution.title}</h3>

                {/* 4 Steps: Problem -> Approach -> Solution -> Value */}
                <div className="mt-6 flex flex-col gap-4">
                  {/* Problem */}
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-950/15 p-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-400">
                      1. The Core Problem
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-white/90 leading-relaxed">
                      {activeSolution.clientProblem}
                    </p>
                  </div>

                  {/* Technical Approach */}
                  <div className="rounded-2xl border border-amber-500/20 bg-amber-950/15 p-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      2. Technical Approach
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-white/90 leading-relaxed">
                      {activeSolution.technicalApproach}
                    </p>
                  </div>

                  {/* Solution Built */}
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      3. Solution Built
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-white/90 leading-relaxed">
                      {activeSolution.solutionBuilt}
                    </p>
                  </div>

                  {/* Verified Value */}
                  <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                      4. Verified Business Value
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-[#F5EFE6] leading-relaxed">
                      {activeSolution.businessValue}
                    </p>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#140D0C] p-3.5 font-mono text-xs">
                  <span className="text-accent font-bold uppercase text-[10px]">Architectural Insight: </span>
                  <span className="text-white/80">{activeSolution.keyInsight}</span>
                </div>
              </div>

              {/* Stack Used & Explore Button */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeSolution.techUsed.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  render={<Link href="/solutions" />}
                >
                  View All Solutions
                  <ArrowUpRight size={13} />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
