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
    { label: "Labs", href: "#labs" },
    { label: "Studio", href: "#studio" },
    { label: "Openings", href: "#openings" },
    { label: "Shop", href: "#shop" },
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
            className="text-[21px] sm:text-[26px] tracking-tight text-white select-none inline-flex items-center font-heading"
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

        {/* Desktop nav links (center, hidden below md) */}
        <nav
          className="hidden md:flex items-center text-[20px] lg:text-[22px] text-white"
          aria-label="Desktop Navigation"
        >
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="select-none mx-2 text-[var(--text-dim)]">·</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Action Area: Ambient Sound Toggle + CTA + Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Ambient Sound Toggle (fixed near nav top-right) */}
          <AmbientSoundToggle />

          {/* Desktop CTA (hidden below md) */}
          <div className="hidden md:block">
            <a
              href="#openings"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="text-[20px] lg:text-[22px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity whitespace-nowrap"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger (visible below md) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 p-1 focus:outline-none"
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

      {/* Mobile overlay (z-index: 40) */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={handleLinkClick}
            className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#openings"
          onClick={() => {
            handleLinkClick();
            if (onContactClick) onContactClick();
          }}
          className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};
