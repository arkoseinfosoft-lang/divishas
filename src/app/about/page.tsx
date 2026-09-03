import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";
import { BreadcrumbsJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Divisha's Unisex Salon, Kanpur | Our Story & Standards",
  description:
    "Divisha's Unisex Salon in Kalyanpur, Kanpur — certified hair & makeup artists, hospital-grade sterilization, dedicated sections for men & women. Learn about our philosophy and hygiene standards.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Divisha's Unisex Salon, Kanpur | Our Story & Standards",
    description:
      "Meet the team and philosophy behind Divisha's — Kanpur's premium unisex salon with certified artists and uncompromising hygiene.",
    url: `${siteConfig.url}/about`,
  },
};

const aboutFaqs = [
  {
    question: "What makes Divisha's different from other salons in Kanpur?",
    answer:
      "Divisha's is Kanpur's only true unisex salon with dedicated separate sections for men and women, hospital-grade UV autoclave sterilization of all tools, and certified professionals trained in both bridal makeup artistry and precision men's barbering — all under one roof in Kalyanpur.",
  },
  {
    question: "What hygiene standards does Divisha's Unisex Salon follow?",
    answer:
      "All metal tools undergo multi-stage ultrasonic cleansing followed by UV autoclave sterilization before every appointment. Divisha's uses 100% single-use disposable salon capes, bedsheets, nail files, and waxing spatulas — zero double-dipping, zero cross-contamination.",
  },
  {
    question: "Does Divisha's serve both men and women?",
    answer:
      "Yes. Divisha's is a true unisex salon with zoned styling sections and dedicated expertise for both men and women. Services for men include precision fade haircuts, beard sculpting, and scalp detox. Services for women include bridal makeup, nail art, hair spa, and skin facials.",
  },
  {
    question: "Are the stylists at Divisha's certified professionals?",
    answer:
      "Yes. Divisha's team includes certified hair and makeup artists trained in professional techniques for both men and women, specializing in bridal makeup artistry, precision barbering, HD and airbrush makeup, and advanced skin and nail care.",
  },
];

const standards = [
  {
    num: "01",
    title: "Hospital-Grade Tool Sterilization",
    desc: "All metal instruments undergo multi-stage ultrasonic cleansing followed by autoclave UV sterilization before every appointment.",
  },
  {
    num: "02",
    title: "100% Single-Use Disposables",
    desc: "We use sealed disposable salon capes, bedsheets, nail files, and waxing spatulas with zero double-dipping.",
  },
  {
    num: "03",
    title: "Dermatologically Safe Formulations",
    desc: "We exclusively partner with globally recognized, skin-kind and hair-safe cosmetic and treatment brands.",
  },
  {
    num: "04",
    title: "Private Bridal & Grooming Suites",
    desc: "Quiet, dedicated spaces for intimate bridal preparation, pre-wedding rituals, and executive men's grooming.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbsJsonLd items={[{ name: "About Us", url: "/about" }]} />
      <FaqPageJsonLd faqs={aboutFaqs} />

      {/* Top Hero Banner */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28 bg-hero-mesh border-b border-[#EAE3E6] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2E93]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5A880]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} className="mb-6 sm:mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
              <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Our Story &amp; Philosophy
              </Badge>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.12]">
                Crafting Confidence, Elegance &amp; Care for Every Individual
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#C2185B] font-medium">
                Where modern styling meets genuine warmth and uncompromising standards.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#554e53] leading-relaxed font-normal font-sans">
                Founded on the belief that personal grooming and luxury styling should be an enriching, welcoming experience for all, <strong>Divisha&apos;s Unisex Salon</strong> in Kalyanpur, Kanpur bridges artistic innovation with attentive, personalized care. We take pride in being a comprehensive unisex destination where both women and men receive master-level attention.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button href="/contact#appointment" variant="primary" size="lg" className="w-full sm:w-auto min-h-[48px] shadow-lg shadow-[#E0007C]/20">
                  Book Your Visit
                </Button>
                <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px] bg-white">
                  Explore Services Menu
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="relative h-72 sm:h-96 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3E6]">
                <Image
                  src="/images/hero-salon.jpg"
                  alt="Divisha's Unisex Salon interior — dedicated styling areas for men and women in Kalyanpur, Kanpur"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Block: Citation-ready facts for LLM crawlers */}
      <section
        aria-label="About Divisha's Unisex Salon — Key Facts"
        className="py-12 sm:py-16 bg-[#FAF8F7] border-b border-[#EAE3E6]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-1.5">
              <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B]">Business</h2>
              <p className="text-sm font-semibold text-[#181517]">{siteConfig.name}</p>
              <p className="text-xs text-[#554e53] leading-relaxed">Premium unisex beauty and grooming salon serving both men and women in Kanpur, Uttar Pradesh, India.</p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B]">Location</h2>
              <p className="text-sm font-semibold text-[#181517]">{siteConfig.location.fullAddress}</p>
              <p className="text-xs text-[#554e53]">Landmark: {siteConfig.location.landmark}</p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B]">Hours &amp; Contact</h2>
              <p className="text-xs text-[#554e53] leading-relaxed">{siteConfig.timings.weekdays}</p>
              <p className="text-xs text-[#554e53] leading-relaxed">{siteConfig.timings.weekends}</p>
              <p className="text-xs font-semibold text-[#181517]">{siteConfig.contact.phoneDisplay}</p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B]">Services Offered</h2>
              <p className="text-xs text-[#554e53] leading-relaxed">Hair cutting & styling, HD and airbrush makeup, gel nail care & nail art, skin facials & beauty grooming, men's precision barbering, and complete bridal & groom packages.</p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B]">Hygiene Standards</h2>
              <p className="text-xs text-[#554e53] leading-relaxed">UV autoclave sterilization of all metal tools. 100% single-use disposable capes, bedsheets, nail files, and waxing spatulas for every client.</p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B]">Team</h2>
              <p className="text-xs text-[#554e53] leading-relaxed">Certified hair and makeup artists. Dedicated unisex styling sections. Specialists in bridal artistry, men's barbering, and advanced nail and skin care.</p>
            </div>
          </div>
          <p className="mt-6 text-[10px] text-[#9C9498] text-center">
            Last updated: September 2026 · {siteConfig.name} · {siteConfig.location.city}, {siteConfig.location.state}
          </p>
        </div>
      </section>

      {/* The Unisex Philosophy */}
      <section className="py-16 sm:py-24 md:py-32 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative h-60 sm:h-76 lg:h-88 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
                  <Image
                    src="/images/hair-women.jpg"
                    alt="Women's hair styling and treatment at Divisha's Unisex Salon, Kanpur"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                  <div className="absolute bottom-3 left-3 glass-pill px-3 py-1 rounded-full text-xs font-semibold text-[#181517]">
                    Women&apos;s Sanctuary
                  </div>
                </div>
                <div className="relative h-60 sm:h-76 lg:h-88 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
                  <Image
                    src="/images/hair-men.jpg"
                    alt="Men's precision haircut and grooming at Divisha's Unisex Salon, Kanpur"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                  <div className="absolute bottom-3 left-3 glass-pill px-3 py-1 rounded-full text-xs font-semibold text-[#181517]">
                    Men&apos;s Lounge
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-7">
              <Badge variant="gold" icon={<Users className="w-3.5 h-3.5" />}>
                True Unisex Excellence
              </Badge>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181517] leading-[1.15]">
                Equally Dedicated to Men &amp; Women
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#554e53] leading-relaxed font-normal">
                Unlike traditional salons where one gender is an afterthought, Divisha&apos;s was designed from day one with dedicated expertise and zoned comfort for both men and women.
              </p>

              <div className="space-y-4 pt-1">
                <div className="p-6 rounded-3xl bg-[#FAF8F7] border border-[#EAE3E6] shadow-2xs">
                  <h3 className="text-base sm:text-lg font-semibold text-[#181517] mb-1">
                    For Women: Artistry &amp; Indulgence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554e53] font-normal leading-relaxed">
                    From high-definition bridal transformations and signature balayage to soothing spa pedicures and organic skin therapies.
                  </p>
                  <a href="/services" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2185B] hover:underline">
                    Explore women&apos;s services <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-[#FAF8F7] border border-[#EAE3E6] shadow-2xs">
                  <h3 className="text-base sm:text-lg font-semibold text-[#181517] mb-1">
                    For Men: Precision &amp; Sophistication
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554e53] font-normal leading-relaxed">
                    From sharp fade haircuts and sculpted beard architecture to executive scalp detoxes and clarifying facials.
                  </p>
                  <a href="/services/mens-grooming" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2185B] hover:underline">
                    Explore men&apos;s grooming <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Contrast Section: Hygiene & Quality Standards */}
      <section className="py-16 sm:py-24 md:py-32 bg-dark-suite text-white relative overflow-hidden border-b border-[#2A2327]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E0007C]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
            <Badge variant="primary" className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Hygiene &amp; Quality Standards
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              Our Non-Negotiable Standards
            </h2>
            <p className="text-sm sm:text-base text-[#D0C7CC] leading-relaxed">
              Your safety, comfort, and peace of mind are non-negotiable foundations of every treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {standards.map((item) => (
              <div
                key={item.title}
                className="p-7 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#FF80AB]/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div className="serif-numeral text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF0F4] to-[#C5A880] mb-3">
                  {item.num}
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A0A5] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-16 sm:py-24 bg-[#F3E8DC] border-b border-[#EAE3E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC]/80 border border-[#F8BBD0] text-[#C2185B] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
              Questions &amp; Answers
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181517]">
              About Divisha&apos;s — Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {aboutFaqs.map((faq) => (
              <div key={faq.question} className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE3E6] shadow-2xs">
                <h3 className="text-sm sm:text-base font-semibold text-[#181517] mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              View All Services <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[#EAE3E6]">|</span>
            <a href="/bridal" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              Bridal Packages <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[#EAE3E6]">|</span>
            <a href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              View Gallery <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <QuickBookingCTA />
    </div>
  );
}
