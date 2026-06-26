import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVIQ — AI Marketing Operating System",
  description: "Research markets, validate ideas, analyze competitors, generate campaigns, build brand assets, and optimize growth in one intelligent workspace with autonomous AI employees.",
  keywords: ["AI Marketing", "Marketing OS", "Autonomous AI Agents", "Market Research AI", "SaaS Marketing", "Noviq"],
  authors: [{ name: "Noviq Team" }],
  openGraph: {
    title: "NOVIQ — AI Marketing Operating System",
    description: "The autonomous workspace powered by AI employees that scales your growth. Research, analyze, design, and execute seamlessly.",
    type: "website",
    locale: "en_US",
    url: "https://noviq.ai",
    siteName: "NOVIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVIQ — AI Marketing Operating System",
    description: "The autonomous workspace powered by AI employees that scales your growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-brand-noir text-brand-powder antialiased overflow-x-hidden selection:bg-brand-forsythia/20 selection:text-brand-forsythia`}
      >
        {children}
      </body>
    </html>
  );
}
