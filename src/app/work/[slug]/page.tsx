import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { DemoPlayer } from "@/components/media/demo-player";
import { ContactCta } from "@/components/home/contact-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { caseStudies, getCaseStudy } from "@/content/projects";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const caseStudy = getCaseStudy(slug); return caseStudy ? { title: `${caseStudy.title} — ${caseStudy.status}`, description: caseStudy.summary } : {}; }

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  const demo = caseStudy.embed;
  return <><Header /><main id="main-content"><section className="shell py-16 md:py-24"><Link className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]" href="/#work"><ArrowLeft size={16} />Back to work</Link><div className="mt-12 grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-end"><div><p className="eyebrow">{caseStudy.status}</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.065em] md:text-7xl md:leading-[.95]">{caseStudy.title}</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-[var(--text-muted)]">{caseStudy.systemSummary}</p></div><div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)]"><Image alt={caseStudy.media.alt} className="object-cover" fill priority sizes="(min-width: 1024px) 42vw, 100vw" src={caseStudy.media.src} /><span className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,13,.42),transparent)]" /></div></div><div className="grid-field mt-12 border border-[var(--line)] p-6 md:p-8"><p className="font-mono text-xs uppercase tracking-[.14em] text-[var(--signal)]">Workflow architecture</p><div className="mt-10 grid gap-7 md:grid-cols-4">{caseStudy.workflow.map((step) => <div className="border-t border-[var(--signal)] pt-4" key={step.label}><p className="font-mono text-xs text-[var(--signal)]">{step.label}</p><h2 className="mt-4 text-xl font-semibold">{step.title}</h2><p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p></div>)}</div></div></section><section className="border-y border-[var(--line)] bg-[var(--surface)]"><div className="shell grid gap-10 py-16 lg:grid-cols-2 md:py-20"><div><p className="eyebrow">CHALLENGE</p><ul className="mt-6 grid gap-4 text-lg leading-7 text-[var(--text-muted)]">{caseStudy.challenge.map((item) => <li key={item}>— {item}</li>)}</ul></div><div><p className="eyebrow">SAFEGUARDS</p><ul className="mt-6 grid gap-4 text-lg leading-7 text-[var(--text-muted)]">{caseStudy.safeguards.map((item) => <li key={item}>— {item}</li>)}</ul></div></div></section><section className="shell grid gap-12 py-16 lg:grid-cols-[1fr_.8fr] md:py-20"><div><p className="eyebrow">POTENTIAL IMPACT</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Potential impact — not a claimed client result.</h2><ul className="mt-7 grid gap-3 text-[var(--text-muted)]">{caseStudy.potentialImpact.map((item) => <li key={item}>— {item}</li>)}</ul></div><div className="border border-[var(--line)] bg-[var(--surface)] p-7"><p className="eyebrow">SOURCE MATERIAL</p><p className="mt-5 leading-7 text-[var(--text-muted)]">This page is a structured portfolio presentation of the supplied case-study source.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--signal)]" href={caseStudy.sourceLink.href} rel="noreferrer" target="_blank">{caseStudy.sourceLink.label}<ArrowUpRight size={16} weight="bold" /></a></div></section>{demo ? <section className="shell pb-16 md:pb-24"><p className="eyebrow mb-5">WALKTHROUGH</p><DemoPlayer poster={caseStudy.media.src} provider={demo.provider} src={demo.src} title={demo.title} /></section> : null}<ContactCta /></main><Footer /></>;
}
