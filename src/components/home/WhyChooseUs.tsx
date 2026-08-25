"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, UserCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

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

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white border-b border-[#EAE3E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <SectionHeading
              align="left"
              badge="The Divisha's Distinction"
              title="A Salon Experience Designed Around You"
              subtitle="Whether you're visiting for a regular haircut or getting ready for your most cherished celebration, we ensure every moment is relaxing and transformative."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="p-5 sm:p-6 rounded-3xl bg-[#FAF8F7] border border-[#EAE3E6] space-y-2 hover:border-[#C2185B]/40 transition-colors shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-semibold text-[#181517]">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button href="/about" variant="primary" size="md" className="w-full sm:w-auto min-h-[46px]">
                Learn More About Us
              </Button>
              <Button href="/contact" variant="outline" size="md" className="w-full sm:w-auto min-h-[46px] bg-white">
                Find Our Salon
              </Button>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-black/8 border border-[#EAE3E6]">
                <Image
                  src="/images/hair-men.jpg"
                  alt="Men's and Women's Unisex Styling at Divisha's"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Experience Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl glass-pill shadow-xl flex items-center gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}
