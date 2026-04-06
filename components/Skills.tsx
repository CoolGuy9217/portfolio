"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  Shield, 
  Plug,
  Sparkles 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    glowColor: "#3b82f6",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux/Zustand", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    glowColor: "#22c55e",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Supabase", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-purple-500 to-pink-500",
    glowColor: "#a855f7",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud/DevOps",
    color: "from-orange-500 to-yellow-500",
    glowColor: "#f97316",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 85 },
    ],
  },
  {
    icon: Shield,
    title: "Authentication",
    color: "from-red-500 to-rose-500",
    glowColor: "#ef4444",
    skills: [
      { name: "JWT", level: 90 },
      { name: "OAuth2", level: 85 },
      { name: "NextAuth", level: 88 },
      { name: "Clerk", level: 82 },
    ],
  },
  {
    icon: Plug,
    title: "Integrations",
    color: "from-indigo-500 to-violet-500",
    glowColor: "#6366f1",
    skills: [
      { name: "Stripe", level: 88 },
      { name: "PayPal", level: 82 },
      { name: "Twilio", level: 78 },
      { name: "SendGrid", level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-200 font-display">{name}</span>
        <motion.span
          className="text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1, delay: delay + 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: category.glowColor }}
      />

      <div className="relative glass-card p-6 h-full">
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-[1px]`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full bg-dark-200 rounded-xl flex items-center justify-center group-hover:bg-dark-100 transition-colors">
              <category.icon size={26} className="text-white" />
            </div>
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>
            <p className="text-xs text-gray-500 font-display">{category.skills.length} skills</p>
          </div>
        </div>

        {/* Skills with Progress Bars */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={index * 0.1 + skillIndex * 0.1}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
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
              Skills & Expertise
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My Technical{" "}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
            from frontend to backend.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative rounded-2xl">
            {/* Animated neon gradient border */}
            <div className="flip-card-border" />

            <div className="relative p-8 rounded-2xl bg-[rgba(15,23,42,0.92)] backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Additional Expertise
                  </h3>
                  <p className="text-gray-300">
                    Tools and methodologies I use daily for efficient development
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Git", "Figma", "Agile", "CI/CD", "Testing", "SEO"].map(
                    (skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="px-4 py-2 bg-dark-200 border border-primary-500/30 rounded-lg text-primary-300 text-sm font-semibold font-display cursor-default hover:border-primary-400/50 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
