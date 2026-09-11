import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { knowledgeTopics } from "@/config/knowledge";
import { siteConfig } from "@/config/site";
import { ProblemCta } from "@/components/sections/portfolio/problem-cta";

export const metadata: Metadata = {
  title: "Knowledge Library & Technical Learnings",
  description: `Educational engineering guides, architectural patterns, and practical insights by ${siteConfig.name} (Muhammad Rayyan) across Next.js, AI Agents, Voice Latency, and n8n.`,
};

export default function LearnPage() {
  return (
    <>
      {/* Header */}
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary">
            <BookOpen size={13} />
            The Builder&apos;s Knowledge Library
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Learn From What{" "}
            <span className="italic text-primary">I&apos;ve Built & Tested.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            I believe the best way to demonstrate competence is by teaching clearly. Explore
            practical architectural guides and technical breakdowns derived directly from production code.
          </p>
        </Container>
      </Section>

      {/* Guides List */}
      <Section className="pt-0">
        <div className="flex flex-col gap-12">
          {knowledgeTopics.map((topic, index) => (
            <article
              key={topic.id}
              id={topic.id}
              className="scroll-mt-32 overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 sm:p-10"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {topic.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{topic.title}</h2>
                  <p className="mt-1 text-sm font-medium text-accent">{topic.subtitle}</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {topic.readTime}
                  </span>
                  <span>·</span>
                  <span>Guide 0{index + 1}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-base leading-relaxed text-[#F5EFE6]/90 sm:text-lg">
                {topic.summary}
              </p>

              {/* Core Takeaways */}
              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Key Architectural Principles:
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {topic.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown Sections */}
              <div className="mt-8 flex flex-col gap-6 border-t border-white/[0.08] pt-8">
                {topic.contentSections.map((sec, sIdx) => (
                  <div key={sIdx} className="rounded-2xl border border-white/[0.06] bg-[#140D0C] p-6">
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                      {sec.heading}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6 font-mono text-xs text-muted-foreground">
                <span>Category: {topic.category}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  render={<Link href="/contact" />}
                >
                  Discuss Architecture
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
