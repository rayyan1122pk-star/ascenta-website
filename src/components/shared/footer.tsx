"use client";

import Link from "next/link";
import { ArrowUp, Code2, Briefcase, AtSign, Camera, Mail } from "lucide-react";
import { siteConfig, footerLinks } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { icon: Code2, href: siteConfig.social.github, label: "GitHub" },
  { icon: Briefcase, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: AtSign, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Camera, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary/70">
              Web Development <span className="text-white/30">×</span> AI Automation
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.mission}</p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-white"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={footerLinks.quickLinks} />
          <FooterCol title="Services" links={footerLinks.services} />
          <FooterCol title="Resources" links={footerLinks.resources} />

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h4 className="text-sm font-semibold text-white">Stay in the loop</h4>
            <p className="mt-2 text-sm text-muted-foreground">Occasional insights on web & AI.</p>
            <form
              className="mt-3 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input type="email" required placeholder="you@email.com" className="h-10" />
              <Button type="submit" variant="gradient" size="icon" aria-label="Subscribe">
                <Mail size={16} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-white">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-white"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-3 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
