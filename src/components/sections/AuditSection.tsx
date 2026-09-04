import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";

export const AuditSection: React.FC = () => {
  const { ref, isInView } = useInView();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="audit"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div
          ref={ref}
          className="transition-all duration-700 max-w-3xl mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Section Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-mono font-medium">
              FRICTIONLESS CALL TO ACTION • ZERO PRESSURE
            </p>
          </div>

          <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-heading font-medium tracking-tight leading-[1.1] text-white">
            Let's plug your revenue leaks.
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] mt-5 leading-relaxed font-normal">
            Book a quick, 10-minute System Audit. We will analyze your website form response times, run a missed-call stress test, and map out a custom recovery blueprint for your business. No sales pitches, just raw system data.
          </p>

          {/* Frictionless 3-field form */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-medium text-white">
                  Audit Request Received
                </h3>
                <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                  I will run an initial speed-to-lead audit on your website and ping you at <span className="text-white font-mono">{phone}</span> within 60 minutes with your stress-test results.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[var(--text-dim)] hover:text-white underline underline-offset-2 pt-2"
                >
                  Submit another URL
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 1: Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-body"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                      Direct Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Field 3: Website */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                    Business Website / Inbound Funnel URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full bg-black border border-[var(--line)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-all cursor-pointer active:scale-[0.98] shadow-lg"
                  >
                    Schedule 10-Min System Audit ↗
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-dim)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>No pitch decks • Raw data only</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
