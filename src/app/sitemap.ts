import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nuhailiqbal.com";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({ url: `${baseUrl}${study.caseStudyPath}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
