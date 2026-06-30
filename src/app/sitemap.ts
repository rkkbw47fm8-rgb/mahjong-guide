import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.chinesemahjong.online";

  const pages = [
    { path: "", priority: 1.0 },
    { path: "tiles", priority: 0.9 },
    { path: "basics", priority: 0.9 },
    { path: "game", priority: 0.8 },
    { path: "operations", priority: 0.8 },
    { path: "winning", priority: 0.9 },
    { path: "scoring", priority: 0.9 },
    { path: "glossary", priority: 0.7 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
