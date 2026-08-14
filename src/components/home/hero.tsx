"use client";

import { ArrowDownRight, ArrowUpRight, CirclesThreePlus, GitBranch } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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
  const reduceMotion = useReducedMotion();
  const projectMode = intent === "project";

  return (
    <section className="shell relative grid items-start gap-10 overflow-hidden py-8 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1.12fr)_minmax(28rem,.88fr)] lg:items-center lg:gap-14 lg:py-10">
      <div aria-hidden="true" className="system-atmosphere"><span className="signal-orb signal-orb-one" /><span className="signal-orb signal-orb-two" /><svg className="signal-paths" fill="none" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg"><path d="M-80 570C140 430 265 705 480 520S790 250 1280 425" pathLength="1" /><path d="M-110 640C200 465 290 650 570 610S790 440 1260 500" pathLength="1" /></svg></div>
      <motion.div animate={{ opacity: 1, y: 0 }} initial={false} transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }} className="relative z-10 py-10 lg:py-16">
        <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[.14em] text-[var(--text-muted)]">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--signal)]" aria-hidden="true" />
          <span>{site.role}</span>
          <span aria-hidden="true">/</span>
          Lahore + remote
        </div>
        <p className="eyebrow">{site.descriptor}</p>
        <h1 className="mt-5 max-w-3xl text-[clamp(3.1rem,6.1vw,4.9rem)] font-semibold leading-[.94] tracking-[-0.065em] text-balance">{site.headline}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-muted)]">{site.summary}</p>
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
      </motion.div>
      <motion.div animate={{ opacity: 1, scale: 1 }} initial={false} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.14, ease: "easeOut" }} className="grid-field relative min-h-[31rem] overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
        <Image alt="Portrait of Nuhail Iqbal" className="object-cover object-center" fill priority sizes="(min-width: 1024px) 42vw, 100vw" src="/media/nuhail-portrait-primary.png" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,13,.06),rgba(7,9,13,.78))]" />
        <div className="absolute inset-x-4 bottom-4 z-10 bg-[rgba(7,9,13,.74)] p-4 backdrop-blur-md md:inset-x-7 md:bottom-7 md:p-5">
        <div className="mb-8 flex items-center justify-between border-b border-[var(--line)] pb-4">
          <p className="font-mono text-xs uppercase tracking-[.14em] text-[var(--text-muted)]">System sketch / 01</p>
          <GitBranch size={20} className="text-[var(--signal)]" weight="duotone" />
        </div>
        <ol className="relative grid grid-cols-2 gap-x-4 gap-y-3">
          {nodes.map(([index, title, detail], nodeIndex) => (
            <li className="grid grid-cols-[2rem_1fr] gap-2" key={title}>
              <span className="signal-node flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--ink)] font-mono text-[10px] text-[var(--signal)]" style={{ animationDelay: `${nodeIndex * 1.1}s` }}>{index}</span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-medium tracking-tight">{title}</p>
                <p className="mt-0.5 truncate text-xs text-[var(--text-muted)]">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>
        <p className="sr-only">Example automation path: a lead arrives, AI gathers requirements, connected systems route the record, and a human receives context when judgment is needed.</p>
      </motion.div>
    </section>
  );
}
