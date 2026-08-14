import Link from "next/link";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="shell grid min-h-[70dvh] place-items-center py-24" id="main-content">
        <div className="max-w-xl text-center">
          <p className="eyebrow">404 / ROUTE NOT FOUND</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">That system path does not exist.</h1>
          <p className="mt-6 leading-7 text-[var(--text-muted)]">Return to the portfolio to explore the available work and capabilities.</p>
          <Link className="mt-8 inline-flex bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-[var(--ink)]" href="/">Return home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
