import React, { useEffect, useRef, useState } from "react";

// In-memory session store (resets on fresh page load, persists across re-renders/scrolls)
let sessionIsPlaying = false;
let sessionVolume = 0;

const TARGET_VOLUME = 0.18; // ~0.15-0.2 as requested
const FADE_IN_DURATION = 1500; // ~1.5s
const FADE_OUT_DURATION = 1000; // ~1s

export const AmbientSoundToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeAnimationRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(sessionIsPlaying);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = sessionVolume;
    audio.loop = true;

    return () => {
      if (fadeAnimationRef.current) {
        cancelAnimationFrame(fadeAnimationRef.current);
      }
    };
  }, []);

  const fadeVolume = (
    targetVol: number,
    durationMs: number,
    onComplete?: () => void
  ) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeAnimationRef.current) {
      cancelAnimationFrame(fadeAnimationRef.current);
    }

    const startVol = audio.volume;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / durationMs);

      // Smooth ease-out curve
      const currentVol = startVol + (targetVol - startVol) * progress;
      audio.volume = Math.max(0, Math.min(1, currentVol));
      sessionVolume = audio.volume;

      if (progress < 1) {
        fadeAnimationRef.current = requestAnimationFrame(step);
      } else {
        audio.volume = targetVol;
        sessionVolume = targetVol;
        fadeAnimationRef.current = null;
        if (onComplete) onComplete();
      }
    };

    fadeAnimationRef.current = requestAnimationFrame(step);
  };

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      // Play & Fade In over 1.5s
      try {
        if (audio.paused) {
          audio.volume = 0;
          await audio.play();
        }
        setIsPlaying(true);
        sessionIsPlaying = true;
        fadeVolume(TARGET_VOLUME, FADE_IN_DURATION);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    } else {
      // Fade Out over 1.0s & Pause
      setIsPlaying(false);
      sessionIsPlaying = false;
      fadeVolume(0, FADE_OUT_DURATION, () => {
        audio.pause();
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/ambient-piano-loop.mp3"
        preload="metadata"
        loop
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
        aria-pressed={isPlaying}
        title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white px-3 py-1 text-[13px] sm:text-[14px] hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-pointer select-none active:scale-[0.96] ${className}`}
      >
        {isPlaying ? (
          /* Unmuted Speaker Icon with sound waves */
          <svg
            className="w-3.5 h-3.5 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          /* Muted Speaker Icon with slash */
          <svg
            className="w-3.5 h-3.5 flex-shrink-0 opacity-80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
        <span className="text-[12px] uppercase font-mono tracking-wider">
          {isPlaying ? "Sound On" : "Sound"}
        </span>
      </button>
    </>
  );
};
