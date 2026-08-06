import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Rocket,
  UserSquare2,
  ShoppingCart,
  RefreshCw,
  Search,
  Gauge,
  LayoutDashboard,
  Users,
  Bot,
  Workflow,
  Wrench,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  features: string[];
  techStack: string[];
  timeline: string;
  startingPrice: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "business-websites",
    icon: Globe,
    title: "Business Websites",
    shortDescription: "Modern, responsive websites for businesses.",
    overview:
      "A professional, conversion-focused website built to represent your business the way it deserves — fast, credible, and built to turn visitors into customers. I design and develop every page around your brand and your goals, not a recycled template.",
    benefits: [
      "Establish instant credibility with a modern, professional design",
      "Turn more visitors into leads with clear calls-to-action",
      "Rank higher on Google with built-in technical SEO",
      "Load in under two seconds on any device",
      "Update content easily without touching code",
    ],
    features: [
      "Custom UI/UX design tailored to your brand",
      "Fully responsive across desktop, tablet, and mobile",
      "On-page SEO and metadata for every page",
      "Contact and lead-capture forms",
      "CMS-ready content structure",
      "Analytics and performance tracking",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    timeline: "2 – 4 weeks",
    startingPrice: "$799",
    faqs: [
      {
        question: "Will my website work well on mobile?",
        answer:
          "Yes. Every site I build is designed mobile-first and tested across real devices before launch.",
      },
      {
        question: "Can I update the content myself later?",
        answer:
          "Yes, I structure content so it's easy to update, and can add a lightweight CMS if you'd like full editorial control.",
      },
    ],
  },
  {
    slug: "landing-pages",
    icon: Rocket,
    title: "Landing Pages",
    shortDescription: "High-converting pages for ads and marketing campaigns.",
    overview:
      "A single-purpose, conversion-obsessed landing page built to make the most of every visitor you send to it — whether that traffic comes from Google Ads, Meta Ads, or an email campaign.",
    benefits: [
      "Higher conversion rates from paid traffic",
      "Lower cost-per-acquisition on ad campaigns",
      "Clear, focused messaging that removes decision friction",
      "Built-in A/B-test-friendly structure",
      "Blazing-fast load times to protect your ad Quality Score",
    ],
    features: [
      "Conversion-focused copywriting structure",
      "Above-the-fold hero built to hook attention",
      "Social proof and trust sections",
      "Lead capture forms with instant validation",
      "Pixel and analytics integration",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    timeline: "3 – 7 days",
    startingPrice: "$349",
    faqs: [
      {
        question: "Can you write the copy too?",
        answer:
          "Yes, I write conversion-focused copy for every landing page, based on your product and offer.",
      },
    ],
  },
  {
    slug: "portfolio-websites",
    icon: UserSquare2,
    title: "Portfolio Websites",
    shortDescription: "Professional portfolios for individuals.",
    overview:
      "A personal portfolio that positions you as the obvious choice — for freelancers, consultants, coaches, and creatives who need to be taken seriously online.",
    benefits: [
      "Stand out from generic template portfolios",
      "Build instant trust with potential clients",
      "Showcase your best work with case-study depth",
      "Convert visitors into inquiries and bookings",
    ],
    features: [
      "Custom personal branding and layout",
      "Project / case-study pages",
      "Testimonials and social proof",
      "Contact and booking integration",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    timeline: "1 – 2 weeks",
    startingPrice: "$449",
    faqs: [
      {
        question: "Can this double as a personal brand site?",
        answer: "Yes, most portfolio sites I build double as a personal brand hub with blog and contact.",
      },
    ],
  },
  {
    slug: "e-commerce-websites",
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    shortDescription: "Online stores with payment integration.",
    overview:
      "A fast, secure online store built to sell — with a smooth checkout experience, secure payments, and an inventory system your team can actually manage.",
    benefits: [
      "Secure, PCI-compliant payment processing",
      "Fast product pages that reduce cart abandonment",
      "Simple inventory and order management",
      "Built to scale as your catalog grows",
    ],
    features: [
      "Product catalog and category pages",
      "Cart and secure checkout flow",
      "Payment gateway integration (Stripe)",
      "Order management dashboard",
      "Discount codes and inventory tracking",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    timeline: "4 – 8 weeks",
    startingPrice: "$1,999",
    faqs: [
      {
        question: "Which payment providers do you support?",
        answer: "Stripe is the default, and I can integrate regional providers on request.",
      },
    ],
  },
  {
    slug: "website-redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    shortDescription: "Transform outdated websites into modern experiences.",
    overview:
      "If your current website is slow, outdated, or simply not converting, I rebuild it from the ground up — keeping what works for your brand and modernizing everything else.",
    benefits: [
      "Modern design that matches today's expectations",
      "Improved page speed and Core Web Vitals",
      "Better mobile experience",
      "Higher conversion rates from the same traffic",
    ],
    features: [
      "Full UX and content audit",
      "Modern responsive redesign",
      "Migration of existing content",
      "Performance and SEO improvements",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    timeline: "2 – 5 weeks",
    startingPrice: "$999",
    faqs: [
      {
        question: "Will I lose my current SEO rankings?",
        answer:
          "No, I handle redirects and technical SEO carefully during migration to protect and improve existing rankings.",
      },
    ],
  },
  {
    slug: "seo-optimization",
    icon: Search,
    title: "SEO Optimization",
    shortDescription: "Improve visibility on search engines.",
    overview:
      "Technical and on-page SEO to help your website actually get found — clean metadata, structured data, sitemaps, and content structure built for search engines and AI answer engines alike.",
    benefits: [
      "Higher rankings for the keywords that matter",
      "More organic, non-paid traffic over time",
      "Better indexing across Google and AI search",
      "Improved click-through rates from search results",
    ],
    features: [
      "Technical SEO audit",
      "On-page metadata and structured data (JSON-LD)",
      "Sitemap and robots.txt configuration",
      "Core Web Vitals improvements",
    ],
    techStack: ["Next.js Metadata API", "JSON-LD", "Google Search Console"],
    timeline: "1 – 3 weeks",
    startingPrice: "$399",
    faqs: [
      {
        question: "How long until I see results?",
        answer: "Technical fixes show up within weeks; organic ranking growth typically builds over 2-4 months.",
      },
    ],
  },
  {
    slug: "performance-optimization",
    icon: Gauge,
    title: "Performance Optimization",
    shortDescription: "Speed improvements for your existing website.",
    overview:
      "A focused performance pass on your existing site — image optimization, code splitting, caching, and render-path fixes to get you into the green on Core Web Vitals.",
    benefits: [
      "Faster load times, lower bounce rate",
      "Improved Google ranking signals",
      "Better experience on mobile networks",
    ],
    features: [
      "Lighthouse audit and fix plan",
      "Image and asset optimization",
      "Code splitting and lazy loading",
      "Caching strategy improvements",
    ],
    techStack: ["Next.js", "Vercel", "Lighthouse"],
    timeline: "1 – 2 weeks",
    startingPrice: "$349",
    faqs: [
      {
        question: "Do you work on non-Next.js sites?",
        answer: "Yes, I can optimize most modern JavaScript frameworks and static sites.",
      },
    ],
  },
  {
    slug: "custom-dashboards",
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    shortDescription: "Business management systems built around your workflow.",
    overview:
      "A custom internal dashboard that replaces spreadsheets and disconnected tools with one system built exactly around how your business operates.",
    benefits: [
      "Centralize data your team currently tracks manually",
      "Real-time visibility into your business metrics",
      "Save hours of manual, repetitive work every week",
    ],
    features: [
      "Custom data models and admin views",
      "Role-based access control",
      "Charts, reports, and exports",
      "Third-party integrations",
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
    timeline: "4 – 10 weeks",
    startingPrice: "$2,499",
    faqs: [
      {
        question: "Can it integrate with tools we already use?",
        answer: "Yes, I regularly integrate dashboards with existing APIs, spreadsheets, and third-party tools.",
      },
    ],
  },
  {
    slug: "crm-development",
    icon: Users,
    title: "CRM Development",
    shortDescription: "Customer management platforms.",
    overview:
      "A custom CRM built around your actual sales process — track leads, manage pipelines, and automate follow-ups without paying for features you don't use.",
    benefits: [
      "A pipeline that matches how you actually sell",
      "No monthly per-seat license fees",
      "Full ownership of your customer data",
    ],
    features: [
      "Contact and lead management",
      "Pipeline and deal tracking",
      "Automated follow-up reminders",
      "Reporting dashboard",
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Resend"],
    timeline: "5 – 10 weeks",
    startingPrice: "$2,999",
    faqs: [
      {
        question: "Can you migrate our existing CRM data?",
        answer: "Yes, data migration from spreadsheets or existing CRMs is part of the delivery process.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots",
    shortDescription: "Intelligent assistants for your website or product.",
    overview:
      "A custom AI chatbot trained on your business — answering customer questions, qualifying leads, and booking calls automatically, 24 hours a day.",
    benefits: [
      "Answer customer questions instantly, any time of day",
      "Qualify and capture leads without manual effort",
      "Reduce repetitive support workload on your team",
    ],
    features: [
      "Custom knowledge base trained on your content",
      "Lead capture and qualification flows",
      "Website widget or standalone interface",
      "Human handoff for complex conversations",
    ],
    techStack: ["Next.js", "OpenAI / Claude API", "Supabase"],
    timeline: "2 – 4 weeks",
    startingPrice: "$899",
    faqs: [
      {
        question: "Which AI model do you use?",
        answer: "I build primarily on Claude and OpenAI models, choosing based on your use case and budget.",
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    shortDescription: "Workflow automation for your business.",
    overview:
      "Custom automation that connects your tools and removes repetitive manual work — from lead routing to report generation to internal notifications.",
    benefits: [
      "Save hours of manual work every week",
      "Reduce human error in repetitive processes",
      "Scale operations without hiring for busywork",
    ],
    features: [
      "Workflow mapping and automation design",
      "Integration between your existing tools",
      "AI-powered data processing and summarization",
      "Monitoring and error alerts",
    ],
    techStack: ["Next.js", "Supabase", "OpenAI / Claude API", "Webhooks"],
    timeline: "2 – 6 weeks",
    startingPrice: "$1,199",
    faqs: [
      {
        question: "What tools can you automate between?",
        answer: "Most tools with an API or webhook support — including email, CRMs, spreadsheets, and Slack.",
      },
    ],
  },
  {
    slug: "maintenance",
    icon: Wrench,
    title: "Maintenance",
    shortDescription: "Ongoing monthly support and improvements.",
    overview:
      "Ongoing care for your website — updates, monitoring, backups, and small improvements, so you never have to think about the technical side again.",
    benefits: [
      "Peace of mind with proactive monitoring",
      "Faster turnaround on small changes and fixes",
      "A website that keeps improving after launch",
    ],
    features: [
      "Uptime and performance monitoring",
      "Regular backups",
      "Content updates and small feature requests",
      "Priority support response times",
    ],
    techStack: ["Vercel", "Supabase", "GitHub"],
    timeline: "Ongoing",
    startingPrice: "$149/mo",
    faqs: [
      {
        question: "What counts as a 'small change'?",
        answer: "Text and image updates, minor layout tweaks, and bug fixes are all included within plan limits.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
