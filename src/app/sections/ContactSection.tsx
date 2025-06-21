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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!formRef.current) return;
    
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
          Let&apos;s connect! Use the form below to send me a message.
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
          {status === 'success' && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center mt-4">Failed to send message. Please check your form inputs and try again.</p>
          )}
        </form>
      </motion.section>
    </section>
  );
} 