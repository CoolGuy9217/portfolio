"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from "@/components";

// Dynamically import all effect components with SSR disabled
const SpaceGlobe = dynamic(() => import("@/components/three/SpaceGlobe"), {
  ssr: false,
});

const FloatingCode = dynamic(() => import("@/components/effects/FloatingCode"), {
  ssr: false,
});

const CursorGlow = dynamic(() => import("@/components/effects/CursorGlow"), {
  ssr: false,
});

const ScrollProgress = dynamic(() => import("@/components/effects/ScrollProgress"), {
  ssr: false,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative">
      {/* Visual Effects Layer - Only render on client */}
      {mounted && (
        <>
          <SpaceGlobe />
          <FloatingCode />
          <CursorGlow />
          <ScrollProgress />
        </>
      )}

      {/* Content Layer - always above effects */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
