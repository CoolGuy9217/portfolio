import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Krol | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer specializing in Next.js, React, TypeScript, and Supabase. Building modern, scalable applications with a focus on performance and clean architecture.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Frontend",
    "Backend",
    "Node.js",
    "Supabase",
  ],
  authors: [{ name: "Josh Krol" }],
  openGraph: {
    title: "Josh Krol | Senior Full Stack Developer",
    description:
      "Building modern, scalable full-stack applications with Next.js, React, TypeScript, and Supabase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
          {/* Global SVG glow filter for neon gradient borders */}
          <svg width="0" height="0" aria-hidden="true" style={{ position: "fixed" }}>
            <defs>
              <filter id="flip-glow" x="-0.25" y="-0.25" width="1.5" height="1.5">
                <feComponentTransfer>
                  <feFuncA type="table" tableValues="0 2 0" />
                </feComponentTransfer>
                <feGaussianBlur stdDeviation="2" />
                <feComponentTransfer result="rounded">
                  <feFuncA type="table" tableValues="-2 3" />
                </feComponentTransfer>
                <feMorphology operator="dilate" radius="3" />
                <feGaussianBlur stdDeviation="6" />
                <feBlend in="rounded" result="glow" />
                <feComponentTransfer in="SourceGraphic">
                  <feFuncA type="table" tableValues="0 0 1" />
                </feComponentTransfer>
                <feBlend in2="glow" />
              </filter>
            </defs>
          </svg>
          {children}
        </body>
    </html>
  );
}
