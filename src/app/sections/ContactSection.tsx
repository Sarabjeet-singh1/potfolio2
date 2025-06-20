"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const GitHubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.02 22 6.484 17.523 2 12 2Z" fill="currentColor"/></svg>
);

const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" fill="currentColor"/></svg>
);

const TwitterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.2 9.03a12.72 12.72 0 0 1-9.24-4.686 4.48 4.48 0 0 0 1.387 5.98 4.47 4.47 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.59 4.393c-.37.1-.76.154-1.16.154-.28 0-.55-.027-.81-.077a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57a9.1 9.1 0 0 0 2.24-2.31z" fill="currentColor"/></svg>
);

export default function ContactSection({ containerStagger, itemFade, spring }: any) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!formRef.current) return;
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center min-h-screen w-full snap-start p-6 sm:p-12 bg-transparent">
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
          className="text-xl text-gray-400 dark:text-gray-300 mb-10 text-center max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's connect! Use the form below to send me a message.
        </motion.p>
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full bg-white/20 dark:bg-gray-900/30 rounded-2xl shadow-lg p-8 flex flex-col gap-5 border border-gray-300 dark:border-gray-700 max-w-xl mx-auto animate-fadein backdrop-blur"
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
          >
            Send Message
          </button>
          {status === "success" && (
            <div className="text-green-500 text-center mt-2">Message sent successfully!</div>
          )}
          {status === "error" && (
            <div className="text-red-500 text-center mt-2">Something went wrong. Please try again.</div>
          )}
        </form>
      </motion.section>
    </section>
  );
} 