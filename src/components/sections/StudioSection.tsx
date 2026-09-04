import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const timeline = [
  {
    period: "Education",
    detail: "Computer Science, GCU Lahore",
  },
  {
    period: "Current",
    detail:
      "Independent AI automation work: agents, workflow systems, API integrations, delivery design. Building out automation systems at BriskDev alongside independent project work.",
  },
];

export const StudioSection: React.FC = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.05);
  const { ref: bioRef, visible: bioVisible } = useScrollReveal(0.05);
  const { ref: timelineRef, visible: timelineVisible } = useScrollReveal(0.05);

  const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 py-24 sm:py-32">

        {/* Header */}
        <div ref={headerRef}>
          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(headerVisible)}
          >
            WHO I AM
          </p>
          <h2
            id="studio-heading"
            className="font-corp uppercase text-white max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4.8vw, 60px)",
              lineHeight: 0.93,
              letterSpacing: "-0.01em",
              ...revealStyle(headerVisible, 60),
            }}
          >
            One person, built around one habit:
            <br className="hidden sm:block" /> finishing the boring part properly.
          </h2>
        </div>

        {/* Bio */}
        <div
          ref={bioRef}
          className="mt-12 sm:mt-16 max-w-2xl"
        >
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed"
            style={revealStyle(bioVisible)}
          >
            I'm Nuhail, an AI automation engineer based in Lahore, working with agencies, SaaS
            teams, and real-estate operators who are tired of manual busywork. The interesting
            part of automation is rarely the AI — it's the exception handling, the testing, and
            the handoff document nobody reads until something breaks. That's the half I don't skip.
          </p>
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed mt-6"
            style={revealStyle(bioVisible, 80)}
          >
            Currently building out automation systems at BriskDev, alongside independent project work.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="mt-16 sm:mt-20 max-w-2xl">
          <h3
            className="font-heading text-white text-[15px] sm:text-[16px] mb-6"
            style={revealStyle(timelineVisible)}
          >
            Timeline
          </h3>
          <ol className="divide-y divide-[var(--line)]" role="list">
            {timeline.map((item, i) => (
              <li
                key={item.period}
                className="py-5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10"
                style={revealStyle(timelineVisible, 60 + i * 80)}
              >
                <span className="text-xs font-mono text-[var(--text-dim)] w-24 shrink-0 pt-0.5 uppercase tracking-wider">
                  {item.period}
                </span>
                <p className="text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
