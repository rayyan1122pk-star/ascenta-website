

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
1. **NGO Operations & Beneficiary CRM**: Unified Google Forms & Sheets ingestion with real-time operational Next.js dashboard; sub-second record searching across 3,000+ beneficiaries; eliminated paper record loss.
2. **WhatsApp AI Conversational CRM**: 24/7 Meta Cloud API agent with multi-turn qualification, intent scoring, automated CRM pipeline progression, and instant human takeover.
3. **Real Estate AI Matchmaker**: Omnichannel Instagram & WhatsApp agent supporting colloquial Hinglish/English/Hindi queries, querying Google Sheets inventory in real time, and routing high-intent buyers to designated brokers.
4. **Low-Latency AI Voice Calling Engine**: Sub-800ms conversational phone agent using bidirectional WebSockets, Deepgram Nova-2, and Cartesia streaming audio.
5. **Enterprise n8n Workflow Automation Suite**: Multi-API orchestration saving 20+ hours weekly with dead-letter retry queues and Slack failure alerts.
6. **Ascenta High-Performance Web Platform**: Next.js 16, React 19, strict TypeScript, and editorial typography achieving 100/100 Core Web Vitals.

### Verified Credentials & Training:
- **Aghaaz.ai**: Advanced AI agent workflows, prompt topology, and multi-agent coordination.
- **Tech7 Academy**: Full-stack web architecture, React/Next.js engineering, and backend pipelines.
- **iSkills**: Digital ecosystems, conversion funnels, and systems thinking.

### Contact & Collaboration:
- **WhatsApp (Fastest)**: [Direct WhatsApp](https://wa.me/923328444557) or +92 332 8444557
- **Email**: rayyan1122pk@gmail.com
- **Inquiry Form**: [Discuss a Project](/contact)
- **GitHub**: [github.com/muhammadrayyan](https://github.com/muhammadrayyan)
- **LinkedIn**: [linkedin.com/in/muhammadrayyan](https://linkedin.com/in/muhammadrayyan)
- **Scope & Pricing**: Rayyan scopes projects around specific business bottlenecks and deliverables rather than rigid commodity rates. Visitors can select project scopes directly on the [Contact](/contact) page.`;

export function getFallbackResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // Contact / Hire
  if (
    q.includes("contact") ||
    q.includes("hire") ||
    q.includes("email") ||
    q.includes("whatsapp") ||
    q.includes("call") ||
    q.includes("reach") ||
    q.includes("talk") ||
    q.includes("touch")
  ) {
    return `You can connect with Muhammad Rayyan directly through any of these channels:

* **WhatsApp (Fastest response)**: [Message on WhatsApp](https://wa.me/923328444557) (+92 332 8444557)
* **Email**: [rayyan1122pk@gmail.com](mailto:rayyan1122pk@gmail.com)
* **Project Inquiry Form**: [Submit a Project Brief](/contact)

He typically replies within a few hours!`;
  }

  // Projects / Work
  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("case study") ||
    q.includes("show me") ||
    q.includes("work")
  ) {
    return `Muhammad Rayyan has delivered 40+ projects and 15+ production AI workflows. Key systems include:

* **NGO Operations CRM**: Google Forms & Sheets hub with real-time Next.js analytics for 3,000+ beneficiaries.
* **WhatsApp AI CRM**: 24/7 Meta Cloud API conversational funnel with automated qualification & human takeover.
* **Hinglish Real Estate AI Agent**: Omnichannel broker router querying live inventory from Google Sheets.
* **Low-Latency Voice Engine**: Sub-800ms bidirectional WebSocket telephony assistant.
* **Enterprise n8n Suite**: Fault-tolerant API automations saving 20+ hours weekly.

You can inspect the complete technical architectures in the [Work & Case Studies](/work) section!`;
  }

  // Capabilities / What does he build
  if (
    q.includes("build") ||
    q.includes("what do you do") ||
    q.includes("capabilities") ||
    q.includes("services") ||
    q.includes("specialize") ||
    q.includes("skill")
  ) {
    return `Muhammad Rayyan bridges the gap between high-end web design and autonomous backend intelligence:

* **Web Platforms**: Next.js 16, React 19, TypeScript, and conversion-focused editorial UI/UX with 100/100 Core Web Vitals.
* **Autonomous AI Agents**: WhatsApp & Instagram conversational funnels with schema-enforced tool execution.
* **Voice AI Calling**: Low-latency phone assistants benchmarked below 800ms using streaming WebSockets.
* **n8n Workflows & Custom CRMs**: Fault-tolerant operational automations synchronizing APIs, spreadsheets, and databases.

Learn more on the [Capabilities](/work) page or run a quick [Bottleneck Diagnostic](/solutions)!`;
  }

  // Tech stack
  if (
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("tools") ||
    q.includes("framework") ||
    q.includes("language")
  ) {
    return `Rayyan's production stack is focused on speed, determinism, and reliability:

* **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion
* **AI & Voice**: Claude API, OpenAI Functions, Deepgram Nova-2, Cartesia, Twilio Media Streams
* **Automation & Backend**: n8n, Webhooks, Supabase, PostgreSQL, Meta Cloud API
* **Operations**: Google Workspace APIs, Google Forms, Sheets two-way synchronization

Everything is built with strict type safety and defensive error handling.`;
  }

  // Help my business
  if (
    q.includes("help") ||
    q.includes("business") ||
    q.includes("benefit") ||
    q.includes("why") ||
    q.includes("roi")
  ) {
    return `Rayyan helps businesses eliminate friction and scale operations in three core ways:

1. **Never drop inbound leads**: 24/7 WhatsApp & Instagram agents qualify prospects instantly, even outside business hours.
2. **Eliminate manual busywork**: n8n automations save 15–20 hours weekly by synchronizing spreadsheets, CRMs, and email pipelines.
3. **Elevate brand authority**: High-performance Next.js websites that load sub-second and build instant trust with prospects.

You can check out real problem-solving cases in the [Solutions](/solutions) section!`;
  }

  // Pricing / Cost
  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("rates") ||
    q.includes("budget") ||
    q.includes("charge")
  ) {
    return `Rather than rigid commodity packages, Rayyan scopes projects around your exact technical requirements and business goals:

* **Focused Automation / Single Feature**: Targeted n8n workflow or script integration.
* **AI Agent or Workflow Pipeline**: WhatsApp/Instagram conversational funnel with CRM sync.
* **Comprehensive AI Agent or Custom Dashboard**: Full voice engine, multi-agent system, or internal operations hub.
* **Full-Scale Web Platform**: End-to-end Next.js web application engineered for high conversion.

You can select your preferred scope and get in touch via the [Contact](/contact) page!`;
  }

  // Default friendly overview
  return `Muhammad Rayyan is a technology builder and the founder of Ascenta, specializing in high-performance Next.js web platforms, autonomous AI agents (WhatsApp/IG), sub-800ms voice calling engines, and fault-tolerant n8n automation pipelines.

Feel free to ask me about his projects, technical stack, or how he can solve an operational bottleneck for your business. You can also [message him on WhatsApp](https://wa.me/923328444557) or [submit a project inquiry](/contact)!`;
}
