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

      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Sections below the hero */}
      <main className="relative z-10 bg-black">
        {/* 1. #labs — What I Build + Selected Systems */}
        <LabsSection />

        {/* 2. #process — How I Work (Operating Loop + Working Principles) */}
        <ProcessSection />

        {/* 3. #studio — Who I Am (About + Timeline) */}
        <StudioSection />

        {/* 4. #openings — What I'm Open To */}
        <OpeningsSection />

        {/* 5. #shop — Templates & Blueprints (Coming Soon Waitlist) */}
        <ShopSection />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default App;
