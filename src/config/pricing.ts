export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses that need a professional online presence.",
    price: "$799",
    priceNote: "starting price",
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Up to 5 pages",
      "Professional responsive design",
      "Basic on-page SEO",
      "Mobile optimized",
      "Contact form",
      "Fast delivery (2 weeks)",
      "1 round of revisions",
    ],
  },
  {
    name: "Professional",
    description: "The most popular package for growing businesses that want a premium experience.",
    price: "$1,799",
    priceNote: "starting price",
    highlighted: true,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Custom design system",
      "Advanced scroll animations",
      "Full SEO optimization",
      "CMS-ready content structure",
      "Analytics integration",
      "Performance optimization",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    description: "For businesses that need custom systems beyond a standard website.",
    price: "Custom",
    priceNote: "tailored quote",
    cta: "Request a Quote",
    ctaHref: "/contact",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Custom dashboard or CRM",
      "AI chatbot integration",
      "Workflow automation",
      "Priority support",
      "Dedicated project management",
      "Ongoing optimization",
    ],
  },
];

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  premium: string | boolean;
}

export const comparisonTable: ComparisonRow[] = [
  { feature: "Pages", starter: "Up to 5", professional: "Up to 10", premium: "Unlimited" },
  { feature: "Custom Design", starter: false, professional: true, premium: true },
  { feature: "Advanced Animations", starter: false, professional: true, premium: true },
  { feature: "SEO Optimization", starter: "Basic", professional: "Full", premium: "Full + Content Strategy" },
  { feature: "CMS Ready", starter: false, professional: true, premium: true },
  { feature: "Analytics", starter: false, professional: true, premium: true },
  { feature: "Hosting Setup", starter: true, professional: true, premium: true },
  { feature: "Maintenance", starter: "Available add-on", professional: "1 month included", premium: "3 months included" },
  { feature: "AI Integration", starter: false, professional: false, premium: true },
  { feature: "Booking / Appointments", starter: false, professional: "Add-on", premium: true },
  { feature: "Custom Dashboard", starter: false, professional: false, premium: true },
  { feature: "Support", starter: "Email", professional: "Priority Email", premium: "Priority + Calls" },
];
