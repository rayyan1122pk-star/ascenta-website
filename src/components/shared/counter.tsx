"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({
  value,
  suffix = "",
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger smoothly as soon as element enters the mobile or desktop viewport
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  const [displayValue, setDisplayValue] = useState<number>(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || animatedRef.current) return;
    animatedRef.current = true;

    // 1. Accessibility: Jump immediately to target if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      const raf = requestAnimationFrame(() => {
        setDisplayValue(value);
      });
      return () => cancelAnimationFrame(raf);
    }

    // 2. Animate when scrolled into view
    let startTimestamp: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Easing: easeOutExpo: 1 - Math.pow(2, -10 * progress)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.round(ease * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, duration]);

  // 3. Robust Mobile Fallback:
  // If IntersectionObserver fails to trigger or is delayed on mobile touch-scroll,
  // ensure the true value is displayed within 1.5s so the user NEVER sees 0.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue((prev) => (prev === 0 ? value : prev));
    }, 1500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {displayValue}
      {suffix}
    </span>
  );
}
