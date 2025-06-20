"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typewriterText = "Sarabjeet Singh";
const containerStagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HomeSection() {
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

  return (
    <section id="home" className="flex flex-col justify-center items-center min-h-screen w-full snap-start p-6 sm:p-12">
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
    </section>
  );
} 