"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/primitives/button";
import { useIntent } from "@/components/site/intent-provider";
import { site } from "@/content/site";

export function ContactCta() {
  const { intent } = useIntent();
  const projectMode = intent === "project";
  return <section className="shell py-24 md:py-36" id="contact"><div className="grid-field border border-[var(--line-strong)] bg-[var(--surface)] p-7 md:p-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10"><div><p className="eyebrow">NEXT SIGNAL</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">Build the next system — or bring me into the team building it.</h2><p className="mt-5 max-w-2xl leading-7 text-[var(--text-muted)]">{projectMode ? "Bring the recurring workflow that causes the most delay, copying, or chasing." : "Review the work, then reach out on LinkedIn about AI automation, agent engineering, or workflow roles."}</p></div><Button asChild size="lg"><a href={projectMode ? site.links.audit.href : site.links.linkedin.href} rel="noreferrer" target="_blank">{projectMode ? site.links.audit.label : site.links.linkedin.label}<ArrowUpRight size={18} weight="bold" /></a></Button></div></section>;
}
