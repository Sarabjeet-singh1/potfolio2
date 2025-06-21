import "./globals.css";
import type { Metadata } from "next";
import ClientNav from "./ClientNav";

export const metadata: Metadata = {
  title: "Sarabjeet Singh | Portfolio",
  description: "Personal portfolio website for Sarabjeet Singh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 font-sans">
        <div className="min-h-screen w-full bg-[#020617] relative">
          {/* Dark Sphere Grid Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#020617",
              backgroundImage: `
                linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
              `,
              backgroundSize: "32px 32px, 32px 32px, 100% 100%",
            }}
          />
          {/* Main Content */}
          <ClientNav />
          <main className="pt-4 relative z-10">{children}</main>
          {/* Footer with social links */}
          <footer className="w-full flex flex-col items-center gap-2 p-4 bg-[#020617] backdrop-blur-sm text-gray-400 text-xs z-20">
            <div className="flex gap-5 mb-1">
              <a href="https://github.com/Sarabjeet-singh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.02 22 6.484 17.523 2 12 2Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/sarabjeet-singh-79575b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" fill="currentColor"/></svg>
              </a>
              <a href="https://x.com/sarabjeet___?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition group">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.2 9.03a12.72 12.72 0 0 1-9.24-4.686 4.48 4.48 0 0 0 1.387 5.98 4.47 4.47 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.59 4.393c-.37.1-.76.154-1.16.154-.28 0-.55-.027-.81-.077a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57a9.1 9.1 0 0 0 2.24-2.31z" fill="currentColor"/></svg>
              </a>
            </div>
            <div>&copy; {new Date().getFullYear()} Sarabjeet Singh. All rights reserved.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
