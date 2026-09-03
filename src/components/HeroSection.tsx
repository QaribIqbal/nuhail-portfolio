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
    speed: 38,
    startDelay: 300,
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
    { label: "Pitch an idea", href: "#openings" },
    { label: "Work with me", href: "#openings" },
    { label: "Send a brief hello", href: "mailto:hello@mainframe.co" },
    { label: "See how I work", href: "#process" },
  ];

  return (
    <section
      className="relative z-1 h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-xl relative z-10 w-full">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.3,
            fontWeight: 400,
            color: "var(--text)",
            filter: "blur(4px)",
            WebkitFilter: "blur(4px)",
          }}
          aria-hidden="true"
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe's Adaptive Response Interface Agent.
        </div>

        {/* 2. Typewriter text (revealed via cursor sweep or timer) */}
        <p
          className="mb-5 sm:mb-6 transition-opacity duration-500"
          style={{
            color: "var(--text)",
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: "54px",
            opacity: isRevealed ? 1 : 0,
          }}
        >
          {displayed}
          {isRevealed && !done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons (fade in on reveal) */}
        <div
          className="flex flex-wrap gap-y-1 transition-all"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            pointerEvents: isRevealed ? "auto" : "none",
          }}
        >
          {pillButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              {btn.label}
            </a>
          ))}

          {/* Outline pill button with email and copy icon */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer active:scale-[0.98] group relative"
          >
            <span>
              Reach us:{" "}
              <span className="underline underline-offset-1 font-normal">
                hello@mainframe.co
              </span>
            </span>

            {/* 12x12 copy icon */}
            <svg
              className="w-3 h-3 flex-shrink-0 transition-transform group-hover:scale-110"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="1.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="1.5"
                y="3.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>

            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-medium px-2 py-0.5 rounded shadow pointer-events-none">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
