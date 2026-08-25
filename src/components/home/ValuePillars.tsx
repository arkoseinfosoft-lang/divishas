"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Award,
  ShieldCheck,
  Smile,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  {
    num: "01",
    badge: "Zoned Atmosphere",
    title: "Dedicated Unisex Architecture",
    desc: "Thoughtfully zoned styling spaces, custom men's barbering stations, and private bridal & skin suites designed so everyone feels comfortable and pampered.",
    highlights: ["Men's & Women's Specialist Floors", "Private Bridal & Consultation Rooms"],
  },
  {
    num: "02",
    badge: "Medical-Grade Safety",
    title: "Hospital-Grade Sanitization",
    desc: "Multi-stage UV autoclave tool sterilization, sealed single-use disposables, and sterile styling stations before every single guest appointment.",
    highlights: ["Zero Double-Dipping Policy", "100% Sealed Single-Use Capes & Kits"],
  },
  {
    num: "03",
    badge: "Artistry & Mastery",
    title: "Certified Master Stylists",
    desc: "Every cut, balayage highlight, facial detox, and HD bridal look is executed by certified professionals using dermatologist-approved luxury cosmetics.",
    highlights: ["Trained by International Academies", "Custom Formulations for Indian Hair & Skin"],
  },
  {
    num: "04",
    badge: "Long-Lasting Grace",
    title: "Bespoke Consultations & Longevity",
    desc: "We analyze your facial architecture, skin undertone, and lifestyle before starting. Our occasion looks are engineered to stay radiant through 14+ hours.",
    highlights: ["1-on-1 Personalized Assessment", "Tear-Proof & Sweat-Resistant Formulations"],
  },
];

export function ValuePillars() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white bg-dot-pattern border-b border-[#EAE3E6] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FF2E93]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            align="left"
            badge="The Divisha's Standard"
            title="A Refined Standard of Salon Excellence"
            subtitle="We blend the precision of contemporary hairdressing with uncompromising hygiene and authentic personal warmth."
          />
        </div>

        {/* Asymmetric 4-Pillar Numbered Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="luxury-card bg-[#FAF8F7] rounded-3xl p-8 sm:p-10 border border-[#EAE3E6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Giant Serif Watermark Numeral */}
              <div className="absolute top-4 right-6 serif-numeral text-5xl sm:text-6xl text-[#181517]/8 group-hover:text-[#E0007C]/15 transition-colors duration-300 pointer-events-none select-none">
                {pillar.num}
              </div>

              <div>
                <div className="inline-block mb-4">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2185B] bg-[#FCE4EC] px-3 py-1 rounded-full border border-[#F8BBD0]/60">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517] leading-snug group-hover:text-[#C2185B] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#554e53] mt-3 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EAE3E6] flex flex-wrap gap-2">
                {pillar.highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-white text-[#383236] px-3 py-1.5 rounded-xl border border-[#EAE3E6] font-medium shadow-2xs"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
