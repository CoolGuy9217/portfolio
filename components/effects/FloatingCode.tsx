"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  { code: "const dev = 'Josh';", color: "#22d3ee" },
  { code: "npm run build", color: "#0ea5e9" },
  { code: "<Component />", color: "#a78bfa" },
  { code: "async/await", color: "#34d399" },
  { code: "useState()", color: "#f472b6" },
  { code: "export default", color: "#fbbf24" },
  { code: "TypeScript", color: "#3b82f6" },
  { code: "Next.js 14", color: "#ffffff" },
  { code: "Supabase", color: "#22c55e" },
  { code: "Tailwind CSS", color: "#06b6d4" },
  { code: "REST API", color: "#f97316" },
  { code: "GraphQL", color: "#e535ab" },
];

interface SnippetPosition {
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

export default function FloatingCode() {
  const [positions, setPositions] = useState<SnippetPosition[]>([]);

  useEffect(() => {
    // Generate random positions only on client side
    const newPositions = codeSnippets.map(() => ({
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
    setPositions(newPositions);
  }, []);

  if (positions.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {codeSnippets.map((snippet, index) => {
        const pos = positions[index];
        if (!pos) return null;

        return (
          <motion.div
            key={index}
            className="absolute font-mono text-sm whitespace-nowrap"
            style={{
              left: `${pos.startX}%`,
              top: `${pos.startY}%`,
              color: snippet.color,
              opacity: 0.15,
              textShadow: `0 0 20px ${snippet.color}40`,
            }}
            animate={{
              x: [0, 100, -50, 100, 0],
              y: [0, -100, 50, -50, 0],
              opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
              rotate: [0, 5, -5, 3, 0],
            }}
            transition={{
              duration: pos.duration,
              delay: pos.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {snippet.code}
          </motion.div>
        );
      })}
    </div>
  );
}
