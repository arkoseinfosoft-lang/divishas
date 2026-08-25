"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function BridalHighlight() {
  const highlights = [
    "High-Definition & Airbrush Bridal Makeup",
    "Pre-Bridal Glow & Skin Rejuvenation Rituals",
    "Groom Royal Hair & Beard Styling Packages",
    "Traditional Floral Hair Buns & Saree/Dupatta Draping",
    "Bespoke Looks for Sangeet, Mehendi, Haldi & Reception",
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#141213] text-white relative overflow-hidden border-b border-[#2A2327]">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-[#E0007C]/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-[#C2185B]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Images Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="relative h-64 sm:h-80 lg:h-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/bridal-makeup.jpg"
                  alt="Indian Bride Makeup by Divisha's Unisex Salon"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 350px"
                />
              </div>
              <div className="space-y-4 sm:space-y-5">
                <div className="relative h-36 sm:h-44 lg:h-58 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/bridal-hair.jpg"
                    alt="Floral Bridal Bun Styling"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 350px"
                  />
                </div>
                <div className="relative h-24 sm:h-32 lg:h-46 rounded-3xl overflow-hidden border border-white/10 bg-[#221C20] p-4 sm:p-5 flex flex-col justify-center shadow-xl">
                  <div className="flex items-center gap-1.5 text-[#FF80AB] mb-1">
                    <Crown className="w-4 h-4 shrink-0" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
                      For Bride &amp; Groom
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#C8BFC4] leading-relaxed">
                    Dedicated bridal makeup suites &amp; executive groom styling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5 sm:space-y-7 order-1 lg:order-2"
          >
            <Badge variant="primary" className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30 mb-1">
              Couture Wedding Artistry
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
              Create Your Dream Wedding Look with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF80AB] to-[#FF4081]">
                Divisha&apos;s
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#D0C7CC] leading-relaxed font-normal font-sans">
              From intimate engagements to grand wedding day celebrations, our master bridal artists create enchanting, long-lasting looks that highlight your timeless grace while standing up to 4K photography and day-long rituals.
            </p>

            {/* Bullet points */}
            <div className="space-y-3 pt-1">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0007C]/20 text-[#FF80AB] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#E0D8DC] font-normal">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="/bridal"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-sm min-h-[48px] shadow-lg shadow-[#E0007C]/20"
              >
                Explore Bridal Packages
              </Button>
              <Button
                href="/contact#appointment"
                variant="ghost"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-sm text-white hover:text-[#FF80AB] hover:bg-white/5 border border-white/20 min-h-[48px]"
              >
                Book Bridal Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
