"use client";

import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}

export default function GlowingOrb({
  size = 300,
  color = "#0ea5e9",
  className = "",
  delay = 0,
}: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}30 0%, ${color}10 40%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}
