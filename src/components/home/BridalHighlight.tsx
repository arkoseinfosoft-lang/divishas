"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";

const highlights = [
  "High-Definition & Airbrush Bridal Makeup",
  "Pre-Bridal Glow & Skin Rejuvenation Rituals",
  "Groom Royal Hair & Beard Styling Packages",
  "Traditional Floral Hair Buns & Saree/Dupatta Draping",
  "Bespoke Looks for Sangeet, Mehendi, Haldi & Reception",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BridalHighlight() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#121011] text-white relative overflow-hidden border-b border-[#2A2327]">
      {/* Rich Multi-Hue Ambient Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#E0007C]/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#C5A880]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Interactive Before/After Slider & Hair/Groom Suite Stack */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 space-y-4 sm:space-y-5 order-2 lg:order-1"
          >
            {/* Interactive Before & After Transformation Slider */}
            <div className="relative group">
              <BeforeAfterSlider
                beforeImage="/images/natural_portrait.png"
                afterImage="/images/bridal-makeup.jpg"
                beforeLabel="Natural Look"
                afterLabel="HD Bridal Glamour"
                beforeAlt="Natural look before bridal styling"
                afterAlt="HD Couture Indian Bridal Makeup"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px]"
              />
            </div>

            {/* Supporting Micro-Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Floral Bun Card */}
              <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden border border-white/10 glass-panel-dark group flex items-center p-3 gap-3 shadow-lg">
                <div className="relative w-24 sm:w-28 h-full rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/bridal-hair.jpg"
                    alt="Floral Bridal Bun Styling"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="120px"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF80AB] block">
                    Hair Artistry
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate mt-0.5">
                    Floral Bun Styling
                  </h4>
                  <p className="text-[11px] text-[#A8A1A6] line-clamp-2 mt-0.5">
                    Traditional &amp; modern hair draping.
                  </p>
                </div>
              </div>

              {/* Suite Card */}
              <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden border border-white/10 glass-panel-dark p-4 flex flex-col justify-between shadow-lg">
                <div className="flex items-center gap-1.5 text-[#FF80AB]">
                  <Crown className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
                    For Bride &amp; Groom
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#C8BFC4] leading-relaxed">
                  Private bridal makeup suites &amp; executive groom styling lounge.
                </p>
                <div className="flex items-center gap-1 text-[10px] text-[#C5A880] font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>100% Sweat &amp; Tear Resistant</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Bullet Points */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 space-y-6 sm:space-y-7 order-1 lg:order-2"
          >
            <div>
              <Badge variant="primary" className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30 mb-2 shadow-xs">
                Couture Wedding Artistry
              </Badge>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
                Create Your Dream Wedding Look with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF80AB] to-[#FF4081]">
                  Divisha&apos;s
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#D0C7CC] leading-relaxed font-normal font-sans">
              From intimate engagements to grand wedding day celebrations, our master bridal artists create enchanting, long-lasting looks that highlight your timeless grace while standing up to 4K photography and day-long rituals.
            </p>

            {/* Bullet points with soft glowing checks */}
            <div className="space-y-3 pt-1">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#E0007C]/25 text-[#FF80AB] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#E0D8DC] font-normal leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="/bridal"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-sm min-h-[50px] shadow-lg shadow-[#E0007C]/25 hover:shadow-xl hover:shadow-[#E0007C]/35"
              >
                Explore Bridal Packages
              </Button>
              <Button
                href="/contact#appointment"
                variant="ghost"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-sm text-white hover:text-[#FF80AB] hover:bg-white/10 border border-white/20 min-h-[50px]"
              >
                Book Bridal Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

