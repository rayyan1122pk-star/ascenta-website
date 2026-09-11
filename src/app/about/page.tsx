import type { Metadata } from "next";
import { CheckCircle2, Terminal } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { LearningCredentials } from "@/components/sections/portfolio/learning-credentials";
import { JourneyTimeline } from "@/components/sections/portfolio/journey-timeline";
import { ProblemCta } from "@/components/sections/portfolio/problem-cta";

export const metadata: Metadata = {
  title: "About Muhammad Rayyan · Builder & AI Solutions Engineer",
  description: `The story, engineering journey, credentials, and technical philosophy of Muhammad Rayyan (Ascenta) — building full-stack web platforms, AI agents, and resilient automations.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro Header */}
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary">
            <Terminal size={13} />
            Muhammad Rayyan · The Builder
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            I Don&apos;t Just Provide Services.{" "}
            <span className="italic text-primary">I Build Technology.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            A technology builder and problem solver focused on full-stack web platforms, autonomous AI
            agents, n8n workflow automations, and custom operational hubs.
          </p>
        </Container>
      </Section>

      {/* Verified Metric Highlights */}
      <Section className="pt-0">
        <div className="mx-auto grid max-w-4xl gap-4 rounded-3xl border border-white/10 bg-[#1D1413] p-6 sm:grid-cols-4 sm:p-8 shadow-xl">
          <div className="text-center">
            <p className="font-mono text-3xl font-bold text-white">40+</p>
            <p className="mt-1 text-xs text-muted-foreground">Delivered Projects</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-3xl font-bold text-white">15+</p>
            <p className="mt-1 text-xs text-muted-foreground">AI Workflows & Agents</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-3xl font-bold text-white">&lt;800ms</p>
            <p className="mt-1 text-xs text-muted-foreground">Voice Latency Benchmark</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-3xl font-bold text-white">100%</p>
            <p className="mt-1 text-xs text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </Section>

      {/* Deep Story & Ethos */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Origins & Approach
            </span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Why I Build Systems, Not Just Pages.
            </h2>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#F5EFE6]/90 sm:text-base">
              <p>
                When I started web development, I quickly noticed that most clients didn&apos;t just
                have a &ldquo;website problem&rdquo; — they had an operational problem. Their leads were
                waiting hours for a reply, their customer data was trapped in personal WhatsApp chats,
                and their team was wasting 20+ hours a week manually copy-pasting spreadsheet records.
              </p>
              <p>
                A beautiful website alone couldn&apos;t fix that. What they actually needed was an
                end-to-end digital engine: a sub-second Next.js web application connected directly to
                intelligent AI agents that qualify incoming inquiries 24/7, sync data seamlessly with
                Google Sheets or custom CRMs, and alert human reps when a deal is ready to close.
              </p>
              <p>
                That realization transformed how I work. Today, I approach every project as an integrated
                engineering challenge. I care deeply about the craft: strict TypeScript types, 100/100
                Core Web Vitals, schema-enforced AI tool calling, and resilient automation pipelines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-[#1D1413] p-6 sm:p-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                What I Focus On
              </h3>
              <ul className="mt-4 flex flex-col gap-4 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">High-Performance Web Platforms:</strong> Next.js 16,
                    React 19, Tailwind CSS v4, and semantic architectures engineered for conversions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">Autonomous AI Agents:</strong> 24/7 WhatsApp &
                    Instagram agents with schema-enforced tool execution, memory, and Hinglish NLP.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">Low-Latency Voice AI:</strong> Sub-800ms conversational
                    phone assistants with bidirectional WebSocket audio and neural TTS.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">n8n Automation Clusters:</strong> Fault-tolerant
                    API orchestration with dead-letter retry queues and instant webhook routing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <strong className="text-white">Custom Internal Hubs:</strong> Centralized dashboards
                    and lightweight CRMs eliminating expensive monthly per-seat licensing.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Where I Learned -> How I Applied It (Credentials) */}
      <LearningCredentials />

      {/* The Evolution Timeline (Journey) */}
      <JourneyTimeline />

      <ProblemCta />
    </>
  );
}
