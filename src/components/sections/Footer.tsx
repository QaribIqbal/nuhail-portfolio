import React from "react";

const navLinks = [
  { label: "Labs", href: "#labs" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "Openings", href: "#openings" },
  { label: "Shop", href: "#shop" },
];

export const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-[var(--line)] bg-black"
      aria-label="Site footer"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 py-16 sm:py-20">

        {/* Top row: wordmark + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-block font-heading text-white text-[20px] sm:text-[22px] tracking-tight mb-3 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nuhail Iqbal
            </a>
            <p className="text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
              I turn repetitive work into systems that think, route, and act.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-muted)] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row: contact + small print */}
        <div className="border-t border-[var(--line)] pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-[var(--text-muted)]">
            <span>
              Reach me:{" "}
              <a
                href="mailto:hello@mainframe.co"
                className="text-white hover:text-[var(--text-muted)] transition-colors underline underline-offset-4 decoration-[var(--line-strong)]"
              >
                hello@mainframe.co
              </a>
            </span>
            <span className="hidden sm:inline text-[var(--text-dim)]" aria-hidden="true">
              ·
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--text-muted)] transition-colors"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="text-xs font-mono text-[var(--text-dim)]">
            Nuhail Iqbal — Labs, Studio, Openings, Shop.
          </p>
        </div>
      </div>
    </footer>
  );
};
