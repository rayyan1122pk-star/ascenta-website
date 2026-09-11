import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { SolutionsInteractive } from "@/components/sections/portfolio/solutions-interactive";
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

      {/* Interactive Solutions Hub */}
      <Section className="pt-0">
        <SolutionsInteractive />
      </Section>

      <ProblemCta />
    </>
  );
}
