import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientNav from "./ClientNav";
import SpotifyPlayer from "./components/SpotifyPlayer";
import ClientThemeProvider from "./components/ClientThemeProvider";

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
    <html lang="en">
      <body className={inter.className}>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}