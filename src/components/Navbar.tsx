import React, { useEffect, useState } from "react";
import { AmbientSoundToggle } from "./AmbientSoundToggle";

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Live Demo", href: "#demo" },
    { label: "Lead Leakage", href: "#cost" },
    { label: "Flywheel", href: "#flywheel" },
    { label: "Builds", href: "#builds" },
    { label: "Architect", href: "#about" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-[var(--line)] py-3 sm:py-4"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo (left) */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-[21px] sm:text-[25px] tracking-tight text-white select-none inline-flex items-center font-heading"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mainframe®
          </a>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none inline-block leading-none"
            style={{ letterSpacing: "-0.02em" }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links (center, hidden below lg) */}
        <nav
          className="hidden lg:flex items-center text-[16px] xl:text-[17px] text-white"
          aria-label="Desktop Navigation"
        >
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="hover:opacity-60 transition-opacity font-normal"
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="select-none mx-2.5 text-[var(--text-dim)]">·</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Action Area: Ambient Sound Toggle + Primary Audit CTA + Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Ambient Sound Toggle (fixed near nav top-right) */}
          <AmbientSoundToggle />

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <a
              href="#audit"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="inline-flex items-center justify-center bg-white text-black font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-neutral-200 transition-all cursor-pointer active:scale-[0.98] shadow-sm"
            >
              Audit My System ↗
            </a>
          </div>

          {/* Mobile hamburger (visible below lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 p-1 focus:outline-none z-50 relative cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-Screen Kinetic Navigation Overlay (PP Neue Corp Tight Ultrabold typography) */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-12 py-24 lg:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col justify-center gap-2 sm:gap-4 my-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-2 block">
            Navigation Index
          </span>
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="text-[44px] sm:text-[62px] leading-[0.92] font-corp uppercase text-white hover:text-neutral-400 transition-colors tracking-tight"
              style={{
                transitionDelay: `${idx * 40}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#audit"
            onClick={() => {
              handleLinkClick();
              if (onContactClick) onContactClick();
            }}
            className="text-[44px] sm:text-[62px] leading-[0.92] font-corp uppercase text-white underline underline-offset-8 decoration-1 hover:text-neutral-400 transition-colors tracking-tight mt-2"
          >
            SCHEDULE AUDIT
          </a>
        </div>

        {/* Footer info inside mobile menu */}
        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[var(--text-dim)]">
          <span>MAINFRAME® • LEAD-TO-BOOKING ARCHITECT</span>
          <span>LATENCY: &lt;60s GUARANTEED</span>
        </div>
      </div>
    </>
  );
};
