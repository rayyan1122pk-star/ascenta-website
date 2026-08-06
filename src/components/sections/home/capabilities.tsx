"use client";

import {
  Globe,
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Users,
  Bot,
  Workflow,
  Calendar,
  RefreshCw,
  UserSquare2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const capabilities = [
  { icon: Globe, label: "Business & marketing websites" },
  { icon: Rocket, label: "High-converting landing pages" },
  { icon: ShoppingCart, label: "E-commerce stores" },
  { icon: UserSquare2, label: "Portfolio & personal brand sites" },
  { icon: LayoutDashboard, label: "Custom admin dashboards" },
  { icon: Users, label: "CRM & pipeline tools" },
  { icon: Bot, label: "AI chatbots & assistants" },
  { icon: Workflow, label: "Workflow automation" },
  { icon: Calendar, label: "Booking & appointment systems" },
  { icon: RefreshCw, label: "Website redesigns & migrations" },
];

export function Capabilities() {
  return (
    <Section>
      <SectionHeading
        badge="What I Build"
        title="The Kind of Work I Take On"
        description="I'm early in building out a public case-study library, so here's a straightforward list of what I actually build — no filler, no placeholder demos."
      />

      <motion.div
        variants={staggerContainer(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2"
      >
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 hover:border-primary/25 hover:bg-white/[0.04]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium text-white sm:text-base">{item.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
