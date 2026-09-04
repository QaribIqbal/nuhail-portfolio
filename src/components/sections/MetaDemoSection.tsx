import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";

export const MetaDemoSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const [isCalling, setIsCalling] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+1 (800) 492-6346"; // Default placeholder / formatted for direct tap

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="demo"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div
          ref={ref}
          className="transition-all duration-700 max-w-4xl mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Section Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-emerald-400 font-mono font-medium">
              LIVE SYSTEM BENCHMARK • ZERO FLUFF
            </p>
          </div>

          <h2 className="text-[40px] sm:text-[56px] md:text-[68px] font-corp uppercase tracking-tight leading-[0.95] text-white">
            Don't take my word for it. Test my systems live right now.
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] mt-5 leading-relaxed font-normal">
            Most agencies send you boring PDF decks. I prefer showing you live results. Call my virtual personal assistant right now. Try to ask her hard questions, try to book a time, or try to stump her. She will explain my pricing, qualify your intent, and book a live sync directly onto my calendar in under 60 seconds.
          </p>

          {/* Interactive Meta-Demo Terminal / Phone Card */}
          <div className="mt-12 p-6 sm:p-10 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {/* Left Column: Live Status & Prompts */}
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ASSISTANT STATUS: ONLINE (LATENCY: 420ms)</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                    Autonomous Voice Receptionist Node
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Tuned on GPT-4o-mini & ElevenLabs Conversational Voice Pipeline with real-time calendar synchronization.
                  </p>
                </div>

                {/* Challenge chips */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-widest text-[var(--text-dim)] font-mono block mb-2">
                    Things to test on the call:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "\"What are your engineering rates?\"",
                      "\"Can you book me for Thursday afternoon?\"",
                      "\"How do you connect to GoHighLevel?\"",
                    ].map((testPrompt) => (
                      <span
                        key={testPrompt}
                        className="text-xs px-3 py-1.5 rounded-lg bg-[var(--surface-soft)] border border-[var(--line)] text-neutral-300 font-mono"
                      >
                        {testPrompt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Impact Call Action Card */}
              <div className="w-full md:w-auto flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-black border border-[var(--line)] shadow-inner min-w-[280px] sm:min-w-[320px]">
                {/* Visual Audio Waveform */}
                <div className="flex items-center justify-center gap-1.5 h-10 mb-6">
                  {[40, 75, 30, 90, 50, 85, 35, 95, 60, 45, 80, 55].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-white/80 rounded-full transition-all duration-300"
                      style={{
                        height: isCalling ? `${h}%` : "20%",
                        animation: isCalling ? `pulse 1s infinite ${i * 0.1}s` : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Primary Call Button */}
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
                  onClick={() => setIsCalling(true)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-white text-black font-semibold text-[15px] sm:text-[16px] px-6 py-4 rounded-full hover:bg-neutral-200 transition-all active:scale-[0.98] shadow-lg group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">📞</span>
                  <span>CALL {phoneNumber}</span>
                </a>

                {/* Copy number helper */}
                <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-[var(--line)] text-xs text-[var(--text-dim)]">
                  <span>Direct US Line</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-[var(--text-muted)] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    {copied ? "Copied to clipboard!" : "Copy number"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
