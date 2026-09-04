import React, { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const ShopSection: React.FC = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.05);
  const { ref: bodyRef, visible: bodyVisible } = useScrollReveal(0.05);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="shop"
      aria-labelledby="shop-heading"
      className="border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 py-24 sm:py-32">

        {/* Header */}
        <div ref={headerRef}>
          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(headerVisible)}
          >
            TAKE IT WITH YOU
          </p>
          <h2
            id="shop-heading"
            className="font-corp uppercase text-white max-w-2xl"
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              ...revealStyle(headerVisible, 60),
            }}
          >
            Templates for the systems
            <br className="hidden sm:block" /> I build most often.
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="mt-12 sm:mt-16 max-w-xl">
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed mb-10"
            style={revealStyle(bodyVisible)}
          >
            Not every automation needs a bespoke build. The Shop holds ready-to-import n8n and
            Make blueprints for the workflows I get asked for most often — lead routing,
            WhatsApp intake, and reporting pipelines — documented the way I'd want to receive them.
          </p>

          {/* Coming soon waitlist */}
          <div
            className="border border-[var(--line)] p-6 sm:p-8"
            style={revealStyle(bodyVisible, 80)}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-4">
              COMING SOON
            </p>
            {!submitted ? (
              <>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  Join the list. I'll send you a note when the first blueprints are available.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                  aria-label="Waitlist signup"
                >
                  <label htmlFor="shop-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="shop-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent border border-[var(--line-strong)] px-4 py-2.5 text-sm text-white placeholder:text-[var(--text-dim)] focus:outline-none focus:border-white transition-colors"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer active:scale-[0.98] whitespace-nowrap"
                  >
                    Join the list
                  </button>
                </form>
              </>
            ) : (
              <p className="text-white text-sm leading-relaxed" role="status" aria-live="polite">
                You're on the list. I'll be in touch when blueprints are ready.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
