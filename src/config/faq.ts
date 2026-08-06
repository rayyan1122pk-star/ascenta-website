export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FaqItem[] = [
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Most business websites take 2-4 weeks from kickoff to launch. Landing pages can take as little as 3-7 days, while custom dashboards, CRMs, or e-commerce builds typically run 4-10 weeks depending on scope. You'll get a specific timeline after our discovery call.",
  },
  {
    category: "Process",
    question: "What does the process look like from start to finish?",
    answer:
      "Every project follows the same eight steps: Discovery, Research, Strategy, UI Design, Development, Testing, Deployment, and Support. You'll be involved at every key milestone, with clear check-ins so there are no surprises.",
  },
  {
    category: "Services",
    question: "Do you redesign existing websites?",
    answer:
      "Yes. I regularly rebuild outdated websites into modern, fast, conversion-focused experiences — while carefully preserving your existing SEO rankings through proper redirects and migration.",
  },
  {
    category: "Services",
    question: "Do you provide hosting?",
    answer:
      "I deploy every project on Vercel, which offers world-class performance and reliability. I handle the initial setup and can manage hosting on your behalf, or hand over full ownership to your team — your choice.",
  },
  {
    category: "Services",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Every project includes a support window after launch, and I offer ongoing monthly maintenance plans for updates, monitoring, and small improvements after that.",
  },
  {
    category: "Services",
    question: "Can you build custom systems like dashboards or CRMs?",
    answer:
      "Yes, this is one of my core specialties. I build custom dashboards, CRMs, booking systems, and AI-powered tools tailored to your exact workflow — not generic off-the-shelf software.",
  },
  {
    category: "Pricing",
    question: "How is pricing determined?",
    answer:
      "Pricing depends on scope, number of pages, and custom functionality required. The Pricing page outlines starting prices for each package, and I provide a fixed quote after understanding your specific requirements.",
  },
  {
    category: "Pricing",
    question: "Do you require a deposit?",
    answer:
      "Yes, most projects start with a 50% deposit to begin work, with the remaining balance due at launch. Larger projects can be split into milestone payments.",
  },
  {
    category: "Technical",
    question: "What technology do you build with?",
    answer:
      "I build primarily with Next.js, React, and TypeScript on the frontend, and Supabase/PostgreSQL on the backend — a modern, fast, and scalable stack used by top technology companies.",
  },
  {
    category: "Technical",
    question: "Will my website be SEO optimized?",
    answer:
      "Yes, every website includes technical SEO fundamentals by default — clean metadata, structured data, sitemaps, and performance optimization for strong Core Web Vitals.",
  },
];
