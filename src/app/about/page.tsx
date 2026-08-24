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
      title: "Hospital-Grade Tool Sterilization",
      desc: "All metal implements undergo multi-stage ultrasonic cleansing and UV sterilization before every appointment.",
    },
    {
      title: "100% Single-Use Disposables",
      desc: "We use fresh disposable salon capes, bedsheets, nail files, and waxing spatulas with zero double-dipping.",
    },
    {
      title: "Dermatologically Approved Formulations",
      desc: "We only partner with globally recognized, skin-kind and hair-safe cosmetic and treatment brands.",
    },
    {
      title: "Private Bridal & Grooming Suites",
      desc: "Enjoy quiet, dedicated spaces for intimate bridal preparation, pre-wedding rituals, and executive men's grooming.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Hero Banner */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pb-24 bg-luxury-radial border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} className="mb-4 sm:mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Our Story &amp; Philosophy
              </Badge>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.2]">
                Crafting Confidence, Elegance &amp; Care for Every Individual
              </h1>

              <p className="text-base sm:text-lg text-[#C2185B] font-medium">
                Where modern styling meets genuine warmth and uncompromising standards.
              </p>

              <p className="text-sm sm:text-base text-[#554e53] leading-relaxed font-normal font-sans">
                Founded on the belief that personal grooming and luxury styling should be an enriching, welcoming experience for all, <strong>Divisha&apos;s Unisex Salon</strong> bridges artistic innovation with attentive, personalized care. We take pride in being a comprehensive unisex destination where both women and men receive master-level attention.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button href="/contact#appointment" variant="primary" size="lg" className="w-full sm:w-auto min-h-[48px]">
                  Book Your Visit
                </Button>
                <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px]">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
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
      <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative h-56 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-md border border-[#EAE3E6]">
                  <Image
                    src="/images/hair-women.jpg"
                    alt="Women's Hair Styling at Divisha's"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                </div>
                <div className="relative h-56 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-md border border-[#EAE3E6]">
                  <Image
                    src="/images/hair-men.jpg"
                    alt="Men's Hair & Grooming at Divisha's"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-6">
              <Badge variant="gold" icon={<Users className="w-3.5 h-3.5" />}>
                True Unisex Excellence
              </Badge>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181517] leading-[1.2]">
                Equally Dedicated to Men &amp; Women
              </h2>

              <p className="text-sm sm:text-base text-[#554e53] leading-relaxed font-normal">
                Unlike traditional salons where one gender is an afterthought, Divisha&apos;s was designed from day one with dedicated expertise and zoned comfort for both men and women.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F7] border border-[#EAE3E6]">
                  <h4 className="text-sm sm:text-base font-semibold text-[#181517] mb-1">
                    For Women: Artistry &amp; Indulgence
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554e53] font-normal leading-relaxed">
                    From high-definition bridal transformations and signature balayage to soothing spa pedicures and organic skin therapies.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F7] border border-[#EAE3E6]">
                  <h4 className="text-sm sm:text-base font-semibold text-[#181517] mb-1">
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

      {/* Hygiene & Quality Standards */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAF8F7] border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hygiene & Safety"
            title="Our Non-Negotiable Standards"
            subtitle="Your safety, comfort, and satisfaction are at the heart of everything we do."
          />

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {standards.map((item) => (
              <div
                key={item.title}
                className="luxury-card bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-[#EAE3E6] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#181517]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">
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
