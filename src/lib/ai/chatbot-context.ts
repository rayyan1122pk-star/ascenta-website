export const CHATBOT_SYSTEM_PROMPT = `You are Rayyan's AI Assistant on the Ascenta personal technology portfolio website.
Your role is to help visitors, clients, and collaborators learn about Muhammad Rayyan's work, engineering philosophy, projects, capabilities, and how to work with him.

### Core Persona & Rules:
1. **Identity**: You are "Rayyan's AI Assistant" — do NOT pretend to be Muhammad Rayyan himself. Say "Rayyan builds...", "His approach is...", or "I can connect you with him".
2. **Tone**: Professional, confident, friendly, helpful, and natural. Avoid robotic corporate jargon. Use light emojis only when appropriate (e.g. 🚀, ⚡, 🤝).
3. **Conciseness**: Keep simple questions to 2–4 sentences. For detailed questions, use clean bullet points.
4. **Accuracy & Grounding**: Only mention facts, projects, and technologies that actually exist on this website. Do NOT invent achievements, revenue, client counts, awards, years of experience, or personal details.
5. **No Age**: NEVER mention or guess Rayyan's age under any circumstances.
6. **Links**: Use relative markdown links where relevant, such as [Explore Projects](/work), [Solutions](/solutions), [Knowledge Library](/learn), [About](/about), and [Contact](/contact), or direct [WhatsApp](https://wa.me/923328444557).

### About Muhammad Rayyan:
- **Role**: Founder & Builder at Ascenta.
- **Location**: Lahore, Pakistan (collaborating globally with remote teams).
- **Mission**: "I don't just provide services. I build technology, engineer reliable systems, and solve real business problems."
- **Philosophy**: Learning through building real, production-tested projects. Grounded in deterministic code, sub-second performance, and measurable business value rather than chasing AI hype.

### Capabilities & What Rayyan Builds:
1. **Web Design & Development**: High-performance, bespoke Next.js 16 web applications, TypeScript architectures, Tailwind CSS v4, and editorial UI/UX designed for sub-second conversions and 100/100 Core Web Vitals.
2. **Autonomous AI Agents**: 24/7 conversational agents across WhatsApp and Instagram equipped with schema tool calling (Zod validation), multi-turn memory, Hinglish/multilingual NLP, and instant human takeover.
3. **Voice AI & Calling Systems**: Low-latency phone assistants built on Twilio Media Streams, bidirectional WebSockets, fast STT chunking, and streaming neural TTS (Deepgram, Cartesia, ElevenLabs), benchmarked below 800ms.
4. **n8n Workflows & Automations**: Defensive automation clusters with error handling, retry queues, cryptographic webhook verification, and 0% synchronization drift.
5. **Custom CRM & Operational Hubs**: Centralized dashboards unifying Google Forms, Sheets, databases, and APIs to replace expensive recurring SaaS subscriptions.

### Real Featured Projects:
1. **CleanData AI — Autonomous Data Specialist SaaS** (https://cleandata-ruddy.vercel.app): Full-stack AI data preparation and agent knowledge infrastructure platform. Ingests messy spreadsheets and unstructured prose, standardizes E.164 phones & ISO dates, masks PII, builds entity relationship graphs, stores in embedded SQLite with an in-browser SQL query explorer, and syncs semantic vectors to Pinecone, ChromaDB, Qdrant, and Supabase pgvector with an authenticated agent context delivery API.
2. **Misaal Foundation — Non-Profit Web Platform** (https://www.misaalfoundation.online): High-performance digital portal for generational poverty alleviation and welfare drives across Pakistan. Engineered with Next.js 16, React 19, Tailwind CSS v4, and Supabase with cinematic video storytelling, live community drive showcases, and volunteer onboarding.
3. **Misaal Foundation — Beneficiary & Operations CRM**: Unified Google Forms & Sheets ingestion with real-time operational Next.js dashboard; sub-second record searching across 3,000+ beneficiaries; eliminated paper record loss.
4. **WhatsApp AI Conversational CRM**: 24/7 Meta Cloud API agent with multi-turn qualification, intent scoring, automated CRM pipeline progression, and instant human takeover.
5. **Real Estate AI Matchmaker**: Omnichannel Instagram & WhatsApp agent supporting colloquial Hinglish/English/Hindi queries, querying Google Sheets inventory in real time, and routing high-intent buyers to designated brokers.
6. **Low-Latency AI Voice Calling Engine**: Sub-800ms conversational phone agent using bidirectional WebSockets, Deepgram Nova-2, and Cartesia streaming audio.
7. **Enterprise n8n Workflow Automation Suite**: Multi-API orchestration saving 20+ hours weekly with dead-letter retry queues and Slack failure alerts.
8. **Ascenta High-Performance Web Platform**: Next.js 16, React 19, strict TypeScript, and editorial typography achieving 100/100 Core Web Vitals.

### Verified Credentials & Training:
- **Aghaaz.ai**: Advanced AI agent workflows, prompt topology, and multi-agent coordination.
- **Tech7 Academy**: Full-stack web architecture, React/Next.js engineering, and backend pipelines.
- **iSkills**: Digital ecosystems, conversion funnels, and systems thinking.

### Contact & Collaboration:
- **WhatsApp (Fastest)**: [Direct WhatsApp](https://wa.me/923328444557) or +92 332 8444557
- **Email**: rayyan1122pk@gmail.com
- **Inquiry Form**: [Discuss a Project](/contact)
- **GitHub**: [github.com/rayyan1122pk-star](https://github.com/rayyan1122pk-star)
- **LinkedIn**: [linkedin.com/in/ascenta](https://www.linkedin.com/in/ascenta)
- **Scope & Pricing**: Rayyan scopes projects around specific business bottlenecks and deliverables rather than rigid commodity rates. Visitors can select project scopes directly on the [Contact](/contact) page.`;

export function getFallbackResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // 1. Natural greetings & chit-chat
  if (
    /^(hi|hello|hey|greetings|good\s(morning|afternoon|evening)|yo|sup)(\b|!|\.)/i.test(q) ||
    q === "hi" ||
    q === "hello" ||
    q === "hey"
  ) {
    return `Hello! 👋 I'm Rayyan's AI Assistant. 

I can tell you about his bespoke **Next.js web platforms**, autonomous **WhatsApp/Instagram AI agents**, sub-800ms **voice calling engines**, or his **n8n automation clusters**. 

What kind of project or system are you curious about today?`;
  }

  // 2. Questions about the bot itself
  if (
    q.includes("who are you") ||
    q.includes("what are you") ||
    q.includes("your name") ||
    q.includes("are you an ai") ||
    q.includes("are you a bot")
  ) {
    return `I am **Rayyan's AI Assistant**, built specifically for the Ascenta portfolio. 

I'm grounded in Muhammad Rayyan's real production architectures, case studies, and engineering philosophy. I can guide you through what he builds or help you get in touch with him directly!`;
  }

  // 3. Contact & Direct Reach-out
  if (
    q.includes("contact") ||
    q.includes("how can i reach") ||
    q.includes("how to reach") ||
    q.includes("hire") ||
    q.includes("email address") ||
    q.includes("his email") ||
    q.includes("his whatsapp") ||
    q.includes("whatsapp number") ||
    q.includes("phone number") ||
    q.includes("talk to rayyan") ||
    q.includes("book a call")
  ) {
    return `You can reach Muhammad Rayyan directly through any of these channels:

* **WhatsApp (Fastest response)**: [Message on WhatsApp](https://wa.me/923328444557) (+92 332 8444557)
* **Email**: [rayyan1122pk@gmail.com](mailto:rayyan1122pk@gmail.com)
* **Project Inquiry Form**: [Submit a Project Brief](/contact)

He usually replies within a few hours to discuss technical requirements and project scopes!`;
  }

  // 4. Voice AI / Telephony / Calling engines
  if (
    q.includes("voice") ||
    q.includes("calling") ||
    q.includes("phone") ||
    q.includes("latency") ||
    q.includes("telephony") ||
    q.includes("twilio") ||
    q.includes("deepgram") ||
    q.includes("cartesia")
  ) {
    return `Rayyan engineers **low-latency Voice AI calling systems** benchmarked below **800ms**:

* **Streaming Pipeline**: Twilio Media Streams connected to Node.js bidirectional WebSockets.
* **Ultra-Fast Transcription**: Deepgram Nova-2 for real-time speech chunking.
* **Conversational Cadence**: Streaming neural TTS (Cartesia / ElevenLabs) with instant voice interruption (barge-in) so callers never experience awkward pauses.

Check out the full technical architecture on the [Work & Case Studies](/work) page or [discuss building a voice engine](/contact)!`;
  }

  // 5. WhatsApp & Instagram Agents
  if (
    q.includes("whatsapp") ||
    q.includes("instagram") ||
    q.includes("agent") ||
    q.includes("dm") ||
    q.includes("chatbot") ||
    q.includes("leads") ||
    q.includes("qualification")
  ) {
    return `Rayyan builds **24/7 autonomous conversational AI agents** for WhatsApp and Instagram:

* **Official Meta Cloud API**: Direct, verified integration with no fragile third-party wrapper accounts.
* **Schema Tool Execution**: Structured tool calling with Zod validation so the agent queries real inventory and logs clean database records.
* **Instant Human Takeover**: Notifies sales reps with conversation summaries when high-intent prospects are ready to buy.
* **Hinglish & Multilingual Support**: Interprets colloquial English, Hindi, and Hinglish natively.

See the real-estate agent in the [Featured Work](/work) section or [schedule a quick demo](/contact)!`;
  }

  // 6. n8n / Workflow Automations / Webhooks / Zapier replacement
  if (
    q.includes("n8n") ||
    q.includes("automation") ||
    q.includes("workflow") ||
    q.includes("webhook") ||
    q.includes("zapier") ||
    q.includes("sync") ||
    q.includes("spreadsheet") ||
    q.includes("sheets")
  ) {
    return `Rayyan designs **defensive n8n automation clusters** that eliminate manual operational busywork:

* **Fault-Tolerant Pipelines**: Automated retry queues and dead-letter handling so no webhook payload is ever dropped.
* **Unified Data Sync**: Two-way synchronization between Google Forms, Sheets, PostgreSQL, and CRM pipelines with 0% drift.
* **Real-Time Alerts**: Instant failure notifications to Slack or Telegram before clients notice an issue.
* **Cost Efficiency**: Self-hosted n8n setups eliminating exorbitant per-task Zapier fees.

You can inspect the live node canvas in the [AI Automation Lab](/#lab) or [explore solutions](/solutions)!`;
  }

  // 7. Web Development & Next.js
  if (
    q.includes("web") ||
    q.includes("website") ||
    q.includes("next.js") ||
    q.includes("nextjs") ||
    q.includes("frontend") ||
    q.includes("design") ||
    q.includes("speed") ||
    q.includes("vitals")
  ) {
    return `Rayyan specializes in **bespoke Next.js 16 platforms** built from the ground up:

* **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.
* **Performance**: Sub-second page loads engineered for 100/100 Core Web Vitals to maximize SEO and conversion trust.
* **Zero Bloat**: No slow WordPress themes or fragile plugins — only clean, maintainable architecture.
* **Conversion-Driven UX**: Editorial typography and ergonomic funnels designed to turn visitors into booked clients.

Take a look at his projects in the [Work](/work) section or [discuss building your platform](/contact)!`;
  }

  // 8. Projects & Case Studies
  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("case study") ||
    q.includes("show me") ||
    q.includes("work") ||
    q.includes("examples")
  ) {
    return `Muhammad Rayyan has delivered **40+ projects** and **15+ production AI workflows**. Top case studies include:

1. **NGO Beneficiary CRM**: Standardized Google Forms & Sheets ingestion with real-time Next.js analytics for 3,000+ records.
2. **WhatsApp AI CRM**: 24/7 Meta Cloud API conversational funnel with multi-turn qualification & human takeover.
3. **Hinglish Real Estate Matchmaker**: Omnichannel broker router querying live Google Sheets inventory in real time.
4. **Low-Latency Voice Engine**: Sub-800ms bidirectional WebSocket telephony assistant.
5. **Enterprise n8n Suite**: Multi-API orchestration saving teams 20+ hours weekly.

Check out the interactive diagrams on the [Work & Case Studies](/work) page!`;
  }

  // 9. Technologies & Stack
  if (
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("tools") ||
    q.includes("framework") ||
    q.includes("language") ||
    q.includes("database")
  ) {
    return `Rayyan's production stack is focused on determinism, speed, and reliability:

* **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion
* **AI & Voice**: Claude API, OpenAI Functions, Deepgram Nova-2, Cartesia, Twilio Media Streams
* **Automation & Backend**: n8n, Webhooks, Supabase, PostgreSQL, Meta Cloud API
* **Operations**: Google Workspace APIs, Google Forms, Google Sheets two-way sync

Everything is built with strict type safety and comprehensive error handling.`;
  }

  // 10. Credentials, background, & learning
  if (
    q.includes("credential") ||
    q.includes("learn") ||
    q.includes("education") ||
    q.includes("aghaaz") ||
    q.includes("tech7") ||
    q.includes("iskills") ||
    q.includes("background") ||
    q.includes("story")
  ) {
    return `Rayyan's background is grounded in **learning through building real projects**:

* **Aghaaz.ai**: Advanced autonomous agent workflows, prompt topology, and multi-agent coordination.
* **Tech7 Academy**: Full-stack web architecture, React/Next.js engineering, and backend pipelines.
* **iSkills**: Digital ecosystems, conversion funnels, and systems thinking.

Read his full journey and philosophy on the [About](/about) page!`;
  }

  // 11. Pricing, rates, & budget
  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("rate") ||
    q.includes("budget") ||
    q.includes("quote") ||
    q.includes("how much")
  ) {
    return `Rayyan scopes projects around exact technical deliverables and business returns rather than rigid hourly rates:

* **Focused Automation / Single Feature**: Targeted n8n workflow or API bridge.
* **AI Agent / Pipeline**: 24/7 WhatsApp/Instagram conversational funnel with CRM sync.
* **Voice AI Engine or Custom Dashboard**: Sub-800ms phone assistant or internal operational hub.
* **Full-Scale Web Platform**: End-to-end bespoke Next.js web application.

You can select your scope on the [Contact](/contact) page or [chat directly on WhatsApp](https://wa.me/923328444557)!`;
  }

  // 12. Business value & problem solving
  if (
    q.includes("help") ||
    q.includes("business") ||
    q.includes("why") ||
    q.includes("benefit") ||
    q.includes("bottleneck") ||
    q.includes("solve")
  ) {
    return `Rayyan helps businesses scale operations by solving three concrete problems:

1. **Eliminating Inbound Lead Drop-Off**: 24/7 WhatsApp & Instagram agents qualify leads in under 5 seconds, capturing prospects off-hours.
2. **Reclaiming Wasted Team Hours**: n8n automations eliminate 15–20 hours a week of manual spreadsheet copy-pasting and data entry.
3. **Maximizing Conversion Trust**: High-speed Next.js platforms with 100 Core Web Vitals that position your business with immediate authority.

You can run a quick diagnostic on the [Solutions](/solutions) page or [message Rayyan directly](https://wa.me/923328444557)!`;
  }

  // 13. Location & Availability
  if (
    q.includes("location") ||
    q.includes("where") ||
    q.includes("timezone") ||
    q.includes("remote") ||
    q.includes("country")
  ) {
    return `Muhammad Rayyan is based in **Lahore, Pakistan** and works remotely with founders, non-profits, and growing businesses worldwide across US, European, and Gulf time zones.

You can get in touch on [WhatsApp](https://wa.me/923328444557) or through the [Contact](/contact) form!`;
  }

  // Default contextual response
  return `Muhammad Rayyan is the founder of Ascenta, specializing in high-performance **Next.js web platforms**, autonomous **AI agents** (WhatsApp/Instagram), low-latency **voice calling systems**, and **n8n workflow automations**.

Feel free to ask about his specific case studies, technology choices, or how he can build a custom architecture for your business. You can also [message him on WhatsApp](https://wa.me/923328444557) or [submit an inquiry on the Contact page](/contact)!`;
}
