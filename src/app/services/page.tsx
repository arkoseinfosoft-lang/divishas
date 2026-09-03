import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Scissors,
  Sparkles,
  Paintbrush,
  Sparkle,
  Crown,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";
import { BreadcrumbsJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Salon Services in Kanpur | Divisha's Unisex Salon",
  description:
    "Complete salon services in Kanpur: haircuts, bridal makeup, gel nail art, men's grooming, skin facials & full wedding packages. Book at Divisha's Unisex Salon, Kalyanpur.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Salon Services in Kanpur | Divisha's Unisex Salon",
    description:
      "Full-spectrum hair, makeup, nail, skin, and bridal services at Divisha's Unisex Salon, Kalyanpur, Kanpur. Open 7 days.",
    url: `${siteConfig.url}/services`,
  },
};

const servicesFaqs = [
  {
    question: "What services does Divisha's Unisex Salon offer in Kanpur?",
    answer:
      "Divisha's offers hair cutting and styling, professional makeup artistry, gel nail care and nail art, skin facials and beauty grooming, men's precision barbering and beard sculpting, and comprehensive bridal and groom wedding packages — all available at the salon in Kalyanpur, Kanpur.",
  },
  {
    question: "Does Divisha's have separate services for men and women?",
    answer:
      "Yes. Divisha's is a true unisex salon with dedicated sections and specialist expertise for both men and women. Men's services include precision haircuts, fades, beard sculpting, and scalp detox. Women's services include hair spa, bridal makeup, nail extensions, and skin facials.",
  },
  {
    question: "Can I book a bridal package at Divisha's Unisex Salon?",
    answer:
      "Yes. Divisha's offers complete bridal packages in Kanpur including HD and airbrush bridal makeup, bridal hairstyling, dupatta draping, pre-bridal skin and hair rituals, and royal groom styling. Visit the Bridal & Occasion page or contact the salon to enquire.",
  },
];

const serviceDepts = [
  {
    title: "Hair Care & Styling",
    slug: "hair",
    href: "/services/hair",
    badge: "For Men & Women",
    desc: "Custom precision haircuts, signature blow-dries, scalp detox, restorative spas, and special occasion hair updos.",
    image: "/images/hair-women.jpg",
    imageAlt: "Women's hair styling and treatment at Divisha's Salon, Kanpur",
    icon: Scissors,
    subServices: [
      "Haircuts (Men & Women)",
      "Hair Styling & Blowouts",
      "Hair Grooming & Maintenance",
      "Restorative Hair Spa",
      "Occasion Hair Artistry",
    ],
  },
  {
    title: "Men's Grooming & Lounge",
    slug: "mens-grooming",
    href: "/services/mens-grooming",
    badge: "Men's Barbering",
    desc: "Precision fade haircuts, straight-razor beard sculpting, executive detan facials, and revitalizing scalp treatments in our dedicated men's suite.",
    image: "/images/beard-grooming.jpg",
    imageAlt: "Men's precision beard sculpting and grooming at Divisha's, Kanpur",
    icon: Scissors,
    subServices: [
      "Precision Haircuts & Fades",
      "Beard Architecture & Shave",
      "Executive Detan Facials",
      "Scalp Detox Treatments",
      "Gentleman's Grooming Package",
    ],
  },
  {
    title: "Makeup Services",
    slug: "makeup",
    href: "/services/makeup",
    badge: "HD Artistry",
    desc: "Camera-ready high-definition makeup, radiant party glam, and milestone event styling using luxury cosmetic formulations.",
    image: "/images/party-makeup.jpg",
    imageAlt: "HD party and event makeup artistry at Divisha's Unisex Salon, Kanpur",
    icon: Sparkles,
    subServices: [
      "Makeup for Different Occasions",
      "Party & Event Makeup",
      "Bridal & Wedding Makeup",
      "Studio & Professional Makeup",
      "Special Occasion Makeup",
    ],
  },
  {
    title: "Nail Care & Artistry",
    slug: "nails",
    href: "/services/nails",
    badge: "Hands & Feet",
    desc: "Nourishing cuticle therapies, long-lasting gel overlays, custom nail art creations, and soothing spa manicures & pedicures.",
    image: "/images/nail-art.jpg",
    imageAlt: "Custom nail art and gel nail care at Divisha's Salon, Kanpur",
    icon: Paintbrush,
    subServices: [
      "Essential Nail Care & Buffing",
      "Gel Polish & Nail Styling",
      "Custom Hand-Painted Nail Art",
      "Luxury Spa Mani & Pedi",
    ],
  },
  {
    title: "Skin & Beauty Care",
    slug: "beauty-grooming",
    href: "/services/beauty-grooming",
    badge: "Skin & Wellness",
    desc: "Rejuvenating organic facials, precision threading, gentle waxing, and holistic full-body wellness rituals in private suites.",
    image: "/images/beauty-spa.jpg",
    imageAlt: "Skin facial and beauty grooming treatment at Divisha's Salon, Kanpur",
    icon: Sparkle,
    subServices: [
      "Rejuvenating Skin Facials",
      "Precision Threading & Brow Care",
      "Gentle Peel-Off Waxing",
      "Holistic Wellness Ritual",
    ],
  },
  {
    title: "Bridal & Occasion",
    slug: "bridal",
    href: "/bridal",
    badge: "Wedding Couture",
    desc: "Signature bridal transformations, groom royal styling, pre-wedding skin rituals, and saree / dupatta draping.",
    image: "/images/bridal-makeup.jpg",
    imageAlt: "HD and airbrush bridal makeup and hairstyling at Divisha's Salon, Kanpur",
    icon: Crown,
    subServices: [
      "HD & Airbrush Bridal Makeup",
      "Wedding & Event Makeup",
      "Floral Occasion Hair Styling",
      "Bridal Beauty Preparation",
      "Royal Groom Wedding Grooming",
    ],
    highlight: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbsJsonLd items={[{ name: "Services", url: "/services" }]} />
      <FaqPageJsonLd faqs={servicesFaqs} />

      {/* Top Banner */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28 bg-hero-mesh border-b border-[#EAE3E6] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2E93]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5A880]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Services", url: "/services" }]} className="mb-6 sm:mb-8" />

          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Complete Salon Menu
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.12]">
              Exceptional Services for Every Style &amp; Occasion
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#554e53] font-normal font-sans leading-relaxed">
              Discover our full spectrum of hair, makeup, nail, and skincare experiences tailored with equal mastery for both women and men in Kanpur.
            </p>
          </div>
        </div>
      </section>

      {/* Services Departments List */}
      <section className="py-16 sm:py-24 md:py-32 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 md:space-y-18">
          {serviceDepts.map((dept, index) => {
            const Icon = dept.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={dept.title}
                className="luxury-card bg-[#FAF8F7] rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#EAE3E6] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
                  {/* Image */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative h-60 sm:h-76 lg:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
                      <Image
                        src={dept.image}
                        alt={dept.imageAlt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-7 space-y-5 sm:space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <Badge variant={dept.highlight ? "gold" : "primary"}>
                        {dept.badge}
                      </Badge>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181517] leading-[1.18]">
                      {dept.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#554e53] leading-relaxed font-normal font-sans">
                      {dept.desc}
                    </p>

                    {/* Sub-services list */}
                    <div className="pt-1">
                      <h3 className="text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#8C8488] mb-3">
                        Featured Offerings
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {dept.subServices.map((sub) => (
                          <div key={sub} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C2185B] shrink-0" />
                            <span className="text-xs sm:text-sm text-[#383236] font-normal">
                              {sub}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <Button href={dept.href} variant="primary" size="md" className="w-full sm:w-auto min-h-[46px] shadow-md shadow-[#E0007C]/15">
                        Explore {dept.title} Details
                      </Button>
                      <Button
                        href="/contact#appointment"
                        variant="outline"
                        size="md"
                        icon={<Calendar className="w-4 h-4 mr-1.5" />}
                        className="w-full sm:w-auto min-h-[46px] bg-white"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compact Services FAQ */}
      <section className="py-16 sm:py-24 bg-[#F3E8DC] border-b border-[#EAE3E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC]/80 border border-[#F8BBD0] text-[#C2185B] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
              Quick Answers
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517]">
              Frequently Asked About Our Services
            </h2>
          </div>
          <div className="space-y-4">
            {servicesFaqs.map((faq) => (
              <div key={faq.question} className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE3E6] shadow-2xs">
                <h3 className="text-sm sm:text-base font-semibold text-[#181517] mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="/bridal" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              Bridal &amp; Occasion Packages <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[#EAE3E6]">|</span>
            <a href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              See Our Gallery <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <QuickBookingCTA />
    </div>
  );
}
