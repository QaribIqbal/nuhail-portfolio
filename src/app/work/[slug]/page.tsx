import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ContactCta } from "@/components/home/contact-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { caseStudies, getCaseStudy } from "@/content/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return { title: `${caseStudy.title} — ${caseStudy.status}`, description: caseStudy.summary };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  return <><Header /><main id="main-content"><section className="shell py-20 md:py-28"><Link className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)]" href="/#work"><ArrowLeft size={16} />Back to work</Link><p className="eyebrow mt-12">{caseStudy.status}</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.065em] md:text-7xl">{caseStudy.title}</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-[var(--text-muted)]">{caseStudy.systemSummary}</p><div className="grid-field mt-12 min-h-72 border border-[var(--line)] p-7"><p className="font-mono text-xs uppercase tracking-[.14em] text-[var(--signal)]">Workflow architecture</p><div className="mt-12 grid gap-4 md:grid-cols-4">{caseStudy.workflow.map((step) => <div className="border-t border-[var(--signal)] pt-4" key={step.label}><p className="font-mono text-xs text-[var(--signal)]">{step.label}</p><h2 className="mt-4 text-xl font-semibold">{step.title}</h2><p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p></div>)}</div></div></section><section className="border-y border-[var(--line)] bg-[var(--surface)]"><div className="shell grid gap-10 py-20 lg:grid-cols-2"><div><p className="eyebrow">CHALLENGE</p><ul className="mt-6 grid gap-4 text-lg leading-7 text-[var(--text-muted)]">{caseStudy.challenge.map((item) => <li key={item}>— {item}</li>)}</ul></div><div><p className="eyebrow">SAFEGUARDS</p><ul className="mt-6 grid gap-4 text-lg leading-7 text-[var(--text-muted)]">{caseStudy.safeguards.map((item) => <li key={item}>— {item}</li>)}</ul></div></div></section><section className="shell grid gap-12 py-20 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow">POTENTIAL IMPACT</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Potential impact — not a claimed client result.</h2><ul className="mt-7 grid gap-3 text-[var(--text-muted)]">{caseStudy.potentialImpact.map((item) => <li key={item}>— {item}</li>)}</ul></div><div className="border border-[var(--line)] bg-[var(--surface)] p-7"><p className="eyebrow">SOURCE MATERIAL</p><p className="mt-5 leading-7 text-[var(--text-muted)]">This page is a structured portfolio presentation of the supplied case-study source.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--signal)]" href={caseStudy.sourceLink.href} rel="noreferrer" target="_blank">{caseStudy.sourceLink.label}<ArrowUpRight size={16} weight="bold" /></a></div></section><ContactCta /></main><Footer /></>;
}
