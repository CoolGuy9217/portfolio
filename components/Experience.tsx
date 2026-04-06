"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin, Sparkles, GraduationCap, RotateCcw } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Bantee Golf Platform",
    location: "United States",
    period: "Mar 2024 – Dec 2025",
    duration: "~2 years",
    description:
      "Developed features for an online golf and sports platform focusing on booking, activity tracking, and user engagement.",
    achievements: [
      "Implemented backend services using PHP and JavaScript",
      "Integrated external APIs and third-party services",
      "Built responsive frontend interfaces",
      "Developed secure user authentication systems",
      "Optimized database architecture for performance",
    ],
    technologies: ["PHP", "JavaScript", "REST APIs", "Auth", "Responsive UI"],
    color: "from-primary-500 to-cyan-500",
    gradientColors: "rgba(14,165,233,0.5), rgba(6,182,212,0.35)",
  },
  {
    title: "Full Stack Developer",
    company: "SportUp Platform",
    location: "Belgium",
    period: "Mar 2022 – Feb 2024",
    duration: "~2 years",
    description:
      "Developed and maintained a sports activity platform for athletes and fitness enthusiasts, with scalable backends and sports analytics integrations.",
    achievements: [
      "Built full stack features using modern JavaScript frameworks",
      "Implemented workout and activity tracking systems",
      "Developed REST APIs for mobile and web clients",
      "Optimized database queries for large activity datasets",
      "Improved platform performance and scalability",
    ],
    technologies: ["JavaScript", "Node.js", "REST APIs", "MongoDB", "React"],
    color: "from-violet-500 to-purple-500",
    gradientColors: "rgba(139,92,246,0.5), rgba(168,85,247,0.35)",
  },
  {
    title: "Web Developer",
    company: "Light Blossoms",
    location: "United States",
    period: "Feb 2021 – Feb 2022",
    duration: "~1 year",
    description:
      "Designed and maintained a wellness and beauty website with online bookings and service management.",
    achievements: [
      "Developed a clean, modern site with WordPress",
      "Integrated online booking and service management systems",
      "Enhanced SEO to grow visibility and customer reach",
      "Improved mobile responsiveness and load times",
      "Implemented security features to protect client data",
    ],
    technologies: ["WordPress", "SEO", "Booking systems", "Responsive design"],
    color: "from-pink-500 to-rose-500",
    gradientColors: "rgba(236,72,153,0.5), rgba(244,63,94,0.35)",
  },
  {
    title: "Mobile Developer",
    company: "MONUSCO eDispatch",
    location: "United States",
    period: "Mar 2020 – Jan 2021",
    duration: "~11 months",
    description:
      "Worked on an e-dispatch mobile application for MONUSCO operations—managing and dispatching vehicles efficiently.",
    achievements: [
      "Developed real-time vehicle tracking and dispatch features",
      "Integrated backend services using RESTful APIs",
      "Built a simple, usable app interface",
      "Optimized performance for large-scale operations",
      "Implemented authentication and data encryption for secure access",
    ],
    technologies: ["Mobile", "REST APIs", "Real-time tracking", "Security"],
    color: "from-emerald-500 to-teal-500",
    gradientColors: "rgba(16,185,129,0.5), rgba(20,184,166,0.35)",
  },
  {
    title: "Web Developer",
    company: "EcoPackables",
    location: "United States",
    period: "Jan 2019 – Feb 2020",
    duration: "~1 year",
    description:
      "Built and maintained an eco-friendly packaging company website with product catalogs, pricing, and online ordering.",
    achievements: [
      "Designed and developed the site with HTML, CSS, and JavaScript",
      "Integrated secure e-commerce for product sales",
      "Managed content updates and SEO best practices",
      "Developed contact and inquiry forms for customer communication",
      "Improved site speed and mobile compatibility",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "SEO"],
    color: "from-green-500 to-lime-500",
    gradientColors: "rgba(34,197,94,0.5), rgba(132,204,22,0.35)",
  },
  {
    title: "React Native Developer",
    company: "Flycode Mood App",
    location: "United States",
    period: "Jan 2018 – Dec 2018",
    duration: "~1 year",
    description:
      "Developed and maintained a mood-tracking app to help users monitor mental health and well-being.",
    achievements: [
      "Built the mobile UI with React Native",
      "Integrated mood tracking and analytics",
      "Implemented notifications and reminders",
      "Delivered smooth cross-platform iOS and Android experience",
      "Optimized app performance and responsiveness",
    ],
    technologies: ["React Native", "iOS", "Android", "Analytics"],
    color: "from-orange-500 to-red-500",
    gradientColors: "rgba(249,115,22,0.5), rgba(239,68,68,0.35)",
  },
];

const education = {
  degree: "Self-taught",
  field: "Software Development",
  institution: "2013–2018 focused study",
  location: "Ho Chi Minh City, Vietnam",
  period: "2013 – 2018",
};


/* ── Flip Card Timeline Item ──────────────────────────────────── */
function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex md:justify-${isEven ? "start" : "end"} w-full mb-12 md:mb-16`}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
      >
        <div
          className={`w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} border-4 border-dark-300`}
        >
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color}`}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* 3D Flip Card */}
      <div
        className={`ml-8 md:ml-0 md:w-[calc(50%-40px)] ${isEven ? "" : "md:ml-auto"}`}
      >
        <div
          className={`flip-card-container ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flip-card-inner" style={{ minHeight: "320px" }}>
            {/* ── FRONT ─────────────────────────────────────── */}
            <div className="flip-card-face">
              {/* Animated gradient border */}
              <div className="flip-card-border" />
              <div className="flip-card-content">
                {/* Accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color} opacity-70 rounded-t-2xl`}
                />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-400 font-medium font-display">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Duration badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-full text-xs font-semibold font-display text-white/80`}
                    style={{ background: `linear-gradient(135deg, ${exp.gradientColors})`, opacity: 0.8 }}
                  >
                    {exp.duration}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-200 border border-white/10 rounded-md text-xs font-semibold font-display text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Flip hint */}
                <span className="flip-hint font-display">
                  Click to see details →
                </span>
              </div>
            </div>

            {/* ── BACK ──────────────────────────────────────── */}
            <div className="flip-card-face flip-card-back">
              {/* Animated gradient border */}
              <div className="flip-card-border-back" />
              <div className="flip-card-content-back">
                {/* Title */}
                <h3
                  className="text-lg font-bold text-center mb-5 bg-clip-text text-transparent font-display"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${exp.gradientColors})`,
                  }}
                >
                  Key Achievements
                </h3>

                {/* Achievement list */}
                <ul className="space-y-0 flex-1">
                  {exp.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="relative pl-6 py-3 text-gray-300 text-sm border-b border-white/5 last:border-b-0 leading-relaxed"
                    >
                      <span className="absolute left-0 top-3.5 text-primary-400 text-xs">
                        ✦
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-white/5 text-center">
                  <span className="text-gray-500 text-xs font-display flex items-center justify-center gap-1.5">
                    <RotateCcw size={12} />
                    Click to flip back
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-200/70" />
      <motion.div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{ x: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="text-primary-400" size={20} />
            <span className="text-primary-400 font-display text-sm tracking-wider uppercase">
              Work Experience
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            8+ years building web and mobile applications for product teams
            across the United States, Europe, and remote collaborations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full"
              style={{
                background:
                  "linear-gradient(to bottom, #0ea5e9, #06b6d4, transparent)",
              }}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="text-primary-400" />
            Education
          </motion.h3>
          <motion.div
            className="relative rounded-2xl"
            whileHover={{ y: -5 }}
          >
            {/* Animated neon gradient border */}
            <div className="flip-card-border" />

            <div className="relative p-6 md:p-8 rounded-2xl bg-[rgba(15,23,42,0.92)] backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap size={24} className="text-green-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {education.degree} in {education.field}
                    </h4>
                    <p className="text-primary-300 font-medium font-display">
                      {education.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
