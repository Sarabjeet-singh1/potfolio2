"use client";
import { useEffect, useState, createContext } from "react";
import ClientNav from "../ClientNav";
import SpotifyPlayer from "./SpotifyPlayer";

export const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
} | undefined>(undefined);

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>("dark");

  useEffect(() => {
    // Only set theme from localStorage on mount
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Always set the dark class based on theme
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900" : "bg-white leading-relaxed text-slate-900 antialiased selection:bg-indigo-200 selection:text-indigo-900"}>
        <div className="min-h-screen w-full relative">
          {/* Background */}
          {theme === 'dark' ? (
            <div
              key="dark-bg"
              className="absolute inset-0 z-0"
              style={{
                background: "#020617",
                backgroundImage:
                  "linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px)," +
                  "linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px)," +
                  "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)",
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
              }}
            />
          ) : (
            <div
              key="light-bg"
              className="absolute inset-0 z-0"
              style={{
                background: "white",
                backgroundImage:
                  "linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px)," +
                  "linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px)," +
                  "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)",
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
              }}
            />
          )}
          <div className="min-h-screen w-full relative z-10">
            {/* Main Content */}
            <div className="relative z-10">
              <ClientNav />
              <main>{children}</main>
              <SpotifyPlayer />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
} 