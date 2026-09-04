import React, { useEffect, useRef } from "react";

const TOTAL_FRAMES = 142;

const getFrameUrl = (index: number) => {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/media/frames-webp/ezgif-frame-${frameNum}.webp`;
};

interface BackgroundScrubProps {
  onLoadProgress?: (progress: number) => void;
  onInitialReady?: () => void;
}

export const BackgroundScrub: React.FC<BackgroundScrubProps> = ({
  onLoadProgress,
  onInitialReady,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const loadedCountRef = useRef<number>(0);

  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Optimized parallel preloading with milestone-first strategy
  useEffect(() => {
    let isCancelled = false;

    const notifyProgress = () => {
      const pct = Math.min(100, Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));
      if (onLoadProgress) onLoadProgress(pct);
    };

    const loadFrame = (idx: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[idx] && isLoadedRef.current[idx]) {
          resolve(imagesRef.current[idx]!);
          return;
        }

        const img = new Image();
        img.decoding = "async";
        img.src = getFrameUrl(idx);

        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[idx] = img;
            if (!isLoadedRef.current[idx]) {
              isLoadedRef.current[idx] = true;
              loadedCountRef.current += 1;
              notifyProgress();
            }
            resolve(img);
          }
        };

        img.onerror = () => {
          if (!isCancelled) {
            loadedCountRef.current += 1;
            notifyProgress();
            resolve(img);
          }
        };
      });
    };

    const preloadAll = async () => {
      // 1. Critical Phase: Load Frame 0 and immediately draw to canvas
      const firstImg = await loadFrame(0);
      if (isCancelled) return;
      drawFrame(firstImg);
      if (onInitialReady) onInitialReady();

      // 2. High-Priority Keyframes across full arc (0, 10, 20, ..., 141)
      const keyframeIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 8) {
        if (!isLoadedRef.current[i]) keyframeIndices.push(i);
      }
      if (!isLoadedRef.current[141]) keyframeIndices.push(141);

      await Promise.all(keyframeIndices.map((idx) => loadFrame(idx)));
      if (isCancelled) return;

      // 3. Stream all remaining frames in parallel batches of 10
      const remaining: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!isLoadedRef.current[i]) remaining.push(i);
      }

      const BATCH = 10;
      for (let i = 0; i < remaining.length; i += BATCH) {
        if (isCancelled) return;
        const batch = remaining.slice(i, i + BATCH);
        await Promise.all(batch.map((idx) => loadFrame(idx)));
      }
    };

    preloadAll();

    return () => {
      isCancelled = true;
    };
  }, [onLoadProgress, onInitialReady]);

  // Direct Hardware-Accelerated Canvas Drawing
  const drawFrame = (img: HTMLImageElement | null) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Reset transform to 1:1 canvas buffer coordinates
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Cover sizing
    const scale = Math.max(cw / iw, ch / ih);
    const renderWidth = iw * scale;
    const renderHeight = ih * scale;

    const isMobile = window.innerWidth < 768;
    // On desktop (screen >= 768px), shift slightly right (12% of viewport) so hero text has breathing room
    // On mobile, keep centered
    const desktopShift = isMobile ? 0 : cw * 0.12;
    const targetX = (cw - renderWidth) * 0.5 + desktopShift;
    const targetY = (ch - renderHeight) * 0.5;

    ctx.drawImage(img, targetX, targetY, renderWidth, renderHeight);
  };

  // Canvas resize handler (matching device pixel ratio)
  useEffect(() => {
    const updateSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      const targetW = Math.round(w * dpr);
      const targetH = Math.round(h * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      // Redraw current frame
      const currentIdx = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current))
      );
      drawFrame(imagesRef.current[currentIdx] || imagesRef.current[0]);
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scrub interaction tracking (mouse + touch)
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // 60FPS RAF Loop with Nearest Loaded Frame Fallback
  useEffect(() => {
    let lastRenderedFrame = -1;

    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      // Snappy, silky smooth responsiveness
      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.4;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      let frameIdx = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current))
      );

      // Find nearest loaded frame if current isn't in memory yet
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
        const img = imagesRef.current[frameIdx] || imagesRef.current[0];
        drawFrame(img);
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
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover pointer-events-none select-none"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
        }}
      />
      {/* Dark radial/horizontal & vertical gradient scrim behind text to guarantee crisp legibility across viewports */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0) 80%)",
        }}
      />
    </div>
  );
};
