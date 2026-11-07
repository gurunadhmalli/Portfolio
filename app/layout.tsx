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

const siteUrl = "https://portfolio-coral-mu-17.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    images: [{ url: "/profile.jpg", width: 1200, height: 1500, alt: "Gurunadh Malli" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurunadh Malli — Founding Engineer (FDE)",
    images: ["/profile.jpg"],
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
