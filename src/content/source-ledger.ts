import type { SourceLedgerEntry } from "@/content/types";

const realEstateSource =
  "https://app.notion.com/p/TechBees-AI-Lead-Response-for-Real-Estate-3b0a34737b6681109648f37a61f61786";
const agencySource =
  "https://app.notion.com/p/TechBees-AI-Automation-for-Marketing-Creative-Agencies-3b0a34737b66817ba1cafae3aa98edd8";
const linkedinSource = "https://www.linkedin.com/in/nuhail-iqbal-a93b1935b/";

export const sourceLedger: readonly SourceLedgerEntry[] = [
  {
    id: "profile-positioning",
    statement: "Nuhail builds AI agents and automation systems for business workflows.",
    evidenceKind: "public-profile",
    sourceLabel: "Nuhail Iqbal on LinkedIn",
    sourceUrl: linkedinSource,
    publish: true,
    publicationNote: "Published as role positioning, not a performance claim.",
  },
  {
    id: "profile-education",
    statement: "Government College University, Lahore, 2023–2026.",
    evidenceKind: "public-profile",
    sourceLabel: "Nuhail Iqbal on LinkedIn",
    sourceUrl: linkedinSource,
    publish: true,
    publicationNote: "Published exactly as the public education entry.",
  },
  {
    id: "real-estate-lead-response",
    statement:
      "Voice and chat workflows can qualify property inquiries, capture requirements, coordinate booking, and hand off to an agent.",
    evidenceKind: "primary-case-study",
    sourceLabel: "TechBees AI Lead Response for Real Estate",
    sourceUrl: realEstateSource,
    publish: true,
    publicationNote: "Presented as a solution demonstration.",
  },
  {
    id: "agency-reporting",
    statement:
      "A scheduled workflow can read structured client data, prepare account-specific summaries, email reports, and confirm delivery internally.",
    evidenceKind: "primary-case-study",
    sourceLabel: "TechBees AI Automation for Marketing & Creative Agencies",
    sourceUrl: agencySource,
    publish: true,
    publicationNote: "Presented as a workflow demonstration.",
  },
  {
    id: "agency-supporting-workflows",
    statement:
      "Geo Dash, automated lead follow-up, and client onboarding are documented as product demonstrations or workflow blueprints.",
    evidenceKind: "primary-case-study",
    sourceLabel: "TechBees AI Automation for Marketing & Creative Agencies",
    sourceUrl: agencySource,
    publish: true,
    publicationNote: "Every card carries its evidence label.",
  },
  {
    id: "stack",
    statement:
      "The documented automation stack includes Make, n8n, Zapier, Airtable, APIs, and custom code.",
    evidenceKind: "primary-case-study",
    sourceLabel: "TechBees case studies",
    sourceUrl: agencySource,
    publish: true,
    publicationNote: "Listed as tool familiarity from the supplied case studies.",
  },
  {
    id: "profile-engineering",
    statement:
      "Public profile activity names workflow engineering, API integrations, web scraping, and AI agents for real business use cases.",
    evidenceKind: "public-profile",
    sourceLabel: "Nuhail Iqbal on LinkedIn",
    sourceUrl: linkedinSource,
    publish: true,
    publicationNote: "Published as capability language without ranking expertise.",
  },
  {
    id: "excluded-metrics",
    statement: "Prototype-only hours saved, ROI, response, and percentage claims.",
    evidenceKind: "excluded-draft",
    sourceLabel: "Archived local prototype",
    sourceUrl: "archive/legacy-static/index.html",
    publish: false,
    publicationNote: "Excluded because the supplied sources do not verify these claims.",
  },
  {
    id: "excluded-testimonials",
    statement: "Prototype testimonials attributed to unnamed client personas.",
    evidenceKind: "excluded-draft",
    sourceLabel: "Archived local prototype",
    sourceUrl: "archive/legacy-static/index.html",
    publish: false,
    publicationNote: "Excluded because no attributable permission or source was supplied.",
  },
];
