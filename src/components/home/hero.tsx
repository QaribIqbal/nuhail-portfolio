"use client";

import { ArrowDownRight, ArrowUpRight, CirclesThreePlus, GitBranch } from "@phosphor-icons/react";
import { Button } from "@/components/primitives/button";
import { useIntent } from "@/components/site/intent-provider";
import { IntentSwitcher } from "@/components/site/intent-switcher";
import { site } from "@/content/site";

const nodes = [
  ["01", "Lead arrives", "Form · call · WhatsApp"],
  ["02", "AI qualifies", "Intent · budget · timing"],
  ["03", "System routes", "CRM · calendar · owner"],
  ["04", "Human decides", "Escalation with context"],
] as const;

export function Hero() {
  const { intent } = useIntent();
  const projectMode = intent === "project";

  return (
    <section className="shell grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,.95fr)] lg:py-20">
      <div className="relative z-10 py-16 lg:py-24">
        <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[.14em] text-[var(--text-muted)]">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--signal)]" aria-hidden="true" />
          <span>{site.role}</span>
          <span aria-hidden="true">/</span>
          Lahore + remote
        </div>
        <p className="eyebrow">{site.descriptor}</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-balance md:text-7xl lg:text-[5.35rem] lg:leading-[.94]">{site.headline}</h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--text-muted)]">{site.summary}</p>
        <div className="mt-8">
          <IntentSwitcher />
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            {projectMode ? "For agencies and teams replacing repetitive operational work." : "For AI automation, agent engineering, and workflow roles."}
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={projectMode ? "#work" : "#capabilities"}>
              {projectMode ? "Explore systems" : "Review capabilities"} <ArrowDownRight size={18} weight="bold" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={projectMode ? site.links.audit.href : site.links.linkedin.href} rel="noreferrer" target="_blank">
              {projectMode ? site.links.audit.label : site.links.linkedin.label} <ArrowUpRight size={18} weight="bold" />
            </a>
          </Button>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <CirclesThreePlus size={18} className="text-[var(--signal)]" weight="duotone" />
          {site.availability}
        </p>
      </div>
      <div className="grid-field relative overflow-hidden border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)] md:p-7">
        <div className="mb-8 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-xs uppercase tracking-[.14em] text-[var(--text-muted)]">System sketch / 01</p>
          <GitBranch size={20} className="text-[var(--signal)]" weight="duotone" />
        </div>
        <ol className="relative grid gap-4">
          {nodes.map(([index, title, detail], nodeIndex) => (
            <li className="relative grid grid-cols-[2.5rem_1fr] gap-4" key={title}>
              {nodeIndex < nodes.length - 1 ? <span className="absolute left-5 top-10 h-8 w-px bg-[var(--line-strong)]" aria-hidden="true" /> : null}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--ink)] font-mono text-xs text-[var(--signal)]">{index}</span>
              <div className="border-b border-[var(--line)] pb-5 pt-1 last:border-b-0">
                <p className="font-medium tracking-tight">{title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="sr-only">Example automation path: a lead arrives, AI gathers requirements, connected systems route the record, and a human receives context when judgment is needed.</p>
      </div>
    </section>
  );
}
