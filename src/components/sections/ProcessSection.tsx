import React from "react";
import { useInView } from "../../hooks/useInView";

export const ProcessSection: React.FC = () => {
  const { ref: loopRef, isInView: loopInView } = useInView();
  const { ref: principlesRef, isInView: principlesInView } = useInView();

  const steps = [
    {
      step: "01",
      name: "Audit",
      description:
        "Find the recurring delay, repetition, or missed handoff that's actually worth solving.",
    },
    {
      step: "02",
      name: "Map",
      description:
        "Define inputs, decisions, owners, exceptions, and the human fallback before any building starts.",
    },
    {
      step: "03",
      name: "Build",
      description:
        "Connect the channels, tools, data, and custom logic the map actually calls for.",
    },
    {
      step: "04",
      name: "Test",
      description:
        "Exercise the normal path, the edge cases, the escalation, and the recovery.",
    },
    {
      step: "05",
      name: "Handoff",
      description:
        "Document ownership, monitoring, and support boundaries in plain language.",
    },
  ];

  const principles = [
    "Fix the process before you automate it.",
    "Start with the smallest useful system.",
    "Design the human fallback before launch, not after something breaks.",
    "Document what future operators will actually need.",
    "Measure usefulness, not novelty.",
  ];

  return (
    <section
      id="process"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        {/* Operating Loop */}
        <div
          ref={loopRef}
          className="transition-all duration-700"
          style={{
            opacity: loopInView ? 1 : 0,
            transform: loopInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium mb-3">
            THE OPERATING LOOP
          </p>
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] tracking-tight font-normal leading-[1.15] text-[var(--text)]">
            Map carefully. Build narrowly. Hand off clearly.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((item, idx) => (
              <div
                key={item.name}
                className="flex flex-col justify-between border-t border-[var(--line)] pt-6"
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                <div>
                  <span className="text-[13px] font-mono text-[var(--text-dim)] block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-[20px] font-medium text-[var(--text)] tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[var(--text-muted)] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Principles */}
        <div
          ref={principlesRef}
          className="mt-28 sm:mt-36 transition-all duration-700"
          style={{
            opacity: principlesInView ? 1 : 0,
            transform: principlesInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h3 className="text-[24px] sm:text-[30px] tracking-tight font-medium text-[var(--text)] mb-8">
            Working Principles
          </h3>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {principles.map((principle, idx) => (
              <div
                key={principle}
                className="py-5 sm:py-6 flex items-start gap-4 sm:gap-6"
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                <span className="text-[13px] font-mono text-[var(--text-dim)] pt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-[16px] sm:text-[19px] text-[var(--text)] font-normal leading-relaxed">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
