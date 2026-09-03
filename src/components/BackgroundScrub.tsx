import React, { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 142;

// Helper to format frame path: /media/ezgif-8593f034cb81842c-png-split/ezgif-frame-001.png
const getFrameUrl = (index: number) => {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/media/ezgif-8593f034cb81842c-png-split/ezgif-frame-${frameNum}.png`;
};

export const BackgroundScrub: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const cacheRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [currentSrc, setCurrentSrc] = useState<string>(getFrameUrl(0));

  // Preload all 142 lossless PNG frames into decoded memory cache
  useEffect(() => {
    // 1. Preload frame 0 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.decoding = "async";
    cacheRef.current[0] = firstImg;
    firstImg.onload = () => {
      isLoadedRef.current[0] = true;
    };

    // 2. Preload remaining frames progressively
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.decoding = "async";
      cacheRef.current[i] = img;
      img.onload = () => {
        isLoadedRef.current[i] = true;
      };
    }
  }, []);

  // Map cursor X position directly across viewport so moving cursor to the right
  // smoothly plays all images all the way to the very end (frame 142)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth || 1;
      // 30px edge padding so reaching the right side fully activates frame 142
      const padding = 30;
      const effectiveWidth = Math.max(1, windowWidth - padding * 2);
      const normalizedX = Math.max(
        0,
        Math.min(1, (e.clientX - padding) / effectiveWidth)
      );

      targetFrameRef.current = normalizedX * (TOTAL_FRAMES - 1);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touchX = e.touches[0].clientX;
      const windowWidth = window.innerWidth || 1;
      const padding = 20;
      const effectiveWidth = Math.max(1, windowWidth - padding * 2);
      const normalizedX = Math.max(
        0,
        Math.min(1, (touchX - padding) / effectiveWidth)
      );

      targetFrameRef.current = normalizedX * (TOTAL_FRAMES - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Smooth 60fps render loop with natural momentum / lerp
  useEffect(() => {
    let lastRenderedFrame = 0;

    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.05) {
        // Smooth lerp towards target frame
        currentFrameRef.current += diff * 0.35;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      let frameIdx = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current))
      );

      // If target frame is still loading, pick closest loaded frame
      if (!isLoadedRef.current[frameIdx]) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const left = frameIdx - offset;
          const right = frameIdx + offset;
          if (left >= 0 && isLoadedRef.current[left]) {
            frameIdx = left;
            break;
          }
          if (right < TOTAL_FRAMES && isLoadedRef.current[right]) {
            frameIdx = right;
            break;
          }
        }
      }

      if (frameIdx !== lastRenderedFrame) {
        lastRenderedFrame = frameIdx;
        const newSrc = getFrameUrl(frameIdx);
        if (imgRef.current) {
          imgRef.current.src = newSrc;
        }
        setCurrentSrc(newSrc);
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-black"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    >
      <img
        ref={imgRef}
        src={currentSrc}
        alt="Mainframe Background"
        decoding="sync"
        loading="eager"
        className="w-full h-full object-cover pointer-events-none select-none"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "70% center",
          imageRendering: "auto",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
        }}
      />
    </div>
  );
};
