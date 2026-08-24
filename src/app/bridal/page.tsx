import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Crown,
  Calendar,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { bridalPageData } from "@/config/servicesData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = {
  title: bridalPageData.metaTitle,
  description: bridalPageData.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/bridal`,
  },
  openGraph: {
    title: bridalPageData.metaTitle,
    description: bridalPageData.metaDescription,
    url: `${siteConfig.url}/bridal`,
    images: [{ url: bridalPageData.heroImage }],
  },
};

const bridalPackages = [
  {
    title: "Signature Bridal Makeup & Styling",
    forWho: "For The Bride",
    desc: "Couture wedding day transformation combining HD / Airbrush makeup, luxury lash accents, intricate bridal hair with fresh floral setting, and royal saree/dupatta draping.",
    features: [
      "Custom skin prep & tone matching",
      "High-Definition or Airbrush finish",
      "Traditional or modern bridal hairstyle",
      "Dupatta & jewelry setting coordination",
      "Tear-proof, weather-resistant longevity",
    ],
    image: "/images/bridal-makeup.jpg",
  },
  {
    title: "Royal Groom Styling & Grooming",
    forWho: "For The Groom",
    desc: "Executive wedding day grooming including bespoke haircut, razor beard sculpting, detoxifying facial clean-up, styling setting, and discreet camera-ready blemish care.",
    features: [
      "Precision wedding haircut & beard fade",
      "Exfoliating skin brightener & detan",
      "Discreet studio grooming for 4K photography",
      "Hair setting with long-lasting lightweight hold",
    ],
    image: "/images/beard-grooming.jpg",
  },
  {
    title: "Pre-Wedding & Function Glam",
    forWho: "Sangeet, Mehendi, Haldi & Cocktail",
    desc: "Vibrant, thematic looks designed for high-energy pre-wedding functions, cocktail galas, and engagement ceremonies.",
    features: [
      "Theme-matched eyeshadow & lip palettes",
      "Messy textured braids & soft wave curls",
      "Sweat-resistant, dance-proof formulations",
      "Quick touch-up advice",
    ],
    image: "/images/party-makeup.jpg",
  },
  {
    title: "Pre-Bridal Glow Rituals",
    forWho: "Pre-Wedding Preparation",
    desc: "Comprehensive skin and hair wellness sessions spread across 2-4 weeks prior to the wedding date to ensure maximum natural radiance.",
    features: [
      "Organic deep-hydration skin facials",
      "Restorative keratin hair spas",
      "Luxury bridal manicure & pedicure",
      "Full-body polishing & soothing hydration",
    ],
    image: "/images/beauty-spa.jpg",
  },
];

export default function BridalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Bridal Hero */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pb-24 bg-[#141213] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-[#E0007C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-[#C2185B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: "Bridal & Occasion", url: "/bridal" }]}
            className="mb-6 sm:mb-8 text-[#A8A1A6]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <Badge
                variant="primary"
                className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30"
                icon={<Crown className="w-3.5 h-3.5" />}
              >
                {bridalPageData.badge}
              </Badge>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.2]">
                {bridalPageData.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#FF80AB] font-medium">
                {bridalPageData.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#D0C7CC] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal font-sans">
                {bridalPageData.introText}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  href="#bridal-booking"
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                  className="w-full sm:w-auto min-h-[48px]"
                >
                  Plan Your Bridal Look
                </Button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Divisha's Salon! I would like to enquire about Bridal / Wedding packages."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={bridalPageData.heroImage}
                  alt="Divisha's Signature Bridal Look"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-center">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FF80AB] font-semibold">
                    Unisex Wedding Excellence
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Dedicated Suites for Bride &amp; Groom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Offerings Grid */}
      <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Wedding Offerings"
            title="Complete Bridal &amp; Groom Services"
            subtitle="From engagement trials to the final wedding pheras, we ensure every detail is impeccably executed."
          />

          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {bridalPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="luxury-card bg-[#FAF8F7] rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-64 lg:h-76 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  />
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-sm">
                      {pkg.forWho}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-9 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181517] leading-[1.2]">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#554e53] mt-2 leading-relaxed font-normal font-sans">
                      {pkg.desc}
                    </p>

                    <div className="space-y-2 sm:space-y-2.5 pt-3.5 border-t border-[#F0EAE8] mt-3.5">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 sm:gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C2185B] shrink-0" />
                          <span className="text-xs sm:text-sm text-[#383236] font-normal">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Button
                      href="#bridal-booking"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center min-h-[44px]"
                    >
                      Enquire for This Look
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Divisha's for Bridal */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAF8F7] border-b border-[#EAE3E6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <SectionHeading
            badge="The Bridal Advantage"
            title="Why Couples Choose Divisha's"
            subtitle="We understand how important your big day is. Our artists provide personalized attention, calm luxury, and flawless execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-left pt-2">
            {bridalPageData.whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-[#EAE3E6] flex items-start gap-3 shadow-xs"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-xs sm:text-sm font-normal text-[#2A2428]">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Booking Form Anchor */}
      <section id="bridal-booking" className="py-14 sm:py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm
            initialService="Bridal & Occasion"
            className="shadow-2xl border-[#E8D5D8]"
          />
        </div>
      </section>
    </div>
  );
}
