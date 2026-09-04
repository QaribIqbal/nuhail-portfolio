import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";

export const CostOfInactionSection: React.FC = () => {
  const { ref, isInView } = useInView();

  // Interactive calculator state
  const [monthlyLeads, setMonthlyLeads] = useState<number>(50);
  const [missedCalls, setMissedCalls] = useState<number>(15);
  const [bookingRate, setBookingRate] = useState<number>(30); // in percent
  const [dealValue, setDealValue] = useState<number>(1000); // in dollars

  // Calculated values
  // Formula: missedCalls * (bookingRate / 100) * dealValue
  const monthlyLost = Math.round(missedCalls * (bookingRate / 100) * dealValue);
  const annualLost = monthlyLost * 12;

  return (
    <section
      id="cost"
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
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-red-400/90 font-mono font-medium mb-3">
            THE NEED • SPEED-TO-LEAD REALITY
          </p>

          <h2 className="text-[38px] sm:text-[54px] md:text-[64px] font-corp uppercase tracking-tight leading-[0.95] text-white">
            The Silent Killer: What is "Lead Leakage" costing your business?
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] mt-5 leading-relaxed font-normal">
            In local services and high-ticket consulting, speed-to-lead is everything. If a prospect submits a web form or calls your line and doesn't get a response within 60 seconds, your chances of booking them drop by 80%. They simply click back to Google and call your closest competitor.
          </p>

          {/* Calculator Container */}
          <div className="mt-12 rounded-2xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 7 Cols: Interactive Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">
                    Interactive Revenue Leakage Audit
                  </span>
                  <span className="text-xs font-mono text-emerald-400">Live Math</span>
                </div>

                {/* Slider 1: Monthly Leads */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-300">Monthly Inbound Leads/Calls</span>
                    <span className="font-mono text-white font-medium">{monthlyLeads}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={monthlyLeads}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setMonthlyLeads(val);
                      if (missedCalls > val) setMissedCalls(Math.round(val * 0.3));
                    }}
                    className="w-full accent-white h-1.5 bg-[var(--line-strong)] rounded-lg cursor-pointer"
                  />
                </div>

                {/* Slider 2: Average Missed Calls */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-300">Average Missed Calls (After-hours/On-site)</span>
                    <span className="font-mono text-red-400 font-medium">{missedCalls} missed</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={monthlyLeads}
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full accent-red-400 h-1.5 bg-[var(--line-strong)] rounded-lg cursor-pointer"
                  />
                </div>

                {/* Slider 3: Conservative Booking Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-300">Conservative Booking Rate</span>
                    <span className="font-mono text-white font-medium">{bookingRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={bookingRate}
                    onChange={(e) => setBookingRate(Number(e.target.value))}
                    className="w-full accent-white h-1.5 bg-[var(--line-strong)] rounded-lg cursor-pointer"
                  />
                </div>

                {/* Slider 4: Average Value per Booked Job */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-300">Average Value per Booked Job</span>
                    <span className="font-mono text-white font-medium">${dealValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="250"
                    max="10000"
                    step="250"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full accent-emerald-400 h-1.5 bg-[var(--line-strong)] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Right 5 Cols: Output Loss Callout */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-black border border-red-950/60 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">
                    Revenue Slipping to Competitors
                  </span>

                  <div>
                    <div className="text-[38px] sm:text-[46px] font-corp tracking-tight text-white leading-none">
                      ${monthlyLost.toLocaleString()}
                      <span className="text-lg font-mono text-[var(--text-muted)] font-normal"> / mo</span>
                    </div>
                    <div className="text-sm font-mono text-red-400 mt-1">
                      -${annualLost.toLocaleString()} / year in lost deals
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed pt-2 border-t border-[var(--line)]">
                    Calculated on {missedCalls} dropped calls/mo × {bookingRate}% booking probability × ${dealValue.toLocaleString()} client lifetime value.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--line)] relative z-10">
                  <a
                    href="#audit"
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Plug This Leak Now ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Anchor Punchline */}
            <div className="px-6 py-5 sm:px-10 bg-[var(--surface-soft)] border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[15px] sm:text-[17px] font-medium text-white italic">
                "You don't have a lead generation problem. You have a connection problem."
              </p>
              <a
                href="#flywheel"
                className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-white transition-colors whitespace-nowrap"
              >
                See the recovery flywheel ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
