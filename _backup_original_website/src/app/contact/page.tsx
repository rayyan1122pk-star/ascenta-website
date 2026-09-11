import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} to discuss your next website or AI automation project. Free consultation, response within 24 hours.`,
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-6 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Let&apos;s Talk
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s Build Something Great Together
          </h1>
          <p className="mt-5 max-w-xl text-balance text-muted-foreground sm:text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours with next steps.
          </p>
        </Container>
      </Section>

      <Section id="audit" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-sm font-semibold text-white">Contact Details</h3>
              <div className="mt-4 flex flex-col gap-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white">
                  <Mail size={16} className="text-accent" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white">
                  <Phone size={16} className="text-accent" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-accent" />
                  {siteConfig.location}
                </div>
              </div>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-success/15 px-4 py-2.5 text-sm font-medium text-success transition-colors hover:bg-success/25"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="flex h-48 items-center justify-center bg-white/[0.02] text-sm text-muted-foreground">
                <MapPin size={18} className="mr-2 text-muted-foreground" />
                {siteConfig.location}
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6">
              <h3 className="text-sm font-semibold text-white">Response Time</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team personally responds to every inquiry within 24 hours, usually much sooner.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
