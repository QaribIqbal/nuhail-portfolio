import { site } from "@/content/site";

export function Footer() {
  return <footer className="border-t border-[var(--line)]"><div className="shell grid gap-8 py-10 md:grid-cols-[1fr_auto]"><div><p className="font-mono text-xs font-semibold tracking-[.16em]">{site.brand}</p><p className="mt-3 text-sm text-[var(--text-muted)]">Built around practical systems, clear evidence, and human handoffs.</p></div><div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--text-muted)]"><a href={site.links.linkedin.href} rel="noreferrer" target="_blank">LinkedIn</a><a href={site.links.realEstateCaseStudy.href} rel="noreferrer" target="_blank">Real-estate study</a><a href={site.links.agencyCaseStudy.href} rel="noreferrer" target="_blank">Agency study</a></div></div></footer>;
}
