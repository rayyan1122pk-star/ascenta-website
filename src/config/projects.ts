export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI Agents" | "AI Automation" | "Voice AI" | "CRM & Internal Tools" | "Web Development";
  categoryBadge: string;
  problem: string;
  solution: string;
  stack: string[];
  value: string;
  highlights: string[];
  architecture?: string;
  context: string;
  featured?: boolean;
  image?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "cleandata-ai-saas",
    title: "CleanData AI — Autonomous Data Specialist SaaS",
    subtitle: "AI spreadsheet cleaner, PII redaction, embedded SQLite hub & RAG vector sync infrastructure",
    category: "AI Automation",
    categoryBadge: "AI SaaS Platform",
    context: "B2B SaaS & Autonomous Agent Knowledge Infrastructure",
    problem:
      "Businesses and AI teams waste hundreds of manual hours wrestling with messy spreadsheets, unstandardized phone/date formats, PII leaks, and inconsistent schemas before data can be queried by AI agents or stored in SQL.",
    solution:
      "Engineered an autonomous AI Data Specialist platform operating across 10 specialized modes. Ingests messy spreadsheets or continuous narrative prose, standardizes phone numbers (E.164) and dates (ISO 8601), masks PII (SSN, credit cards), builds entity relationship graphs, persists data into an embedded SQLite engine with an in-browser query explorer, and generates semantic vector embeddings for Pinecone, Qdrant, ChromaDB, and Supabase pgvector.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "SQLite (Node Native)", "Vector Embeddings", "RAG Pipeline", "Vercel"],
    value:
      "95% reduction in data preparation time; 100% automated PII protection; live browser SQL studio and sub-second context delivery for autonomous LLM agents.",
    highlights: [
      "10 autonomous operating modes (Data Analyst, Cleaner, Guardian, RAG Engineer, Validator)",
      "Unstructured paragraph and continuous prose ingestion into typed tabular schemas",
      "Embedded SQLite relational hub with interactive in-browser SQL query explorer",
      "Vectorization pipeline syncing to Pinecone, ChromaDB, Qdrant & Supabase pgvector",
      "Production Agent Context Delivery API (POST /api/v1/agent/context)",
    ],
    architecture:
      "Raw Spreadsheet / Prose → Entity Extractor & PII Masker → Normalizer → Embedded SQLite Hub ↔ Semantic Vectorizer → Agent Context API",
    featured: true,
    image: "/projects/cleandata-hero.png",
    liveUrl: "https://cleandata-ruddy.vercel.app",
  },
  {
    id: "misaal-foundation-web",
    title: "Misaal Foundation — Non-Profit Web Platform",
    subtitle: "Modern editorial digital portal for poverty alleviation, community drives & donor transparency",
    category: "Web Development",
    categoryBadge: "Full-Stack Web",
    context: "Social Impact & Non-Profit Digital Experience",
    problem:
      "Legacy non-profit websites often suffer from 4+ second load times, fragmented campaign information, and opaque donation journeys, leading to high drop-offs and diminished donor trust.",
    solution:
      "Engineered a bespoke, high-performance web platform for Misaal Foundation (misaalfoundation.online) built with Next.js 16, React 19, Tailwind CSS v4, and Supabase. Features cinematic editorial typography, interactive community drive showcases (Ramadan ration, education, clean water), real-time volunteer intake, and transparent programmatic impact metrics.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Framer Motion", "Vercel"],
    value:
      "Sub-second load times worldwide; 100/100 Core Web Vitals; multi-thousand visitor capacity with elevated donor engagement and direct volunteer onboarding.",
    highlights: [
      "Cinematic editorial hero with video modal storytelling",
      "Dynamic community drive modules (Ramadan Ration, Education, Clean Water)",
      "Real-time volunteer registration and community impact showcase",
      "Supabase backend integration with sub-second Edge CDN delivery",
    ],
    architecture:
      "Next.js 16 App Router → Supabase Client → Tailwind v4 Design Tokens → Edge CDN Delivery",
    featured: true,
    image: "/projects/misaal-foundation-hero.png",
    liveUrl: "https://www.misaalfoundation.online",
  },
  {
    id: "ngo-crm-dashboard",
    title: "Misaal Foundation — Beneficiary & Operations CRM",
    subtitle: "Unified Google Forms & Sheets ingestion with real-time operational Next.js dashboard",
    category: "CRM & Internal Tools",
    categoryBadge: "CRM & Ops",
    context: "Non-Profit Internal Operations & Field Logistics",
    problem:
      "Field teams relied on disconnected paper logs and messy spreadsheets. Volunteer dispatches were delayed, beneficiary records were prone to duplication, and preparing monthly donor impact reports took days of manual collation.",
    solution:
      "Engineered an integrated operational hub: standardized Google Forms for field intake, real-time Google Sheets two-way sync, role-based access for coordinators, donor pipeline tracking, and interactive data visualization charts.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Sheets API", "Google Forms", "Supabase", "Recharts"],
    value:
      "100% elimination of paper loss; sub-second record searching across 3,000+ beneficiaries; reporting cycle dropped from days to instant export.",
    highlights: [
      "Google Forms field intake with live Sheets sync",
      "Role-based access (admin, coordinator, viewer)",
      "Interactive beneficiary & donor pipeline",
      "Data visualization with exportable reports",
    ],
    architecture:
      "Field Google Forms → Webhook Listener → Sheets Data Normalizer → Supabase Cache → Next.js Dashboard",
    featured: true,
  },
  {
    id: "whatsapp-ai-crm",
    title: "WhatsApp AI Conversational CRM",
    subtitle: "Multi-agent conversational funnel with automated qualification & instant human takeover",
    category: "AI Agents",
    categoryBadge: "Conversational AI",
    context: "Inbound Lead Generation & Customer Triage",
    problem:
      "High inbound inquiry volume caused lead drop-offs during off-hours. Prospects waited up to 6 hours for a response, while sales reps wasted hours answering the same 5 repetitive questions.",
    solution:
      "Architected a 24/7 intelligent WhatsApp agent using the official Meta Cloud API and Claude/OpenAI. The system executes multi-turn qualification, logs intent and contact info to CRM pipelines, and alerts human reps with conversation summaries when complex deal conditions are met.",
    stack: ["n8n", "WhatsApp Business API", "Claude API", "OpenAI", "Supabase", "Webhooks"],
    value:
      "< 5-second initial response time 24/7; 60%+ automated lead qualification; zero dropped leads; instant warm handoff to human sales reps.",
    highlights: [
      "Official Meta WhatsApp Cloud API connection",
      "Multi-turn context retention & intent scoring",
      "One-click human takeover with summary briefing",
      "Automated pipeline stage progression in CRM",
    ],
    architecture:
      "WhatsApp Webhook → n8n Orchestrator → LLM Intent & Memory Engine → Pipeline Tagging → WhatsApp Outbound / Human Alert",
    featured: true,
  },
  {
    id: "real-estate-ai-agent",
    title: "Real Estate AI Matchmaker & Broker Routing",
    subtitle: "Omnichannel Instagram & WhatsApp AI agent with inventory matching & Hinglish support",
    category: "AI Agents",
    categoryBadge: "Multilingual AI",
    context: "Real Estate Brokerage & Property Marketing",
    problem:
      "Social media ads generated high inquiry volumes across Instagram DMs and WhatsApp. Leads communicated in mixed English, Hindi, and Hinglish with varying budgets and location preferences, overwhelming manual sales agents.",
    solution:
      "Built an omnichannel conversational agent with persistent memory. It interprets English, Hindi, and Hinglish natively, queries dynamic Google Sheets property inventory by budget, BHK, and location, delivers brochure links, and routes qualified buyers to designated brokers.",
    stack: ["Instagram Graph API", "WhatsApp API", "n8n", "Google Sheets API", "Claude 3.5 Sonnet", "Node.js"],
    value:
      "3x lift in qualified consultation bookings; immediate property matching from live inventory; native understanding of colloquial Hinglish queries.",
    highlights: [
      "Native English, Hindi & Hinglish natural language parsing",
      "Live Google Sheets property inventory query engine",
      "Automated brochure generation and link dispatch",
      "Intelligent broker assignment based on property tier",
    ],
    architecture:
      "Instagram DM / WhatsApp → n8n Webhook → Claude Language & Intent Parser → Google Sheets Inventory Query → Match Results & Brochure Link → Broker Notification",
    featured: true,
  },
  {
    id: "voice-calling-engine",
    title: "Low-Latency AI Voice Calling Engine",
    subtitle: "Real-time conversational phone assistant with sub-800ms response optimization",
    category: "Voice AI",
    categoryBadge: "Voice Infrastructure",
    context: "Inbound Support & Appointment Scheduling",
    problem:
      "Existing voice bots suffered from 2.5s+ turnaround delay between caller speech and AI audio response, creating unnatural pauses, overlapping speech, and high caller frustration.",
    solution:
      "Re-engineered the full voice pipeline using Twilio Media Streams, WebSocket bidirectional streaming, ultra-fast STT chunking (Deepgram), concurrent tool execution, and streaming neural TTS (Cartesia / ElevenLabs) to bring end-to-end latency below 800ms.",
    stack: ["Twilio Media Streams", "WebSockets", "Deepgram STT", "OpenAI / Claude", "Cartesia / ElevenLabs TTS", "Node.js"],
    value:
      "Latency reduced by >60% to sub-800ms; natural conversational human cadence; automated inbound call qualification and live calendar slot booking.",
    highlights: [
      "Bidirectional WebSocket audio streaming",
      "Voice Activity Detection (VAD) & instant barge-in support",
      "Sub-800ms end-to-end roundtrip response latency",
      "Direct live calendar booking over the phone",
    ],
    architecture:
      "Twilio Call → Bi-directional WebSocket → Streaming STT (Deepgram) → Fast LLM Context → Streaming TTS (Cartesia) → Twilio Audio Buffer",
    featured: true,
  },
  {
    id: "n8n-automation-engine",
    title: "Enterprise n8n Workflow Automation Suite",
    subtitle: "Mission-critical API orchestration, multi-step error recovery & data syncing",
    category: "AI Automation",
    categoryBadge: "API Orchestration",
    context: "Operations & Business Process Automation",
    problem:
      "Teams were squandering 20+ hours weekly manually copying lead records between ads, forms, email campaigns, and spreadsheets, leading to frequent data entry errors and untracked leads.",
    solution:
      "Designed a robust n8n workflow cluster connecting 15+ third-party APIs and internal databases, complete with automated retry policies, dead-letter error handling, Slack alerts, and cryptographic webhook verification.",
    stack: ["n8n", "REST APIs", "Webhooks", "PostgreSQL", "Google Workspace", "Resend"],
    value:
      "20+ hours saved every week; 0% synchronization drift; real-time failure alerts preventing broken business operations.",
    highlights: [
      "Multi-branch conditional logic and parallel execution",
      "Dead-letter queues with automated exponential backoff",
      "Encrypted credential management and security hygiene",
      "Webhook signature validation and idempotency safeguards",
    ],
    architecture:
      "Event Webhook → n8n Gateway → Payload Sanitization → Multi-Branch Processing → Database Ingestion → Notification Dispatch",
    featured: true,
  },
  {
    id: "ascenta-web-platform",
    title: "Ascenta High-Performance Web Platform",
    subtitle: "Next.js 16 web applications engineered for speed, authority, and high conversions",
    category: "Web Development",
    categoryBadge: "Full-Stack Web",
    context: "Client Web Development & Digital Experience",
    problem:
      "Outdated, bloated WordPress websites suffered from 4+ second load times, plugin vulnerability risks, poor mobile experiences, and near-zero visitor-to-lead conversions.",
    solution:
      "Engineered bespoke, modern web applications leveraging Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and strict TypeScript. Designed with editorial typography, sub-second TTFB, and conversion-focused layouts.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    value:
      "100/100 Core Web Vitals score; sub-second page transitions; elevated brand perception and measurable conversion improvements.",
    highlights: [
      "Edge rendering and static generation optimization",
      "Zero-layout-shift editorial typography and motion",
      "WCAG 2.2 AA accessibility compliance",
      "Direct conversion paths and integrated lead intake",
    ],
    architecture:
      "Next.js App Router → Server Components → Tailwind v4 Tokens → Edge CDN Delivery",
    featured: true,
  },
];
