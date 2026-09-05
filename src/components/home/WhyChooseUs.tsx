"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, UserCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

const points = [
  {
    title: "Dedicated Unisex Care",
    desc: "Thoughtfully zoned spaces and specialized stylists tailored for both men's sharp grooming and women's intricate styling.",
  },
  {
    title: "1-on-1 Personalized Consultation",
    desc: "We listen to your vision, evaluate your skin or hair type, and recommend bespoke treatments tailored for you.",
  },
  {
    title: "Uncompromising Hygiene Standards",
    desc: "Hospital-grade UV tool sterilization, sealed single-use disposables, and pristine salon chairs for safe indulgence.",
  },
  {
    title: "Long-Lasting Occasion Perfection",
    desc: "Makeup and hair styling designed to stay radiant, smudge-proof, and comfortable through warm climates and long festivities.",
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

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#F3E8DC] via-[#FAF6F3] to-[#FDFBF9] border-b border-[#EAE3E6] relative overflow-hidden">
      {/* Soft Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0007C]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Main Grid: Content & Visual Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <SectionHeading
                align="left"
                badge="The Divisha's Distinction"
                title="A Salon Experience Designed Around You"
                subtitle="Whether you're visiting for a regular haircut or getting ready for your most cherished celebration, we ensure every moment is relaxing and transformative."
              />
            </motion.div>

            {/* 4 Distinction Glassmorphic Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {points.map((point) => (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className="p-5 sm:p-6 rounded-3xl glass-panel glass-panel-hover space-y-2 border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-[#F8BBD0]"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shadow-2xs">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-semibold text-[#181517] font-sans">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                className="w-full sm:w-auto min-h-[48px] shadow-lg shadow-[#E0007C]/20"
              >
                Learn More About Us
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="w-full sm:w-auto min-h-[48px] bg-white/90 backdrop-blur-md hover:bg-white border-[#EAE3E6]"
              >
                Find Our Salon
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Behind */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#E0007C]/20 -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#FCE4EC]/50 to-[#FBF7F0]/50 -z-20 blur-xs" />

              <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#EAE3E6]/80 bg-white group">
                <Image
                  src="/images/hair-men.webp"
                  alt="Men's and Women's Unisex Styling at Divisha's"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                {/* Floating Experience Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl glass-panel shadow-xl flex items-center gap-3 sm:gap-4 border border-white/80">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#E0007C] to-[#C2185B] text-white flex items-center justify-center shrink-0 shadow-md">
                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-[#181517]">
                      Expert Hair &amp; Grooming
                    </h5>
                    <p className="text-[11px] sm:text-xs text-[#554e53]">
                      Certified master stylists for modern cuts &amp; beard sculpting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <TestimonialsCarousel />
        </motion.div>
      </div>
    </section>
  );
}

