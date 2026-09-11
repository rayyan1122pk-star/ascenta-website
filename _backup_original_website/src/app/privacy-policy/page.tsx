import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}'s website.`,
};

const lastUpdated = "January 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <Section className="pb-20 pt-6 sm:pt-10">
      <Container className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-headings:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-white mt-10 max-w-none">
          <p>
            This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            collects, uses, and protects information when you visit {siteConfig.url} (the &quot;Site&quot;).
          </p>

          <h2>Information We Collect</h2>
          <p>When you use the contact form on this Site, we collect the information you voluntarily provide, including:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Your phone number and company name, if provided</li>
            <li>Details about your project, budget, and timeline</li>
          </ul>
          <p>
            We also use analytics tools (such as Google Analytics and Microsoft Clarity) that may collect
            standard technical information such as your browser type, device type, and pages visited, in
            order to understand how visitors use the Site.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and discuss potential projects</li>
            <li>To send you information you have requested, such as newsletter updates</li>
            <li>To improve the Site&apos;s content, design, and performance</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>

          <h2>Data Storage</h2>
          <p>
            Contact form submissions are securely stored using Supabase. Email notifications about new
            submissions are sent using Resend. Both providers are used solely to operate this Site&apos;s
            contact functionality.
          </p>

          <h2>Cookies</h2>
          <p>
            This Site may use cookies through analytics providers to understand visitor behavior. You can
            disable cookies through your browser settings at any time.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal information we hold about
            you by contacting us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Any changes will be posted on this page
            with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
