import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCountUp } from "../../hooks/useCountUp";

// Inline count-up span — triggers count animation on scroll into view
const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = "" }) => {
  const { spanRef, value } = useCountUp(to, 1400);
  return <span ref={spanRef}>{value}{suffix}</span>;
};

// Grayscale abstract card image — CSS only, matches hero's editorial feel
const CardImage: React.FC<{ num: string }> = ({ num }) => (
  <div
    className="w-full aspect-video relative overflow-hidden select-none pointer-events-none"
    style={{ background: "var(--surface-soft)" }}
    aria-hidden="true"
  >
    {/* Horizontal line texture */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(255,255,255,0.04) 23px, rgba(255,255,255,0.04) 24px)",
      }}
    />
    {/* Oversized card number as subtle texture */}
    <span
      className="absolute inset-0 flex items-center justify-center font-corp text-white"
      style={{ fontSize: "clamp(72px, 12vw, 108px)", opacity: 0.045, letterSpacing: "-0.02em" }}
    >
      {num}
    </span>
  </div>
);

// Real workflow screenshot over the abstract art. The screenshot file lives in
// the project's own GitHub repo (docs/workflow.png); until it is uploaded there
// the image hides itself and the abstract art shows instead — no broken image.
const CardScreenshot: React.FC<{ image: { src: string; alt: string }; num: string }> = ({
  image,
  num,
}) => (
  <div className="relative w-full aspect-video overflow-hidden select-none" style={{ background: "var(--surface-soft)" }}>
    <div className="absolute inset-0">
      <CardImage num={num} />
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-contain"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  </div>
);

const capabilities = [
  {
    title: "AI & Agents",
    body: "Conversational and voice agents that qualify, answer, and know exactly when to hand off to a person.",
  },
  {
    title: "Automation",
    body: "n8n, Make, and Zapier workflows that move information across a business without anyone babysitting them.",
  },
  {
    title: "Integrations",
    body: "CRMs, calendars, WhatsApp, and REST APIs wired together so they actually talk to each other.",
  },
  {
    title: "Engineering",
    body: "Python and custom logic for the parts a drag-and-drop tool can't safely express.",
  },
  {
    title: "Delivery",
    body: "Documentation, real-world testing, and a clean handoff, so the system survives contact with your team.",
  },
];

interface Project {
  num: string;
  title: string;
  description: React.ReactNode;
  tags: string[];
  link?: { label: string; href: string };
  demoLink?: { label: string; href: string };
  image?: { src: string; alt: string };
}

// Featured first: Geo Dash and Nexus are the live products.
const featuredProjects: Project[] = [
  {
    num: "01",
    title: "Geo Dash",
    description:
      "The AI SEO operating system for agencies: keyword research, competitor analysis, AI article drafts, images, client approvals, and WordPress publishing in one system.",
    tags: ["AI SEO", "Keyword research", "WordPress"],
    link: { label: "View project", href: "https://geodash.ai/" },
    demoLink: { label: "Watch demo", href: "https://youtu.be/4ITqJ0UWNVs" },
  },
  {
    num: "02",
    title: "Nexus | VAPI AI Missed-Call Follow-Up",
    description:
      "An AI calling workflow that identifies missed calls from integrated database records and initiates automated callbacks using VAPI.",
    tags: ["VAPI", "Voice agents", "Supabase"],
    link: { label: "View project", href: "https://admin.edmnexus.ai/" },
    demoLink: { label: "Watch demo", href: "https://youtu.be/8fhhPkKQ67o" },
  },
];

const smallProjects: Project[] = [
  {
    num: "03",
    title: "AI Lead Response for Real Estate",
    description: (
      <>
        A voice-and-chat intake that qualifies buyers by budget and timeline, books the next step,
        and hands unusual requests straight to a human. Replaced{" "}
        <CountUp to={80} suffix="+" /> hours a month of manual work and a $400/month subscription tool.
      </>
    ),
    tags: ["n8n", "OpenAI", "HubSpot", "CRM routing"],
  },
  {
    num: "04",
    title: "E-commerce AI Support Agent",
    description:
      "Built on Make.com and a vector knowledge base, this agent resolves the majority of incoming tickets on its own and cut response time from 48 hours to under a minute.",
    tags: ["Make.com", "Pinecone", "Zendesk"],
  },
  {
    num: "05",
    title: "Legal Document Extraction Pipeline",
    description: (
      <>
        A Python and OpenAI pipeline that reads and structures{" "}
        <CountUp to={500} suffix="+" /> contracts a month, cutting manual review time by{" "}
        <CountUp to={90} suffix="%" />.
      </>
    ),
    tags: ["Python", "OpenAI API", "Salesforce"],
  },
  {
    num: "06",
    title: "Agency Reporting Automation",
    description:
      "A scheduled workflow that reads structured client data, drafts account-specific updates, sends each report, and confirms delivery internally. No one has to remember report day again.",
    tags: ["Scheduled triggers", "Structured data", "Email delivery"],
  },
  {
    num: "07",
    title: "WhatsApp Inquiry Assistant",
    description:
      "Handles what comes in at 11pm: FAQs, listing or inventory context, requirement capture, and escalation when it actually matters.",
    tags: ["WhatsApp API", "Conversational AI", "Escalation"],
  },
  {
    num: "08",
    title: "Client Onboarding & Handoff",
    description:
      "Turns a closed deal into a fully set-up project: assets requested, owners assigned, CRM updated, team notified — automatically.",
    tags: ["Workflow orchestration", "CRM", "Notifications"],
  },
  {
    num: "09",
    title: "ChatBot Hub — RAG Knowledge Chatbot",
    description:
      "A RAG support chatbot in n8n: the retrieval pipeline answers questions from a Pinecone vector store, and the ingestion pipeline loads the knowledge base. OpenRouter model, HuggingFace embeddings, 10-message memory.",
    tags: ["n8n", "RAG", "Pinecone"],
    link: { label: "View project", href: "https://github.com/NuhailIqbal/chatbot-hub" },
    demoLink: { label: "Watch demo", href: "https://youtu.be/vbiD_IE2NfM" },
    image: {
      src: "https://raw.githubusercontent.com/NuhailIqbal/chatbot-hub/main/docs/workflow.png",
      alt: "ChatBot Hub n8n workflow — retrieval pipeline with Pinecone vector store and ingestion pipeline",
    },
  },
  {
    num: "10",
    title: "LinkedIn DM Automation — Human-in-the-Loop Outreach",
    description:
      "A human-in-the-loop LinkedIn outreach workflow in n8n: leads CSV in, PhantomBuster researches each lead's latest post, Gemini drafts a personal DM, and nothing sends until a human approves it by email. Daily limits, duplicate guards, and reply tracking.",
    tags: ["n8n", "Gemini", "Unipile"],
    link: { label: "View project", href: "https://github.com/NuhailIqbal/Linked-IN-Automation" },
    image: {
      src: "https://raw.githubusercontent.com/NuhailIqbal/Linked-IN-Automation/main/docs/workflow.png",
      alt: "LinkedIn DM Automation n8n workflow — lead research, Gemini draft, human approval gate",
    },
  },
];

export const LabsSection: React.FC = () => {
  const { ref: capRef, visible: capVisible } = useScrollReveal(0.05);
  const { ref: gridHeaderRef, visible: gridHeaderVisible } = useScrollReveal(0.05);
  const { ref: grid1Ref, visible: grid1Visible } = useScrollReveal(0.03);
  const { ref: grid2Ref, visible: grid2Visible } = useScrollReveal(0.03);

  const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section id="labs" aria-labelledby="labs-heading" className="border-t border-[var(--line)]">
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 py-24 sm:py-32">

        {/* ── Capabilities block ── */}
        <div ref={capRef}>
          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(capVisible)}
          >
            SYSTEMS I RUN
          </p>
          <h2
            id="labs-heading"
            className="font-corp uppercase text-white"
            style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              ...revealStyle(capVisible, 60),
            }}
          >
            Five disciplines.
            <br className="hidden sm:block" /> One operating loop.
          </h2>
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mt-6 mb-12 leading-relaxed"
            style={revealStyle(capVisible, 120)}
          >
            I don't sell automation as magic. I build the specific pieces that make it hold up
            after launch — and stay held up after I'm done.
          </p>

          <ul className="divide-y divide-[var(--line)]" role="list">
            {capabilities.map((cap, i) => (
              <li
                key={cap.title}
                className="py-5 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-8"
                style={revealStyle(capVisible, 160 + i * 80)}
              >
                <span className="text-xs font-mono text-[var(--text-dim)] w-20 shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-white text-[15px] sm:text-[16px] mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
                    {cap.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-[var(--line)] my-20 sm:my-28" />

        {/* ── Selected Systems header ── */}
        <div ref={gridHeaderRef}>
          <p
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-5"
            style={revealStyle(gridHeaderVisible)}
          >
            PROOF, NOT PROMISES
          </p>
          <h2
            className="font-corp uppercase text-white"
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              ...revealStyle(gridHeaderVisible, 60),
            }}
          >
            Two flagship systems,
            <br className="hidden sm:block" /> eight more in the lab.
          </h2>
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mt-6 mb-12 leading-relaxed"
            style={revealStyle(gridHeaderVisible, 120)}
          >
            Geo Dash and Nexus are the live products. The rest are client builds and
            demonstrations, presented with the evidence level they actually have.
          </p>
        </div>

        {/* ── Featured projects — Geo Dash & Nexus ── */}
        <div
          ref={grid1Ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px"
          style={{ background: "var(--line)" }}
        >
          {featuredProjects.map((project, i) => (
            <article
              key={project.num}
              className="bg-black p-6 sm:p-10 flex flex-col gap-5"
              style={revealStyle(grid1Visible, i * 80)}
            >
              <CardImage num={project.num} />
              <div className="flex flex-col gap-4 flex-1">
                <span className="text-xs font-mono text-[var(--text-dim)]">
                  FEATURED / {project.num}
                </span>
                <h3 className="font-heading text-white text-[22px] sm:text-[26px] leading-snug">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] text-base leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 border border-[var(--line-strong)] text-[var(--text-dim)] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-white hover:text-[var(--text-muted)] transition-colors mt-auto pt-2 inline-block"
                    aria-label={`${project.link.label}: ${project.title}`}
                  >
                    {project.link.label} ↗
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-white hover:text-[var(--text-muted)] transition-colors pt-1 inline-block"
                    aria-label={`${project.demoLink.label}: ${project.title}`}
                  >
                    {project.demoLink.label} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ── Small cards — the rest ── */}
        <p
          className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mt-16 mb-6"
          style={revealStyle(grid2Visible)}
        >
          MORE SYSTEMS
        </p>
        <div
          ref={grid2Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--line)" }}
        >
          {smallProjects.map((project, i) => (
            <article
              key={project.num}
              className="bg-black p-5 sm:p-6 flex flex-col gap-3"
              style={revealStyle(grid2Visible, i * 80)}
            >
              {project.image ? <CardScreenshot image={project.image} num={project.num} /> : null}
              <span className="text-xs font-mono text-[var(--text-dim)]">{project.num} /</span>
              <h3 className="font-heading text-white text-[15px] sm:text-[16px] leading-snug">
                {project.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 border border-[var(--line-strong)] text-[var(--text-dim)] rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white hover:text-[var(--text-muted)] transition-colors mt-auto pt-2 inline-block"
                  aria-label={`${project.link.label}: ${project.title}`}
                >
                  {project.link.label} ↗
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white hover:text-[var(--text-muted)] transition-colors pt-1 inline-block"
                  aria-label={`${project.demoLink.label}: ${project.title}`}
                >
                  {project.demoLink.label} ↗
                </a>
              )}
            </article>
          ))}
        </div>

        {/* ── Human aside ── */}
        <p
          className="px-6 sm:px-8 py-5 text-[var(--text-muted)] text-sm border-x border-b border-[var(--line)] italic mt-px"
          style={{
            opacity: grid2Visible ? 1 : 0,
            transition: "opacity 0.65s ease 300ms",
          }}
        >
          (That one taught me more about escalation logic than the degree did.)
        </p>
      </div>
    </section>
  );
};
