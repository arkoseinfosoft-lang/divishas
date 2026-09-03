import { siteConfig } from "@/config/site";

interface LocalBusinessJsonLdProps {
  pageUrl?: string;
  description?: string;
}

export function LocalBusinessJsonLd({
  pageUrl,
  description,
}: LocalBusinessJsonLdProps = {}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "HealthAndBeautyBusiness"],
    "@id": `${siteConfig.url}/#salon`,
    name: siteConfig.name,
    description: description || siteConfig.fullDescription,
    url: pageUrl || siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    logo: `${siteConfig.url}/images/logo.png`,
    image: [
      `${siteConfig.url}/images/hero-salon.jpg`,
      `${siteConfig.url}/images/bridal-makeup.jpg`,
      `${siteConfig.url}/images/hair-women.jpg`,
    ],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.location.addressLine1}, ${siteConfig.location.addressLine2}`,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.4950",
      longitude: "80.2590",
    },
    openingHoursSpecification: siteConfig.timings.openHoursSpecification.map(
      (spec) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: spec.dayOfWeek,
        opens: spec.opens,
        closes: spec.closes,
      })
    ),
    sameAs: [
      // Strip tracking params from Instagram URL for clean sameAs
      "https://www.instagram.com/divisha_unisex_salon_/",
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Divisha's Salon Services",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Hair Care & Styling" },
        { "@type": "OfferCatalog", name: "Makeup & Beauty Artistry" },
        { "@type": "OfferCatalog", name: "Nail Care & Extensions" },
        { "@type": "OfferCatalog", name: "Beauty & Personal Grooming" },
        { "@type": "OfferCatalog", name: "Bridal & Occasion Artistry" },
      ],
    },
    // CONFIRM BEFORE PUBLISH (Q2): Verify rating & reviewCount match your
    // real Google Business Profile figures before going live.
    aggregateRating: siteConfig.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: String(siteConfig.aggregateRating.ratingValue),
          reviewCount: String(siteConfig.aggregateRating.reviewCount),
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
  };

  // Remove undefined keys to keep JSON-LD clean
  Object.keys(schema).forEach(
    (k) => schema[k] === undefined && delete schema[k]
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  image,
  category,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: category,
    name: name,
    description: description,
    provider: {
      "@type": "BeautySalon",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.location.addressLine1,
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        postalCode: siteConfig.location.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.location.city,
    },
    url: url,
    image: image
      ? `${siteConfig.url}${image}`
      : `${siteConfig.url}/images/hero-salon.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${siteConfig.url}${item.url}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage schema for AEO (Answer Engine Optimization).
 * Use on any page that has visible Q&A content so Google AI Overviews,
 * ChatGPT, Perplexity, and Gemini can extract and cite answers directly.
 */
export function FaqPageJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
    dateModified: "2026-09-03",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
