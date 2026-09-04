import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const steps = [
  {
    label: "Audit",
    body: "Find the recurring delay, repetition, or missed handoff that's actually worth solving.",
  },
  {
    label: "Map",
    body: "Define inputs, decisions, owners, exceptions, and the human fallback before any building starts.",
  },
  {
    label: "Build",
    body: "Connect the channels, tools, data, and custom logic the map actually calls for.",
  },
  {
    label: "Test",
    body: "Exercise the normal path, the edge cases, the escalation, and the recovery.",
  },
  {
    label: "Handoff",
    body: "Document ownership, monitoring, and support boundaries in plain language.",
  },
];

const principles = [
  "Fix the process before you automate it.",
  "Start with the smallest useful system.",
  "Design the human fallback before launch, not after something breaks.",
  "Document what future operators will actually need.",
  "Measure usefulness, not novelty.",
];

export const ProcessSection: React.FC = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.05);
  const { ref: stepsRef, visible: stepsVisible } = useScrollReveal(0.05);
  const { ref: principlesRef, visible: principlesVisible } = useScrollReveal(0.05);

  const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 py-24 sm:py-32">

        {/* Header */}
        <div ref={headerRef}>
          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(headerVisible)}
          >
            THE OPERATING LOOP
          </p>
          <h2
            id="process-heading"
            className="font-corp uppercase text-white max-w-2xl"
            style={{
              fontSize: "clamp(36px, 5.5vw, 68px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              ...revealStyle(headerVisible, 60),
            }}
          >
            Map carefully.
            <br className="hidden sm:block" /> Build narrowly.
            <br className="hidden sm:block" /> Hand off clearly.
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="mt-16 sm:mt-20">
          <ol className="divide-y divide-[var(--line)]" role="list">
            {steps.map((step, i) => (
              <li
                key={step.label}
                className="py-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10"
                style={revealStyle(stepsVisible, i * 80)}
              >
                <span className="text-xs font-mono text-[var(--text-dim)] w-16 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 flex-1">
                  <h3
                    className="font-heading text-white text-[16px] sm:text-[17px] w-28 shrink-0 mb-1 sm:mb-0"
                  >
                    {step.label}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--line)] my-16 sm:my-20" />

        {/* Working Principles */}
        <div ref={principlesRef}>
          <h3
            className="font-heading text-white text-[17px] sm:text-[18px] mb-8"
            style={revealStyle(principlesVisible)}
          >
            Working Principles
          </h3>
          <ul className="space-y-0 divide-y divide-[var(--line)]" role="list">
            {principles.map((principle, i) => (
              <li
                key={i}
                className="py-4 flex items-start gap-6"
                style={revealStyle(principlesVisible, 60 + i * 80)}
              >
                <span
                  className="text-xs font-mono text-[var(--text-dim)] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  —
                </span>
                <p className="text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
                  {principle}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
