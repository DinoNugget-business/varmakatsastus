import type { MetadataRoute } from "next";

const BASE_URL = "https://thermohuolto.fi";

const pages = [
  "",
  "/yritys",
  "/palvelut",
  "/tuotteet",
  "/referenssit",
  "/uutisia",
  "/yhteydenotto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${BASE_URL}/fi${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1.0 : 0.8,
    });
    entries.push({
      url: `${BASE_URL}/en${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 0.9 : 0.7,
    });
  }

  return entries;
}
