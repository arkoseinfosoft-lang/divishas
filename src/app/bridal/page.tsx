import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Sparkles,
  Crown,
  Heart,
  Calendar,
  Flower2,
  HeartHandshake,
  UserCheck,
  CheckCircle2,
  ArrowRight,
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
      <section className="pt-6 pb-16 lg:pb-24 bg-[#141213] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E0007C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C2185B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: "Bridal & Occasion", url: "/bridal" }]}
            className="mb-8 text-[#A8A1A6]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="primary"
                className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30"
                icon={<Crown className="w-3.5 h-3.5" />}
              >
                {bridalPageData.badge}
              </Badge>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                {bridalPageData.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#FF80AB] font-medium">
                {bridalPageData.subtitle}
              </p>

              <p className="text-base text-[#D0C7CC] leading-relaxed max-w-2xl font-sans">
                {bridalPageData.introText}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="#bridal-booking"
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-4 h-4 mr-2" />}
                  className="w-full sm:w-auto"
                >
                  Plan Your Bridal Look
                </Button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Divisha's Salon! I would like to enquire about Bridal / Wedding packages."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5">
              <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={bridalPageData.heroImage}
                  alt="Divisha's Signature Bridal Look"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-center">
                  <p className="text-xs uppercase tracking-widest text-[#FF80AB] font-semibold">
                    Unisex Wedding Excellence
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Dedicated Suites for Bride &amp; Groom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Offerings Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Wedding Offerings"
            title="Complete Bridal &amp; Groom Services"
            subtitle="From engagement trials to the final wedding pheras, we ensure every detail is impeccably executed."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bridalPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="luxury-card bg-[#FAF8F7] rounded-3xl overflow-hidden border border-[#EAE3E6] flex flex-col justify-between"
              >
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="bg-white/90 text-[#C2185B] backdrop-blur-sm">
                      {pkg.forWho}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#181517]">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[#5E575B] mt-2 leading-relaxed font-sans">
                      {pkg.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#F0EAE8] mt-4">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C2185B] shrink-0" />
                          <span className="text-xs sm:text-sm text-[#383236]">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      href="#bridal-booking"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
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
      <section className="py-16 sm:py-20 bg-[#FAF8F7] border-b border-[#EAE3E6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <SectionHeading
            badge="The Bridal Advantage"
            title="Why Couples Choose Divisha's"
            subtitle="We understand how important your big day is. Our artists provide personalized attention, calm luxury, and flawless execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {bridalPageData.whyChooseUs.map((reason, idx) => (
              <div
                key={reason}
                className="p-5 rounded-2xl bg-white border border-[#EAE3E6] flex items-start gap-3.5 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#2A2428]">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Booking Form Anchor */}
      <section id="bridal-booking" className="py-16 sm:py-24 bg-white">
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
