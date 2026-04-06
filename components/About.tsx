"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Rocket, Users, Zap, CheckCircle, Terminal, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Thinking",
    description: "Not just frontend-only decisions, but holistic architectural solutions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description: "SEO-optimized, high-performance UIs with measurable improvements",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Experience with distributed teams, designers, and backend engineers",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Ownership Mindset",
    description: "Not just task delivery, but genuine care for product success",
    color: "from-purple-500 to-pink-500",
  },
];

const achievements = [
  "Built and scaled full-stack Next.js applications with Supabase (Auth, Database, Storage)",
  "Implemented SEO-optimized, high-performance UIs with measurable load-time improvements",
  "Integrated headless CMS and APIs into dashboards and SaaS products",
  "Translated complex Figma designs into production-ready interfaces",
  "Built and maintained production SaaS & marketing platforms for EU companies",
];

const codeLines = [
  { content: 'const developer = {', class: '' },
  { content: '  name: "Josh Krol",', class: '' },
  { content: '  role: "Full Stack Developer",', class: '' },
  { content: '  experience: "8+ years",', class: '' },
  { content: '  focus: ["Performance", "Clean Code", "Scalability"],', class: '' },
  { content: '  passion: "Building exceptional digital experiences"', class: '' },
  { content: '};', class: '' },
];

function HighlightCard({ highlight, index }: { highlight: typeof highlights[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 group relative overflow-hidden"
    >
      {/* Gradient background on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      {/* Icon */}
      <motion.div
        className={`w-12 h-12 mb-4 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center relative`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <highlight.icon size={24} className="text-white relative z-10" />
        {/* Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity`} />
      </motion.div>

      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
        {highlight.title}
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        {highlight.description}
      </p>
    </motion.div>
  );
}

function CodeBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="code-block rounded-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-dark-100/50 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-500 ml-2 font-mono flex items-center gap-2">
            <Terminal size={12} />
            developer.ts
          </span>
        </div>
        {/* Code Content */}
        <div className="p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: i * 0.1 }}
                className="flex"
              >
                <span className="text-gray-600 w-6 select-none">{i + 1}</span>
                <span className="text-gray-300">
                  {line.content.includes('const') && (
                    <>
                      <span className="text-purple-400">const</span>
                      {line.content.replace('const', '')}
                    </>
                  )}
                  {line.content.includes('name:') && (
                    <>
                      {'  '}<span className="text-cyan-400">name</span>{': '}<span className="text-green-400">&quot;Josh Krol&quot;</span>,
                    </>
                  )}
                  {line.content.includes('role:') && (
                    <>
                      {'  '}<span className="text-cyan-400">role</span>{': '}<span className="text-green-400">&quot;Full Stack Developer&quot;</span>,
                    </>
                  )}
                  {line.content.includes('experience:') && (
                    <>
                      {'  '}<span className="text-cyan-400">experience</span>{': '}<span className="text-green-400">&quot;8+ years&quot;</span>,
                    </>
                  )}
                  {line.content.includes('focus:') && (
                    <>
                      {'  '}<span className="text-cyan-400">focus</span>{': '}<span className="text-yellow-400">[</span><span className="text-green-400">&quot;Performance&quot;</span>, <span className="text-green-400">&quot;Clean Code&quot;</span>, <span className="text-green-400">&quot;Scalability&quot;</span><span className="text-yellow-400">]</span>,
                    </>
                  )}
                  {line.content.includes('passion:') && (
                    <>
                      {'  '}<span className="text-cyan-400">passion</span>{': '}<span className="text-green-400">&quot;Building exceptional digital experiences&quot;</span>
                    </>
                  )}
                  {line.content === '};' && (
                    <span className="text-yellow-400">{line.content}</span>
                  )}
                </span>
              </motion.div>
            ))}
          </pre>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}

export default function About() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-200/70" />
      {mounted && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      )}

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
              About Me
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            8+ years of experience building modern web and mobile applications
            with a passion for clean code and scalable architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Code Block & About Text */}
          <div className="space-y-6">
            {/* Animated Code Block */}
            <CodeBlock />

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a full-stack web and mobile developer with{" "}
                  <span className="text-white font-semibold">
                    8+ years of professional experience
                  </span>{" "}
                  shipping production apps with the MERN stack, Next.js, React,
                  and Node.js. I specialize in{" "}
                  <span className="text-primary-300 font-medium">scalable UIs</span>,{" "}
                  <span className="text-primary-300 font-medium">REST APIs</span>, and{" "}
                  <span className="text-primary-300 font-medium">performance-minded</span>{" "}
                  delivery.
                </p>
                <p>
                  My approach combines clean, scalable architecture with a strong
                  focus on performance and maintainability. I bring{" "}
                  <span className="text-white font-medium">full-stack thinking</span> to every
                  project.
                </p>
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-400 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle
                        size={18}
                        className="text-primary-400 mt-1 flex-shrink-0 group-hover:text-cyan-400 transition-colors"
                      />
                    </motion.div>
                    <span className="group-hover:text-gray-300 transition-colors">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <HighlightCard key={index} highlight={highlight} index={index} />
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2 glass-card p-6 relative overflow-hidden"
            >
              <div className="grid grid-cols-3 gap-4 text-center relative z-10">
                {[
                  { value: "8+", label: "Years Experience" },
                  { value: "20+", label: "Projects Completed" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="space-y-1"
                  >
                    <motion.p
                      className="text-3xl md:text-4xl font-bold gradient-text"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-gray-500 text-sm font-display">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-cyan-500/5" />
            </motion.div>
          </div>
        </div>

        {/* Work Style Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 md:p-10 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center relative z-10">
            {[
              { label: "Clear Communication", value: "& Predictable Delivery" },
              { label: "Clean, Documented", value: "Handoff-Ready Code" },
              { label: "Comfortable with", value: "Existing Codebases" },
              { label: "Long-term", value: "Collaboration Mindset" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-1"
              >
                <p className="text-primary-400 font-medium font-display">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
          {/* Animated background line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
