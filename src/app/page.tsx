import { Hero } from "@/components/home/hero";
import { CapabilityBento } from "@/components/home/capability-bento";
import { CapabilityTicker } from "@/components/home/capability-ticker";
import { ContactCta } from "@/components/home/contact-cta";
import { ExperienceRail } from "@/components/home/experience-rail";
import { Principles } from "@/components/home/principles";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content"><Hero /><CapabilityTicker /><SelectedWork /><CapabilityBento /><Principles /><ExperienceRail /><Process /><ContactCta /></main>
      <Footer />
    </>
  );
}
