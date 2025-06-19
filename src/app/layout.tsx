import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarabjeet Singh | Portfolio",
  description: "Personal portfolio website for Sarabjeet Singh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 font-sans">
        <nav className="w-full flex justify-center items-center py-4 bg-white/80 dark:bg-gray-900/80 shadow-sm sticky top-0 z-50 backdrop-blur">
          <div className="flex gap-6 text-base font-medium">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </nav>
        <main className="pt-4 min-h-[90vh]">{children}</main>
      </body>
    </html>
  );
}
