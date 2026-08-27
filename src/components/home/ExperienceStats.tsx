"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Award, ShieldCheck, Star } from "lucide-react";
import { CountUpNumber } from "../ui/CountUpNumber";

const stats = [
  {
    icon: Users,
    numericValue: 5000,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Happy Clients Welcomed",
    detail: "Dedicated men & women",
  },
  {
    icon: Award,
    numericValue: 12,
    decimals: 0,
    prefix: "",
    suffix: "+",
    label: "Master Stylists & Artists",
    detail: "Certified professionals",
  },
  {
    icon: Star,
    numericValue: 4.9,
    decimals: 1,
    prefix: "",
    suffix: " ★",
    label: "Top Salon Rating",
    detail: "Over 1,200+ reviews",
  },
  {
    icon: ShieldCheck,
    numericValue: 100,
    decimals: 0,
    prefix: "",
    suffix: "%",
    label: "UV Autoclave Sanitized",
    detail: "Single-use hygiene kits",
  },
];

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ExperienceStats() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#121011] text-white relative overflow-hidden border-y border-white/10">
      {/* Ambient background glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0007C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C5A880]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Fine luxury micro-grid texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF80AB]/15 border border-[#FF80AB]/30 text-[#FF80AB] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] shadow-xs">
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

        {/* 4-Stat Grid with Animated Count-Up Numbers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-3xl glass-panel-dark glass-panel-dark-hover border border-white/10 hover:border-[#FF80AB]/40 transition-all duration-300 group text-center flex flex-col items-center justify-between shadow-2xl"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E0007C]/20 text-[#FF80AB] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <div className="serif-numeral text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF0F4] to-[#C5A880] tracking-tight mb-1">
                    <CountUpNumber
                      end={stat.numericValue}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2.2}
                    />
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
        </motion.div>
      </div>
    </section>
  );
}

