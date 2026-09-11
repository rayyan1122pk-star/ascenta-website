"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/config/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion className="flex flex-col border-t border-white/[0.08]">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          value={`item-${i}`}
          className="border-b border-white/[0.08] px-1 transition-colors duration-300 hover:bg-white/[0.015] sm:px-2"
        >
          <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline">
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-primary sm:text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base font-medium text-white sm:text-lg">{item.question}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pl-8 text-sm leading-relaxed text-muted-foreground sm:pl-10 sm:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
