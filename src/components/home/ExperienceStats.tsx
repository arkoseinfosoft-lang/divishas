"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Award, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients Welcomed",
    detail: "Dedicated men & women",
  },
  {
    icon: Award,
    value: "12+",
    label: "Master Stylists & Artists",
    detail: "Certified professionals",
  },
  {
    icon: Star,
    value: "4.9 ★",
    label: "Top Salon Rating",
    detail: "Over 1,200+ reviews",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "UV Autoclave Sanitized",
    detail: "Single-use hygiene kits",
  },
];

export function ExperienceStats() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-dark-suite text-white relative overflow-hidden border-y border-white/10">
      {/* Ambient background glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E0007C]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF80AB]/15 border border-[#FF80AB]/30 text-[#FF80AB] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Divisha&apos;s Difference</span>
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic text-[#FAF8F7] leading-[1.25]">
            &ldquo;Beauty and grooming at Divisha&apos;s isn&apos;t a routine — it is a bespoke art form tailored for your authentic grace.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
            <span>Kanpur, Uttar Pradesh</span>
            <span>•</span>
            <span>Unisex Styling Atelier</span>
          </div>
        </motion.div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#FF80AB]/40 hover:bg-white/[0.07] transition-all duration-300 group text-center flex flex-col items-center justify-between shadow-xl"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E0007C]/20 text-[#FF80AB] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <div className="serif-numeral text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF0F4] to-[#C5A880] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#9E959B] mt-1 font-normal">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
