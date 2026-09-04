import { useEffect, useRef, useState } from "react";

/**
 * Counts a number from 0 to `target` with a cubic ease-out curve.
 * Animation starts once the returned `spanRef` element enters the viewport.
 * Immediately resolves for prefers-reduced-motion users.
 */
export function useCountUp(target: number, duration = 1400) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          observer.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / duration);
            // cubic ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { spanRef, value };
}
