import React from "react";
import { useInView } from "../../hooks/useInView";

export const ArchitectSection: React.FC = () => {
  const { ref, isInView } = useInView();

  const techStack = [
    { label: "Voice Engines", val: "Vapi, ElevenLabs Turbo v2, Deepgram Nova-2" },
    { label: "LLM Orchestration", val: "OpenAI GPT-4o / GPT-4o-mini, Anthropic Claude 3.5 Sonnet" },
    { label: "CRM & Pipelines", val: "GoHighLevel, HubSpot, Zapier, n8n, Webhooks" },
    { label: "Engineering Stack", val: "Python, TypeScript, Node.js, REST APIs, Docker" },
  ];

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div
          ref={ref}
          className="transition-all duration-700 max-w-3xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Section Kicker */}
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-mono font-medium mb-3">
            ABOUT THE ARCHITECT • STEALTH POSITIONING
          </p>

          <h2 className="text-[38px] sm:text-[54px] md:text-[64px] font-corp uppercase tracking-tight leading-[0.95] text-white">
            Documenting the next frontier of conversational AI.
          </h2>

          <div className="space-y-6 text-[16px] sm:text-[19px] text-[var(--text-muted)] mt-6 leading-relaxed font-normal">
            <p>
              I am a Systems Engineer and AI Automation Architect. My day-to-day focus lies in exploring the boundaries of conversational LLMs, low-latency voice pipelines, and CRM infrastructure.
            </p>
            <p>
              This portfolio is my public sandbox—a place where I document my research, share my build workflows, and showcase the live systems I engineer. I believe that in the age of commoditized software, the winners will be those who build the most seamless, human-centric, and low-latency communication infrastructures.
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="mt-12 pt-8 border-t border-[var(--line)]">
            <h3 className="text-[12px] uppercase tracking-[0.18em] font-mono text-[var(--text-dim)] mb-6">
              ENGINEERING MATRIX & CAPABILITIES
            </h3>
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {techStack.map((item) => (
                <div key={item.label} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6">
                  <span className="text-sm font-medium text-white sm:w-1/3">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-neutral-300 sm:w-2/3">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio verification / education note */}
          <div className="mt-10 p-5 rounded-xl border border-[var(--line)] bg-[var(--surface)] flex items-center justify-between gap-4 flex-wrap">
            <div>
              <span className="text-xs text-white font-medium block">
                Nuhail Iqbal
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                B.S. Computer Science • GCU Lahore • Independent Systems Architect
              </span>
            </div>
            <a
              href="https://www.linkedin.com/in/nuhail-iqbal-a93b1935b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Verify on LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
