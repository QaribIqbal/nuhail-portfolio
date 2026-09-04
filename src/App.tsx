import React, { useEffect } from "react";
import Lenis from "lenis";
import { BackgroundScrub } from "./components/BackgroundScrub";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MetaDemoSection } from "./components/sections/MetaDemoSection";
import { CostOfInactionSection } from "./components/sections/CostOfInactionSection";
import { FlywheelSection } from "./components/sections/FlywheelSection";
import { BuildingInPublicSection } from "./components/sections/BuildingInPublicSection";
import { ArchitectSection } from "./components/sections/ArchitectSection";
import { AuditSection } from "./components/sections/AuditSection";
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

      {/* Top Fixed Navigation with Kinetic PP Neue Corp Mobile Menu */}
      <Navbar />

      {/* Section 1: Hero (Above-The-Fold) */}
      <HeroSection />

      {/* Blueprint Content Sections */}
      <main className="relative z-10 bg-black">
        {/* Section 2: The Meta-Demo (Trust Generator) */}
        <MetaDemoSection />

        {/* Section 3: The Cost of Inaction (Interactive Lead Leakage Calculator) */}
        <CostOfInactionSection />

        {/* Section 4: The Unique Mechanism (The Precision Lead-Recovery Flywheel™) */}
        <FlywheelSection />

        {/* Section 5: "Building in Public" (Technical Audits & Teardowns) */}
        <BuildingInPublicSection />

        {/* Section 6: About the Architect (Stealth Framing & Capabilities) */}
        <ArchitectSection />

        {/* Section 7: Frictionless Call to Action (10-Min System Audit) */}
        <AuditSection />
      </main>

      {/* Blueprint Footer */}
      <Footer />
    </div>
  );
};

export default App;
