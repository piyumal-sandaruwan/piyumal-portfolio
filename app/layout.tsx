import type { Metadata } from "next";

import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piyumal Sandaruwan | DevOps • Cloud • Networking",
  description:
    "Piyumal Sandaruwan — ICT undergraduate focused on DevOps, cloud computing, networking and full-stack engineering.",
  keywords: [
    "Piyumal Sandaruwan",
    "DevOps",
    "Cloud",
    "AWS",
    "Docker",
    "Jenkins",
    "Next.js",
  ],
  metadataBase: new URL("http://localhost:3000"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}