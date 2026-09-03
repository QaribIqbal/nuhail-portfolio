import React from "react";
import { useInView } from "../../hooks/useInView";

export const StudioSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="studio"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium mb-3">
            WHO I AM
          </p>
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] tracking-tight font-normal leading-[1.15] text-[var(--text)] max-w-3xl">
            One person, built around one habit: finishing the boring part properly.
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Bio text */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[17px] sm:text-[20px] text-[var(--text)] leading-relaxed font-normal">
                I'm Noel, an AI automation engineer based in Lahore, working with
                agencies, SaaS teams, and real-estate operators who are tired of manual
                busywork. The interesting part of automation is rarely the AI — it's the
                exception handling, the testing, and the handoff document nobody reads
                until something breaks. That's the half I don't skip.
              </p>
              <p className="text-[15px] sm:text-[17px] text-[var(--text-muted)] leading-relaxed font-normal">
                Currently building out automation systems at BriskDev, alongside
                independent project work.
              </p>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-5 border-l border-[var(--line)] pl-6 sm:pl-8 space-y-8">
              <div className="relative">
                <span className="text-[12px] uppercase font-mono tracking-wider text-[var(--text-dim)] block mb-1">
                  CURRENT
                </span>
                <p className="text-[15px] sm:text-[16px] text-[var(--text)] font-normal leading-snug">
                  Independent AI automation work: agents, workflow systems, API
                  integrations, delivery design
                </p>
              </div>

              <div className="relative">
                <span className="text-[12px] uppercase font-mono tracking-wider text-[var(--text-dim)] block mb-1">
                  EDUCATION
                </span>
                <p className="text-[15px] sm:text-[16px] text-[var(--text)] font-normal leading-snug">
                  Computer Science, GCU Lahore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
