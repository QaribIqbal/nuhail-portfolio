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
    scrollToCurrentHash();
    window.addEventListener("hashchange", scrollToCurrentHash);
    return () => window.removeEventListener("hashchange", scrollToCurrentHash);
  }, []);

  return null;
}
