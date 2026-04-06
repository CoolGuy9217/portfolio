"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Bantee Golf Platform",
    role: "Full Stack Developer",
    description:
      "Developed booking, activity tracking, and user engagement features for an online golf and sports platform.",
    technologies: ["PHP", "JavaScript", "REST APIs", "Auth", "Responsive UI"],
    features: ["Booking", "Activity Tracking", "3rd-Party APIs", "User Authentication"],
    gradient: "from-purple-500 to-violet-600",
    electricColor: "#a855f7",
    image: "/projects/bantee-golf.png",
    category: "Sports Platform",
    url: "https://banteegolf.com",
  },
  {
    title: "SportUp Platform",
    role: "Full Stack Developer",
    description:
      "Built and maintained scalable features for a sports activity platform used by athletes and fitness enthusiasts.",
    technologies: ["JavaScript", "Node.js", "React", "MongoDB", "REST APIs"],
    features: ["Workout Tracking", "Activity Analytics", "REST APIs", "Scalable Backend"],
    gradient: "from-orange-500 to-red-600",
    electricColor: "#f97316",
    image: "/projects/sportup.png",
    category: "Fitness",
    url: "https://sportup.io",
  },
  {
    title: "Light Blossoms",
    role: "Web Developer",
    description:
      "Designed and maintained a wellness and beauty website with online bookings and improved SEO performance.",
    technologies: ["WordPress", "SEO", "Booking Systems", "Responsive Design"],
    features: ["Online Booking", "Service Management", "SEO", "Performance Optimization"],
    gradient: "from-cyan-500 to-blue-600",
    electricColor: "#06b6d4",
    image: "/projects/light-blossoms.png",
    category: "Health & Wellness",
    url: "http://lightblossoms.com/",
  },
  {
    title: "MONUSCO eDispatch",
    role: "Mobile Developer",
    description:
      "Developed key capabilities for a vehicle e-dispatch app, including real-time tracking and secure access flows.",
    technologies: ["Mobile", "REST APIs", "Real-Time Tracking", "Data Security"],
    features: ["Vehicle Dispatch", "Live Tracking", "Authentication", "Encryption"],
    gradient: "from-gray-600 to-gray-800",
    electricColor: "#94a3b8",
    image: "/projects/monusco-edispatch.png",
    category: "Mobile Operations",
    url: "https://play.google.com/store/apps/details?id=com.taxicaller.MONUSCOeDispatch.app",
  },
  {
    title: "EcoPackables",
    role: "Web Developer",
    description:
      "Built and maintained an e-commerce site for eco-friendly packaging with product catalog, pricing, and inquiries.",
    technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "SEO"],
    features: ["Product Catalog", "Online Orders", "Contact Forms", "Mobile Compatibility"],
    gradient: "from-indigo-500 to-purple-600",
    electricColor: "#6366f1",
    image: "/projects/ecopackables.png",
    category: "E-commerce",
    url: "https://www.ecopackables.com",
  },
  {
    title: "Flycode Mood App",
    role: "React Native Developer",
    description:
      "Built and maintained a mood-tracking app focused on mental wellness with analytics, reminders, and cross-platform support.",
    technologies: ["React Native", "iOS", "Android", "Notifications", "Analytics"],
    features: ["Mood Tracking", "Reminders", "Cross-Platform", "Performance Optimization"],
    gradient: "from-emerald-500 to-teal-600",
    electricColor: "#10b981",
    image: "/projects/flycode-mood.png",
    category: "Mobile Health",
    url: "https://play.google.com/store/apps/details?id=com.flycode.mood&hl=en_us",
  },
];

/* ─── SVG Turbulence Filter (rendered once) ──────────────────────── */
function ElectricBorderFilter() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <defs>
        <filter
          id="electric-displace"
          colorInterpolationFilters="sRGB"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise1" seed="1" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
            <animate attributeName="dy" values="700;0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise2" seed="1" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
            <animate attributeName="dy" values="0;-700" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise3" seed="2" />
          <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
            <animate attributeName="dx" values="490;0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise4" seed="2" />
          <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
            <animate attributeName="dx" values="0;-490" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
          <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
          <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="combinedNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* ─── Project Card ───────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block"
    >
      {/* ── Electric Border Effect ─────────────────────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {/* Main displaced electric border */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            border: `2px solid ${project.electricColor}`,
            filter: "url(#electric-displace)",
          }}
        />
        {/* Glow layer 1 — tight */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            border: `2px solid ${project.electricColor}99`,
            filter: "blur(2px)",
          }}
        />
        {/* Glow layer 2 — soft spread */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            border: `2px solid ${project.electricColor}`,
            filter: "blur(6px)",
          }}
        />
        {/* Overlay shine */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            mixBlendMode: "overlay",
            filter: "blur(16px)",
            transform: "scale(1.08)",
            opacity: 0.4,
            background:
              "linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)",
          }}
        />
      </div>

      {/* ── Background Glow (behind card) ─────────────────────── */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 -z-10"
        style={{
          filter: "blur(32px)",
          background: `linear-gradient(-30deg, ${project.electricColor}, transparent, ${project.electricColor})`,
        }}
      />

      {/* ── Card Body ─────────────────────────────────────────── */}
      <div className="relative glass-card overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent opacity-60" />

          {/* Category Badge */}
          <motion.div
            className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs text-white font-medium font-display shadow-lg`}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.category}
          </motion.div>

          {/* Hover Overlay with View Button */}
          <motion.div className="absolute inset-0 bg-dark-300/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.span
              className={`px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-medium font-display flex items-center gap-2 shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
              <ArrowUpRight size={18} />
            </motion.span>
          </motion.div>
        </div>

        <div className="p-6">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-cyan-400 transition-all duration-300">
                {project.title}
              </h3>
              <p
                className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-medium`}
              >
                {project.role}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feature, featureIndex) => (
              <motion.span
                key={featureIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.3 }}
                className="text-xs text-gray-500 bg-dark-200/80 px-2.5 py-1 rounded-md border border-white/5"
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Technologies */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-xs font-medium px-2.5 py-1 rounded-md border border-white/10"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(6, 182, 212, 0.1))",
                  }}
                >
                  <span className="text-primary-400">{tech}</span>
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* SVG Electric Border Filter (rendered once for all cards) */}
      <ElectricBorderFilter />

      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="text-primary-400" size={20} />
            <span className="text-primary-400 font-display text-sm tracking-wider uppercase">
              Featured Work
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">MyProject</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            modern, scalable web applications with stunning user interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/CoolGuy9217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-dark-100/50 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Github size={22} className="relative z-10" />
            <span className="relative z-10 font-medium font-display">View More on GitHub</span>
            <ExternalLink
              size={18}
              className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
