import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]">
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-20 sm:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Tagline & Contact */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[20px] font-heading tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Mainframe®
              </span>
              <span className="text-[24px] select-none leading-none">✳︎</span>
            </div>

            <p className="text-[24px] sm:text-[30px] md:text-[34px] font-normal leading-snug tracking-tight text-[var(--text)]">
              I turn repetitive work into systems that think, route, and act.
            </p>

            <div className="mt-8">
              <span className="text-[14px] text-[var(--text-muted)] mr-2">
                Reach us:
              </span>
              <a
                href="mailto:hello@mainframe.co"
                className="text-[15px] sm:text-[16px] text-white underline underline-offset-2 hover:opacity-70 transition-opacity font-normal"
              >
                hello@mainframe.co
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-[14px] sm:text-[15px] text-[var(--text-muted)]">
            <a
              href="https://www.linkedin.com/in/nuhail-iqbal-a93b1935b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://app.notion.com/p/TechBees-AI-Lead-Response-for-Real-Estate-3b0a34737b6681109648f37a61f61786"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Real-estate case study ↗
            </a>
            <a
              href="https://app.notion.com/p/TechBees-AI-Automation-for-Marketing-Creative-Agencies-3b0a34737b66817ba1cafae3aa98edd8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Agency case study ↗
            </a>
          </div>
        </div>

        {/* Small print */}
        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px] sm:text-[13px] text-[var(--text-dim)] font-mono">
          <p>Mainframe — Labs, Studio, Openings, Shop.</p>
          <p>© {new Date().getFullYear()} Noel (Nuhail Iqbal). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
