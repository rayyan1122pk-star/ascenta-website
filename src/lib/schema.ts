import { siteConfig } from "@/config/site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "Ascenta Agency",
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about/#founder`,
      name: siteConfig.founder,
      jobTitle: "Founder & AI Solutions Engineer",
      url: `${siteConfig.url}/about`,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js Development",
      "Autonomous AI Agents",
      "Voice AI Systems",
      "n8n Workflow Automation",
      "Custom CRM Development",
      "High-Converting Landing Pages",
      "Technical SEO & Core Web Vitals",
    ],
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English", "Urdu"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function generateServiceSchema(service: {
  title: string;
  slug: string;
  overview: string;
  startingPrice: string;
  benefits: string[];
  techStack: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.overview,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    ...(service.startingPrice.replace(/[^0-9]/g, "")
      ? {
          offers: {
            "@type": "Offer",
            price: service.startingPrice.replace(/[^0-9]/g, ""),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/services/${service.slug}`,
          },
        }
      : {}),
    termsOfService: `${siteConfig.url}/terms-conditions`,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.founder,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    image: post.coverImage ? `${siteConfig.url}${post.coverImage}` : `${siteConfig.url}/og-image.png`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
