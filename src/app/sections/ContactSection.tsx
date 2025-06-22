"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

interface ContactSectionProps {
  containerStagger: {
    visible: {
      transition: {
        staggerChildren: number;
      };
    };
  };
  spring: {
    type: 'spring';
    stiffness: number;
    damping: number;
  };
}

export default function ContactSection({ containerStagger, spring }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!formRef.current) return;
    setLoading(true);
    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      if (response.status === 200) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
        console.error('EmailJS response:', response);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center min-h-screen w-full snap-start p-4 sm:p-8 bg-transparent">
      <motion.section
        className="w-full max-w-xl flex flex-col items-center justify-center"
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
          Contact
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-400 dark:text-gray-300 mb-6 text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let&apos;s connect! Use the form below to send me a message.
        </motion.p>
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white/20 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl p-8 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition resize-none"
            required
          />
          {/* Google reCAPTCHA can be added here if needed */}
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-bold shadow transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status === 'success' && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center mt-4">Failed to send message. Please check your form inputs and try again.</p>
          )}
        </form>
        {/* Social Links and Copyright */}
        <div className="flex flex-col items-center mt-16">
          <div className="flex gap-5 mb-1">
            <a href="https://github.com/Sarabjeet-singh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.02 22 6.484 17.523 2 12 2Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/sarabjeet-singh-79575b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-white transition group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
            </a>
            <a href="https://x.com/sarabjeet___?s=21" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-black dark:hover:text-white transition group">
              <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" className="group-hover:scale-110 transition-transform">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
          </div>
          <div className="text-xs text-slate-500 mt-1">&copy; {new Date().getFullYear()} Sarabjeet Singh. All rights reserved.</div>
        </div>
      </motion.section>
    </section>
  );
} 