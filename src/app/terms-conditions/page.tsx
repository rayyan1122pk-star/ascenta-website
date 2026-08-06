import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${siteConfig.name}'s website and services.`,
};

const lastUpdated = "January 1, 2026";

export default function TermsConditionsPage() {
  return (
    <Section className="pb-20 pt-6 sm:pt-10">
      <Container className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-headings:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-white mt-10 max-w-none">
          <p>
            These Terms &amp; Conditions govern your use of {siteConfig.url} (the &quot;Site&quot;) and any
            services provided by {siteConfig.name}. By using this Site or engaging my services, you agree
            to these terms.
          </p>

          <h2>Use of the Site</h2>
          <p>
            This Site is provided for informational purposes to showcase services, projects, and pricing.
            You agree not to misuse the Site, including attempting to gain unauthorized access to any
            systems or data.
          </p>

          <h2>Services &amp; Engagements</h2>
          <p>
            Any website, application, or automation project undertaken outside of this Site is governed by
            a separate, individually agreed project agreement covering scope, pricing, timelines, and
            deliverables. Pricing shown on this Site is a starting estimate and may vary based on project
            scope.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Site, including text, design, and code (excluding client project work
            explicitly licensed otherwise), is the property of {siteConfig.name} and may not be
            reproduced without permission.
          </p>

          <h2>Payments</h2>
          <p>
            Project payments follow the terms outlined in the individual project agreement, typically
            structured as a deposit followed by milestone or completion payments.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            While every effort is made to ensure the accuracy of information on this Site, {siteConfig.name}
            {" "}makes no warranties regarding completeness or accuracy and is not liable for any damages
            arising from use of this Site.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This Site may contain links to third-party websites, including client project demos. I am not
            responsible for the content or practices of any linked external sites.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            These Terms &amp; Conditions may be updated periodically. Continued use of the Site after
            changes constitutes acceptance of the revised terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms &amp; Conditions can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
