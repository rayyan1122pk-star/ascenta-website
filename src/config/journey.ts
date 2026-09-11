export interface JourneyMilestone {
  phase: string;
  stage: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    phase: "01",
    stage: "The Foundation",
    badge: "Exploration & Mastery",
    title: "Deep Fundamentals & Modern Code",
    description:
      "Immersed deeply into web technologies, TypeScript, modern frontend engineering, and computer science fundamentals. Discovered a passion for building systems that are not just visually refined, but rigorously fast and maintainable.",
    highlights: [
      "Mastered HTML5, modern CSS, TypeScript, and React ecosystems",
      "Completed rigorous technical training at Tech7 Academy",
      "Obsessed over web performance, semantics, and responsive ergonomics",
    ],
    skills: ["HTML/CSS", "TypeScript", "React", "Git", "Modern JavaScript"],
  },
  {
    phase: "02",
    stage: "Web Development",
    badge: "Production Delivery",
    title: "Building Real Client Websites & High-Performance Platforms",
    description:
      "Began designing and engineering production websites for businesses. Focused on converting visitors into customers with sub-second page loads, SEO Core Web Vitals excellence, and bespoke UI/UX.",
    highlights: [
      "Delivered dozens of custom client websites across varied industries",
      "Transitioned to Next.js App Router and Tailwind CSS for rapid, scalable development",
      "Achieved consistent 95-100 Google Lighthouse scores across production builds",
    ],
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "Technical SEO"],
  },
  {
    phase: "03",
    stage: "System Automation",
    badge: "Efficiency Engineering",
    title: "n8n, Webhooks & Operational Pipelines",
    description:
      "Recognized that great websites are only half the battle — businesses were suffering from manual data entry behind the scenes. Started engineering automated workflows connecting forms, spreadsheets, and messaging platforms.",
    highlights: [
      "Built multi-step event-driven n8n workflows with automatic error recovery",
      "Automated lead routing, Google Forms/Sheets synchronization, and email notifications",
      "Eliminated dozens of hours of manual copy-paste operations for clients",
    ],
    skills: ["n8n", "REST APIs", "Webhooks", "Google Sheets API", "PostgreSQL"],
  },
  {
    phase: "04",
    stage: "AI Agents & Intelligence",
    badge: "Applied AI",
    title: "Autonomous Agents, Multilingual NLP & Tool Calling",
    description:
      "Advanced into applied AI engineering through Aghaaz.ai. Shifted from static scripts to intelligent conversational agents capable of reasoning, querying live inventory, remembering context, and routing leads.",
    highlights: [
      "Engineered WhatsApp and Instagram AI agents with dynamic context memory",
      "Implemented Hinglish / Hindi / English multilingual property matching for real estate",
      "Built reliable tool-calling systems with strict schema validation",
    ],
    skills: ["Claude API", "OpenAI", "Tool Calling", "RAG", "Prompt Architecture"],
  },
  {
    phase: "05",
    stage: "CRM & Voice AI Systems",
    badge: "Complex Infrastructure",
    title: "Voice Infrastructure & Custom Operational Hubs",
    description:
      "Integrated AI directly into voice and organizational management. Built low-latency phone assistants streaming audio under 800ms, alongside custom NGO operational hubs replacing complex legacy systems.",
    highlights: [
      "Optimized bidirectional WebSocket audio pipelines with Twilio and streaming TTS",
      "Built custom NGO CRM dashboards uniting Google Forms and live data visualization",
      "Enabled instant human agent takeover triggers in live AI conversation streams",
    ],
    skills: ["Twilio Media Streams", "WebSockets", "Deepgram", "Cartesia", "Supabase", "Recharts"],
  },
  {
    phase: "06",
    stage: "Current State & Beyond",
    badge: "Present & Future",
    title: "Full-Stack Technology Builder & AI Solution Engineer",
    description:
      "Today, I operate as a dedicated builder and technology partner. I combine high-end web design, full-stack software development, resilient automation, and production AI agents to solve real business bottlenecks.",
    highlights: [
      "40+ digital projects completed with 100% client satisfaction",
      "Continually pushing boundaries in low-latency voice, RAG pipelines, and intelligent software",
      "Focusing on real engineering value over AI hype",
    ],
    skills: ["Full-Stack Architecture", "AI Engineering", "Automation Systems", "Client Partnerships"],
  },
];
