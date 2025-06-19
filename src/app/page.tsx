"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typewriterText = "Sarabjeet Singh";

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS, featuring animated sections and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A markdown-powered blog with authentication, comments, and a modern UI.",
    technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    link: "#",
  },
];

const skills = [
  { name: "Next.js", description: "React framework for server-side rendering and static site generation." },
  { name: "React", description: "JavaScript library for building user interfaces." },
  { name: "TypeScript", description: "Typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development." },
  { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine for server-side applications." },
  { name: "MongoDB", description: "NoSQL database for modern, scalable applications." },
];

// Add spring transition for headings and cards
const spring = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
};

export default function Home() {
  // Typewriter effect state
  const [displayedName, setDisplayedName] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-6 sm:p-12 flex flex-col items-center">
      {/* Header */}
      <motion.header
        className="w-full max-w-3xl text-center mb-12 mt-8"
        initial="hidden"
        animate="visible"
        variants={containerStagger}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="border-r-2 border-blue-500 pr-1 animate-pulse">{displayedName}</span>
        </h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-2"
          initial="hidden"
          animate="visible"
          variants={itemFade}
        >
          Full Stack Developer &amp; Tech Enthusiast
        </motion.p>
        <motion.p
          className="text-base text-gray-500 dark:text-gray-400"
          initial="hidden"
          animate="visible"
          variants={itemFade}
        >
          Passionate about building modern web applications and learning new technologies.
        </motion.p>
      </motion.header>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full max-w-3xl mb-12 scroll-mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2 
          className="text-3xl font-semibold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          viewport={{ once: true }}
        >Projects</motion.h2>
        <motion.div className="grid gap-6 sm:grid-cols-2" variants={containerStagger} initial="hidden" animate="visible">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemFade}
              whileHover={{ scale: 1.06 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              transition={spring}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-800 transition-transform cursor-pointer flex flex-col gap-2 hover:shadow-xl hover:border-blue-400"
            >
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-auto transition-colors hover:text-gray-900 dark:hover:text-white hover:bg-blue-100 dark:hover:bg-blue-900 px-2 py-1 rounded"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="w-full max-w-3xl mb-12 scroll-mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="text-3xl font-semibold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          viewport={{ once: true }}
        >Skills</motion.h2>
        <motion.ul className="flex flex-wrap gap-6 justify-center" variants={containerStagger} initial="hidden" animate="visible">
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={itemFade}
              whileHover={{ scale: 1.13 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              transition={spring}
              viewport={{ once: true }}
              className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm transition-transform cursor-pointer flex flex-col items-center hover:shadow-lg hover:border-cyan-400"
            >
              <span>{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center max-w-[140px]">{skill.description}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full max-w-3xl mb-8 scroll-mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="text-3xl font-semibold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          viewport={{ once: true }}
        >Contact</motion.h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.a
            variants={itemFade}
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            href="mailto:sarabjeet@example.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            sarabjeet@example.com
          </motion.a>
          <span className="hidden sm:inline">|</span>
          <motion.a
            variants={itemFade}
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            href="https://linkedin.com/in/sarabjeet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </motion.a>
          <span className="hidden sm:inline">|</span>
          <motion.a
            variants={itemFade}
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            href="https://github.com/sarabjeet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </motion.a>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all animate-pulse"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <footer className="text-gray-400 text-xs mt-auto mb-2">&copy; {new Date().getFullYear()} Sarabjeet Singh. All rights reserved.</footer>
    </div>
  );
}
