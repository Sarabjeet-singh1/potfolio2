"use client";
import { motion } from 'framer-motion';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../components/ClientThemeProvider';

const HomeSection = () => {
  // Typewriter effect state
  const [displayedName, setDisplayedName] = useState("");
  const themeCtx = useContext(ThemeContext);
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
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }}}
        >
          {themeCtx?.theme === 'dark' ? (
            <span className="text-white border-r-2 border-blue-500 pr-1 animate-pulse font-extrabold text-5xl sm:text-6xl">{displayedName}</span>
          ) : (
            <span style={{ color: '#1f2937' }} className="border-r-2 border-blue-500 pr-1 animate-pulse font-extrabold text-5xl sm:text-6xl">{displayedName}</span>
          )}
        </motion.h1>
        <motion.p
            className="text-lg sm:text-xl font-semibold mb-2"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }}}
        >
          {themeCtx?.theme === 'dark' ? (
            <span style={{ color: '#d1d5db' }}>Mern Stack Developer & Web3 Developer</span>
          ) : (
            <span style={{ color: '#1f2937' }}>Mern Stack Developer & Web3 Developer</span>
          )}
        </motion.p>
        <motion.p
            className="text-base"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }}}
        >
          {themeCtx?.theme === 'dark' ? (
            <span style={{ color: '#9ca3af' }}>Passionate about building modern web applications and learning new technologies.</span>
          ) : (
            <span style={{ color: '#4b5563' }}>Passionate about building modern web applications and learning new technologies.</span>
          )}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeSection;