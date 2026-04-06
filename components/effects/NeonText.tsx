"use client";

import { useEffect, useRef, useCallback } from "react";

interface NeonTextProps {
  text: string;
  className?: string;
}

export default function NeonText({ text, className = "" }: NeonTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const randomIn = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const mixupInterval = useCallback(() => {
    if (!ref.current) return;
    const ms = randomIn(2000, 4000);
    ref.current.style.setProperty("--neon-interval", `${ms}ms`);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial random interval
    mixupInterval();

    // Re-randomize on each animation iteration
    const handler = () => mixupInterval();
    el.addEventListener("animationiteration", handler);

    return () => {
      el.removeEventListener("animationiteration", handler);
    };
  }, [mixupInterval]);

  return (
    <span
      ref={ref}
      className={`neon-sign ${className}`}
      style={{ fontFamily: "'Italianno', cursive", fontStyle: "italic" }}
    >
      {text}
    </span>
  );
}
