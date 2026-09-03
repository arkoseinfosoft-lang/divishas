import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Static dates prevent sitemap from churning on every build (which wastes crawl budget
// and sends misleading "lastModified" signals to Google). Update these dates only when
// the corresponding page content actually changes.
const LAST_UPDATED = {
  home: "2026-09-03",
  about: "2026-09-03",
  services: "2026-09-03",
  hair: "2026-09-03",
  mensGrooming: "2026-09-03",
  makeup: "2026-09-03",
  nails: "2026-09-03",
  beautyGrooming: "2026-09-03",
  bridal: "2026-09-03",
  gallery: "2026-09-03",
  contact: "2026-09-03",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: LAST_UPDATED.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: LAST_UPDATED.about,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: LAST_UPDATED.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/services/hair`,
      lastModified: LAST_UPDATED.hair,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/services/mens-grooming`,
      lastModified: LAST_UPDATED.mensGrooming,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/services/makeup`,
      lastModified: LAST_UPDATED.makeup,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/services/nails`,
      lastModified: LAST_UPDATED.nails,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/services/beauty-grooming`,
      lastModified: LAST_UPDATED.beautyGrooming,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/bridal`,
      lastModified: LAST_UPDATED.bridal,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/gallery`,
      lastModified: LAST_UPDATED.gallery,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: LAST_UPDATED.contact,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
