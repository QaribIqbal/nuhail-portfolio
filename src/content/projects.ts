import type { CaseStudy, Project } from "@/content/types";

const realEstateSource = "https://app.notion.com/p/TechBees-AI-Lead-Response-for-Real-Estate-3b0a34737b6681109648f37a61f61786" as const;
const agencySource = "https://app.notion.com/p/TechBees-AI-Automation-for-Marketing-Creative-Agencies-3b0a34737b66817ba1cafae3aa98edd8" as const;

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "real-estate-lead-response",
    title: "AI Lead Response for Real Estate",
    status: "Solution demonstration",
    category: "Agent",
    summary: "A voice-and-chat system that gathers property requirements, records context, coordinates the next step, and hands unusual requests to a human.",
    capabilities: ["Voice and chat intake", "Qualification", "Booking", "CRM context", "Human transfer"],
    sourceLedgerIds: ["real-estate-lead-response"],
    caseStudyPath: "/work/real-estate-lead-response",
    featured: true,
    challenge: ["Inquiries can arrive after hours and wait for an available agent.", "Agents can repeat the same qualification questions.", "Property requirements and viewing coordination can become fragmented."],
    systemSummary: "A configurable voice-and-chat workflow that responds using approved knowledge, gathers structured property requirements, records context, coordinates a viewing or next conversation, and transfers to a human when judgment is required.",
    workflow: [
      { label: "01", title: "Respond", description: "Acknowledge the inquiry through the agreed channel.", inputs: ["Inbound call", "Outbound list", "WhatsApp inquiry"], outputs: ["Active conversation", "Acknowledged request"] },
      { label: "02", title: "Qualify", description: "Capture the details an agent needs before stepping in.", inputs: ["Property type", "Area", "Budget", "Timing"], outputs: ["Structured requirements", "Priority tag"] },
      { label: "03", title: "Record and route", description: "Send context to the agreed record and owner.", inputs: ["Conversation context", "Contact details"], outputs: ["CRM record", "Owner notification"] },
      { label: "04", title: "Book or hand off", description: "Coordinate the next step or escalate with the full context.", inputs: ["Availability", "Escalation rules"], outputs: ["Viewing booking", "Human transfer"] },
    ],
    safeguards: ["Use approved knowledge and scripts.", "Escalate uncertain or unusual requests.", "Preserve captured requirements during handoff.", "Confirm availability before booking."],
    potentialImpact: ["Fewer inquiries left unanswered after hours.", "Faster first response during busy periods.", "More complete requirements before an agent joins.", "Less repetitive qualification and scheduling work."],
    sourceLink: { label: "Read the original real-estate case study", href: realEstateSource },
    media: { src: "/media/real-estate-flow.png", alt: "Abstract real-estate automation workflow with signals routed through qualification and handoff" },
    embed: { provider: "youtube", src: "https://www.youtube-nocookie.com/embed/0vO8tecumK8", title: "Real-estate voice-agent demonstration" },
  },
  {
    slug: "agency-reporting-automation",
    title: "Agency Reporting Automation",
    status: "Workflow demonstration",
    category: "Automation",
    summary: "A scheduled workflow that reads structured client data, prepares account-specific updates, sends each report, and confirms delivery internally.",
    capabilities: ["Scheduled trigger", "Structured data", "Report generation", "Email delivery", "Internal confirmation"],
    sourceLedgerIds: ["agency-reporting"],
    caseStudyPath: "/work/agency-reporting-automation",
    featured: true,
    challenge: ["Weekly reports can require manual copying, summary writing, and email sending.", "Account managers can gather data across tools before they can discuss it.", "Team visibility can depend on manual confirmation."],
    systemSummary: "A scheduled Make workflow that reads client data from a structured source, prepares account-specific summaries and insights, emails each report to the correct recipient, and notifies the delivery team when sending is complete.",
    workflow: [
      { label: "01", title: "Trigger", description: "Start a repeatable delivery run at the approved time.", inputs: ["Approved schedule"], outputs: ["Reporting run"] },
      { label: "02", title: "Read", description: "Collect structured client records and performance inputs.", inputs: ["Client records", "Performance data"], outputs: ["Validated payloads"] },
      { label: "03", title: "Generate and deliver", description: "Prepare and send the right update for each account.", inputs: ["Payload", "Reporting template"], outputs: ["Client-specific email"] },
      { label: "04", title: "Confirm and escalate", description: "Make delivery status clear and surface exceptions.", inputs: ["Delivery status"], outputs: ["Internal notification", "Review request"] },
    ],
    safeguards: ["Validate the recipient against the client record.", "Flag incomplete source data.", "Preserve the values used for a report.", "Route delivery exceptions to a human owner."],
    potentialImpact: ["Fewer repetitive reporting steps every week.", "More consistent delivery at the promised time.", "Clearer client-specific communication.", "Better internal visibility after reports are sent."],
    sourceLink: { label: "Read the original agency case study", href: agencySource },
    media: { src: "/media/agency-reporting-flow.png", alt: "Abstract agency reporting workflow with data routed into scheduled delivery" },
    embed: { provider: "loom", src: "https://www.loom.com/embed/f7560adbec7841ca809a84e5d638c4f8", title: "Weekly client reporting automation demonstration" },
  },
];

export const supportingProjects: readonly Project[] = [
  { slug: "geo-dash", title: "Geo Dash", status: "Product demo", category: "Product", summary: "A product demo for moving from relevant keyword discovery to SEO-focused drafting and publishing support.", capabilities: ["Keyword discovery", "SEO drafting", "Publishing support"], sourceLedgerIds: ["agency-supporting-workflows"], featured: false },
  { slug: "whatsapp-inquiry-assistant", title: "WhatsApp Inquiry Assistant", status: "Solution demonstration", category: "Agent", summary: "A conversational workflow for common questions, listing or inventory context, requirement capture, and escalation.", capabilities: ["FAQ answers", "Requirement capture", "Escalation"], sourceLedgerIds: ["real-estate-lead-response"], featured: false },
  { slug: "automated-lead-follow-up", title: "Automated Lead Follow-up", status: "Workflow build", category: "Automation", summary: "A workflow that records an inquiry, sends the appropriate first response, routes ownership, and schedules the next touch.", capabilities: ["Contextual response", "Routing", "Next touch"], sourceLedgerIds: ["agency-supporting-workflows"], featured: false },
  { slug: "client-onboarding-handoff", title: "Client Onboarding & Handoff", status: "Workflow blueprint", category: "Blueprint", summary: "A blueprint that turns a deal-won event into projects, asset requests, owner assignments, CRM updates, and delivery alerts.", capabilities: ["Deal-won trigger", "Owner assignment", "Delivery alerts"], sourceLedgerIds: ["agency-supporting-workflows"], featured: false },
];

export const projects = [...caseStudies, ...supportingProjects] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
