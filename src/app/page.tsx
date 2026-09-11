import { Hero } from "@/components/sections/home/hero";
import { ProofStats } from "@/components/sections/portfolio/proof-stats";
import { WhatIBuild } from "@/components/sections/portfolio/what-i-build";
import { FeaturedWork } from "@/components/sections/portfolio/featured-work";
import { AiAutomationLab } from "@/components/sections/portfolio/ai-automation-lab";
import { ProblemsSolved } from "@/components/sections/portfolio/problems-solved";
import { KnowledgeLibrary } from "@/components/sections/portfolio/knowledge-library";
import { TechStackInteractive } from "@/components/sections/portfolio/tech-stack-interactive";
import { TestimonialsRedesigned } from "@/components/sections/portfolio/testimonials-redesigned";
import { LearningCredentials } from "@/components/sections/portfolio/learning-credentials";
import { JourneyTimeline } from "@/components/sections/portfolio/journey-timeline";
import { AboutBuilderPreview } from "@/components/sections/portfolio/about-builder-preview";
import { ProblemCta } from "@/components/sections/portfolio/problem-cta";

export default function Home() {
  return (
    <>
      {/* 🚨 Hero section is locked and preserved exactly as original */}
      <Hero />

      {/* 01 — Proof / Quick Stats */}
      <ProofStats />

      {/* 02 — What I Build */}
      <WhatIBuild />

      {/* 03 — Featured Work */}
      <FeaturedWork />

      {/* 04 — AI & Automation Lab */}
      <AiAutomationLab />

      {/* 05 — Solutions / Problems I've Solved */}
      <ProblemsSolved />

      {/* 06 — Knowledge / What I've Learned */}
      <KnowledgeLibrary />

      {/* 07 — Technology Stack */}
      <TechStackInteractive />

      {/* 08 — Testimonials */}
      <TestimonialsRedesigned />

      {/* 09 — Learning / Credentials */}
      <LearningCredentials />

      {/* 10 — My Journey */}
      <JourneyTimeline />

      {/* 11 — About Builder Profile */}
      <AboutBuilderPreview />

      {/* 12 — Problem Solving CTA */}
      <ProblemCta />
    </>
  );
}
