import React from "react";
import { useInView } from "../../hooks/useInView";

export const LabsSection: React.FC = () => {
  const { ref: capabilityRef, isInView: capabilityInView } = useInView();
  const { ref: systemsRef, isInView: systemsInView } = useInView();

  const disciplines = [
    {
      title: "AI & Agents",
      description:
        "Conversational and voice agents that qualify, answer, and know exactly when to hand off to a person.",
    },
    {
      title: "Automation",
      description:
        "n8n, Make, and Zapier workflows that move information across a business without anyone babysitting them.",
    },
    {
      title: "Integrations",
      description:
        "CRMs, calendars, WhatsApp, and REST APIs wired together so they actually talk to each other.",
    },
    {
      title: "Engineering",
      description:
        "Python and custom logic for the parts a drag-and-drop tool can't safely express.",
    },
    {
      title: "Delivery",
      description:
        "Documentation, real-world testing, and a clean handoff, so the system survives contact with your team.",
    },
  ];

  const systems = [
    {
      number: "01",
      title: "AI Lead Response for Real Estate",
      description:
        "A voice-and-chat intake that qualifies buyers by budget and timeline, books the next step, and hands unusual requests straight to a human. Replaced 80+ hours a month of manual work and a $400/month subscription tool.",
      tags: ["n8n", "OpenAI", "HubSpot", "CRM routing"],
      image: "/media/real_estate_ai.webp",
      alt: "AI Lead Response system diagram",
      link: "https://app.notion.com/p/TechBees-AI-Lead-Response-for-Real-Estate-3b0a34737b6681109648f37a61f61786",
      isExternal: true,
    },
    {
      number: "02",
      title: "E-commerce AI Support Agent",
      description:
        "Built on Make.com and a vector knowledge base, this agent resolves the majority of incoming tickets on its own and cut response time from 48 hours to under a minute.",
      tags: ["Make.com", "Pinecone", "Zendesk"],
      image: "/media/ecommerce_support_ai.webp",
      alt: "E-commerce support automation architecture",
      link: "#openings",
      isExternal: false,
    },
    {
      number: "03",
      title: "Legal Document Extraction Pipeline",
      description:
        "A Python and OpenAI pipeline that reads and structures 500+ contracts a month, cutting manual review time by 90%.",
      tags: ["Python", "OpenAI API", "Salesforce"],
      image: "/media/legal_data_ai.webp",
      alt: "Legal document processing pipeline",
      link: "#openings",
      isExternal: false,
    },
    {
      number: "04",
      title: "Agency Reporting Automation",
      description:
        "A scheduled workflow that reads structured client data, drafts account-specific updates, sends each report, and confirms delivery internally. No one has to remember report day again.",
      tags: ["Scheduled triggers", "Structured data", "Email delivery"],
      image: "/media/agency-reporting-flow.webp",
      alt: "Agency automated reporting pipeline diagram",
      link: "https://app.notion.com/p/TechBees-AI-Automation-for-Marketing-Creative-Agencies-3b0a34737b66817ba1cafae3aa98edd8",
      isExternal: true,
    },
    {
      number: "05",
      title: "WhatsApp Inquiry Assistant",
      description:
        "Handles what comes in at 11pm: FAQs, listing or inventory context, requirement capture, and escalation when it actually matters.",
      tags: ["WhatsApp API", "Conversational AI", "Escalation"],
      image: "/media/nuhail-system-network.webp",
      alt: "WhatsApp automated assistant routing logic",
      link: "#openings",
      isExternal: false,
    },
    {
      number: "06",
      title: "Client Onboarding & Handoff",
      description:
        "Turns a closed deal into a fully set-up project: assets requested, owners assigned, CRM updated, team notified — automatically.",
      tags: ["Workflow orchestration", "CRM", "Notifications"],
      image: "/media/real-estate-flow.webp",
      alt: "Client onboarding orchestration architecture",
      link: "#openings",
      isExternal: false,
    },
  ];

  return (
    <section
      id="labs"
      className="relative z-10 w-full bg-black text-white border-t border-[var(--line)]"
    >
      <div className="max-w-[var(--content)] mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        {/* Capability List: What I Build */}
        <div
          ref={capabilityRef}
          className="transition-all duration-700"
          style={{
            opacity: capabilityInView ? 1 : 0,
            transform: capabilityInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium mb-3">
            SYSTEMS I RUN
          </p>
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] tracking-tight font-normal leading-[1.15] text-[var(--text)]">
            Five disciplines. One operating loop.
          </h2>
          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] max-w-2xl mt-4 leading-relaxed font-normal">
            I don't sell automation as magic. I build the specific pieces that make it
            hold up after launch — and stay held up after I'm done.
          </p>

          <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {disciplines.map((item, idx) => (
              <div
                key={item.title}
                className="py-6 sm:py-7 flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-12 transition-all duration-500"
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                <div className="md:w-1/3 flex items-center gap-3">
                  <span className="text-[13px] text-[var(--text-dim)] font-mono">
                    0{idx + 1}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-medium text-[var(--text)] tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[15px] sm:text-[17px] text-[var(--text-muted)] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Systems: Project Grid */}
        <div
          ref={systemsRef}
          className="mt-32 transition-all duration-700"
          style={{
            opacity: systemsInView ? 1 : 0,
            transform: systemsInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium mb-3">
            PROOF, NOT PROMISES
          </p>
          <h2 className="text-[32px] sm:text-[44px] md:text-[50px] tracking-tight font-normal leading-[1.15] text-[var(--text)]">
            Six systems, six real constraints.
          </h2>
          <p className="text-[16px] sm:text-[19px] text-[var(--text-muted)] max-w-2xl mt-4 leading-relaxed font-normal">
            Presented with the evidence level they actually have — some are live client
            builds, some are demonstrations.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {systems.map((sys, idx) => (
              <article
                key={sys.number}
                className="group flex flex-col justify-between border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7 hover:border-[var(--line-strong)] transition-all duration-300"
                style={{
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                <div>
                  {/* Image Graphic */}
                  <div className="w-full aspect-[16/10] bg-neutral-900 overflow-hidden border border-[var(--line)] mb-6 relative">
                    <img
                      src={sys.image}
                      alt={sys.alt}
                      className="w-full h-full object-cover grayscale contrast-[1.08] brightness-90 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-[11px] font-mono tracking-wider bg-black/80 text-white/90 border border-white/10">
                      {sys.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-medium text-[var(--text)] tracking-tight leading-snug">
                    {sys.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-[var(--text-muted)] mt-3 leading-relaxed font-normal">
                    {sys.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[var(--line)]">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {sys.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] px-2.5 py-0.5 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--text-muted)] font-normal whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link Text */}
                  {sys.isExternal ? (
                    <a
                      href={sys.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[14px] text-[var(--text)] hover:opacity-70 transition-opacity font-normal underline underline-offset-4"
                    >
                      Read the system →
                    </a>
                  ) : (
                    <a
                      href={sys.link}
                      className="inline-flex items-center text-[14px] text-[var(--text)] hover:opacity-70 transition-opacity font-normal underline underline-offset-4"
                    >
                      Read the system →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
