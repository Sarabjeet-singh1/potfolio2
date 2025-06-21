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
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
