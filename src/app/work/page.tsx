import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { ProblemCta } from "@/components/sections/portfolio/problem-cta";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: `Deep-dive case studies and technical architectures engineered by ${siteConfig.name} (Muhammad Rayyan) — from WhatsApp AI CRMs to low-latency voice engines and custom operational dashboards.`,
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary">
            <Terminal size={13} />
            Verified Portfolio & Case Studies
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Real Systems Built.{" "}
            <span className="italic text-primary">Measurable Outcomes.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            I don&apos;t build demo toy apps. Every project below was engineered to solve real
            operational bottlenecks, automate manual grunt work, or accelerate customer conversions.
          </p>
        </Container>
      </Section>

      {/* Projects Deep Dive */}
      <Section className="pt-0">
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-32 overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 sm:p-10"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {project.categoryBadge}
                  </span>
                  <span className="ml-3 font-mono text-xs text-muted-foreground">
                    Context: {project.context}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
                  <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Case Study 0{index + 1}
                </span>
              </div>

              {/* 4 Core Pillars: Problem, Solution, Value, Stack */}
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Left: Problem & Solution */}
                <div className="flex flex-col gap-6">
                  {/* Problem */}
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-950/15 p-5">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                      The Operational Problem
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                      The Solution Engineered
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Right: Architecture & Verified Value */}
                <div className="flex flex-col gap-6">
                  {/* Business Value */}
                  <div className="rounded-2xl border border-primary/30 bg-primary/[0.08] p-5">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                      Verified Business Impact
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-[#F5EFE6]">
                      {project.value}
                    </p>
                  </div>

                  {/* Architecture Diagram */}
                  {project.architecture && (
                    <div className="rounded-2xl border border-white/[0.08] bg-[#140D0C] p-5 font-mono text-xs">
                      <div className="flex items-center gap-2 text-accent font-bold uppercase text-[11px]">
                        <Terminal size={14} />
                        <span>Data Flow Architecture</span>
                      </div>
                      <p className="mt-3 leading-relaxed text-emerald-400 whitespace-pre-wrap">
                        {project.architecture}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Technical Highlights Checklist */}
              <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#140D0C] p-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Key Technical Capabilities Delivered:
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">Stack:</span>
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  render={<Link href="/contact" />}
                >
                  Request Similar Architecture
                  <ArrowUpRight size={13} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ProblemCta />
    </>
  );
}
