export type Intent = "hire" | "project";

export type EvidenceKind =
  | "primary-case-study"
  | "public-profile"
  | "demonstration"
  | "potential-impact"
  | "excluded-draft";

export type SourceLedgerEntry = {
  id: string;
  statement: string;
  evidenceKind: EvidenceKind;
  sourceLabel: string;
  sourceUrl: string;
  publish: boolean;
  publicationNote: string;
};

export type ExternalLink = {
  label: string;
  href: `https://${string}`;
};

export type ProjectStatus =
  | "Solution demonstration"
  | "Workflow demonstration"
  | "Product demo"
  | "Workflow build"
  | "Workflow blueprint";

export type WorkflowStep = {
  label: string;
  title: string;
  description: string;
  inputs: readonly string[];
  outputs: readonly string[];
};

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  category: "Agent" | "Automation" | "Product" | "Blueprint";
  summary: string;
  capabilities: readonly string[];
  sourceLedgerIds: readonly string[];
  caseStudyPath?: `/work/${string}`;
  externalDemo?: ExternalLink;
  featured: boolean;
};

export type CaseStudy = Project & {
  challenge: readonly string[];
  systemSummary: string;
  workflow: readonly WorkflowStep[];
  safeguards: readonly string[];
  potentialImpact: readonly string[];
  sourceLink: ExternalLink;
  embed?: { provider: "youtube" | "loom"; src: string; title: string };
};
