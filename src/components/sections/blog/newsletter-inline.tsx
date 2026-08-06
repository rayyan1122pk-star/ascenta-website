"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterInline() {
  return (
    <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
      <Input type="email" required placeholder="you@email.com" className="h-11 flex-1" />
      <Button type="submit" variant="gradient" size="lg" className="rounded-full">
        Subscribe
      </Button>
    </form>
  );
}
