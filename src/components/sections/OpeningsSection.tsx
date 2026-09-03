import React from "react";
import { useInView } from "../../hooks/useInView";

export const OpeningsSection: React.FC = () => {
  const { ref, isInView } = useInView();

  const lookingFor = [
    "Full-time or contract AI automation / agent engineering roles",
    "Freelance projects on Upwork with a defined workflow to automate, not vague \"help with AI\" asks",
    "Teams that want someone who owns a build end to end — not just the prompt",
  ];

  return (
    <section
      id="openings"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div
          ref={ref}
          className="transition-all duration-700 max-w-3xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium mb-3">
            WHAT I'M OPEN TO
          </p>
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] tracking-tight font-normal leading-[1.15] text-[var(--text)]">
            Currently open to a short list of things.
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] mt-5 leading-relaxed font-normal">
            This isn't a company with a hiring pipeline — it's my personal practice.
            "Openings" here just means what I'm actively looking for right now: a role, a
            contract, or a client with a real system worth fixing.
          </p>

          <div className="mt-12 space-y-4">
            <h3 className="text-[13px] tracking-[0.15em] uppercase font-mono text-[var(--text-dim)]">
              WHAT I'M LOOKING FOR
            </h3>
            <ul className="space-y-4 pt-2">
              {lookingFor.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-t border-[var(--line)] pt-4"
                  style={{
                    transitionDelay: `${idx * 80}ms`,
                  }}
                >
                  <span className="text-[13px] font-mono text-[var(--text-dim)] pt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-[16px] sm:text-[18px] text-[var(--text)] font-normal leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--line)]">
            <p className="text-[15px] sm:text-[17px] text-[var(--text-muted)] leading-relaxed font-normal mb-8">
              Have a project instead of a job post? Use "Pitch an idea" — tell me what's
              broken and I'll tell you honestly if it's a fit.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@mainframe.co?subject=Project%20Pitch"
                className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[14px] sm:text-[15px] px-6 py-2.5 hover:bg-black hover:text-white transition-colors duration-200 font-medium"
              >
                Pitch an idea
              </a>
              <a
                href="mailto:hello@mainframe.co"
                className="inline-flex items-center justify-center bg-transparent text-white border border-white rounded-full text-[14px] sm:text-[15px] px-6 py-2.5 hover:bg-white hover:text-black transition-colors duration-200 font-medium"
              >
                Reach me directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
