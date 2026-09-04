import React, { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 142;

// Helper to format frame path to lightweight, high-fidelity WebP
const getFrameUrl = (index: number) => {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/media/frames-webp/ezgif-frame-${frameNum}.webp`;
};

export const BackgroundScrub: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const cacheRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [currentSrc, setCurrentSrc] = useState<string>(getFrameUrl(0));

  // Prioritized 3-tier progressive preloading
  useEffect(() => {
    let isCancelled = false;

    const loadSingleFrame = (idx: number): Promise<void> => {
      return new Promise((resolve) => {
        if (isLoadedRef.current[idx] && cacheRef.current[idx]) {
          resolve();
          return;
        }
        const img = new Image();
        img.src = getFrameUrl(idx);
        img.decoding = "async";
        cacheRef.current[idx] = img;
        img.onload = () => {
          isLoadedRef.current[idx] = true;
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      });
    };

    const runProgressivePreload = async () => {
      // Tier 1: Preload initial frame immediately
      await loadSingleFrame(0);
      if (isCancelled) return;

      // Tier 2: Preload 8 milestone keyframes across the sequence
      // Ensures instant guideposts if the user scrubs immediately
      const milestones = [20, 40, 60, 80, 100, 120, 141];
      await Promise.all(milestones.map((idx) => loadSingleFrame(idx)));
      if (isCancelled) return;

      // Tier 3: Stream the remaining in-between frames in gentle batches
      const remainingIndices: number[] = [];
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (!isLoadedRef.current[i]) {
          remainingIndices.push(i);
        }
      }

      const BATCH_SIZE = 8;
      for (let i = 0; i < remainingIndices.length; i += BATCH_SIZE) {
        if (isCancelled) return;
        const batch = remainingIndices.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((idx) => loadSingleFrame(idx)));
        // Yield 20ms to browser main thread
        await new Promise((r) => setTimeout(r, 20));
      }
    };

    runProgressivePreload();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Map cursor X position directly across viewport so moving cursor to the right
  // smoothly plays all images all the way to the very end (frame 142)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth || 1;
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
        currentFrameRef.current += diff * 0.35;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      let frameIdx = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current))
      );

      // Closest loaded frame lookup prevents any blank/flickering frames
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
