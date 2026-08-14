"use client";

import { useEffect } from "react";

function scrollToCurrentHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;

  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  });
}

export function HashScrollManager() {
  useEffect(() => {
    let correctionTimer: number | undefined;
    const scheduleScroll = () => {
      window.clearTimeout(correctionTimer);
      scrollToCurrentHash();
      correctionTimer = window.setTimeout(scrollToCurrentHash, 400);
    };

    scheduleScroll();
    window.addEventListener("hashchange", scheduleScroll);
    window.addEventListener("load", scheduleScroll);
    return () => {
      window.clearTimeout(correctionTimer);
      window.removeEventListener("hashchange", scheduleScroll);
      window.removeEventListener("load", scheduleScroll);
    };
  }, []);

  return null;
}
