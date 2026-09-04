'use client';

import { useEffect, useRef } from "react";

export const CursorFollower = () => {
  const mousePosition = useRef({ x: -100, y: -100 });
  const dotPosition = useRef({ x: -100, y: -100 });
  const borderDotPosition = useRef({ x: -100, y: -100 });

  const dotElRef = useRef<HTMLDivElement | null>(null);
  const borderElRef = useRef<HTMLDivElement | null>(null);

  const DOT_SMOOTHNESS = 0.25;
  const BORDER_DOT_SMOOTHNESS = 0.12;

  useEffect(() => {
    // Only run on non-touch devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    const handleMouseEnterInteractive = () => {
      if (borderElRef.current) {
        borderElRef.current.style.width = "44px";
        borderElRef.current.style.height = "44px";
      }
    };

    const handleMouseLeaveInteractive = () => {
      if (borderElRef.current) {
        borderElRef.current.style.width = "28px";
        borderElRef.current.style.height = "28px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Delegate hover detection efficiently using mouseover/mouseout
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, input, textarea, select, [role='button']")) {
        handleMouseEnterInteractive();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, input, textarea, select, [role='button']")) {
        handleMouseLeaveInteractive();
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    let animationId: number;

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      // Direct GPU transform update — ZERO React re-renders!
      if (dotElRef.current) {
        dotElRef.current.style.transform = `translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (borderElRef.current) {
        borderElRef.current.style.transform = `translate3d(${borderDotPosition.current.x}px, ${borderDotPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={dotElRef}
        className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
        style={{
          width: "8px",
          height: "8px",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />
      <div
        ref={borderElRef}
        className="absolute top-0 left-0 rounded-full border border-white/80 will-change-transform"
        style={{
          width: "28px",
          height: "28px",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
};

export default CursorFollower;
