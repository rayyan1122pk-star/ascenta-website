export interface KnowledgeTopic {
  id: string;
  category: "Web Development" | "UI/UX" | "AI Engineering" | "Automation" | "Voice AI";
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
}

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    id: "ai-agents-vs-chatbots",
    category: "AI Engineering",
    title: "AI Agents vs Traditional Chatbots: The Architectural Shift",
    subtitle: "Why autonomous tool execution changes everything beyond simple conversation",
    readTime: "5 min read",
    summary:
      "A traditional chatbot responds with text based on pattern matching or raw LLM completion. An AI agent reasons, plans, accesses external tools, queries databases, and performs real-world actions.",
    keyTakeaways: [
      "Chatbots are passive responders; agents are active executors.",
      "The agent loop requires: Perception → Reasoning → Tool Calling → Reflection → Execution.",
      "Tool definitions must have rigid schemas (Zod / JSON Schema) to prevent runtime failures.",
      "State and memory management determine agent reliability in multi-turn tasks.",
    ],
    contentSections: [
      {
        heading: "1. The Limitation of Pure Chatbots",
        body: "Most early AI implementations were basic wrapper widgets. If a customer asked 'What is my order status?', the chatbot could only explain general policy. It had no eyes into the database and no hands to interact with external APIs.",
      },
      {
        heading: "2. The Anatomy of an Agent",
        body: "An agent is provided with an identity prompt, a reasoning model (like Claude 3.5 Sonnet or GPT-4o), and a toolbox of executable functions. When the user asks a question, the model decides whether to respond directly or invoke a tool (e.g. `lookupOrder(orderId)`), waits for the tool output, and incorporates the real data into its response.",
      },
      {
        heading: "3. Reliability in Production",
        body: "Building reliable agents requires strict constraints. Without clear parameter validation, agents can loop infinitely or hallucinate arguments. Designing with idempotency, confirmation gates for destructive actions, and graceful human handoff is mandatory.",
      },
    ],
  },
  {
    id: "rag-architecture-explained",
    category: "AI Engineering",
    title: "RAG (Retrieval-Augmented Generation): Grounding AI in Truth",
    subtitle: "How to eliminate hallucinations by feeding models verified reference context",
    readTime: "6 min read",
    summary:
      "RAG combines document search with LLM reasoning. Rather than expecting a model to memorize proprietary knowledge, we retrieve the exact relevant text chunks and pass them into the prompt window.",
    keyTakeaways: [
      "RAG is search + synthesis, not fine-tuning.",
      "Chunk size and overlap strategy directly dictate retrieval precision.",
      "Vector embeddings capture semantic similarity, while hybrid search adds keyword exactness.",
      "Citations and source attribution build verifiable client trust.",
    ],
    contentSections: [
      {
        heading: "1. Why Not Just Fine-Tune?",
        body: "Fine-tuning updates model weights for style and tone, but is expensive and terrible at memorizing specific facts that change frequently. RAG keeps your data decoupled in your database, allowing real-time updates without retraining.",
      },
      {
        heading: "2. The Ingestion Pipeline",
        body: "Documents (PDFs, docs, website pages) are parsed, broken into semantic chunks (typically 400-800 tokens with 10% overlap), converted into vector embeddings, and stored in a vector database like pgvector or Supabase.",
      },
      {
        heading: "3. The Query & Retrieval Step",
        body: "When a query arrives, it is embedded, matched against the most similar chunks via cosine distance, and the top-k results are injected into the prompt as verified reference context.",
      },
    ],
  },
  {
    id: "voice-ai-latency-engineering",
    category: "Voice AI",
    title: "Engineering Sub-Second Latency in Voice AI Systems",
    subtitle: "Breaking down the millisecond budget of natural conversational voice assistants",
    readTime: "7 min read",
    summary:
      "Humans perceive delays over 900ms as awkward pauses. Building natural voice agents requires optimizing every segment of the pipeline: VAD, STT, LLM TTFT, and TTS audio streaming.",
    keyTakeaways: [
      "Total latency budget is < 800ms for natural conversation.",
      "Never wait for full sentences: stream audio chunks over WebSockets.",
      "Use ultra-fast STT models (Deepgram Nova-2) with aggressive endpointing.",
      "Employ fast TTFT LLMs to start audio generation within 250ms.",
    ],
    contentSections: [
      {
        heading: "1. The Millisecond Budget Breakdown",
        body: "In a traditional pipeline: User stops speaking (500ms silence detection) + STT processing (400ms) + LLM completion (1200ms) + TTS generation (500ms) = 2.6 seconds. This feels sluggish. We must collapse this to under 800ms.",
      },
      {
        heading: "2. Streaming Architecture",
        body: "By replacing REST with bidirectional WebSockets, audio packets stream directly into the speech recognizer as the user speaks. The moment endpointing detects a pause, the partial transcript is passed to the LLM.",
      },
      {
        heading: "3. First-Chunk Prioritization & Barge-In",
        body: "The LLM streams tokens immediately. The first 4-6 words are fed to the TTS engine (like Cartesia or ElevenLabs Turbo) which produces the first audio buffer in under 150ms. Continuous Voice Activity Detection (VAD) immediately mutes outbound audio if the human interrupts.",
      },
    ],
  },
  {
    id: "n8n-workflow-architecture",
    category: "Automation",
    title: "Architecting Production-Ready n8n Automation Workflows",
    subtitle: "Moving from fragile 'no-code experiments' to fault-tolerant enterprise pipelines",
    readTime: "5 min read",
    summary:
      "n8n allows visual workflow orchestration, but production demands defensive engineering: payload schema validation, exponential retry backoff, and centralized error hooks.",
    keyTakeaways: [
      "Design workflows as idempotent event handlers.",
      "Separate trigger intake from heavy background processing.",
      "Implement dead-letter queues to catch and log failed executions.",
      "Store secrets in environment variables, never hardcoded in nodes.",
    ],
    contentSections: [
      {
        heading: "1. The Problem with Naive Automation",
        body: "When an external API has a temporary outage or rate-limit spike, a naive workflow drops the event permanently. In business operations, a dropped lead is lost revenue.",
      },
      {
        heading: "2. Defensive Workflow Design",
        body: "Production n8n workflows validate payload schemas at entry, use idempotency keys to prevent duplicate actions, and route failed API calls to retry queues with automated Slack or email alerts.",
      },
      {
        heading: "3. Webhook vs Polling",
        body: "Always prefer instant webhook triggers over scheduled polling. Webhooks execute within milliseconds of the event, consume significantly fewer server resources, and prevent API rate-limit exhaustion.",
      },
    ],
  },
  {
    id: "modern-web-performance-core-vitals",
    category: "Web Development",
    title: "Next.js 16 & Modern Web Architecture: Sub-Second Load Times",
    subtitle: "How Server Components, streaming SSR, and edge caching deliver 100/100 Core Web Vitals",
    readTime: "6 min read",
    summary:
      "Fast websites are not made by luck; they are engineered through minimal JavaScript payloads, zero layout shift, server-first data fetching, and edge CDN distribution.",
    keyTakeaways: [
      "Performance is a direct trust and conversion signal.",
      "React Server Components keep heavy libraries off client bundles.",
      "Optimize Largest Contentful Paint (LCP) with modern WebP/AVIF images.",
      "Prevent Cumulative Layout Shift (CLS) with explicit aspect ratios and font preloading.",
    ],
    contentSections: [
      {
        heading: "1. Server Components by Default",
        body: "In modern Next.js, components render on the server by default. Client-side JavaScript is only shipped for components that need interactivity (forms, modals, interactive animations). This dramatically slashes Time to Interactive (TTI).",
      },
      {
        heading: "2. Font and Image Strategy",
        body: "Using `next/font` zero-out layout shifts by downloading font files at build time and matching fallback fallbacks. Images use next-gen formats with predefined dimensions so the page never jumps as assets load.",
      },
      {
        heading: "3. The Conversion Impact",
        body: "Every 100ms improvement in load speed directly correlates with lower bounce rates and higher conversion rates. Speed is the foundation of digital credibility.",
      },
    ],
  },
  {
    id: "editorial-dark-mode-ui-ux",
    category: "UI/UX",
    title: "Editorial Design & Typography: Beyond Generic SaaS Grids",
    subtitle: "Creating distinctive, high-end interfaces using visual hierarchy, typography, and contrast",
    readTime: "5 min read",
    summary:
      "Most modern websites suffer from template fatigue — repeating the same 3-column card grid. Premium digital design uses editorial typography, intentional whitespace, and sophisticated micro-interactions.",
    keyTakeaways: [
      "Break repetitive grid monotony with asymmetrical compositions.",
      "Pair modern sans-serif body typography with expressive serif/display headlines.",
      "Use deep charcoal (#17100F) rather than harsh pure black (#000000).",
      "Treat whitespace as an active design element that gives content breathing room.",
    ],
    contentSections: [
      {
        heading: "1. Escaping the Card Grid Trap",
        body: "When every section is three cards in a row, visitors develop banner blindness. Using varied compositions — split screens, sticky narratives, horizontal tickers, and interactive diagrams — keeps the eye engaged.",
      },
      {
        heading: "2. The Science of Dark Mode Contrast",
        body: "Pure black (#000000) with pure white text creates eye strain and harsh contrast. Using warm deep charcoal (#17100F) paired with ivory text (#F5EFE6) and subtle borders creates a luxurious, tactile surface.",
      },
      {
        heading: "3. Purposeful Motion",
        body: "Animations should communicate spatial relationships and confirm actions, not distract. Subtle scroll reveals and hover depth give interfaces life without lagging user interactions.",
      },
    ],
  },
];
