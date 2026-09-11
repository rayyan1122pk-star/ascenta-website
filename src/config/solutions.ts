export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  clientProblem: string;
  technicalApproach: string;
  solutionBuilt: string;
  businessValue: string;
  techUsed: string[];
  keyInsight: string;
}

export const solutions: SolutionItem[] = [
  {
    id: "structuring-chatgpt-solutions",
    title: "Structuring AI & LLM Systems from Ambiguous Ideas",
    category: "AI Engineering",
    badge: "LLM Architecture",
    clientProblem:
      "Clients knew they wanted to leverage ChatGPT and AI in their business, but had no clear structure for where AI fits, how to constrain model behavior, or how to avoid hallucinations.",
    technicalApproach:
      "Decomposed business processes into discrete functional steps. Mapped where deterministic logic (code/database) is necessary versus where non-deterministic reasoning (LLMs) adds value. Designed prompt topologies, few-shot guardrails, and schema validation.",
    solutionBuilt:
      "Built scoped AI micro-services with structured JSON outputs, system boundary constraints, and fallback human workflows rather than unbounded open-ended chat widgets.",
    businessValue:
      "Turned vague client enthusiasm into reliable, predictable production systems with zero catastrophic hallucinations.",
    techUsed: ["OpenAI API", "Claude API", "JSON Schema / Zod", "TypeScript", "Prompt Engineering"],
    keyInsight: "LLMs should never handle what deterministic code can solve faster and cheaper. Scope AI strictly to reasoning and synthesis.",
  },
  {
    id: "extracting-useful-info-chatgpt",
    title: "Extracting Structured Knowledge from Unstructured Data",
    category: "Data & AI",
    badge: "Knowledge Extraction",
    clientProblem:
      "Businesses were sitting on mountains of raw consultation notes, customer emails, and document PDFs, unable to extract clean, actionable insights into their database.",
    technicalApproach:
      "Built a chunking and extraction pipeline utilizing strict function/tool calling and Pydantic/Zod schemas. Instructed models to enforce exact field typing, enum categorization, and confidence scoring.",
    solutionBuilt:
      "An automated document and communication parser that ingests incoming raw text, extracts structured entities (names, budget, intent, pain points, urgency), and populates internal database records automatically.",
    businessValue:
      "Saved dozens of manual data-entry hours each week, creating structured databases from what was previously discarded conversational text.",
    techUsed: ["Claude Tool Calling", "OpenAI Function Calling", "Zod", "Supabase", "n8n"],
    keyInsight: "Never ask an LLM for freeform text when you need database records. Use strict schema enforcement and typed tool calls.",
  },
  {
    id: "voice-engine-latency",
    title: "Sub-Second Latency Optimization for Voice AI",
    category: "Voice AI",
    badge: "Latency Engineering",
    clientProblem:
      "Initial conversational voice systems felt sluggish and unnatural. 2.5+ second delays created awkward pauses and caller hang-ups.",
    technicalApproach:
      "Audited every millisecond in the audio lifecycle: STT endpointing, network hops, prompt length, token streaming, and TTS synthesis. Switched from REST batch polling to persistent WebSocket streams with parallel execution.",
    solutionBuilt:
      "Engineered a bidirectional WebSocket streaming engine with Deepgram chunked transcription, low-latency LLM streaming (first chunk ready in 250ms), and Cartesia / ElevenLabs streaming audio, cutting roundtrip delay below 800ms.",
    businessValue:
      "Transformed an unconvincing, robotic phone experience into fluid, human-cadenced conversations with seamless barge-in capabilities.",
    techUsed: ["Twilio Media Streams", "WebSockets", "Deepgram", "Cartesia", "ElevenLabs", "Node.js"],
    keyInsight: "In voice AI, perceived latency matters more than model size. Stream the first sentence chunk immediately while the rest generates.",
  },
  {
    id: "reducing-repetitive-manual-work",
    title: "End-to-End Workflow Automation for Operations",
    category: "Workflow Automation",
    badge: "Operational Efficiency",
    clientProblem:
      "Operations teams were manually copying data across ad accounts, contact forms, Google Sheets, internal CRMs, and email dispatchers every single day.",
    technicalApproach:
      "Mapped the complete lifecycle of customer data. Replaced manual handoffs with event-driven webhook listeners, payload sanitization, and automated execution pipelines with built-in error handling.",
    solutionBuilt:
      "Custom n8n workflows that listen for events, validate payloads, update spreadsheets and databases in real time, generate notifications, and trigger follow-up sequences.",
    businessValue:
      "Cut 20+ hours of repetitive administrative grunt work weekly, eliminating data loss and accelerating customer turnaround times.",
    techUsed: ["n8n", "Webhooks", "Google Sheets API", "Resend", "PostgreSQL"],
    keyInsight: "Reliability in automation requires defensive engineering: rate limiting, idempotency keys, and dead-letter queues for failed events.",
  },
  {
    id: "connecting-platforms-apis",
    title: "Bridging Disparate Systems Through Unified APIs",
    category: "System Integration",
    badge: "API Architecture",
    clientProblem:
      "Clients utilized multiple legacy tools (Google Workspace, proprietary databases, external payment gateways, messaging apps) that could not communicate with each other.",
    technicalApproach:
      "Constructed a lightweight middleware layer that normalizes incoming webhook payloads, manages authentication tokens safely, and orchestrates cross-platform synchronization.",
    solutionBuilt:
      "A unified API integration hub connecting WhatsApp Business, Google Sheets, Supabase, and email systems into one coherent, synchronized ecosystem.",
    businessValue:
      "Unlocked single-source-of-truth visibility without forcing clients to replace their trusted existing business tools.",
    techUsed: ["Node.js", "TypeScript", "REST APIs", "Supabase", "Google Cloud"],
    keyInsight: "Instead of forcing a total software overhaul, meet businesses where they already work by connecting their existing tools intelligently.",
  },
  {
    id: "operational-dashboards",
    title: "Centralized Operational Dashboards from Spreadsheets",
    category: "Internal Tools",
    badge: "Data Visualization",
    clientProblem:
      "Spreadsheets were bloated, slow, vulnerable to accidental data deletion by staff, and failed to provide high-level visibility for leadership.",
    technicalApproach:
      "Preserved Google Sheets as the familiar data-entry backend for field workers while building a modern, performant Next.js frontend with role-based authentication and visual charts.",
    solutionBuilt:
      "A bespoke dashboard featuring live data feeds, search & filter capabilities across thousands of entries, status tracking, and executive overview metrics.",
    businessValue:
      "Provided leadership with instant operational clarity while protecting database integrity from human spreadsheet mistakes.",
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Google Sheets API"],
    keyInsight: "Don't fight user habits. If a team is comfortable entering data in Google Sheets, build an interface that reads and writes to it safely.",
  },
];
