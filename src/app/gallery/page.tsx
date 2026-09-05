// Server Component — can export metadata because all interactive logic
// has been moved to GalleryClient.tsx (the "use client" component).
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Hair, Bridal & Nail Art Gallery | Divisha's Salon Kanpur",
  description:
    "Browse Divisha's salon gallery in Kanpur — bespoke hair transformations, couture bridal makeup, men's grooming, and nail art results from our certified stylists. Get inspired and book your look.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "Hair, Bridal & Nail Art Gallery | Divisha's Unisex Salon Kanpur",
    description:
      "Real results from Divisha's Unisex Salon, Kanpur — hair styling, bridal makeup, nail art, and men's grooming transformations.",
    url: `${siteConfig.url}/gallery`,
    images: [{ url: "/images/hero-salon.webp", width: 1200, height: 630, alt: "Divisha's Salon Gallery" }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Gallery", url: "/gallery" }]} />
      <GalleryClient />
    </>
  );
}
