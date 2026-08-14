import { SectionHeading } from "@/components/site/section-heading";

const steps = [
  ["01", "Audit", "Find the recurring delay, repetition, or missed handoff worth solving."],
  ["02", "Map", "Define inputs, decisions, owners, exceptions, and the human fallback."],
  ["03", "Build", "Connect the channels, tools, data, and custom logic."],
  ["04", "Test", "Exercise normal paths, edge cases, escalation, and recovery."],
  ["05", "Handoff", "Document operation, ownership, monitoring, and support boundaries."],
] as const;

export function Process() {
  return <section className="shell py-16 md:py-24" id="process"><SectionHeading eyebrow="DELIVERY LOOP" title="Map carefully. Build narrowly. Handoff clearly." /><ol className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-5">{steps.map(([number, title, copy]) => <li className="bg-[var(--ink)] p-6" key={number}><p className="font-mono text-xs text-[var(--signal)]">{number}</p><h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{copy}</p></li>)}</ol></section>;
}
