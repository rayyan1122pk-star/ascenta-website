"use client";

import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function AboutBuilderPreview() {
  return (
    <Section id="about" className="relative">
      <SectionHeading
        badge="The Builder"
        title={
          <>
            Behind the Code.{" "}
            <span className="font-display italic text-primary">A Builder&apos;s Mindset.</span>
          </>
        }
        description="I combine high-craft frontend engineering with applied AI systems, driven by a simple goal: building software that solves concrete business bottlenecks."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: Editorial Bio */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#1D1413] p-8 shadow-xl lg:col-span-7 sm:p-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Muhammad Rayyan · Founder & Engineer
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              I build software and automation that works when you look away.
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#F5EFE6]/90 sm:text-base">
              <p>
                My work started with a clear observation: businesses were losing deals because their
                websites loaded slowly, their tools were fragmented, and their incoming leads sat
                unanswered in off-hours.
              </p>
              <p>
                Instead of treating web design and automation as separate silos, I unified them. When I
                build a website, I don&apos;t just design a pretty surface; I engineer the entire engine
                behind it — from high-converting Next.js architecture to automated WhatsApp qualification
                agents, Google Sheets operational synchronization, and voice AI assistants.
              </p>
              <p>
                I don&apos;t chase speculative AI hype. I focus on practical reliability: schema-enforced
                tool calling, sub-second latency engineering, error-handling in workflows, and measurable
                business outcomes for my clients.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-6">
            <Button
              variant="outline"
              size="default"
              className="rounded-full text-xs"
              render={<Link href="/about" />}
            >
              Read Full Story & Philosophy
              <ArrowUpRight size={14} />
            </Button>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-white"
            >
              GitHub / rayyan1122pk-star →
            </a>
          </div>
        </div>

        {/* Right: Architectural Principles & Code Ethos */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#140D0C] p-6 shadow-xl lg:col-span-5 sm:p-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
              <Terminal size={14} />
              <span>Core Engineering Principles</span>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  1. Speed Is a Trust Signal
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  A slow web application quietly tells visitors you don&apos;t care about the details.
                  Sub-second interactions build instant credibility.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  2. Determinism Before Probabilism
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Never use an LLM for logic that deterministic code solves cheaper, faster, and with
                  100% predictability.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  3. Defend Against Breakage
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Every webhook needs idempotency; every external API needs retry queues; every AI agent
                  needs human fallback channels.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-4 font-mono text-xs text-muted-foreground">
            Location: <span className="text-white">{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
