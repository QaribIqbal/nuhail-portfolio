import { SectionHeading } from "@/components/site/section-heading";
import { principles } from "@/content/principles";

export function Principles() {
  return <section className="shell py-24 md:py-36"><SectionHeading eyebrow="WORKING PRINCIPLES" title="Automation is a design discipline." /><ol className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">{principles.map(([index, title, copy]) => <li className="grid gap-5 py-7 md:grid-cols-[6rem_1fr_1.3fr]" key={index}><span className="font-mono text-sm text-[var(--signal)]">{index}</span><h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="leading-7 text-[var(--text-muted)]">{copy}</p></li>)}</ol></section>;
}
