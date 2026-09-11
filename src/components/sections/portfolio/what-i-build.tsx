"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Code2,
  Cpu,
  Bot,
  Workflow,
  LayoutDashboard,
  PhoneCall,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Terminal,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: typeof Globe;
  detailTitle: string;
  detailDescription: string;
  deliverables: string[];
  stack: string[];
  exampleProject: string;
  codeSnippet: string;
}

const capabilities: Capability[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDesc: "Full-stack websites, web apps & custom platforms",
    badge: "Core Engineering",
    icon: Code2,
    detailTitle: "Production Next.js & React Web Applications",
    detailDescription:
      "I engineer bespoke web platforms from scratch — no slow page builders or fragile plugins. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 for sub-second page transitions, 100 Core Web Vitals, and conversion-engineered user funnels.",
    deliverables: [
      "Custom responsive web applications with App Router",
      "Dynamic data fetching & Server Components architecture",
      "Integrated lead capture and database endpoints",
      "Semantic HTML & Technical SEO structured metadata",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Vercel"],
    exampleProject: "Ascenta Platform & Custom Client Web Portals",
    codeSnippet: `// Server-rendered high-performance page
export default async function ClientPortal() {
  const telemetry = await getRealtimeTelemetry();
  return <MetricsDashboard data={telemetry} vitals={100} />;
}`,
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDesc: "Intelligent autonomous agents with memory & tools",
    badge: "Autonomous AI",
    icon: Bot,
    detailTitle: "Multi-Turn Conversational Agents & Autonomous Executors",
    detailDescription:
      "Beyond basic chatbots, I build agents equipped with reasoning loops, schema-enforced tool calling, persistent memory, and human handoff protocols. They autonomously qualify leads, query live inventories, and execute database operations.",
    deliverables: [
      "WhatsApp & Instagram autonomous conversational agents",
      "Dynamic tool calling with strict Zod / JSON schemas",
      "Persistent session memory across multi-turn interactions",
      "Warm human takeover triggers with instant conversation briefing",
    ],
    stack: ["Claude 3.5 Sonnet", "OpenAI GPT-4o", "n8n", "Zod", "Webhooks", "Supabase"],
    exampleProject: "WhatsApp AI Sales Agent & Real Estate Matchmaker",
    codeSnippet: `// Agent Tool Definition with Strict Schema
const queryInventoryTool = {
  name: "queryPropertyInventory",
  description: "Search live database by budget, location, and unit BHK",
  parameters: z.object({ budgetMax: z.number(), location: z.string() })
};`,
  },
  {
    id: "voice-ai",
    title: "Voice Calling Systems",
    shortDesc: "Low-latency conversational phone infrastructure",
    badge: "Real-Time Voice",
    icon: PhoneCall,
    detailTitle: "Sub-Second Inbound & Outbound Voice AI Engines",
    detailDescription:
      "I architect conversational voice assistants capable of holding natural phone conversations with sub-800ms response times. Engineered with bidirectional WebSockets, streaming STT, and neural TTS with instant voice interruption handling.",
    deliverables: [
      "Inbound phone answering & lead qualification",
      "Bidirectional WebSocket audio streaming via Twilio",
      "Voice Activity Detection (VAD) & instant barge-in support",
      "Automated calendar slot reservation directly on the call",
    ],
    stack: ["Twilio Media Streams", "WebSockets", "Deepgram STT", "Cartesia TTS", "Node.js"],
    exampleProject: "Low-Latency Appointment Scheduling Voice Engine",
    codeSnippet: `// Low-latency audio streaming pipeline
mediaStream.on("audio_chunk", async (chunk) => {
  const partial = await deepgram.streamSTT(chunk);
  if (partial.isFinal) streamTTS(await llm.stream(partial.text));
});`,
  },
  {
    id: "n8n-workflows",
    title: "n8n Workflows",
    shortDesc: "Complex automation connecting APIs, CRMs & DBs",
    badge: "API Orchestration",
    icon: Workflow,
    detailTitle: "Fault-Tolerant Enterprise Automation Pipelines",
    detailDescription:
      "I build self-hosted, resilient n8n automation clusters that orchestrate data flows between disparate SaaS platforms. Built with dead-letter retry logic, cryptographic webhook validation, and error alert channels.",
    deliverables: [
      "Cross-platform data synchronization (CRMs, Sheets, DBs)",
      "Automated webhook event listeners with idempotency safeguards",
      "Dead-letter queues with exponential backoff on API rate limits",
      "Real-time operational alerts in Slack or WhatsApp",
    ],
    stack: ["n8n", "REST APIs", "Webhooks", "PostgreSQL", "Google Workspace"],
    exampleProject: "Enterprise Multi-Platform Automation Suite",
    codeSnippet: `// Webhook payload ingestion & branching
POST /webhook/lead-intake
→ Validate HMAC signature
→ Normalize payload
→ Branch: [CRM Pipeline] + [Google Sheets] + [WhatsApp Notification]`,
  },
  {
    id: "crm-tools",
    title: "CRM & Internal Tools",
    shortDesc: "Custom dashboards, pipelines & operations hubs",
    badge: "Operations Hubs",
    icon: LayoutDashboard,
    detailTitle: "Bespoke Business Management Platforms & Dashboards",
    detailDescription:
      "Off-the-shelf software often costs thousands in monthly seat licenses while forcing awkward workflows. I build custom internal dashboards and lightweight CRMs tailored exactly to how your team operates.",
    deliverables: [
      "Role-based authentication (Admin, Coordinator, Viewer)",
      "Two-way synchronization with Google Forms & Google Sheets",
      "Interactive pipeline management and status tracking",
      "Real-time data visualization with exportable reports",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "Google Sheets API"],
    exampleProject: "NGO Operations & Beneficiary Management CRM",
    codeSnippet: `// Role-based CRM pipeline view
const { data: records } = await supabase
  .from('beneficiaries')
  .select('*')
  .eq('status', activeTab)
  .order('created_at', { ascending: false });`,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    shortDesc: "Process automation using AI reasoning & APIs",
    badge: "Process Automation",
    icon: Cpu,
    detailTitle: "AI-Augmented Business Process Automation",
    detailDescription:
      "Embedding artificial intelligence directly into recurring operational tasks: parsing unstructured consultation notes, categorizing support inquiries, auto-generating client proposals, and routing tasks automatically.",
    deliverables: [
      "Automated document summarization and entity extraction",
      "Intelligent inbox and ticket categorization",
      "Automated follow-up reminders triggered by lead behavior",
      "Custom RAG-powered internal knowledge search",
    ],
    stack: ["OpenAI", "Claude", "n8n", "Zod", "Supabase", "Resend"],
    exampleProject: "Document Entity Extractor & Automated Lead Triage",
    codeSnippet: `// Extract structured schema from messy notes
const extracted = await ai.extract({
  input: rawMeetingTranscript,
  schema: LeadProfileSchema,
  temperature: 0.1
});`,
  },
  {
    id: "web-design",
    title: "Web Design (UI/UX)",
    shortDesc: "Premium UI/UX & modern responsive interfaces",
    badge: "Design Systems",
    icon: Globe,
    detailTitle: "Editorial Design, Visual Hierarchy & Interaction",
    detailDescription:
      "I design interfaces that convey instant technical authority and convert. Using deep palettes, crisp typography, generous whitespace, and purposeful micro-interactions that feel tangible rather than decorated.",
    deliverables: [
      "Design systems with reusable token architecture",
      "Mobile-first responsive ergonomic layouts",
      "High-contrast dark editorial aesthetic",
      "Accessible WCAG 2.2 AA color and typography standards",
    ],
    stack: ["Figma", "Design Tokens", "Tailwind CSS", "Framer Motion"],
    exampleProject: "Ascenta Editorial Design System",
    codeSnippet: `/* Charcoal, crimson & ivory design tokens */
:root {
  --background: #17100F;
  --primary: #E63946;
  --accent: #D4A24E;
  --foreground: #F5EFE6;
}`,
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    shortDesc: "Custom systems designed around client bottlenecks",
    badge: "Problem Solving",
    icon: Sparkles,
    detailTitle: "Targeted Systems Engineered for Specific Bottlenecks",
    detailDescription:
      "I don't force one-size-fits-all tools. I analyze where your business loses time or drops leads, and architect a targeted technical solution combining APIs, AI models, custom databases, and sleek interfaces.",
    deliverables: [
      "Comprehensive bottleneck discovery and technical scoping",
      "Custom system architecture designed for immediate ROI",
      "End-to-end implementation and seamless tool migration",
      "Zero monthly per-seat licensing fees for custom tools",
    ],
    stack: ["Full Stack", "APIs", "n8n", "Next.js", "AI Models"],
    exampleProject: "End-to-End Multichannel Lead Conversion Engine",
    codeSnippet: `// Discovery → Architecture → Implementation
Problem: 4-hour delay in off-hours response
Solution: WhatsApp AI + Sheet sync + Broker dispatch
Result: < 5s response, 3x qualified consultations`,
  },
];

export function WhatIBuild() {
  const [activeId, setActiveId] = useState("web-dev");
  const activeCap = capabilities.find((c) => c.id === activeId) ?? capabilities[0];
  const ActiveIcon = activeCap.icon;

  return (
    <Section id="what-i-build" className="relative">
      <SectionHeading
        badge="What I Build"
        title={
          <>
            Engineering Capabilities.{" "}
            <span className="font-display italic text-primary">Not Generic Services.</span>
          </>
        }
        description="I bridge the gap between high-end frontend design, autonomous AI agents, resilient workflow automations, and low-latency voice infrastructure."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Interactive Capability Selector */}
        <div className="flex flex-col gap-2 lg:col-span-5">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
            Select a capability:
          </p>
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isSelected = cap.id === activeId;
            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setActiveId(cap.id)}
                className={cn(
                  "group flex items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-200",
                  isSelected
                    ? "border-primary/50 bg-primary/[0.08] shadow-[0_0_24px_-8px_rgba(230,57,70,0.3)]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                      isSelected
                        ? "border-primary/40 bg-primary/20 text-primary"
                        : "border-white/10 bg-white/[0.03] text-muted-foreground group-hover:text-white"
                    )}
                  >
                    <Icon size={17} />
                  </span>
                  <div>
                    <p
                      className={cn(
                        "text-sm font-semibold transition-colors",
                        isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                      )}
                    >
                      {cap.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{cap.shortDesc}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "text-xs font-mono font-medium opacity-0 transition-opacity group-hover:opacity-100 sm:inline",
                    isSelected && "opacity-100 text-primary"
                  )}
                >
                  <ArrowRight size={14} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Capability Showcase */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCap.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl sm:p-8"
            >
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <ActiveIcon size={22} />
                  </span>
                  <div>
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/[0.06] px-2.5 py-0.5 text-[11px] font-mono font-medium text-primary">
                      {activeCap.badge}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white">{activeCap.detailTitle}</h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-[#F5EFE6]/90 sm:text-base">
                {activeCap.detailDescription}
              </p>

              {/* Code Snippet / Architecture Visual */}
              <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#140D0C] p-4 font-mono text-xs">
                <div className="mb-2 flex items-center justify-between text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Terminal size={13} className="text-primary" />
                    <span>Technical Architecture</span>
                  </div>
                  <span className="text-[10px] uppercase text-accent font-medium">Verified Code</span>
                </div>
                <pre className="overflow-x-auto text-emerald-400/90 whitespace-pre-wrap leading-relaxed">
                  <code>{activeCap.codeSnippet}</code>
                </pre>
              </div>

              {/* Key Deliverables */}
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  What Gets Delivered:
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {activeCap.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-primary" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Example Project */}
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {activeCap.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs"
                    render={<Link href="/work" />}
                  >
                    View Case Study
                    <ArrowRight size={13} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
