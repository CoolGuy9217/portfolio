"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles, Code2, Terminal } from "lucide-react";
import dynamic from "next/dynamic";
import GlowingOrb from "./effects/GlowingOrb";
import { AnimatedLetters } from "./effects/AnimatedText";

const NeonText = dynamic(() => import("./effects/NeonText"), {
  ssr: false,
  loading: () => <span className="gradient-text">Josh Krol</span>,
});

// Dynamically import TypeWriter to avoid hydration issues
const TypeWriter = dynamic(() => import("./effects/TypeWriter"), {
  ssr: false,
  loading: () => <span className="text-primary-400">Full Stack Developer</span>,
});


const roles = [
  "Full Stack Developer",
  "React Expert",
  "Next.js Specialist",
  "TypeScript Enthusiast",
  "UI/UX Implementer",
];

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.603.045-.867.131-1.129.369-1.808 1.44-1.997 3.03-.168 1.394.098 3.09.795 4.979C3.321 10.587 2.4 12.032 2.4 12.97c0 .276.043.544.13.805.37 1.13 1.44 1.808 3.03 1.997 1.045.126 2.31.02 3.69-.306.165.473.35.933.554 1.377 1.002 2.173 2.416 3.655 3.787 4.072.267.08.551.12.846.12.31 0 .603-.044.867-.13 1.129-.37 1.808-1.44 1.997-3.03.168-1.395-.098-3.09-.795-4.98 1.744-1.312 2.665-2.757 2.665-3.695 0-.276-.043-.544-.13-.805-.37-1.13-1.44-1.808-3.03-1.997-1.045-.126-2.31-.02-3.69.306a15.374 15.374 0 0 0-.554-1.378C13.58 3.36 12.166 1.879 10.795 1.462a2.28 2.28 0 0 0-.846-.12zm.577 1.493c.31.084.67.318 1.058.71.56.56 1.142 1.388 1.67 2.389-1.092.293-2.286.487-3.543.575a22.286 22.286 0 0 0-1.778-2.654c1.071-.94 2.063-1.466 2.806-1.466.098 0 .192.015.283.044l-.496-.598zm-6.58.598c.098 0 .192.015.283.044-.31.084-.67.318-1.058.71-.56.56-1.142 1.388-1.67 2.389 1.092.293 2.286.487 3.543.575a22.286 22.286 0 0 0 1.778-2.654c-1.071-.94-2.063-1.466-2.806-1.466l-.07.402zm-.07-.402zm6.65.402zM12 8.02a17.45 17.45 0 0 1 1.294 1.953A17.886 17.886 0 0 1 12 10.19a17.886 17.886 0 0 1-1.294-.218A17.45 17.45 0 0 1 12 8.02zm-3.686.905c.451-.035.916-.053 1.392-.053.476 0 .941.018 1.392.053a20.283 20.283 0 0 0-1.392 2.347 20.283 20.283 0 0 0-1.392-2.347zm7.372 0a20.283 20.283 0 0 0-1.392 2.347 20.283 20.283 0 0 0 1.392-2.347zM5.752 9.63c.193-.036.395-.067.604-.094a22.86 22.86 0 0 0 .88 2.468 22.86 22.86 0 0 0-.88 2.468c-.21-.027-.411-.058-.604-.094-1.268-.214-2.1-.58-2.397-1.101a.757.757 0 0 1-.092-.31c0-.448.614-1.262 2.489-2.337zm12.496 0c1.875 1.075 2.489 1.889 2.489 2.338a.757.757 0 0 1-.092.31c-.297.52-1.129.886-2.397 1.1-.193.037-.395.068-.604.095a22.86 22.86 0 0 0-.88-2.468c.345-.805.64-1.64.88-2.469.21.027.411.058.604.094zM12 10.97c.36 0 .713.013 1.058.037a20.867 20.867 0 0 1 0 1.992c-.345.024-.698.037-1.058.037-.36 0-.713-.013-1.058-.037a20.867 20.867 0 0 1 0-1.992c.345-.024.698-.037 1.058-.037zm-3.344.31a20.283 20.283 0 0 0 0 1.429 20.283 20.283 0 0 0 0-1.43zm6.688 0a20.283 20.283 0 0 0 0 1.43 20.283 20.283 0 0 0 0-1.43zM8.314 13.028a22.86 22.86 0 0 0 .88 2.468c-.451-.035-.916-.053-1.392-.053-.476 0-.941.018-1.392.053a20.283 20.283 0 0 0 1.392-2.347l.512-.121zm7.372 0 .512.121a20.283 20.283 0 0 0 1.392 2.347c-.451-.035-.916-.053-1.392-.053-.476 0-.941.018-1.392.053a22.86 22.86 0 0 0 .88-2.468zM12 13.81c.447.153.883.323 1.294.505A17.45 17.45 0 0 1 12 16.268a17.45 17.45 0 0 1-1.294-1.953c.411-.182.847-.352 1.294-.505z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.42.276.69.399.57.245.9.357c.517.183.953.38 1.31.587.357.208.643.434.858.68.216.245.373.518.475.815.101.297.152.627.152.99 0 .585-.12 1.07-.358 1.453-.238.383-.556.696-.95.937-.395.242-.848.412-1.36.51-.51.1-1.04.149-1.585.149-.742 0-1.436-.074-2.08-.22a8.41 8.41 0 0 1-1.598-.534V15.31c.229.168.475.316.74.447.264.132.536.244.82.339.282.094.562.168.84.22.278.052.543.078.795.078.3 0 .553-.027.758-.082a1.66 1.66 0 0 0 .513-.228.874.874 0 0 0 .29-.35.867.867 0 0 0 .091-.4c0-.207-.063-.39-.188-.547a2.024 2.024 0 0 0-.534-.432 5.13 5.13 0 0 0-.832-.378 23.015 23.015 0 0 0-1.084-.378 6.093 6.093 0 0 1-1.258-.58c-.376-.236-.68-.503-.916-.802a3.08 3.08 0 0 1-.51-.953 3.455 3.455 0 0 1-.157-1.074c0-.553.119-1.03.356-1.433.237-.403.557-.74.958-1.008.401-.268.862-.466 1.382-.594a6.7 6.7 0 0 1 1.65-.193zM7.23 10.245H14.31v2.015h-2.534v7.608H9.79V12.26H7.23z"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M11.998.006a1.31 1.31 0 0 0-.656.174L3.768 4.577a1.316 1.316 0 0 0-.658 1.14v8.568a1.316 1.316 0 0 0 .658 1.14l7.574 4.397c.204.118.44.18.656.18.218 0 .452-.062.657-.18l7.574-4.397a1.316 1.316 0 0 0 .658-1.14V5.717a1.316 1.316 0 0 0-.658-1.14L12.655.18a1.315 1.315 0 0 0-.657-.174zm.005 2.308 6.508 3.78-6.508 3.78-6.508-3.78zm-7.49 5.27 6.5 3.776v7.204l-6.5-3.776zm14.98 0v7.204l-6.5 3.776v-7.204z"/>
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M13.7.6a1.38 1.38 0 0 0-2.34.96v10.5L21.7 0a1.38 1.38 0 0 0-.98-2.35H13.7zM10.28 11.94V23.4a1.38 1.38 0 0 0 2.34.96L23.34 12a1.38 1.38 0 0 0-.98-2.35H13.7L10.28 11.94zM.67 12a1.38 1.38 0 0 0 .97 2.35h8.64v-4.7L.67 12z" transform="translate(0 .02)"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
};

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Tailwind"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      {mounted && (
        <>
          <GlowingOrb size={500} color="#0ea5e9" className="top-1/4 -left-20" delay={0} />
          <GlowingOrb size={400} color="#06b6d4" className="bottom-1/4 -right-20" delay={1} />
          <GlowingOrb size={300} color="#22d3ee" className="top-1/2 left-1/2 -translate-x-1/2" delay={2} />
        </>
      )}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14, 165, 233, 0.15), transparent)",
        }}
      />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-100/50 backdrop-blur-xl border border-primary-500/20 rounded-full text-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(14, 165, 233, 0.5)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-primary-400" />
              </motion.div>
              <span className="text-gray-200 font-display">Available for new opportunities</span>
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Code-style greeting */}
          {/* <motion.div
            variants={itemVariants}
            className="mb-4 font-mono text-sm text-primary-300"
          >
            <span>{'<'}</span>
            <span className="text-cyan-300">Developer</span>
            <span>{' name="'}</span>
          </motion.div> */}

          {/* Main Name with Letter Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4"
          >
            {mounted ? (
              <NeonText text="Josh Krol" />
            ) : (
              <span className="gradient-text">Josh Krol</span>
            )}
          </motion.h1>

          {/* Closing tag */}
          {/* <motion.div
            variants={itemVariants}
            className="mb-6 font-mono text-sm text-primary-300"
          >
            <span>{'" />'}</span>
          </motion.div> */}

          {/* Dynamic Role with TypeWriter */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-2xl md:text-3xl lg:text-4xl text-white font-light font-display">
              <span className="text-cyan-300 font-semibold">
                {mounted ? (
                  <TypeWriter words={roles} typingSpeed={80} deletingSpeed={40} />
                ) : (
                  "Full Stack Developer"
                )}
              </span>
            </span>
          </motion.div>

          {/* Location with animated icon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-8 text-gray-300"
          >
            <motion.div
              animate={mounted ? { y: [0, -3, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin size={18} className="text-primary-400" />
            </motion.div>
            <span className="font-display">Vietnam • Open to Remote</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I craft{" "}
            <span className="text-white font-medium">modern, scalable applications</span>{" "}
            using cutting-edge technologies. Specialized in{" "}
            <span className="text-primary-300 font-medium">Next.js</span>,{" "}
            <span className="text-cyan-300 font-medium">React</span>, and{" "}
            <span className="text-primary-300 font-medium">TypeScript</span> with a passion
            for clean architecture and exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            {/* Primary Button - View My Work */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-[220px] h-[58px] flex items-center justify-center rounded-2xl overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 bg-[length:200%_100%] group-hover:animate-[gradientShift_3s_ease_infinite]" />
              {/* Subtle inner glow */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 bg-[length:200%_100%] group-hover:animate-[gradientShift_3s_ease_infinite]" />
              {/* Hover shine sweep */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {/* Bottom glow on hover */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-cyan-500/0 group-hover:bg-cyan-500/40 blur-xl transition-all duration-500" />
              {/* Label */}
              <span className="relative z-10 flex items-center gap-2.5 text-white font-semibold font-display text-[15px] tracking-wide">
                View My Work
              </span>
            </motion.a>

            {/* Secondary Button - Let's Connect */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-[220px] h-[58px] flex items-center justify-center rounded-2xl"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 bg-[length:200%_100%] opacity-60 group-hover:opacity-100 group-hover:animate-[gradientShift_3s_ease_infinite] transition-opacity duration-300" />
              {/* Dark inner fill */}
              <div className="absolute inset-[1.5px] rounded-[14px] bg-dark-300 group-hover:bg-dark-200 transition-colors duration-300" />
              {/* Hover shine sweep */}
              <div className="absolute inset-0 rounded-2xl translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              {/* Bottom glow on hover */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-primary-500/0 group-hover:bg-primary-500/30 blur-xl transition-all duration-500" />
              {/* Label */}
              <span className="relative z-10 flex items-center gap-2.5 text-gray-200 group-hover:text-white font-semibold font-display text-[15px] tracking-wide transition-colors duration-300">
                Let&apos;s Connect
              </span>
            </motion.a>
          </motion.div>

          {/* Animated Tech Stack */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-white/5">
            {/* <p className="text-xs text-gray-500 mb-6 tracking-widest uppercase">
              Tech Stack
            </p> */}
            <p className="text-primary-400 font-display mb-6 text-sm tracking-wider uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 2.6 + index * 0.1 }}
                  whileHover={mounted ? { scale: 1.1, y: -5 } : {}}
                  className="group relative"
                >
                  <div className="px-5 py-3 bg-dark-100/70 border border-white/10 rounded-xl flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:border-primary-500/30 hover:bg-dark-100/90">
                    <span className="text-gray-400 group-hover:text-primary-300 transition-colors">
                      {techIcons[tech]}
                    </span>
                    <span className="text-sm text-gray-200 group-hover:text-primary-300 transition-colors font-medium font-display">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ delay: 3 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
          animate={mounted ? { y: [0, 10, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest font-display">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
