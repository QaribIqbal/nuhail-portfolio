import React, { useEffect, useRef, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

export const HeroSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const touchedLeftRef = useRef(false);
  const touchedRightRef = useRef(false);

  // Typewriter starts when revealed
  const typewriterText =
    "Glad you stopped in. Good taste tends to find me. Now, what are we building?";
  const { displayed, done } = useTypewriter(isRevealed ? typewriterText : "", {
    speed: 36,
    startDelay: 250,
  });

  // Cursor-sweep reveal & fallback accessibility
  useEffect(() => {
    // 1. Instant reveal for touch devices or reduced motion
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    // 2. Keyboard navigation triggers immediate reveal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Tab" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "Enter"
      ) {
        setIsRevealed(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 3. Auto-reveal after 4.5 seconds regardless
    const autoTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 4500);

    // 4. Cursor sweep: track left and right edge boundaries
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth || 1000;
      const leftBoundary = Math.max(60, width * 0.15);
      const rightBoundary = Math.min(width - 60, width * 0.85);

      if (e.clientX <= leftBoundary) {
        touchedLeftRef.current = true;
      }
      if (e.clientX >= rightBoundary) {
        touchedRightRef.current = true;
      }

      if (touchedLeftRef.current && touchedRightRef.current) {
        setIsRevealed(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(autoTimer);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@mainframe.co");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email to clipboard", err);
    }
  };

  const pillButtons = [
    { label: "Pitch an idea", href: "#openings", primary: true },
    { label: "Work with me", href: "#openings", primary: false },
    { label: "Send a brief hello", href: "mailto:hello@mainframe.co", primary: false },
    { label: "See how I work", href: "#process", primary: false },
  ];

  return (
    <section
      className="relative z-1 h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden"
      style={{ zIndex: 1 }}
      aria-label="Hero Introduction"
    >
      <div className="max-w-xl lg:max-w-2xl relative z-10 w-full">
        {/* 1. Kicker badge */}
        <div
          className="pointer-events-none select-none mb-3 sm:mb-4 inline-flex items-center gap-2 font-mono"
          style={{
            fontSize: "clamp(11px, 2vw, 13px)",
            lineHeight: 1.4,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
          <span>Hey there, meet A.R.I.A — Adaptive Response Interface Agent</span>
        </div>

        {/* 2. Typewriter headline */}
        <h1
          className="mb-4 sm:mb-5 transition-opacity duration-500 font-heading text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          style={{
            fontSize: "clamp(24px, 3.4vw, 40px)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            minHeight: "72px",
            opacity: isRevealed ? 1 : 0,
          }}
        >
          {displayed}
          {isRevealed && !done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[3px] animate-blink"
              aria-hidden="true"
            />
          )}
        </h1>

        {/* 3. Subheading — first person, dry editorial tone */}
        <p
          className="text-[15px] sm:text-[17px] text-[var(--text-muted)] max-w-lg mb-6 leading-relaxed font-normal transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          I design, build, and run AI automation systems that actually work — exception handling, testing, and handoffs included.
        </p>

        {/* 4. Action CTAs — Pill Buttons matching editorial design */}
        <div
          className="flex flex-col gap-4 transition-all"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
            pointerEvents: isRevealed ? "auto" : "none",
          }}
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {pillButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`inline-flex items-center justify-center rounded-full text-[13px] sm:text-[14px] px-5 py-2.5 whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                  btn.primary
                    ? "bg-white text-black font-semibold hover:bg-neutral-200 shadow-lg"
                    : "text-white bg-black/60 backdrop-blur-md border border-[var(--line-strong)] hover:border-white hover:bg-white/10 font-normal"
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Persistent Contact Line */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-dim)] pt-2 font-mono">
            <span>Reach me:</span>
            <button
              onClick={handleCopyEmail}
              className="text-white hover:text-[var(--text-muted)] underline underline-offset-4 decoration-[var(--line-strong)] hover:decoration-white transition-colors cursor-pointer bg-transparent border-0 p-0"
              title="Click to copy email address"
            >
              hello@mainframe.co
            </button>
            {copied && (
              <span className="text-emerald-400 text-xs ml-1" role="status">
                copied
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
