"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Bot,
  MessageCircle,
  Database,
  Phone,
  FileSpreadsheet,
  Cpu,
  Layers,
  Activity,
  Radio,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { cn } from "@/lib/utils";

interface LabWorkflow {
  id: string;
  name: string;
  badge: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    type: "trigger" | "logic" | "ai" | "database" | "output";
    icon: typeof MessageCircle;
    system: string;
    details: {
      input: string;
      processing: string;
      modelOrTool: string;
      output: string;
    };
  }[];
}

const labWorkflows: LabWorkflow[] = [
  {
    id: "instagram-ai-crm",
    name: "Instagram Multimodal AI Agent + CRM",
    badge: "Meta API · n8n · Next.js CRM",
    description:
      "Full CRM-centric Instagram AI automation. Ingests DMs, voice notes, and images via Meta Graph API, transcribes audio with Whisper, analyzes photos with Vision LLM, marks seen, sends typing indicators, syncs contacts to Next.js CRM, and supports 1-click human takeover.",
    nodes: [
      {
        id: "meta-webhook",
        label: "Instagram Webhook Ingest",
        type: "trigger",
        icon: MessageCircle,
        system: "Meta Graph API (DMs, Voice, Images, Comments)",
        details: {
          input: '{"object": "instagram", "entry": [{"messaging": [{"sender": {"id": "ig_usr_9921"}, "message": {"attachments": [{"type": "audio", "payload": {"url": "https://cdn.fb.com/voice_memo.aac"}}]}}]}]}',
          processing: "Webhook listener verifies X-Hub-Signature-256 HMAC; routes payload based on message type (text, audio, image, post comment).",
          modelOrTool: "Meta Cloud Webhook Gateway",
          output: "Verified event with Instagram User ID, media attachment URL, timestamp & conversation thread ID.",
        },
      },
      {
        id: "multimodal-ai",
        label: "Whisper & Vision Perception",
        type: "ai",
        icon: Bot,
        system: "Groq Whisper + Vision LLM",
        details: {
          input: "Raw voice memo audio stream (.aac) or attached product image URL.",
          processing: "Groq Whisper transcribes speech in <300ms; Vision LLM extracts visual product attributes, style, and question intent.",
          modelOrTool: "Groq Whisper Large-v3 + Vision LLM",
          output: '{"transcription": "Hey! Do you have this oversized hoodie in size M available for delivery this weekend?", "visualTags": ["oversized_hoodie", "black"]}',
        },
      },
      {
        id: "agent-reasoning",
        label: "AI Reasoning & Lead Scorer",
        type: "logic",
        icon: Workflow,
        system: "n8n AI Agent + Prompt Memory",
        details: {
          input: "Transcript/Image context + Conversation history + CRM Contact Profile.",
          processing: "Dispatches 'mark_seen' and starts 'typing_on' indicator; evaluates intent and calculates lead score (0-100); crafts personalized sales response.",
          modelOrTool: "Claude 3.5 Sonnet / n8n AI Agent Node",
          output: '{"reply": "Yes! We have 4 units of the Black Oversized Hoodie in Size M. I can reserve one for delivery by Friday.", "leadScore": 88, "stage": "Qualified"}',
        },
      },
      {
        id: "crm-persistence",
        label: "CRM Sync & Human Handoff",
        type: "database",
        icon: Database,
        system: "Next.js 15 CRM & Prisma ORM",
        details: {
          input: "Lead score: 88, updated conversation timeline, customer profile @sarah_designs.",
          processing: "Upserts Contact record, logs interaction history, and advances pipeline stage; checks human_takeover flag before sending outbound DM.",
          modelOrTool: "Prisma ORM + PostgreSQL / SQLite Hub",
          output: "Contact updated in CRM pipeline; one-click operator takeover available in live Next.js dashboard.",
        },
      },
      {
        id: "meta-outbound",
        label: "Meta Outbound Dispatch",
        type: "output",
        icon: MessageCircle,
        system: "Instagram Graph API Outbound",
        details: {
          input: "Final AI response payload + recipient IGID.",
          processing: "Turns off typing indicator; dispatches message through Instagram Send API with idempotency token.",
          modelOrTool: "Instagram Send API Endpoint",
          output: "Customer receives reply in <3s; typing indicator clears; CRM logs message delivered.",
        },
      },
    ],
  },
  {
    id: "real-estate-ai",
    name: "Real Estate AI Matchmaker (Omnichannel)",
    badge: "Multilingual AI Agent",
    description:
      "Parses colloquial English, Hindi, and Hinglish Instagram DMs & WhatsApp messages, cross-references property inventory in Google Sheets, delivers tailored brochure links, and assigns high-intent leads to brokers.",
    nodes: [
      {
        id: "trigger",
        label: "Inbound Inquiry",
        type: "trigger",
        icon: MessageCircle,
        system: "Instagram Graph & WhatsApp Cloud API",
        details: {
          input: '{"user": "@rahul_sharma", "message": "bhai 3bhk in bandra west budget under 4cr?"}',
          processing: "Webhook listener verifies HMAC SHA256 signature and formats payload.",
          modelOrTool: "Meta Cloud API Gateway",
          output: "Normalized JSON event payload with customer phone, handle & raw query.",
        },
      },
      {
        id: "ai-parser",
        label: "Intent & Memory Parser",
        type: "ai",
        icon: Bot,
        system: "Claude 3.5 Sonnet / Multi-turn Memory",
        details: {
          input: 'Raw text: "bhai 3bhk in bandra west budget under 4cr?"',
          processing: "Detects Hinglish colloquialisms; extracts entity tags: BHK=3, Location=Bandra West, MaxPrice=40000000 INR.",
          modelOrTool: "Claude 3.5 Sonnet (Structured Zod Tool Call)",
          output: '{"intent": "property_search", "bhk": 3, "locality": "Bandra West", "budgetMax": 40000000}',
        },
      },
      {
        id: "sheets-query",
        label: "Inventory Search",
        type: "database",
        icon: FileSpreadsheet,
        system: "Google Sheets API & Supabase Cache",
        details: {
          input: 'Query filters: { status: "Available", locality: "Bandra West", bhk: 3, price: "<=4cr" }',
          processing: "Executes indexed range lookup across live property inventory.",
          modelOrTool: "Google Sheets REST v4 + Edge Cache",
          output: "2 matched properties with floor plans, pricing & brochure PDF links.",
        },
      },
      {
        id: "response-dispatch",
        label: "Brochure & Broker Alert",
        type: "output",
        icon: Workflow,
        system: "n8n Orchestrator & WhatsApp Outbound",
        details: {
          input: "Matched property IDs: [P-104, P-209] + Lead score: High",
          processing: "Dispatches warm personalized reply with PDF link to lead; notifies designated broker via Slack/WhatsApp.",
          modelOrTool: "n8n Webhook Dispatcher",
          output: "Customer received interactive message; Broker assigned in CRM with chat summary.",
        },
      },
    ],
  },
  {
    id: "voice-ai-pipeline",
    name: "Low-Latency Conversational Voice Engine",
    badge: "< 800ms Audio Pipeline",
    description:
      "Bi-directional WebSocket audio pipeline for inbound phone qualification. Streams caller speech, runs speech-to-text chunking, streams LLM tokens, and synthesizes neural audio without conversational lag.",
    nodes: [
      {
        id: "audio-in",
        label: "Twilio Media Stream",
        type: "trigger",
        icon: Phone,
        system: "Twilio Telephony & WebSockets",
        details: {
          input: "8kHz mulaw audio packet stream over persistent WebSocket connection.",
          processing: "Ingests real-time audio buffers without disk buffering; executes VAD for barge-in detection.",
          modelOrTool: "Twilio Media Streams WebSocket",
          output: "Continuous 20ms audio frame packets.",
        },
      },
      {
        id: "stt-chunker",
        label: "Streaming STT",
        type: "logic",
        icon: Activity,
        system: "Deepgram Nova-2 Streaming",
        details: {
          input: "Raw binary audio frames over secure WebSocket.",
          processing: "Real-time speech recognition with ultra-fast endpointing detection (<150ms).",
          modelOrTool: "Deepgram Nova-2",
          output: 'Partial & final transcript: "Yes, I would like to schedule an appointment for Tuesday."',
        },
      },
      {
        id: "fast-llm",
        label: "Streaming Reasoning",
        type: "ai",
        icon: Cpu,
        system: "Fast Context Engine & Tool Execution",
        details: {
          input: 'Caller intent: "schedule appointment for Tuesday 2pm" + Calendar availability state.',
          processing: "Generates first 4 words within 250ms (TTFT); executes tool: `checkCalendarSlot(tue_1400)`.",
          modelOrTool: "Claude 3.5 Haiku / GPT-4o-mini",
          output: 'Streamed tokens: "I have Tuesday at 2:00 PM available for you. Would you like me to reserve that?"',
        },
      },
      {
        id: "tts-out",
        label: "Streaming Audio Out",
        type: "output",
        icon: Radio,
        system: "Cartesia / ElevenLabs Neural TTS",
        details: {
          input: "First token chunk buffer.",
          processing: "Synthesizes conversational neural audio; streams back to Twilio WebSocket with zero jitter.",
          modelOrTool: "Cartesia Sonic Streaming TTS",
          output: "Caller hears natural human voice in under 800ms total roundtrip latency.",
        },
      },
    ],
  },
  {
    id: "ngo-crm-sync",
    name: "NGO Operations & Beneficiary Ingestion",
    badge: "Automated Data Pipeline",
    description:
      "Automates intake from field Google Forms, synchronizes data bi-directionally into Google Sheets, updates Supabase cache, and renders real-time tracking metrics on an admin dashboard.",
    nodes: [
      {
        id: "field-form",
        label: "Google Form Entry",
        type: "trigger",
        icon: FileSpreadsheet,
        system: "Google Forms Field Worker Ingest",
        details: {
          input: "Form submission: Beneficiary name, family size, location, urgent aid requirements.",
          processing: "Google Apps Script webhook trigger activates on form submit event.",
          modelOrTool: "Apps Script Event Hook",
          output: "JSON payload dispatched to n8n webhook listener.",
        },
      },
      {
        id: "validator",
        label: "Data Normalizer",
        type: "logic",
        icon: Workflow,
        system: "n8n Data Validation Engine",
        details: {
          input: "Raw form submission fields.",
          processing: "Sanitizes phone numbers, checks for duplicate citizen IDs, formats postal codes.",
          modelOrTool: "n8n Javascript Node + Zod",
          output: "Cleaned, schema-validated record object with assigned tracking UUID.",
        },
      },
      {
        id: "storage-sync",
        label: "Sheets + Supabase Sync",
        type: "database",
        icon: Database,
        system: "Google Sheets API & PostgreSQL",
        details: {
          input: "Validated record UUID: AID-84920.",
          processing: "Appends row to main operational Google Sheet and upserts to Supabase DB simultaneously.",
          modelOrTool: "Supabase PG + Google Sheets v4 API",
          output: "Bi-directional consistency guaranteed with audit log entry.",
        },
      },
      {
        id: "portal-update",
        label: "Live Dashboard Metrics",
        type: "output",
        icon: Layers,
        system: "Next.js Admin Operations Portal",
        details: {
          input: "Database mutation event.",
          processing: "Dashboard revalidates cache; coordinator view increments aid dispatch counter in real time.",
          modelOrTool: "Next.js Revalidation & Recharts",
          output: "Leadership sees live updated aid numbers; automated SMS alert sent to field coordinator.",
        },
      },
    ],
  },
];

export function AiAutomationLab() {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState("instagram-ai-crm");
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeWorkflow = labWorkflows.find((w) => w.id === selectedWorkflowId) ?? labWorkflows[0];
  const activeNode = activeWorkflow.nodes[selectedNodeIndex] ?? activeWorkflow.nodes[0];
  const ActiveNodeIcon = activeNode.icon;

  return (
    <Section id="automation-lab" className="relative overflow-hidden bg-[#130B0A]/70 py-24">
      {/* Background glow lines */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <SectionHeading
        badge="AI & Automation Lab"
        title={
          <>
            Visual Workflow Engine.{" "}
            <span className="font-display italic text-primary">Connected Intelligence.</span>
          </>
        }
        description="Explore real production automation pipelines. Click on any workflow and node to inspect live telemetry, data transformations, and model execution logic."
      />

      {/* Workflow Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {labWorkflows.map((wf) => (
          <button
            key={wf.id}
            type="button"
            onClick={() => {
              setSelectedWorkflowId(wf.id);
              setSelectedNodeIndex(0);
            }}
            className={cn(
              "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200",
              selectedWorkflowId === wf.id
                ? "border-primary bg-primary/15 text-white shadow-[0_0_20px_rgba(230,57,70,0.3)]"
                : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
            )}
          >
            <Workflow size={14} className={selectedWorkflowId === wf.id ? "text-primary" : ""} />
            <span>{wf.name}</span>
          </button>
        ))}
      </div>

      {/* Lab Description */}
      <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-muted-foreground sm:text-sm">
        {activeWorkflow.description}
      </p>

      {/* Interactive Flow Canvas */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-[#1A1110] p-6 shadow-2xl sm:p-8">
        {/* Nodes Pipeline */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeWorkflow.nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = idx === selectedNodeIndex;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedNodeIndex(idx)}
                className={cn(
                  "group relative flex flex-col rounded-2xl border p-5 text-left transition-all duration-300",
                  isSelected
                    ? "border-primary bg-primary/[0.08] shadow-[0_0_25px_rgba(230,57,70,0.35)] scale-[1.02]"
                    : "border-white/[0.08] bg-[#140D0C] hover:border-white/20 hover:bg-white/[0.02]"
                )}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Node 0{idx + 1}
                  </span>
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      isSelected ? "bg-primary animate-ping" : "bg-white/20"
                    )}
                  />
                </div>

                {/* Node icon & title */}
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors",
                      isSelected
                        ? "border-primary/40 bg-primary/20 text-primary"
                        : "border-white/10 bg-white/[0.03] text-muted-foreground group-hover:text-white"
                    )}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{node.label}</h4>
                    <p className="text-[11px] font-mono text-primary/80">{node.system}</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/[0.06] pt-3 text-[11px] text-muted-foreground">
                  <span className="text-accent font-medium uppercase text-[10px]">Type: </span>
                  <span className="capitalize">{node.type}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Node Inspector Telemetry Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeWorkflow.id}-${activeNode.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-8 rounded-2xl border border-white/10 bg-[#120B0A] p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <ActiveNodeIcon size={14} />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                  Node Inspector: {activeNode.label}
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                  {activeNode.system}
                </span>
              </div>
              <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Telemetry Active
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Input & Model */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-rose-400 font-semibold">
                    [Incoming Payload / Input]
                  </p>
                  <pre className="mt-1.5 overflow-x-auto rounded-xl border border-white/[0.06] bg-[#0E0807] p-3 font-mono text-xs text-white/80 whitespace-pre-wrap">
                    {activeNode.details.input}
                  </pre>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                    [Engine / Model Execution]
                  </p>
                  <div className="mt-1.5 rounded-xl border border-white/[0.06] bg-[#0E0807] p-3 font-mono text-xs text-[#F5EFE6]">
                    {activeNode.details.modelOrTool}
                  </div>
                </div>
              </div>

              {/* Processing & Output */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                    [Transformation Logic]
                  </p>
                  <div className="mt-1.5 rounded-xl border border-white/[0.06] bg-[#0E0807] p-3 text-xs leading-relaxed text-white/90">
                    {activeNode.details.processing}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                    [Outgoing Event / Target State]
                  </p>
                  <pre className="mt-1.5 overflow-x-auto rounded-xl border border-white/[0.06] bg-[#0E0807] p-3 font-mono text-xs text-emerald-300/90 whitespace-pre-wrap">
                    {activeNode.details.output}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
