import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientNav from "./ClientNav";
import SpotifyPlayer from "./components/SpotifyPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarabjeet Singh - Portfolio",
  description: "Mern Stack and Web3 Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
          <div className="min-h-screen w-full relative">
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
            <div className="relative z-10">
              <ClientNav />
              <main>{children}</main>
              <SpotifyPlayer />
              {/* Footer with social links */}
              <footer className="w-full flex flex-col items-center gap-2 p-4 text-slate-500 text-xs z-20 mt-16">
                <div className="flex gap-5 mb-1">
                  <a href="https://github.com/Sarabjeet-singh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.02 22 6.484 17.523 2 12 2Z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sarabjeet-singh-79575b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="group-hover:scale-110 transition-transform"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
                  </a>
                  <a href="https://x.com/sarabjeet___?s=21" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition group">
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" className="group-hover:scale-110 transition-transform">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                </div>
                <div>&copy; {new Date().getFullYear()} Sarabjeet Singh. All rights reserved.</div>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
