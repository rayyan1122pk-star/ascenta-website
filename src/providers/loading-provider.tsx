"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LoadingContext = createContext<{ isLoading: boolean }>({ isLoading: false });

export function useLoading() {
  return useContext(LoadingContext);
}

const FADE_MS = 500;

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("mr-loaded")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- skip the loader on repeat visits within the session
      setIsLoading(false);
      setProgress(100);
      return;
    }

    const duration = 1100;
    const stepMs = 40;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += stepMs;
      setProgress(Math.min(100, Math.round((elapsed / duration) * 100)));
    }, stepMs);

    // Hard failsafe: never trap the user behind the loading screen, even if
    // timers get throttled (backgrounded tab, low-power mode, etc.).
    const finish = setTimeout(() => {
      clearInterval(interval);
      sessionStorage.setItem("mr-loaded", "1");
      setProgress(100);
      setIsLoading(false);
    }, duration + 400);

    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, []);

  // Unmounting is driven by a plain timer, not by waiting on an animation
  // library's exit transition to report completion — so a stalled/paused
  // animation (throttled background tab, reduced motion, etc.) can never
  // leave this full-screen overlay stuck in the DOM.
  useEffect(() => {
    if (isLoading) return;
    const timer = setTimeout(() => setMounted(false), FADE_MS);
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!mounted) {
    return <LoadingContext.Provider value={{ isLoading }}>{children}</LoadingContext.Provider>;
  }

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <div
        aria-hidden={!isLoading}
        className={cn(
          "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity ease-in-out",
          isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
            <g fill="#ffffff">
              <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(45 32 32)" />
              <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(135 32 32)" />
              <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(225 32 32)" />
              <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(315 32 32)" />
            </g>
          </svg>
          <motion.svg
            viewBox="0 0 80 80"
            className="absolute inset-0 h-full w-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="40"
              cy="40"
              r="37"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="40 200"
              opacity="0.6"
            />
          </motion.svg>
        </motion.div>
        <div className="mt-6 h-px w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-primary transition-[width] duration-150 ease-linear" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-3 text-xs font-medium tracking-[0.2em] text-muted-foreground">{progress}%</p>
      </div>
      {children}
    </LoadingContext.Provider>
  );
}
