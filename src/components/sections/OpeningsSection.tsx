import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const openItems = [
  "Full-time or contract AI automation / agent engineering roles",
  "Freelance projects on Upwork with a defined workflow to automate, not vague \"help with AI\" asks",
  "Teams that want someone who owns a build end to end — not just the prompt",
];

export const OpeningsSection: React.FC = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.05);
  const { ref: bodyRef, visible: bodyVisible } = useScrollReveal(0.05);

  const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      id="openings"
      aria-labelledby="openings-heading"
      className="border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 py-24 sm:py-32">

        {/* Header */}
        <div ref={headerRef}>
          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(headerVisible)}
          >
            WHAT I'M OPEN TO
          </p>
          <h2
            id="openings-heading"
            className="font-corp uppercase text-white max-w-2xl"
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              ...revealStyle(headerVisible, 60),
            }}
          >
            Currently open to
            <br className="hidden sm:block" /> a short list of things.
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="mt-12 sm:mt-16 max-w-2xl">
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed mb-10"
            style={revealStyle(bodyVisible)}
          >
            This isn't a company with a hiring pipeline — it's my personal practice. "Openings"
            here just means what I'm actively looking for right now: a role, a contract, or a
            client with a real system worth fixing.
          </p>

          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(bodyVisible, 60)}
          >
            What I'm looking for
          </p>

          <ul className="divide-y divide-[var(--line)]" role="list">
            {openItems.map((item, i) => (
              <li
                key={i}
                className="py-5 flex items-start gap-6"
                style={revealStyle(bodyVisible, 100 + i * 80)}
              >
                <span
                  className="text-xs font-mono text-[var(--text-dim)] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  —
                </span>
                <p className="text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p
            className="text-[var(--text-dim)] text-sm sm:text-[15px] leading-relaxed mt-10 border-t border-[var(--line)] pt-8"
            style={revealStyle(bodyVisible, 420)}
          >
            Have a project instead of a job post? Use "Pitch an idea" — tell me what's broken
            and I'll tell you honestly if it's a fit.{" "}
            <a
              href="mailto:hello@mainframe.co"
              className="text-white underline underline-offset-4 decoration-[var(--line-strong)] hover:decoration-white transition-colors"
            >
              Pitch an idea →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
