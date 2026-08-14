import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IntentProvider } from "@/components/site/intent-provider";
import { HashScrollManager } from "@/components/site/hash-scroll-manager";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Nuhail Iqbal — AI Automation Engineer",
  description:
    "AI agents, workflow automation, API integrations, voice and chat systems, and practical human handoffs by Nuhail Iqbal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <HashScrollManager />
        <IntentProvider>{children}</IntentProvider>
      </body>
    </html>
  );
}
