"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/config/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion className="flex flex-col gap-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          value={`item-${i}`}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 hover:border-primary/20 sm:px-6"
        >
          <AccordionTrigger className="py-5 text-left text-sm font-medium text-white hover:no-underline sm:text-base">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
