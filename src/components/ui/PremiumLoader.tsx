import React, { useEffect, useState } from "react";

interface PremiumLoaderProps {
  progress: number; // 0 to 100
  isReady: boolean;
  onFinish?: () => void;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({
  progress,
  isReady,
  onFinish,
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Smoothly interpolate progress number
  useEffect(() => {
    let animId: number;
    const step = () => {
      setDisplayProgress((prev) => {
        if (prev < progress) {
          const next = prev + Math.ceil((progress - prev) * 0.18);
          return Math.min(progress, next);
        }
        return prev;
      });
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [progress]);

  // When ready and progress reaches 100, trigger cinematic fadeout
  useEffect(() => {
    if (isReady && displayProgress >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
          if (onFinish) onFinish();
        }, 650);
        return () => clearTimeout(hideTimer);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isReady, displayProgress, onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 sm:p-12 select-none bg-black"
      style={{
        opacity: isFadingOut ? 0 : 1,
        transition: "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: isFadingOut ? "none" : "all",
      }}
      aria-label="Loading systems"
    >
      {/* Top Header */}
      <div className="w-full max-w-5xl flex items-center justify-between text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">
        <span>Nuhail Iqbal</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>System Initialization</span>
        </div>
      </div>

      {/* Center Display: Monospace count + animated progress bar */}
      <div className="flex flex-col items-center gap-6 max-w-sm w-full">
        <div className="flex items-baseline gap-1 font-corp text-white tracking-tight">
          <span
            style={{
              fontSize: "clamp(64px, 12vw, 96px)",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {displayProgress}
          </span>
          <span className="text-xl sm:text-2xl text-[var(--text-dim)] font-mono">%</span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[2px] bg-[rgba(255,255,255,0.08)] overflow-hidden relative">
          <div
            className="h-full bg-white will-change-[width]"
            style={{
              width: `${displayProgress}%`,
              transition: "width 0.15s ease-out",
            }}
          />
        </div>

        <p className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase">
          {displayProgress < 40
            ? "Mounting runtime..."
            : displayProgress < 85
            ? "Caching frame buffer..."
            : "Engaging neural loop..."}
        </p>
      </div>

      {/* Bottom status note */}
      <div className="w-full max-w-5xl flex items-center justify-between text-[11px] font-mono text-[var(--text-dim)]">
        <span>A.R.I.A ENGINE V2.4</span>
        <span>LAHORE / REMOTE</span>
      </div>
    </div>
  );
};
