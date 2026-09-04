import React from "react";
import { useInView } from "../../hooks/useInView";

export const FlywheelSection: React.FC = () => {
  const { ref, isInView } = useInView();

  const steps = [
    {
      num: "01",
      title: "The 60-Second SMS Response",
      latency: "< 60 SECONDS",
      summary:
        "The moment a call is missed or a web form is submitted, the system triggers an immediate, highly personalized text-back to keep the lead hooked on your line before they open Google to find someone else.",
      stack: ["Twilio / GoHighLevel", "Dynamic Field Injection", "Instant Webhook"],
    },
    {
      num: "02",
      title: "The 24/7 AI Voice Receptionist",
      latency: "SUB-SECOND SPEECH",
      summary:
        "An elite voice assistant qualifies the prospect, answers their specific FAQs, and books them directly onto your calendar based on your real-time availability without awkward lag or generic robotic tones.",
      stack: ["Vapi Orchestration", "OpenAI GPT-4o-mini", "ElevenLabs Voice Pipeline"],
    },
    {
      num: "03",
      title: "Smart Human Escrow",
      latency: "INSTANT FAILOVER",
      summary:
        "Built-in safeguards route complex, high-urgency, or out-of-scope requests straight to your human team via live call transfer or priority notification, ensuring you keep full control at all times.",
      stack: ["SIP Trunking", "CRM Task Routing", "Fallback Guardrails"],
    },
  ];

  return (
    <section
      id="flywheel"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Kicker */}
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-mono font-medium mb-3">
            THE UNIQUE MECHANISM • PROPRIETARY ARCHITECTURE
          </p>

          <h2 className="text-[40px] sm:text-[56px] md:text-[68px] font-corp uppercase tracking-tight leading-[0.95] text-white">
            The Precision Lead-Recovery Flywheel™
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] max-w-2xl mt-4 leading-relaxed font-normal">
            No bloated agency setups or fragile Zapier chains. A hardened, 3-tier autonomous infrastructure engineered to connect with prospects when their buying intent is at its absolute peak.
          </p>

          {/* 3 Horizontal Workflow Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="p-7 sm:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--line-strong)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                    <span className="text-[36px] sm:text-[44px] font-corp text-white/40 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-2.5 py-1 rounded-full">
                      {step.latency}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[var(--text-muted)] mt-3 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-8 pt-4 border-t border-[var(--line)]">
                  <span className="text-[11px] uppercase tracking-widest text-[var(--text-dim)] font-mono block mb-2">
                    Engineered with:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--surface-soft)] text-neutral-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Micro Footer link */}
          <div className="mt-12 text-center">
            <a
              href="#builds"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <span>See the technical breakdown and video build logs below</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
