"use client";
import { useEffect, useState } from "react";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

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
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and analytics with real-time updates.",
    technologies: ["React", "Redux", "Express.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and notifications.",
    technologies: ["Node.js", "Socket.io", "React", "Express.js"],
    link: "#",
  },
  {
    title: "Weather Visualizer",
    description: "A web app to visualize weather data with interactive charts and location search.",
    technologies: ["JavaScript", "Chart.js", "Express.js", "Tailwind CSS"],
    link: "#",
  },
];

const skills = [
  { name: "JavaScript", description: "High-level, versatile programming language of the web." },
  { name: "React", description: "JavaScript library for building user interfaces." },
  { name: "TypeScript", description: "Typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development." },
  { name: "Next.js", description: "React framework for server-side rendering and static site generation." },
  { name: "Redux", description: "State management library for JavaScript apps, especially React." },
  { name: "Express.js", description: "Minimal and flexible Node.js web application framework." },
  { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine for server-side applications." },
  { name: "GitHub", description: "Platform for version control and collaboration using Git." },
  { name: "MongoDB", description: "NoSQL database for modern, scalable applications." },
  { name: "Solana", description: "High-performance blockchain platform for decentralized applications." },
  { name: "Solidity", description: "Programming language for writing smart contracts on Ethereum blockchain." },
];

// Add spring transition for headings and cards
const spring = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
};

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative z-10 text-gray-900 dark:text-white flex flex-col items-center min-h-screen overflow-y-auto snap-y snap-mandatory">
      <HomeSection />
      <ProjectsSection projects={projects} containerStagger={containerStagger} itemFade={itemFade} spring={spring} />
      <SkillsSection skills={skills} containerStagger={containerStagger} itemFade={itemFade} spring={spring} />
      <ContactSection containerStagger={containerStagger} spring={spring} />
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
    </div>
  );
}

/* Add this to your global CSS for floating animation: */
/*
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
.animate-float {
  animation: float 2.5s ease-in-out infinite;
}
*/
