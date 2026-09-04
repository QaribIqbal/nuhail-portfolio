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
                className="text-[24px] sm:text-[28px] font-corp tracking-tight"
              >
                MAINFRAME®
              </span>
              <span className="text-[24px] select-none leading-none">✳︎</span>
            </div>

            <p className="text-[22px] sm:text-[28px] md:text-[32px] font-heading font-medium leading-snug tracking-tight text-[var(--text)]">
              I build 24/7 autonomous booking engines that recover missed calls and capture hot leads in under 60 seconds.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-3 py-1.5 rounded-full"
              >
                ● 24/7 AI RECEPTIONIST LIVE
              </a>
              <a
                href="mailto:hello@mainframe.co"
                className="text-[14px] sm:text-[15px] text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                hello@mainframe.co
              </a>
            </div>
          </div>

          {/* Blueprint Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-[14px] sm:text-[15px] text-[var(--text-muted)]">
            <a href="#demo" className="hover:text-white transition-colors">
              Meta-Demo ↗
            </a>
            <a href="#cost" className="hover:text-white transition-colors">
              Leakage Calculator ↗
            </a>
            <a href="#flywheel" className="hover:text-white transition-colors">
              The Flywheel ↗
            </a>
            <a href="#builds" className="hover:text-white transition-colors">
              Build in Public ↗
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About Architect ↗
            </a>
            <a
              href="https://www.linkedin.com/in/nuhail-iqbal-a93b1935b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Small print */}
        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px] sm:text-[13px] text-[var(--text-dim)] font-mono">
          <p>Mainframe® — Personal Engineering & AI Systems Architecture Hub.</p>
          <p>© {new Date().getFullYear()} Nuhail Iqbal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
