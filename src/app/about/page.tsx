import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";

export const metadata: Metadata = {
  title: "About Us | Divisha's Unisex Salon",
  description:
    "Learn about Divisha's Unisex Salon — our founding vision, certified hair & makeup artistry, uncompromising hygiene standards, and commitment to both men and women.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
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

  return (
    <div className="flex flex-col min-h-screen">
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
                Founded on the belief that personal grooming and luxury styling should be an enriching, welcoming experience for all, <strong>Divisha&apos;s Unisex Salon</strong> bridges artistic innovation with attentive, personalized care. We take pride in being a comprehensive unisex destination where both women and men receive master-level attention.
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
                  alt="Divisha's Unisex Salon Interior"
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

      {/* The Unisex Philosophy */}
      <section className="py-16 sm:py-24 md:py-32 bg-white bg-diagonal-pattern border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative h-60 sm:h-76 lg:h-88 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
                  <Image
                    src="/images/hair-women.jpg"
                    alt="Women's Hair Styling at Divisha's"
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
                    alt="Men's Hair & Grooming at Divisha's"
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
                  <h4 className="text-base sm:text-lg font-semibold text-[#181517] mb-1">
                    For Women: Artistry &amp; Indulgence
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554e53] font-normal leading-relaxed">
                    From high-definition bridal transformations and signature balayage to soothing spa pedicures and organic skin therapies.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#FAF8F7] border border-[#EAE3E6] shadow-2xs">
                  <h4 className="text-base sm:text-lg font-semibold text-[#181517] mb-1">
                    For Men: Precision &amp; Sophistication
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554e53] font-normal leading-relaxed">
                    From sharp fade haircuts and sculpted beard architecture to executive scalp detoxes and clarifying facials.
                  </p>
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

      {/* Call to Action */}
      <QuickBookingCTA />
    </div>
  );
}
