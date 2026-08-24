import { siteConfig } from "@/config/site";

interface LocalBusinessJsonLdProps {
  pageName?: string;
  pageUrl?: string;
  description?: string;
}

export function LocalBusinessJsonLd({
  pageName,
  pageUrl,
  description,
}: LocalBusinessJsonLdProps) {
  const schema = {
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
      latitude: "28.6328",
      longitude: "77.1054",
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
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Divisha's Salon Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Hair Care & Styling",
        },
        {
          "@type": "OfferCatalog",
          name: "Makeup & Beauty Artistry",
        },
        {
          "@type": "OfferCatalog",
          name: "Nail Care & Extensions",
        },
        {
          "@type": "OfferCatalog",
          name: "Beauty & Personal Grooming",
        },
        {
          "@type": "OfferCatalog",
          name: "Bridal & Occasion Artistry",
        },
      ],
    },
  };

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
    image: image ? `${siteConfig.url}${image}` : `${siteConfig.url}/images/hero-salon.jpg`,
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
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
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
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
