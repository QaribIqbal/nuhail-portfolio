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
}

const projects: Project[] = [
  {
    num: "01",
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
    num: "02",
    title: "E-commerce AI Support Agent",
    description:
      "Built on Make.com and a vector knowledge base, this agent resolves the majority of incoming tickets on its own and cut response time from 48 hours to under a minute.",
    tags: ["Make.com", "Pinecone", "Zendesk"],
  },
  {
    num: "03",
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
    num: "04",
    title: "Agency Reporting Automation",
    description:
      "A scheduled workflow that reads structured client data, drafts account-specific updates, sends each report, and confirms delivery internally. No one has to remember report day again.",
    tags: ["Scheduled triggers", "Structured data", "Email delivery"],
  },
  {
    num: "05",
    title: "WhatsApp Inquiry Assistant",
    description:
      "Handles what comes in at 11pm: FAQs, listing or inventory context, requirement capture, and escalation when it actually matters.",
    tags: ["WhatsApp API", "Conversational AI", "Escalation"],
  },
  {
    num: "06",
    title: "Client Onboarding & Handoff",
    description:
      "Turns a closed deal into a fully set-up project: assets requested, owners assigned, CRM updated, team notified — automatically.",
    tags: ["Workflow orchestration", "CRM", "Notifications"],
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
            Six systems,
            <br className="hidden sm:block" /> six real constraints.
          </h2>
          <p
            className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mt-6 mb-12 leading-relaxed"
            style={revealStyle(gridHeaderVisible, 120)}
          >
            Presented with the evidence level they actually have — some are live client builds,
            some are demonstrations.
          </p>
        </div>

        {/* ── Card grid — first 3 ── */}
        <div
          ref={grid1Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--line)" }}
        >
          {projects.slice(0, 3).map((project, i) => (
            <article
              key={project.num}
              className="bg-black p-6 sm:p-8 flex flex-col gap-4"
              style={revealStyle(grid1Visible, i * 80)}
            >
              <CardImage num={project.num} />
              <div className="flex flex-col gap-3 flex-1">
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
                <a
                  href="#"
                  className="text-sm text-white hover:text-[var(--text-muted)] transition-colors mt-auto pt-2 inline-block"
                  aria-label={`Read the system: ${project.title}`}
                >
                  Read the system →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Human aside after card 3 ── */}
        <p
          className="px-6 sm:px-8 py-5 text-[var(--text-muted)] text-sm border-x border-b border-[var(--line)] italic"
          style={{
            opacity: grid1Visible ? 1 : 0,
            transition: "opacity 0.65s ease 300ms",
          }}
        >
          (That one taught me more about escalation logic than the degree did.)
        </p>

        {/* ── Card grid — last 3 ── */}
        <div
          ref={grid2Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-px"
          style={{ background: "var(--line)" }}
        >
          {projects.slice(3).map((project, i) => (
            <article
              key={project.num}
              className="bg-black p-6 sm:p-8 flex flex-col gap-4"
              style={revealStyle(grid2Visible, i * 80)}
            >
              <CardImage num={project.num} />
              <div className="flex flex-col gap-3 flex-1">
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
                <a
                  href="#"
                  className="text-sm text-white hover:text-[var(--text-muted)] transition-colors mt-auto pt-2 inline-block"
                  aria-label={`Read the system: ${project.title}`}
                >
                  Read the system →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
