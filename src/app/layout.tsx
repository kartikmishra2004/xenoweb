import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XenoWeb",
  description: "XenoWeb IT Solutions offers expert web development services, specializing in e-commerce, education, and portfolio websites. We create responsive, user-friendly websites that help businesses succeed online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
    <body className={`${inter.className} bg-background text-foreground antialiased`}>
      <MouseMoveEffect />
      <Navbar />
      {children}
    </body>
  </html>
  );
}
