"use client";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { ThemeContext } from '../components/ClientThemeProvider';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  containerStagger: {
    visible: {
      transition: {
        staggerChildren: number;
      };
    };
  };
  itemFade: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
  spring: {
    type: 'spring';
    stiffness: number;
    damping: number;
  };
}

export default function ProjectsSection({ projects, containerStagger, itemFade, spring }: ProjectsSectionProps) {
  const themeCtx = useContext(ThemeContext);

  return (
    <section id="projects" className="flex flex-col justify-center items-center min-h-screen w-full snap-start py-4 sm:py-8 px-0 sm:px-8 bg-transparent">
      <motion.section
        className="w-full max-w-none sm:max-w-5xl flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2 
          className="text-5xl font-extrabold mb-4 text-center tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {themeCtx?.theme === 'dark' ? (
            <span className="text-white border-r-2 border-blue-500 pr-1 animate-pulse font-extrabold text-5xl sm:text-6xl">Projects</span>
          ) : (
            <span style={{ color: '#1f2937' }} className="border-r-2 border-blue-500 pr-1 animate-pulse font-extrabold text-5xl sm:text-6xl">Projects</span>
          )}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 dark:text-gray-300 mb-12 text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of the things I&apos;ve built recently. Swipe or scroll horizontally to explore!
        </motion.p>
        <motion.div 
          className="flex gap-8 w-full overflow-x-auto py-4 pb-12 px-4 sm:px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          variants={containerStagger} 
          initial="hidden" 
          animate="visible"
        >
          {projects.map((project: Project, i: number) => (
            <motion.div
              key={project.title}
              variants={itemFade}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.45)", 
                borderColor: "#6366f1",
                y: -8
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 600, damping: 20, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[320px] max-w-xs md:min-w-[380px] md:max-w-sm snap-center backdrop-blur-lg bg-white/20 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl p-7 flex flex-col gap-3 hover:shadow-2xl hover:border-indigo-400 transition-all duration-100 cursor-pointer relative overflow-hidden"
            >
              <h3 className="font-bold text-2xl mb-2 text-indigo-300 drop-shadow">{project.title}</h3>
              <p className="text-gray-200 dark:text-gray-300 mb-2 text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="bg-indigo-100/20 dark:bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-indigo-400/30">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-indigo-400 hover:underline text-sm mt-auto transition-colors hover:text-white hover:bg-indigo-500/30 px-2 py-1 rounded font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl z-0 animate-pulse" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </section>
  );
} 