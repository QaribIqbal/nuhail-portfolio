import React, { useEffect } from "react";
import Lenis from "lenis";
import { BackgroundScrub } from "./components/BackgroundScrub";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { LabsSection } from "./components/sections/LabsSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { StudioSection } from "./components/sections/StudioSection";
import { OpeningsSection } from "./components/sections/OpeningsSection";
import { ShopSection } from "./components/sections/ShopSection";
import { Footer } from "./components/sections/Footer";
import { CursorFollower } from "./components/ui/cursor-follower";

// Whitespace pause — pattern interrupt between "How I Work" and "Studio".
// One centered sentence, generous vertical space. The emptiness is the effect.
const WhitespacePause: React.FC = () => (
  <section
    className="border-t border-[var(--line)] py-32 sm:py-40 px-5 flex items-center justify-center text-center"
    aria-label="Interlude"
  >
    <p
      className="text-[var(--text-muted)] text-base sm:text-lg max-w-sm sm:max-w-md leading-relaxed"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Most automation fails at the handoff. I don't consider a build done until that part's solved.
    </p>
  </section>
);

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Intercept internal anchor clicks for Lenis smooth scrolling with navbar offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -60 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-body selection:bg-white selection:text-black">
      {/* Interactive cursor follower */}
      <CursorFollower />

      {/* Background image sequence scrubbed by mouse in hero */}
      <BackgroundScrub />

      {/* Top fixed navigation */}
      <Navbar />

      {/* Section 1: Hero — cursor-tracking portrait animation + sweep reveal */}
      <HeroSection />

      {/* Main content — solid black backdrop over the fixed hero frame */}
      <main className="relative z-10 bg-black">
        {/* #labs — What I Build + Selected Systems */}
        <LabsSection />

        {/* #process — How I Work operating loop + Working Principles */}
        <ProcessSection />

        {/* Pattern interrupt: whitespace pause before Studio */}
        <WhitespacePause />

        {/* #studio — Bio + timeline */}
        <StudioSection />

        {/* #openings — Availability note */}
        <OpeningsSection />

        {/* #shop — Template blueprints (coming soon) */}
        <ShopSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
