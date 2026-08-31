import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/servicesData";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";

const data = servicesData["mens-grooming"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/services/mens-grooming`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `${siteConfig.url}/services/mens-grooming`,
    images: [{ url: data.heroImage }],
  },
};

export default function MensGroomingServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServiceJsonLd
        name={data.title}
        description={data.metaDescription}
        url={`${siteConfig.url}/services/mens-grooming`}
        image={data.heroImage}
        category="HairSalon"
      />

      {/* Hero */}
      <ServiceHero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        introText={data.introText}
        heroImage={data.heroImage}
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: "Men's Grooming & Lounge", url: "/services/mens-grooming" },
        ]}
      />

      {/* Services Grid */}
      <ServiceGrid items={data.items} categoryTitle={data.title} />

      {/* FAQs */}
      <ServiceFAQ faqs={data.faqs} categoryTitle={data.title} />

      {/* CTA */}
      <QuickBookingCTA />
    </div>
  );
}
