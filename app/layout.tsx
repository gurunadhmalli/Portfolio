import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gurunadh Malli — Founding Engineer (FDE)",
  description:
    "Founding Engineer and Forward Deployed Engineer building production Generative AI and Agentic AI systems: multi-agent workflows, advanced RAG and MCP integrations.",
  keywords: [
    "Gurunadh Malli",
    "Forward Deployed Engineer",
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "RAG",
    "MCP",
    "LangGraph",
  ],
  authors: [{ name: "Gurunadh Malli" }],
  openGraph: {
    title: "Gurunadh Malli — Founding Engineer (FDE)",
    description:
      "Production Generative AI and Agentic AI systems: multi-agent workflows, advanced RAG and MCP integrations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
