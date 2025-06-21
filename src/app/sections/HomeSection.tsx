"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HomeSection = () => {
  // Typewriter effect state
  const [displayedName, setDisplayedName] = useState("");
  useEffect(() => {
    const typewriterText = "Sarabjeet Singh";
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-8 relative snap-start p-4"
    >
      <motion.div 
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }}}
        >
          <span className="border-r-2 border-blue-500 pr-1 animate-pulse">{displayedName}</span>
        </motion.h1>
        <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-2"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }}}
        >
          Mern Stack Developer &amp;  Web3 Developer
        </motion.p>
        <motion.p
            className="text-base text-gray-500 dark:text-gray-400"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }}}
        >
          I build dynamic and responsive web applications.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeSection; 