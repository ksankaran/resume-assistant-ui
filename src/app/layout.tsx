import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Velu Sankaran | AI Resume Assistant",
  description:
    "Chat with an AI assistant to learn about Velu Sankaran - Full Stack Architect with 18+ years of experience building scalable systems.",
  keywords: [
    "Velu Sankaran",
    "Full Stack Architect",
    "Software Engineer",
    "Resume",
    "AI Chat",
  ],
  authors: [{ name: "Velu Sankaran" }],
  openGraph: {
    title: "Velu Sankaran | AI Resume Assistant",
    description:
      "Chat with an AI to learn about my 18+ years of experience in software architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NuqsAdapter>{children}</NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
