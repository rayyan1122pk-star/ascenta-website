import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { solutions } from "@/config/solutions";
import { siteConfig } from "@/config/site";
import { ProblemCta } from "@/components/sections/portfolio/problem-cta";

export const metadata: Metadata = {
  title: "Solutions & Technical Approaches",
  description: `How ${siteConfig.name} (Muhammad Rayyan) solves technical bottlenecks: AI architecture, voice latency optimization, API orchestration, and custom operational hubs.`,
};

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary">
            <Lightbulb size={13} />
            Problem Solving & Technical Approaches
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            How I Solve{" "}
            <span className="italic text-primary">Real Technical Challenges.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Technology is only as valuable as the friction it removes. Explore how I dissect complex
            business bottlenecks into clear technical solutions and reliable software.
          </p>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section className="pt-0">
        <div className="flex flex-col gap-10">
          {solutions.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-32 overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 sm:p-10"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {item.badge}
                  </span>
                  <span className="ml-3 font-mono text-xs text-muted-foreground">
                    Category: {item.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{item.title}</h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Challenge 0{index + 1}
                </span>
              </div>

              {/* Problem -> Approach -> Solution -> Value */}
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* 1. Problem */}
                <div className="rounded-2xl border border-rose-500/20 bg-rose-950/15 p-5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                    1. The Client Bottleneck
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{item.clientProblem}</p>
                </div>

                {/* 2. Technical Approach */}
                <div className="rounded-2xl border border-amber-500/20 bg-amber-950/15 p-5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                    2. Engineering Approach
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    {item.technicalApproach}
                  </p>
                </div>

                {/* 3. Solution Built */}
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                    3. The Production System
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{item.solutionBuilt}</p>
                </div>

                {/* 4. Business Value */}
                <div className="rounded-2xl border border-primary/30 bg-primary/[0.08] p-5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    4. Verified Business Return
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#F5EFE6]">
                    {item.businessValue}
                  </p>
                </div>
              </div>

              {/* Architectural Insight */}
              <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#140D0C] p-4 font-mono text-xs">
                <span className="text-accent font-bold uppercase text-[11px]">Key Takeaway: </span>
                <span className="text-white/80">{item.keyInsight}</span>
              </div>

              {/* Tech Badges & CTA */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">Technologies:</span>
                  {item.techUsed.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  render={<Link href="/contact" />}
                >
                  Solve This For Your Business
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
