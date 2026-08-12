export const siteConfig = {
  name: "Ascenta",
  initials: "A",
  title: "Web Development & AI Automation Agency",
  shortTitle: "Web Development & AI Automation Agency",
  url: "https://ascenta.dev",
  ogImage: "/og-image.png",
  description:
    "We build modern, high-performing websites and AI-powered automation systems that increase trust, improve customer experience, and generate more leads.",
  mission:
    "We build modern, high-performing websites and AI-powered automation systems that increase trust, improve customer experience, and generate more leads.",
  email: "rayyan1122pk@gmail.com",
  phone: "+92 332 8444557",
  location: "Lahore, Pakistan (Working Worldwide, Remote)",
  whatsapp: "https://wa.me/923328444557",
  keywords: [
    "Ascenta",
    "Web Development Agency",
    "AI Automation Agency",
    "AI Agent Development",
    "WhatsApp Automation",
    "Next.js Development",
    "Premium Website Design",
    "Business Website Development",
  ],
  social: {
    github: "https://github.com/muhammadrayyan",
    linkedin: "https://linkedin.com/in/muhammadrayyan",
    twitter: "https://twitter.com/ascenta",
    instagram: "https://instagram.com/ascenta",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Business Websites", href: "/services/business-websites" },
    { label: "Landing Pages", href: "/services/landing-pages" },
    { label: "WhatsApp Agent", href: "/services/whatsapp-agent" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "AI Automation", href: "/services/ai-automation" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};
