import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { LearnInteractive } from "@/components/sections/portfolio/learn-interactive";
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

      {/* Interactive Library */}
      <Section className="pt-0">
        <LearnInteractive />
      </Section>

      <ProblemCta />
    </>
  );
}
