"use client";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./components/ClientThemeProvider";
import { Sun, Moon } from "lucide-react";

const sectionIds = ["home", "projects", "skills", "contact"];

export default function ClientNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<'light' | 'dark'>("dark");
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    setTheme('dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    // Scroll to home section on initial load
    const homeEl = document.getElementById("home");
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: "auto" });
    }
    const handleScroll = () => {
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="w-full flex justify-center items-center py-4 bg-white/80 dark:bg-gray-900/80 shadow-sm sticky top-0 z-50 backdrop-blur">
        <div className="flex gap-6 text-base font-medium flex-1 justify-center items-center">
          {sectionIds.map((id, idx) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`hover:text-blue-600 transition ${
                activeSection === id ? "text-blue-600 font-bold underline underline-offset-8" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          {themeCtx && (
            <button
              onClick={themeCtx.toggleTheme}
              className="ml-6 p-1 hover:scale-110 transition-all"
              aria-label="Toggle light/dark mode"
            >
              {themeCtx.theme === 'dark' ? (
                <Moon className="h-5 w-5" color="currentColor" />
              ) : (
                <Sun className="h-5 w-5" color="currentColor" />
              )}
            </button>
          )}
        </div>
      </nav>
    </>
  );
}