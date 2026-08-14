import { tickerSkills } from "@/content/capabilities";

export function CapabilityTicker() {
  return <section aria-label="Capabilities" className="border-y border-[var(--line)]"><div className="overflow-hidden"><div aria-label="Capability list" className="ticker-track shell flex min-w-max gap-5 py-4"><span className="shrink-0 font-mono text-xs uppercase tracking-[.14em] text-[var(--signal)]">Capability signal</span>{[...tickerSkills, ...tickerSkills].map((skill, index) => <span className="shrink-0 text-sm text-[var(--text-muted)]" key={`${skill}-${index}`}>/ {skill}</span>)}</div></div></section>;
}
