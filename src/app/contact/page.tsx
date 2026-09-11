import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Terminal, Clock } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry",
  description: `Have a problem worth building or something you want to automate? Connect directly with Muhammad Rayyan (${siteConfig.name}) for web engineering, AI agents, or workflow systems.`,
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-6 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary">
            <Terminal size={13} />
            Direct Inquiry · Technical Partnership
          </span>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Have a Problem <span className="italic text-primary">Worth Building?</span>
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Tell me about what you need built or automated. I personally review every inquiry and
            respond with a clear technical roadmap within 24 hours.
          </p>
        </Container>
      </Section>

      <Section id="audit" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Intake Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* WhatsApp Priority Card */}
            <div className="rounded-2xl border border-success/30 bg-success/[0.04] p-6 shadow-lg">
              <div className="flex items-center gap-2.5 text-success font-semibold text-sm">
                <MessageCircle size={18} />
                <span>Fastest Response: WhatsApp</span>
              </div>
              <p className="mt-2 text-xs text-white/80 leading-relaxed">
                If you have quick questions, an active project bottleneck, or want to discuss a build
                directly, WhatsApp is the fastest channel.
              </p>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-success/20 px-4 py-2.5 text-xs font-bold text-success transition-colors hover:bg-success/30"
              >
                Message Directly on WhatsApp →
              </a>
            </div>

            {/* Direct Info Card */}
            <div className="rounded-2xl border border-white/10 bg-[#1D1413] p-6 shadow-lg">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Direct Contact Details
              </h3>
              <div className="mt-4 flex flex-col gap-3.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-accent shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Response Guarantee */}
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase">
                <Clock size={15} />
                <span>Response Guarantee</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                I personally respond to all inquiries within 24 hours — usually much faster. No sales
                pressure, just honest technical feasibility and architecture options.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
