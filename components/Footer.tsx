"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Mail, Code2 } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-300" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.a
              href="#home"
              className="text-2xl font-bold font-display gradient-text inline-block mb-3"
              whileHover={{ scale: 1.05 }}
            >
              PT<span className="text-primary-400">.</span>
            </motion.a>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Josh Krol. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-primary-400 text-sm font-display transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Social & Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/CoolGuy9217"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="mailto:josh.krol.00752@gmail.com"
              className="p-2 text-gray-500 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="ml-4 p-3 bg-dark-100 border border-white/10 rounded-xl text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Built with */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <motion.p
            className="text-gray-600 text-sm flex items-center justify-center gap-2 flex-wrap"
            whileHover={{ scale: 1.02 }}
          >
            <Code2 size={14} className="text-primary-400" />
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500" fill="currentColor" />
            </motion.span>{" "}
            using
            <span className="text-primary-400 font-medium font-display">Next.js</span>,
            <span className="text-cyan-400 font-medium font-display">Three.js</span> &
            <span className="text-primary-400 font-medium font-display">Tailwind CSS</span>,
            <span className="text-primary-400 font-medium font-display">GSAP</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
