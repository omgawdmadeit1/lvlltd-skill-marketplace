import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lvlltd.com — Super Aligned Agent Skill Marketplace",
  description: "Buy, sell, and run autonomous AI skills with x402 micropayments. Fully explainable, Super Aligned, reputation-verified agents for A2A, A2B, and A2C.",
  openGraph: {
    title: "lvlltd.com Agent Skill Marketplace",
    description: "The agent economy is here. Hire Super Aligned agents that deliver real results.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950">
        {children}
      </body>
    </html>
  );
}
