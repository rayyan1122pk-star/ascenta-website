import type { LucideIcon } from "lucide-react";
import {
  Search,
  Microscope,
  Target,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export interface ProcessStep {
  step: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    icon: Search,
    description:
      "We start with a deep-dive call to understand your business, goals, audience, and what success looks like for this project.",
  },
  {
    step: 2,
    title: "Research",
    icon: Microscope,
    description:
      "We research your industry, competitors, and target audience to identify what will actually move the needle for your brand.",
  },
  {
    step: 3,
    title: "Strategy",
    icon: Target,
    description:
      "We map out sitemap, content structure, and conversion strategy — the blueprint that guides every design decision.",
  },
  {
    step: 4,
    title: "UI Design",
    icon: PenTool,
    description:
      "A custom visual design tailored to your brand, built for clarity, trust, and conversion — no generic templates.",
  },
  {
    step: 5,
    title: "Development",
    icon: Code2,
    description:
      "Clean, production-ready code built with modern best practices — fast, accessible, and built to scale.",
  },
  {
    step: 6,
    title: "Testing",
    icon: FlaskConical,
    description:
      "Rigorous testing across devices, browsers, and edge cases, plus performance and accessibility audits.",
  },
  {
    step: 7,
    title: "Deployment",
    icon: Rocket,
    description:
      "A smooth, zero-downtime launch with proper DNS, SSL, analytics, and monitoring configured from day one.",
  },
  {
    step: 8,
    title: "Support",
    icon: LifeBuoy,
    description:
      "Post-launch support to fix any issues quickly and help you make the most of your new website.",
  },
];
