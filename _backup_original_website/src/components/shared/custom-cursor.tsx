"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.3 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.3 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only capability detection, required for SSR safety
    setIsEnabled(true);

    function handleMove(e: MouseEvent) {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor='pointer']"));
    }
    function handleLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full border border-white/40 mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
        width: 32,
        height: 32,
      }}
      animate={{
        scale: isPointer ? 1.8 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
