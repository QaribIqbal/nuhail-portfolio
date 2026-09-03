import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";

export const ShopSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      id="shop"
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
            TAKE IT WITH YOU
          </p>
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] tracking-tight font-normal leading-[1.15] text-[var(--text)]">
            Templates for the systems I build most often.
          </h2>

          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] mt-5 leading-relaxed font-normal">
            Not every automation needs a bespoke build. The Shop holds ready-to-import
            n8n and Make blueprints for the workflows I get asked for most often — lead
            routing, WhatsApp intake, and reporting pipelines — documented the way I'd
            want to receive them.
          </p>

          {/* Waitlist / Coming Soon */}
          <div className="mt-12 p-8 sm:p-10 border border-[var(--line)] bg-[var(--surface)] max-w-xl">
            <h3 className="text-[18px] sm:text-[20px] font-medium text-[var(--text)] tracking-tight mb-2">
              Coming soon — join the list
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[var(--text-muted)] font-normal leading-relaxed mb-6">
              Get notified when the first batch of blueprints and workflow imports are
              released.
            </p>

            {submitted ? (
              <div className="text-[15px] text-[var(--text)] py-3 px-4 border border-[var(--line)] bg-[var(--surface-soft)] rounded-md font-mono">
                ✓ You're on the list. I'll reach out when the first blueprints drop.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-full border border-[var(--line)] bg-[var(--bg)] text-white placeholder-[var(--text-dim)] text-[14px] focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[14px] px-6 py-2.5 hover:bg-black hover:text-white transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer"
                >
                  Join the list
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
