"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Paintbrush, Sparkle, Crown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function FeaturedServices() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#F7F2EE] via-[#FAF6F3] to-[#FDFBF9] border-b border-[#EAE3E6] relative overflow-hidden">
      {/* Soft Champagne & Gold Ambient Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0007C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C5A880]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
          <SectionHeading
            align="left"
            badge="Tailored Offerings"
            title="Curated Salon Artistry &amp; Menus"
            subtitle="Explore our comprehensive range of hair, makeup, nail, and grooming experiences designed for both women and men."
          />
          <Button
            href="/services"
            variant="outline"
            withArrow
            className="shrink-0 self-start sm:self-auto min-h-[48px] bg-white/90 backdrop-blur-md hover:bg-white border-[#EAE3E6] shadow-2xs"
          >
            View All Services
          </Button>
        </div>

        {/* Asymmetric Bento Grid with Layered Glassmorphic Panels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Bento Tile 1: Large Anchor - Bridal & Occasion Couture */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(224,0,124,0.12)] flex flex-col md:flex-row group"
          >
            <div className="md:w-1/2 relative min-h-[280px] md:min-h-[380px] overflow-hidden bg-zinc-100">
              <Image
                src="/images/bridal-makeup.jpg"
                alt="Bridal Couture Makeover by Divisha's"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/65 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-md shadow-xs border border-white/80">
                  Couture Feature
                </Badge>
              </div>
            </div>

            <div className="md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[#C2185B] mb-2">
                  <Crown className="w-4 h-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">Signature Service</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517] leading-snug group-hover:text-[#C2185B] transition-colors">
                  Bridal &amp; Occasion Transformations
                </h3>
                <p className="text-sm text-[#554e53] mt-2.5 leading-relaxed font-normal">
                  High-definition wedding artistry, groom executive styling, pre-bridal glow rituals, and floral bun draping for timeless celebrations.
                </p>

                <div className="mt-5 pt-4 border-t border-[#F5EDF2] flex flex-wrap gap-1.5 sm:gap-2">
                  {["HD & Airbrush Bridal", "Royal Groom Styling", "Saree & Dupatta Draping", "Pre-Bridal Spas"].map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-white/85 backdrop-blur-xs text-[#4A4347] px-3 py-1 rounded-xl border border-[#EFE8EC] font-medium shadow-2xs group-hover:border-[#F8BBD0] transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/bridal"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2185B] hover:text-[#E0007C] group-hover:translate-x-1.5 transition-all"
                >
                  <span>Explore Bridal Atelier &amp; Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 2: Hair Care & Balayage */}
          <motion.div
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(224,0,124,0.12)] flex flex-col justify-between group"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-100">
              <Image
                src="/images/hair-women.jpg"
                alt="Hair Styling & Balayage"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute top-3.5 left-3.5">
                <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-md shadow-xs">
                  Unisex Hair
                </Badge>
              </div>
              <div className="absolute bottom-3.5 left-3.5 w-9 h-9 rounded-xl bg-white/95 text-[#C2185B] flex items-center justify-center shadow-md border border-white/80">
                <Scissors className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors leading-snug">
                  Hair Care &amp; Styling
                </h3>
                <p className="text-xs sm:text-sm text-[#554e53] mt-2 leading-relaxed font-normal">
                  Precision haircuts, blowout styling, balayage color blending, and restorative keratin spa treatments.
                </p>
              </div>
              <Link
                href="/services/hair"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C2185B] group-hover:translate-x-1.5 transition-transform"
              >
                <span>View Hair Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Tile 3: Nail Care & Extensions */}
          <motion.div
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(224,0,124,0.12)] flex flex-col justify-between group"
          >
            <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-100">
              <Image
                src="/images/nail-art.jpg"
                alt="Nail Art & Gel Extensions"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute top-3.5 left-3.5">
                <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-md shadow-xs">
                  Nail Studio
                </Badge>
              </div>
              <div className="absolute bottom-3.5 left-3.5 w-9 h-9 rounded-xl bg-white/95 text-[#C2185B] flex items-center justify-center shadow-md border border-white/80">
                <Paintbrush className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors leading-snug">
                  Nail Care &amp; Artistry
                </h3>
                <p className="text-xs sm:text-sm text-[#554e53] mt-2 leading-relaxed font-normal">
                  Gel extensions, custom nail art, cuticle wellness, and soothing spa manicures &amp; pedicures.
                </p>
              </div>
              <Link
                href="/services/nails"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C2185B] group-hover:translate-x-1.5 transition-transform"
              >
                <span>View Nail Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Tile 4: Skin Wellness & Facials */}
          <motion.div
            variants={itemVariants}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(224,0,124,0.12)] flex flex-col justify-between group"
          >
            <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-100">
              <Image
                src="/images/beauty-spa.jpg"
                alt="Beauty and Spa Facials"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute top-3.5 left-3.5">
                <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-md shadow-xs">
                  Skin &amp; Spa
                </Badge>
              </div>
              <div className="absolute bottom-3.5 left-3.5 w-9 h-9 rounded-xl bg-white/95 text-[#C2185B] flex items-center justify-center shadow-md border border-white/80">
                <Sparkle className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors leading-snug">
                  Skin Wellness &amp; Facials
                </h3>
                <p className="text-xs sm:text-sm text-[#554e53] mt-2 leading-relaxed font-normal">
                  Deep pore cleansing facials, gentle waxing, threading, and revitalizing skin hydration.
                </p>
              </div>
              <Link
                href="/services/beauty-grooming"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C2185B] group-hover:translate-x-1.5 transition-transform"
              >
                <span>View Beauty Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Tile 5: Dark Contrast Card - Men's Royal Grooming */}
          <motion.div
            variants={itemVariants}
            className="glass-panel-dark glass-panel-dark-hover text-white rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl flex flex-col justify-between group relative"
          >
            <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-900">
              <Image
                src="/images/beard-grooming.jpg"
                alt="Men's Beard Grooming and Styling"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141213] via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-3.5 left-3.5">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#FF80AB] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-xs">
                  Men&apos;s Lounge
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug">
                  Men&apos;s Royal Grooming
                </h3>
                <p className="text-xs sm:text-sm text-[#C8BFC4] mt-2 leading-relaxed font-normal">
                  Razor-sharp fades, sculpted beard architecture, scalp treatments, and executive detan rituals.
                </p>
              </div>
              <Link
                href="/services/beauty-grooming"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF80AB] hover:text-white group-hover:translate-x-1.5 transition-all"
              >
                <span>Explore Men&apos;s Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

