"use client";

import { cn } from "@/lib/cn";
import { useIntent } from "@/components/site/intent-provider";

const choices = [
  { value: "hire", label: "Hiring talent" },
  { value: "project", label: "Need automation" },
] as const;

export function IntentSwitcher() {
  const { intent, setIntent } = useIntent();

  return (
    <div aria-label="Choose why you are visiting" className="inline-flex rounded-full border border-[var(--line)] bg-white/[0.035] p-1">
      {choices.map((choice) => (
        <button
          aria-pressed={intent === choice.value}
          className={cn(
            "rounded-full px-3 py-2 text-xs font-medium transition md:px-4",
            intent === choice.value ? "button-primary" : "text-[var(--text-muted)] hover:text-[var(--text)]",
          )}
          key={choice.value}
          onClick={() => setIntent(choice.value)}
          type="button"
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
}
