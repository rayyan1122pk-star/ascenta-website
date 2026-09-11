"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Bot,
  Cpu,
  Palette,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { cn } from "@/lib/utils";

interface TechCategory {
  name: string;
  badge: string;
  icon: typeof Code2;
  description: string;
  items: {
    name: string;
    role: string;
    productionUse: string;
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend & Web",
    badge: "User Interface",
    icon: Code2,
    description: "Engineering modern, accessible web applications with sub-second page loads and zero layout shifts.",
    items: [
      { name: "Next.js 16", role: "Full-Stack Framework", productionUse: "App Router, Server Components & streaming SSR" },
      { name: "React 19", role: "UI Component Architecture", productionUse: "Concurrent rendering & state management" },
      { name: "TypeScript", role: "Type Safety", productionUse: "End-to-end typed contracts & API validation" },
      { name: "Tailwind CSS v4", role: "Design Token Styling", productionUse: "High-performance CSS variables & responsive layout" },
      { name: "Framer Motion", role: "Interaction & Physics", productionUse: "Subtle micro-interactions & hardware-accelerated reveals" },
    ],
  },
  {
    name: "Backend & Data",
    badge: "Data & Storage",
    icon: Database,
    description: "Secure, performant data layers with row-level security, real-time subscriptions, and fast query execution.",
    items: [
      { name: "Node.js", role: "Runtime Environment", productionUse: "Asynchronous backend logic & WebSocket streaming" },
      { name: "Supabase", role: "BaaS & Postgres Platform", productionUse: "Auth, database storage, edge functions & RLS" },
      { name: "PostgreSQL", role: "Relational Database", productionUse: "Structured relational data models & indexed queries" },
      { name: "REST APIs & Webhooks", role: "System Protocol", productionUse: "Event-driven inter-system communication" },
    ],
  },
  {
    name: "AI & Intelligence",
    badge: "Reasoning & NLP",
    icon: Bot,
    description: "Production reasoning loops, structured schema extraction, vector retrieval, and low-latency voice pipelines.",
    items: [
      { name: "Anthropic Claude 3.5", role: "Primary Reasoning Model", productionUse: "Complex agent tool calling, structured JSON & Hinglish parsing" },
      { name: "OpenAI GPT-4o", role: "Multimodal & Function Calling", productionUse: "High-speed reasoning, embeddings & task completion" },
      { name: "Deepgram Nova-2", role: "Streaming STT Engine", productionUse: "Real-time speech transcription with sub-150ms latency" },
      { name: "Cartesia & ElevenLabs", role: "Streaming Neural TTS", productionUse: "Human-cadence voice synthesis with streaming audio chunks" },
      { name: "RAG & Vector Search", role: "Knowledge Grounding", productionUse: "Eliminating hallucinations by querying proprietary docs" },
    ],
  },
  {
    name: "Automation & Workflows",
    badge: "Process Orchestration",
    icon: Cpu,
    description: "Self-hosted, resilient automation pipelines connecting disparate cloud platforms without human bottlenecks.",
    items: [
      { name: "n8n Self-Hosted", role: "Workflow Automation Hub", productionUse: "Multi-branch logic, dead-letter queues & API routing" },
      { name: "Google Workspace API", role: "Spreadsheet & Docs Sync", productionUse: "Two-way Google Forms & Sheets synchronization" },
      { name: "WhatsApp Cloud API", role: "Direct Messaging Pipeline", productionUse: "24/7 automated business lead conversations" },
      { name: "Twilio Media Streams", role: "Telephony Audio Streaming", productionUse: "Bidirectional WebSocket audio capture & playback" },
    ],
  },
  {
    name: "Design & Systems",
    badge: "Visual Craft",
    icon: Palette,
    description: "Intentional visual hierarchy, bespoke design tokens, and systematic component architecture.",
    items: [
      { name: "Figma", role: "Interface Architecture", productionUse: "System wireframes, design tokens & UX prototyping" },
      { name: "Design Tokens", role: "System Consistency", productionUse: "Semantic color spaces (Charcoal, Crimson, Ivory)" },
      { name: "WCAG 2.2 AA", role: "Accessibility Standards", productionUse: "Rigorous contrast ratios & screen-reader compatibility" },
    ],
  },
];

export function TechStackInteractive() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = techCategories[activeCategoryIndex];
  const ActiveIcon = activeCategory.icon;

  return (
    <Section id="tech-stack" className="relative">
      <SectionHeading
        badge="Technology Stack"
        title={
          <>
            Mastered Technologies.{" "}
            <span className="font-display italic text-primary">Proven In Production.</span>
          </>
        }
        description="No bloated logo walls. Every tool below is actively employed in live production systems, selected for performance, reliability, and tangible business utility."
      />

      {/* Category Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {techCategories.map((cat, idx) => {
          const Icon = cat.icon;
          const isSelected = idx === activeCategoryIndex;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategoryIndex(idx)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/15 text-white shadow-[0_0_18px_rgba(230,57,70,0.3)]"
                  : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
              )}
            >
              <Icon size={14} className={isSelected ? "text-primary" : ""} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Category Details Panel */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <ActiveIcon size={20} />
            </span>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                {activeCategory.badge}
              </span>
              <h3 className="text-lg font-bold text-white">{activeCategory.name}</h3>
            </div>
          </div>
          <p className="max-w-md text-xs text-muted-foreground sm:text-right">
            {activeCategory.description}
          </p>
        </div>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#140D0C] p-4 transition-all duration-200 hover:border-primary/40 hover:bg-[#1A100F]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-accent font-medium">{item.role}</p>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                    {item.productionUse}
                  </p>
                </div>
                <div className="mt-4 border-t border-white/[0.06] pt-2 text-[10px] font-mono text-white/50 uppercase">
                  Production Verified
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
