import type { ExternalLink } from "@/content/types";

type SiteLinkMap = {
  linkedin: ExternalLink;
  audit: ExternalLink;
  realEstateCaseStudy: ExternalLink;
  agencyCaseStudy: ExternalLink;
};

export const site: {
  name: string;
  brand: string;
  role: string;
  descriptor: string;
  location: string;
  headline: string;
  summary: string;
  availability: string;
  links: SiteLinkMap;
} = {
  name: "Nuhail Iqbal",
  brand: "NUHAIL / SYSTEMS",
  role: "AI Automation Engineer",
  descriptor: "Agents · Workflows · API Integrations",
  location: "Lahore, Pakistan · Remote",
  headline: "I turn repetitive work into systems that think, route, and act.",
  summary:
    "I'm Nuhail Iqbal. I design AI agents, workflow automations, and API-connected operations for agencies, SaaS teams, and real-estate businesses.",
  availability: "Open to selected freelance projects and AI automation roles.",
  links: {
    linkedin: {
      label: "View LinkedIn",
      href: "https://www.linkedin.com/in/nuhail-iqbal-a93b1935b/",
    },
    audit: {
      label: "Book a TechBees Automation Audit",
      href: "https://calendly.com/qaribiqbal92/30min",
    },
    realEstateCaseStudy: {
      label: "Read the original real-estate case study",
      href: "https://app.notion.com/p/TechBees-AI-Lead-Response-for-Real-Estate-3b0a34737b6681109648f37a61f61786",
    },
    agencyCaseStudy: {
      label: "Read the original agency case study",
      href: "https://app.notion.com/p/TechBees-AI-Automation-for-Marketing-Creative-Agencies-3b0a34737b66817ba1cafae3aa98edd8",
    },
  },
};
