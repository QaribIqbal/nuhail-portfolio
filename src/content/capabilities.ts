export const capabilityGroups = [
  {
    label: "AI & Agents",
    summary: "Conversation and knowledge systems that can act, escalate, and preserve context.",
    skills: ["AI agents", "Conversational AI", "Voice agents", "Chat assistants", "Knowledge workflows"],
  },
  {
    label: "Automation",
    summary: "Reliable workflows that move information and next actions across a business.",
    skills: ["n8n", "Make", "Zapier", "Airtable", "Workflow orchestration", "Email automation"],
  },
  {
    label: "Integrations",
    summary: "Connections among channels, data sources, CRMs, calendars, and internal owners.",
    skills: ["REST APIs", "Webhooks", "CRM workflows", "Calendar integrations", "WhatsApp workflows"],
  },
  {
    label: "Engineering",
    summary: "Custom logic for the parts a visual automation tool cannot safely express.",
    skills: ["Python", "Custom code", "Web scraping", "Structured data processing"],
  },
  {
    label: "Delivery",
    summary: "Process mapping, realistic testing, exception design, documentation, and handoff.",
    skills: ["Lead qualification", "Client reporting", "Client onboarding", "Support triage", "Scheduling and routing"],
  },
] as const;

export const tickerSkills = ["AI agents", "Voice systems", "n8n", "Make", "REST APIs", "Webhooks", "CRM routing", "Human handoffs", "Web scraping", "Workflow design"] as const;
