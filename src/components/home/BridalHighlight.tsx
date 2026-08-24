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
    <section className="py-20 md:py-28 bg-[#141213] text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0007C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2185B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Images Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="relative h-72 sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/bridal-makeup.jpg"
                  alt="Indian Bride Makeup by Divisha's Unisex Salon"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 350px"
                />
              </div>
              <div className="space-y-5">
                <div className="relative h-44 sm:h-56 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/bridal-hair.jpg"
                    alt="Floral Bridal Bun Styling"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 350px"
                  />
                </div>
                <div className="relative h-28 sm:h-44 rounded-3xl overflow-hidden border border-white/10 bg-[#221C20] p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#FF80AB] mb-1.5">
                    <Crown className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                      For Bride &amp; Groom
                    </span>
                  </div>
                  <p className="text-xs text-[#C8BFC4] leading-relaxed">
                    Dedicated bridal makeup suites &amp; executive groom styling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <Badge variant="primary" className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30 mb-2">
              Couture Wedding Artistry
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.2]">
              Create Your Dream Wedding Look with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF80AB] to-[#FF4081]">
                Divisha&apos;s
              </span>
            </h2>

            <p className="text-base text-[#D0C7CC] leading-relaxed font-normal font-sans">
              From intimate engagements to grand wedding day celebrations, our master bridal artists create enchanting, long-lasting looks that highlight your timeless grace while standing up to 4K photography and day-long rituals.
            </p>

            {/* Bullet points */}
            <div className="space-y-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E0007C]/20 text-[#FF80AB] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#E0D8DC] font-normal">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/bridal"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-sm"
              >
                Explore Bridal Packages
              </Button>
              <Button
                href="/contact#appointment"
                variant="ghost"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-sm text-white hover:text-[#FF80AB] hover:bg-white/5 border border-white/20"
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
