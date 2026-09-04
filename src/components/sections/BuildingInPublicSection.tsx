import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";

export const BuildingInPublicSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const builds = [
    {
      id: "video-1",
      number: "01",
      title: "How I integrated GHL Calendar APIs with a Custom Vapi Agent in under 20 minutes",
      category: "API ORCHESTRATION",
      duration: "3:40",
      description:
        "End-to-end teardown of real-time slot checking, timezone normalisation, and calendar event creation triggered live during an active AI voice session without speech hesitation.",
      stack: ["Vapi Webhooks", "GoHighLevel API v2", "Node.js Serverless"],
      image: "/media/real_estate_ai.webp",
      readTime: "Live Workflow Breakdown",
    },
    {
      id: "video-2",
      number: "02",
      title: "Stress-testing latency: Tuning OpenAI GPT-4o-mini and ElevenLabs for sub-second responses",
      category: "LATENCY BENCHMARKS",
      duration: "4:15",
      description:
        "Measuring First-Byte Audio Latency (TTFB). How model quantization, streaming WebSocket chunks, and prompt token pruning shaved 450ms off total conversational turn-around time.",
      stack: ["ElevenLabs Turbo v2", "OpenAI GPT-4o-mini", "WebSockets"],
      image: "/media/ecommerce_support_ai.webp",
      readTime: "Performance Audit",
    },
    {
      id: "video-3",
      number: "03",
      title: "Designing conversational guardrails: How to prevent an AI receptionist from hallucinating pricing",
      category: "SAFETY & GUARDRAILS",
      duration: "3:10",
      description:
        "Building deterministic fallback state machines. What happens when a prospect asks for custom discounts or out-of-scope services? The exact system prompt architecture that guarantees compliance.",
      stack: ["Prompt Architecture", "Deterministic Schema", "Escrow Hand-off"],
      image: "/media/real-estate-flow.webp",
      readTime: "System Blueprint",
    },
  ];

  return (
    <section
      id="builds"
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
          {/* Section Kicker */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
            <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-mono font-medium">
              THE WORK • ARCHITECTURAL TEARDOWNS
            </p>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-1 rounded-full">
              3 SCREEN-RECORDING AUDITS
            </span>
          </div>

          <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-heading font-medium tracking-tight leading-[1.1] text-white">
            "Building in Public"
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] max-w-2xl mt-4 leading-relaxed font-normal">
            I don't hide behind speculative claims or generic pitch decks. Here are raw architectural recordings, latency stress tests, and API integration teardowns showing how the infrastructure is constructed.
          </p>

          {/* Video / Build Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {builds.map((build, idx) => (
              <div
                key={build.id}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden hover:border-[var(--line-strong)] transition-all duration-300 flex flex-col group"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Visual Thumbnail / Video Player Mock */}
                <div
                  className="relative aspect-video w-full bg-neutral-900 overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo(build.id)}
                >
                  <img
                    src={build.image}
                    alt={build.title}
                    className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all pl-0.5">
                      <span className="text-sm">▶</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-white border border-white/10">
                      {build.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono px-2 py-0.5 rounded bg-black/80 text-white">
                    {build.duration}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[28px] font-corp text-white/30 group-hover:text-white transition-colors block leading-none">
                      {build.number}
                    </span>
                    <h3 className="text-[17px] sm:text-[18px] font-medium tracking-tight text-white group-hover:text-neutral-200 transition-colors leading-snug">
                      "{build.title}"
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[var(--text-muted)] leading-relaxed">
                      {build.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-6 pt-4 border-t border-[var(--line)]">
                    <div className="flex flex-wrap gap-1.5">
                      {build.stack.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-soft)] text-neutral-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Modal / Walkthrough Player Placeholder */}
          {activeVideo && (
            <div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setActiveVideo(null)}
            >
              <div
                className="max-w-3xl w-full bg-[var(--surface)] border border-[var(--line-strong)] rounded-2xl p-6 sm:p-8 relative shadow-2xl space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    System Architecture Recording
                  </span>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="text-white/60 hover:text-white text-lg font-mono px-2 py-1"
                  >
                    ✕ ESC
                  </button>
                </div>
                <div className="aspect-video w-full bg-black rounded-xl flex flex-col items-center justify-center p-6 text-center border border-[var(--line)]">
                  <span className="text-3xl mb-3">🎥</span>
                  <p className="text-white font-medium text-lg">
                    {builds.find((b) => b.id === activeVideo)?.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] max-w-md mt-2">
                    Loom / YouTube walkthrough recording. For private architectural reviews or full codebase access, request a 10-minute System Audit.
                  </p>
                  <a
                    href="#audit"
                    onClick={() => setActiveVideo(null)}
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Schedule Audit to View Full Codebase ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
