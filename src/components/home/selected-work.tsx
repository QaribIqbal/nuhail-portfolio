import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { caseStudies, supportingProjects } from "@/content/projects";

function ProjectDiagram({ index }: { index: number }) {
  return <div aria-hidden="true" className="grid-field relative min-h-48 overflow-hidden border-b border-[var(--line)] p-6"><span className="absolute left-6 top-6 font-mono text-xs text-[var(--signal)]">0{index + 1} / SYSTEM</span><span className="absolute bottom-9 left-7 h-3 w-3 rounded-full bg-[var(--signal)]" /><span className="absolute bottom-10 left-12 h-px w-[44%] bg-[var(--signal)]" /><span className="absolute bottom-7 left-[58%] h-8 w-8 border border-[var(--signal)] bg-[var(--ink)]" /></div>;
}

export function SelectedWork() {
  return (
    <section className="shell py-24 md:py-36" id="work">
      <SectionHeading eyebrow="SELECTED SYSTEMS" title="Proof lives in the workflow." description="Agents, automations, and product experiments presented with their real evidence level." />
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.16fr_.84fr]">
        {caseStudies.map((project, index) => (
          <article className="group overflow-hidden border border-[var(--line)] bg-[var(--surface)]" key={project.slug}>
            <ProjectDiagram index={index} />
            <div className="p-6 md:p-8">
              <p className="eyebrow">{project.status}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em]">{project.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-[var(--text-muted)]">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.capabilities.map((capability) => <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--text-muted)]" key={capability}>{capability}</span>)}</div>
              <Link className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--signal)]" href={project.caseStudyPath!}>Read case study <ArrowUpRight size={16} weight="bold" /></Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
        {supportingProjects.map((project) => <article className="bg-[var(--ink)] p-6 md:p-8" key={project.slug}><p className="eyebrow">{project.status}</p><h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3><p className="mt-3 leading-7 text-[var(--text-muted)]">{project.summary}</p><p className="mt-6 text-xs uppercase tracking-[.12em] text-[var(--text-muted)]">{project.capabilities.join(" · ")}</p></article>)}
      </div>
    </section>
  );
}
