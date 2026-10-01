export const siteConfig = {
  name: "Ascenta",
  founder: "Muhammad Rayyan",
  initials: "A",
  title: "Technology Builder & AI Solutions Engineer",
  shortTitle: "Builder · AI Systems · Web Engineering",
  url: "https://ascenta-agency.vercel.app",
  ogImage: "/og-image.png",
  description:
    "Personal technology portfolio of Muhammad Rayyan (Ascenta), building high performance web applications, vibe coding full stack AI powered websites, intelligent AI agents, n8n automations, low latency voice AI systems, and custom operational hubs.",
  mission:
    "I do not just provide services. I build technology, engineer reliable systems, and solve real business problems.",
  email: "rayyan1122pk@gmail.com",
  phone: "+92 332 8444557",
  location: "Lahore, Pakistan (Working Worldwide, Remote)",
  whatsapp: "https://wa.me/923328444557",
  keywords: [
    "Muhammad Rayyan",
    "Ascenta",
    "Technology Builder",
    "Vibe Coding",
    "Full Stack AI Powered Website",
    "AI Automation Engineer",
    "AI Agent Development",
    "WhatsApp AI CRM",
    "Voice AI Calling",
    "n8n Automation",
    "Next.js Developer",
    "Custom Internal Dashboards",
    "Full Stack Web Engineering",
  ],
  social: {
    github: "https://github.com/rayyan1122pk-star",
    linkedin: "https://www.linkedin.com/in/ascenta",
    twitter: "https://twitter.com/ascenta",
    instagram: "https://instagram.com/ascenta",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Work & Projects", href: "/work" },
    { label: "Solutions", href: "/solutions" },
    { label: "Knowledge Library", href: "/learn" },
    { label: "About Me", href: "/about" },
    { label: "Contact / Inquiry", href: "/contact" },
  ],
  services: [
    { label: "AI Powered Web Development", href: "/services/business-websites" },
    { label: "Autonomous AI Agents", href: "/services/whatsapp-agent" },
    { label: "Voice AI Calling", href: "/services/voice-calling-agent" },
    { label: "n8n AI Automation", href: "/services/ai-automation" },
    { label: "Custom CRM & Hubs", href: "/services/crm-development" },
    { label: "View All 16 Services", href: "/services" },
  ],
  capabilities: [
    { label: "Landing Pages", href: "/services/landing-pages" },
    { label: "Instagram Lead CRM", href: "/services/instagram-crm" },
    { label: "Custom Dashboards", href: "/services/custom-dashboards" },
    { label: "SEO & AEO Engineering", href: "/services/seo-optimization" },
    { label: "Speed & Core Web Vitals", href: "/services/performance-optimization" },
  ],
  resources: [
    { label: "Knowledge Library", href: "/learn" },
    { label: "Blog & Articles", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};
