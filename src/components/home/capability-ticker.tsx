import { tickerSkills } from "@/content/capabilities";

export function CapabilityTicker() {
  return <section aria-label="Capabilities" className="border-y border-[var(--line)]"><div aria-label="Capability list" className="shell flex gap-5 overflow-x-auto py-4" tabIndex={0}><span className="shrink-0 font-mono text-xs uppercase tracking-[.14em] text-[var(--signal)]">Capability signal</span>{tickerSkills.map((skill) => <span className="shrink-0 text-sm text-[var(--text-muted)]" key={skill}>/ {skill}</span>)}</div></section>;
}
