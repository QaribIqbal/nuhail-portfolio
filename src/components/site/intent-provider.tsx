"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { Intent } from "@/content/types";

type IntentContextValue = {
  intent: Intent;
  setIntent: (intent: Intent) => void;
};

const IntentContext = createContext<IntentContextValue | null>(null);

function readIntent() {
  if (typeof window === "undefined") return "hire" as const;
  return new URLSearchParams(window.location.search).get("intent") === "project" ? "project" : "hire";
}

export function IntentProvider({ children }: { children: React.ReactNode }) {
  const intent = useSyncExternalStore<Intent>(
    (onStoreChange) => {
      window.addEventListener("popstate", onStoreChange);
      window.addEventListener("intentchange", onStoreChange);
      return () => {
        window.removeEventListener("popstate", onStoreChange);
        window.removeEventListener("intentchange", onStoreChange);
      };
    },
    readIntent,
    () => "hire",
  );

  const value = useMemo<IntentContextValue>(
    () => ({
      intent,
      setIntent(nextIntent) {
        const url = new URL(window.location.href);
        url.searchParams.set("intent", nextIntent);
        window.history.replaceState(window.history.state, "", url);
        window.dispatchEvent(new Event("intentchange"));
      },
    }),
    [intent],
  );

  return <IntentContext.Provider value={value}>{children}</IntentContext.Provider>;
}

export function useIntent() {
  const context = useContext(IntentContext);
  if (!context) throw new Error("useIntent must be used within IntentProvider");
  return context;
}
