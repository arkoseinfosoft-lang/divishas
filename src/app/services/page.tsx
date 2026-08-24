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
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";

export const metadata: Metadata = {
  title: "All Salon Services | Divisha's Unisex Salon",
  description:
    "Explore our complete range of salon services: Haircuts, Hair Styling, Makeup Artistry, Gel Nails & Art, Beauty Grooming, Facials, and Bridal Packages.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const serviceDepts = [
  {
    title: "Hair Care & Styling",
    slug: "hair",
    href: "/services/hair",
    badge: "For Men & Women",
    desc: "Custom precision haircuts, signature blow-dries, scalp detox, restorative spas, and special occasion hair updos.",
    image: "/images/hair-women.jpg",
    icon: Scissors,
    subServices: [
      "Haircuts (Men & Women)",
      "Hair Styling & Blowouts",
      "Hair Grooming & Maintenance",
      "Hair Spa & Treatments",
      "Professional Hair Styling",
    ],
  },
  {
    title: "Makeup Services",
    slug: "makeup",
    href: "/services/makeup",
    badge: "HD Artistry",
    desc: "Camera-ready high-definition makeup, radiant party glam, and milestone event styling using luxury cosmetic formulations.",
    image: "/images/party-makeup.jpg",
    icon: Sparkles,
    subServices: [
      "Makeup for Different Occasions",
      "Party / Event Makeup",
      "Bridal / Wedding Makeup",
      "Professional & Studio Makeup",
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
    icon: Paintbrush,
    subServices: [
      "Essential Nail Care & Buffing",
      "Gel Polish & Nail Styling",
      "Custom Hand-Painted Nail Art",
      "Spa Manicure & Pedicure",
    ],
  },
  {
    title: "Beauty & Grooming",
    slug: "beauty-grooming",
    href: "/services/beauty-grooming",
    badge: "Skin & Wellness",
    desc: "Deep pore facials, gentle waxing, threading, skin polishing, and specialized men's beard sculpting and grooming.",
    image: "/images/beauty-spa.jpg",
    icon: Sparkle,
    subServices: [
      "Rejuvenating Beauty Facials",
      "Personal Grooming & Threading",
      "Men's Beard Sculpting & Shaves",
      "Women's Gentle Waxing",
      "Complete Salon & Beauty Care",
    ],
  },
  {
    title: "Bridal & Occasion",
    slug: "bridal",
    href: "/bridal",
    badge: "Wedding Couture",
    desc: "Signature bridal transformations, groom royal styling, pre-wedding skin rituals, and saree / dupatta draping.",
    image: "/images/bridal-makeup.jpg",
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
      {/* Top Banner */}
      <section className="pt-8 pb-16 sm:pb-24 bg-luxury-radial border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Services", url: "/services" }]} className="mb-6" />

          <div className="text-center max-w-3xl mx-auto space-y-5">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Complete Salon Menu
            </Badge>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.2]">
              Exceptional Services for Every Style &amp; Occasion
            </h1>
            <p className="text-base sm:text-lg text-[#554e53] font-normal font-sans leading-relaxed">
              Discover our full spectrum of hair, makeup, nail, and skincare experiences tailored for both women and men.
            </p>
          </div>
        </div>
      </section>

      {/* Services Departments List */}
      <section className="py-20 md:py-28 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {serviceDepts.map((dept, index) => {
            const Icon = dept.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={dept.title}
                className="luxury-card bg-[#FAF8F7] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#EAE3E6] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative h-72 sm:h-88 lg:h-96 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
                      <Image
                        src={dept.image}
                        alt={dept.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <Badge variant={dept.highlight ? "gold" : "primary"}>
                        {dept.badge}
                      </Badge>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#181517] leading-[1.2]">
                      {dept.title}
                    </h2>

                    <p className="text-base text-[#554e53] leading-relaxed font-normal font-sans">
                      {dept.desc}
                    </p>

                    {/* Sub-services list */}
                    <div className="pt-2">
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C8488] mb-3">
                        Featured Offerings
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dept.subServices.map((sub) => (
                          <div key={sub} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C2185B] shrink-0" />
                            <span className="text-sm text-[#383236] font-normal">
                              {sub}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button href={dept.href} variant="primary" size="md">
                        Explore {dept.title} Details
                      </Button>
                      <Button
                        href="/contact#appointment"
                        variant="outline"
                        size="md"
                        icon={<Calendar className="w-4 h-4 mr-1.5" />}
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

      {/* Booking CTA */}
      <QuickBookingCTA />
    </div>
  );
}
