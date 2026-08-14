import { BracketsCurly, Broadcast, GitMerge, Wrench } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/site/section-heading";
import { capabilityGroups } from "@/content/capabilities";

const icons = [Broadcast, GitMerge, BracketsCurly, Wrench, GitMerge];

export function CapabilityBento() {
  return <section className="shell py-16 md:py-24" id="capabilities"><SectionHeading eyebrow="CAPABILITY MAP" title="From conversation to connected operation." description="A systems toolkit built around the parts that make automation usable after launch." /><div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-12">{capabilityGroups.map((group, index) => { const Icon = icons[index]; return <article className={`bg-[var(--surface)] p-7 transition-colors duration-500 hover:bg-[var(--surface-soft)] ${index === 0 || index === 3 ? "lg:col-span-7" : index === 4 ? "lg:col-span-12" : "lg:col-span-5"}`} key={group.label}><Icon size={28} className="text-[var(--signal)]" weight="duotone" /><h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{group.label}</h3><p className="mt-3 max-w-lg leading-7 text-[var(--text-muted)]">{group.summary}</p><div className="mt-8 flex flex-wrap gap-2">{group.skills.map((skill) => <span className="border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--text-muted)]" key={skill}>{skill}</span>)}</div></article>; })}</div></section>;
}
