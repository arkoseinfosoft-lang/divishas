"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Sparkles, Paintbrush, Sparkle, Crown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const categories = [
  {
    title: "Hair Care & Styling",
    desc: "Precision haircuts, blowouts, restorative spa rituals, and styling for both men and women.",
    href: "/services/hair",
    image: "/images/hair-women.jpg",
    icon: Scissors,
    badge: "Unisex Hair",
    features: ["Haircuts & Trims", "Blowouts & Styling", "Hair Spa & Treatments"],
  },
  {
    title: "Makeup Services",
    desc: "HD occasion makeup, radiant party looks, and professional event styling tailored for your features.",
    href: "/services/makeup",
    image: "/images/party-makeup.jpg",
    icon: Sparkles,
    badge: "Artistry",
    features: ["Party & Event Makeup", "Occasion Styling", "High-Definition Artistry"],
  },
  {
    title: "Nail Care & Extensions",
    desc: "Luxury gel extensions, custom nail art, cuticle wellness, and soothing manicures & pedicures.",
    href: "/services/nails",
    image: "/images/nail-art.jpg",
    icon: Paintbrush,
    badge: "Nail Art",
    features: ["Gel Extensions", "Custom Nail Art", "Spa Manicure & Pedicure"],
  },
  {
    title: "Beauty & Grooming",
    desc: "Detox facials, gentle waxing, threading, and dedicated men's beard sculpting and grooming.",
    href: "/services/beauty-grooming",
    image: "/images/beauty-spa.jpg",
    icon: Sparkle,
    badge: "Skin & Spa",
    features: ["Hydrating Facials", "Men's Beard Sculpting", "Hygienic Waxing & Threading"],
  },
  {
    title: "Bridal & Occasion",
    desc: "Signature wedding makeovers, groom royal styling, pre-bridal skin prep, and saree/dupatta draping.",
    href: "/bridal",
    image: "/images/bridal-makeup.jpg",
    icon: Crown,
    badge: "Couture Wedding",
    features: ["Bridal HD & Airbrush", "Groom Styling", "Pre-Bridal Rituals"],
    isLarge: true,
  },
];

export function FeaturedServices() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-champagne-mesh border-b border-[#EAE3E6] relative overflow-hidden">
      {/* Soft champagne & gold ambient corner glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2E93]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <SectionHeading
            align="left"
            badge="Tailored Offerings"
            title="Curated Salon Services"
            subtitle="Explore our comprehensive range of hair, makeup, nail, and grooming experiences designed for both women and men."
          />
          <Button href="/services" variant="outline" withArrow className="shrink-0 self-start sm:self-auto min-h-[44px]">
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`luxury-card bg-white rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  cat.isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden bg-zinc-100 ${cat.isLarge ? "h-56 sm:h-72 lg:h-76" : "h-52 sm:h-60 lg:h-64"}`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-sm border-white/40">
                      {cat.badge}
                    </Badge>
                  </div>

                  {/* Category icon */}
                  <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#C2185B] flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-9 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#554e53] mt-2 leading-relaxed font-normal">
                      {cat.desc}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-[#F5EDF2] flex flex-wrap gap-1.5 sm:gap-2">
                      {cat.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[11px] sm:text-xs bg-[#FAF5F7] text-[#4A4347] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[#EFE8EC] font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C2185B] hover:text-[#E0007C] transition-colors group-hover:translate-x-1 duration-200 min-h-[36px]"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
