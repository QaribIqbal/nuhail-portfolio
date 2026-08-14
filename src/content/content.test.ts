import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/projects";
import { sourceLedger } from "@/content/source-ledger";
import { site } from "@/content/site";

describe("content evidence", () => {
  it("publishes no unsupported claims", () => {
    expect(
      sourceLedger.filter((entry) => entry.publish && !entry.sourceUrl),
    ).toEqual([]);
  });

  it("uses real external destinations", () => {
    for (const link of Object.values(site.links)) {
      expect(link.href).toMatch(/^https:\/\//);
      expect(link.href).not.toBe("#");
    }
  });

  it("labels the shared calendar accurately", () => {
    expect(site.links.audit.label).toBe("Book a TechBees Automation Audit");
  });

  it("provides locally hosted editorial media for each case study", () => {
    for (const caseStudy of caseStudies) {
      expect(caseStudy.media.src).toMatch(/^\/media\//);
      expect(caseStudy.media.alt).toMatch(/automation|workflow|reporting/i);
    }
  });
});
