import React, { useEffect, useRef, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

export const HeroSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const touchedLeftRef = useRef(false);
  const touchedRightRef = useRef(false);

  // Typewriter starts when revealed - Outcome headline from Blueprint
  const typewriterText =
    "I build 24/7 autonomous booking engines that recover missed calls and capture hot leads in under 60 seconds.";
  const { displayed, done } = useTypewriter(isRevealed ? typewriterText : "", {
    speed: 30,
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
    { label: "Pitch an idea", href: "#openings" },
    { label: "Work with me", href: "#openings" },
    { label: "Send a brief hello", href: "mailto:hello@mainframe.co" },
    { label: "See how I work", href: "#process" },
  ];

  return (
    <section
      className="relative z-1 h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-xl lg:max-w-2xl relative z-10 w-full">
        {/* 1. Kicker / Micro-anchor badge */}
        <div
          className="pointer-events-none select-none mb-3 sm:mb-4 inline-flex items-center gap-2"
          style={{
            fontSize: "clamp(11px, 2vw, 13px)",
            lineHeight: 1.4,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
          <span>AI SYSTEMS & LEAD-TO-BOOKING ARCHITECT</span>
        </div>

        {/* 2. Typewriter headline (revealed via cursor sweep or timer) */}
        <h1
          className="mb-4 sm:mb-5 transition-opacity duration-500 font-heading text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          style={{
            fontSize: "clamp(22px, 3.2vw, 36px)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            minHeight: "84px",
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

        {/* 3. Sub-headline (The Mechanism) - High contrast white/neutral-200 */}
        <p
          className="text-[15px] sm:text-[17px] text-neutral-200 max-w-lg lg:max-w-xl mb-6 leading-relaxed font-normal transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          Stop bleeding high-intent customers to your competitors. I install custom AI voice receptionists and instant SMS missed-call text-backs that turn dropped calls into booked calendar appointments on autopilot.
        </p>

        {/* 4. Action CTAs + Micro-anchor */}
        <div
          className="flex flex-col gap-4 transition-all"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
            pointerEvents: isRevealed ? "auto" : "none",
          }}
        >
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary CTA */}
            <a
              href="#labs"
              className="inline-flex items-center justify-center bg-white text-black font-semibold rounded-full text-[14px] sm:text-[15px] px-6 py-2.5 whitespace-nowrap hover:bg-neutral-200 transition-colors duration-200 cursor-pointer shadow-xl active:scale-[0.98] gap-2"
            >
              <span>📞</span>
              <span>Call My 24/7 AI Assistant</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#labs"
              className="inline-flex items-center justify-center text-white bg-black/60 backdrop-blur-md border border-white/40 rounded-full text-[14px] sm:text-[15px] px-5 py-2.5 whitespace-nowrap hover:border-white hover:bg-white/20 transition-colors duration-200 cursor-pointer active:scale-[0.98] gap-2 shadow-lg"
            >
              <span>▶</span>
              <span>Watch the 3-Min Demo</span>
            </a>

            {/* Direct CTA */}
            <a
              href="#openings"
              className="inline-flex items-center justify-center text-neutral-200 hover:text-white text-[13px] sm:text-[14px] px-3 py-2 underline underline-offset-4 transition-colors font-medium drop-shadow-sm"
            >
              Schedule 10-Min Audit ↗
            </a>
          </div>

          {/* Social Proof / Micro-Anchor */}
          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-neutral-300 font-mono tracking-tight pt-1 drop-shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Engineered on an enterprise-grade stack (Vapi, GoHighLevel, & ElevenLabs) with a guaranteed 60-second response latency.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
