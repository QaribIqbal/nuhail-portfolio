"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "@/components/primitives/button";
import { site } from "@/content/site";

const navItems = [
  ["Work", "#work"],
  ["Capabilities", "#capabilities"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[color:color-mix(in_srgb,var(--ink)_88%,transparent)] backdrop-blur-xl">
      <nav aria-label="Primary" className="shell flex min-h-16 items-center justify-between gap-4">
        <a className="font-mono text-xs font-semibold tracking-[.16em] text-[var(--text)]" href="#main-content">
          {site.brand}
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]" href={href} key={href}>
              {label}
            </a>
          ))}
          <Button asChild size="sm" variant="secondary">
            <a href={site.links.linkedin.href} rel="noreferrer" target="_blank">View LinkedIn</a>
          </Button>
        </div>
        <button aria-expanded={open} aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] lg:hidden" onClick={() => setOpen((value) => !value)} type="button">
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </nav>
      {open ? (
        <div className="shell border-t border-[var(--line)] py-4 lg:hidden">
          <div className="grid gap-1">
            {navItems.map(([label, href]) => (
              <a className="rounded-xl px-3 py-3 text-base text-[var(--text-muted)] hover:bg-white/[0.05] hover:text-[var(--text)]" href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="mt-2 rounded-xl bg-[var(--signal)] px-3 py-3 text-center text-sm font-semibold text-[var(--ink)]" href={site.links.linkedin.href} rel="noreferrer" target="_blank">
              View LinkedIn
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
