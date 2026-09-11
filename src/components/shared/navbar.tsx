"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu on route change
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-background/40 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:mt-4 sm:px-6",
          scrolled && "border-white/15 bg-background/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-muted-foreground hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="gradient"
            size="default"
            className="rounded-full"
            render={<Link href="/contact" />}
          >
            Discuss a Project
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-3 mt-2 rounded-2xl border border-white/10 bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive ? "bg-white/[0.06] text-white" : "text-muted-foreground hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              variant="gradient"
              size="xl"
              className="mt-3 w-full rounded-xl"
              render={<Link href="/contact" />}
            >
              Discuss a Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
