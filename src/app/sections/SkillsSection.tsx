"use client";
import { motion } from "framer-motion";

export default function SkillsSection({ skills, containerStagger, itemFade, spring }: any) {
  return (
    <section id="skills" className="flex flex-col justify-center items-center min-h-screen w-full snap-start p-4 sm:p-8 bg-transparent overflow-hidden">
      <motion.section
        className="w-full max-w-5xl flex flex-col items-center justify-center flex-grow min-h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-400 dark:text-gray-300 mb-6 text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to build amazing things.
        </motion.p>
        <motion.ul 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center mx-auto overflow-visible"
          variants={containerStagger} 
          initial="hidden" 
          animate="visible"
        >
          {skills.map((skill: any, i: number) => (
            <a
              key={skill.name}
              href={`https://www.google.com/search?q=${encodeURIComponent(skill.name + ' technology')}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              title={skill.name}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <motion.li
                variants={itemFade}
                whileHover={{ scale: 1.13, boxShadow: "0 8px 32px 0 rgba(139,92,246,0.25)", borderColor: "#818cf8", zIndex: 30 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                transition={{ ...spring, delay: 0.2 + i * 0.08 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white/20 dark:bg-gray-900/30 border border-indigo-300/30 dark:border-indigo-700/40 rounded-2xl shadow-lg w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 px-2 py-3 sm:px-3 sm:py-4 m-1 mb-4 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 mb-1 flex items-center justify-center rounded-full bg-indigo-400/20 text-indigo-400 text-base shadow-inner animate-float" aria-label={skill.name}>
                  {(() => {
                    const logoMap: Record<string, string> = {
                      'JavaScript': '/javascript.svg',
                      'React': '/react.svg',
                      'TypeScript': '/typescript.svg',
                      'Tailwind CSS': '/tailwind.svg',
                      'Next.js': '/next.svg',
                      'Redux': '/redux.svg',
                      'Express.js': '/express.svg',
                      'Node.js': '/node.svg',
                      'GitHub': '/github.svg',
                      'MongoDB': '/mongodb.svg',
                      'Solana': '/solana.svg',
                      'Solidity': '/solidity.svg',
                    };
                    const logoFile = logoMap[skill.name];
                    if (logoFile) {
                      return <img src={logoFile} alt={skill.name} className="w-4 h-4 sm:w-5 sm:h-5" />;
                    }
                    return <span>💡</span>;
                  })()}
                </div>
                <span className="font-bold text-xs sm:text-sm text-indigo-200 mb-1 drop-shadow">{skill.name}</span>
                <div className="absolute -bottom-2 -left-2 w-7 h-7 sm:-bottom-4 sm:-left-4 sm:w-10 sm:h-10 bg-indigo-400/10 rounded-full blur-2xl z-0 animate-pulse" />
              </motion.li>
            </a>
          ))}
        </motion.ul>
      </motion.section>
    </section>
  );
} 