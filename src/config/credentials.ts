export interface Credential {
  institution: string;
  badge: string;
  focus: string;
  period: string;
  whatILearned: string;
  howIAppliedIt: string;
  keySkills: string[];
}

export const credentials: Credential[] = [
  {
    institution: "Aghaaz.ai",
    badge: "AI Engineering & LLM Architecture",
    focus: "Advanced Applied AI, Agentic Workflows & LLM Systems",
    period: "Intensive AI Track",
    whatILearned:
      "Deep understanding of LLM reasoning loops, tool/function calling mechanics, vector embeddings, RAG pipeline construction, prompt engineering topologies, and multi-agent coordination frameworks.",
    howIAppliedIt:
      "Built production AI agents for WhatsApp and Instagram, engineered low-latency voice AI pipelines, and developed custom knowledge extraction engines for real-world client operations.",
    keySkills: ["AI Agents", "Tool Calling", "RAG Systems", "Vector Embeddings", "Prompt Architecture", "LLM Evaluation"],
  },
  {
    institution: "Tech7 Academy",
    badge: "Software Engineering & Full-Stack",
    focus: "Modern Web Development & Production Architecture",
    period: "Full-Stack Software Track",
    whatILearned:
      "Modern JavaScript/TypeScript ecosystems, Next.js App Router, React architecture, relational database design (PostgreSQL, Supabase), API design, state management, and performance optimization.",
    howIAppliedIt:
      "Engineered full-stack business applications, responsive client websites with 100/100 Core Web Vitals, and secure role-based operational dashboards for organizations.",
    keySkills: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "Tailwind CSS", "API Architecture"],
  },
  {
    institution: "iSkills",
    badge: "Digital Systems & Professional Delivery",
    focus: "Digital Systems, Client Problem-Solving & Technical Execution",
    period: "Professional Systems Track",
    whatILearned:
      "Client communication protocols, business problem discovery, technical project scoping, digital systems consulting, and delivering measurable ROI on software investments.",
    howIAppliedIt:
      "Successfully delivered 40+ digital projects with 100% client satisfaction, translating non-technical business challenges into clean technical specifications and reliable systems.",
    keySkills: ["System Scoping", "Client Communication", "Problem Discovery", "Agile Execution", "ROI-Driven Delivery"],
  },
];
