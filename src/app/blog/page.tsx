import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/shared/section";
import { FinalCta } from "@/components/shared/final-cta";
import { BlogGrid } from "@/components/sections/blog/blog-grid";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Engineering Articles & Insights · Web & AI",
  description: `Practical guides and architectural articles on web development, SEO, performance, voice AI, and automation from ${siteConfig.name} (Muhammad Rayyan).`,
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Engineering Articles & Insights | Ascenta",
    description: `Practical guides on web development, SEO, performance, and AI automation from ${siteConfig.name}.`,
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}` },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="pb-8 pt-6 sm:pt-10">
        <SectionHeading
          badge="Blog"
          title="Insights on Web & AI"
          description="Practical, no-fluff writing on building better websites and using AI to grow your business."
        />
      </Section>

      <Section className="pt-0">
        <BlogGrid posts={posts} />
      </Section>

      <FinalCta />
    </>
  );
}
