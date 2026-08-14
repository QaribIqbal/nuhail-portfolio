import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/site/section-heading";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export function ExperienceRail() {
  return <section className="border-y border-[var(--line)] bg-[var(--surface)]" id="about"><div className="shell grid gap-12 py-16 lg:grid-cols-[.85fr_1.15fr] lg:py-24"><div><SectionHeading eyebrow="ABOUT NUHAIL" title="Practical AI, built close to the process." /><p className="mt-7 max-w-md leading-7 text-[var(--text-muted)]">Nuhail is an AI automation engineer in Lahore focused on practical agents, connected workflows, and the operational details that make automation usable after launch.</p><a className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--signal)]" href={site.links.linkedin.href} rel="noreferrer" target="_blank">View LinkedIn for current experience <ArrowUpRight size={16} weight="bold" /></a></div><ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{experience.map((item) => <li className="grid gap-3 py-6 md:grid-cols-[8rem_1fr]" key={item.title}><span className="font-mono text-xs uppercase tracking-[.12em] text-[var(--signal)]">{item.date}</span><div><h3 className="text-xl font-semibold tracking-[-0.035em]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.detail}</p></div></li>)}</ol></div></section>;
}
