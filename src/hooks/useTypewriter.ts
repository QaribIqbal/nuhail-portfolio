import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  speed?: number;
  startDelay?: number;
}

interface UseTypewriterReturn {
  displayed: string;
  done: boolean;
}

export function useTypewriter(
  text: string,
  options?: UseTypewriterOptions
): UseTypewriterReturn {
  const speed = options?.speed ?? 38;
  const startDelay = options?.startDelay ?? 600;

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayed("");
    setDone(false);

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      if (text.length === 0) {
        setDone(true);
        return;
      }

      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          setDone(true);
          if (intervalId) clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
