"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ShieldCheck, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import DotGrid from "@/components/ui/DotGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36 bg-hero-mesh border-b border-[#EAE3E6]">
      {/* Ambient Lighting Glow Orbs */}
      <div className="absolute top-0 right-10 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0007C]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Interactive DotGrid Background */}
      {/* shockRadius={0} intentionally disables the click shock-wave effect.
          The onClick handler in DotGrid iterates all dots synchronously on every
          window click, causing a 480ms INP block on the homepage. The mousemove
          proximity effect (throttled at 20ms, passive) is preserved. */}
      <DotGrid
        dotSize={4}
        gap={28}
        baseColor="#F0E4E9"
        activeColor="#E0007C"
        proximity={120}
        shockRadius={0}
        shockStrength={0}
        resistance={750}
        returnDuration={1.2}
        className="absolute inset-0 z-0 pointer-events-none opacity-45"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Top Brand Pill */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex max-w-full items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC]/90 backdrop-blur-md border border-[#F8BBD0] text-[#C2185B] text-xs font-semibold tracking-wide shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E0007C] shrink-0" />
                <span>Kanpur&apos;s Signature Unisex Salon &amp; Bridal Atelier</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-semibold tracking-tight text-[#181517] leading-[1.08]"
            >
              Elevate Your Everyday Style &amp; Special Moments at{" "}
              <span className="text-gradient-magenta inline-block">
                Divisha&apos;s
              </span>
            </motion.h1>

            {/* Persuasive Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-[#554e53] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal font-sans"
            >
              Where contemporary hairdressing, couture bridal artistry, luxury nail care, and revitalizing skin grooming meet dedicated unisex expertise in an ambient, hygienic sanctuary.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <Button
                href="/contact#appointment"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                className="w-full sm:w-auto text-sm sm:text-base px-7 sm:px-9 py-4 min-h-[50px] shadow-lg shadow-[#E0007C]/25 hover:shadow-xl hover:shadow-[#E0007C]/35"
              >
                Book an Appointment
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-4 min-h-[50px] bg-white/90 backdrop-blur-md hover:bg-white border-[#EAE3E6] shadow-xs"
              >
                Explore Services Menu
              </Button>
            </motion.div>

            {/* Trust Chips with Layered Glassmorphic Panels */}
            <motion.div
              variants={itemVariants}
              className="pt-6 sm:pt-8 border-t border-[#EAE3E6]/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left"
            >
              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel glass-panel-hover group">
                <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#181517]">
                    100% Sanitized
                  </p>
                  <p className="text-[11px] text-[#7A7276]">
                    Sterilized single-use tools
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel glass-panel-hover group">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7F0] text-[#9A7B4F] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#181517]">
                    Master Stylists
                  </p>
                  <p className="text-[11px] text-[#7A7276]">
                    Certified professionals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel glass-panel-hover group">
                <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#181517]">
                    Unisex Care
                  </p>
                  <p className="text-[11px] text-[#7A7276]">
                    Zoned for men &amp; women
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Image Card Stack with Subtle Parallax Floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Multi-Layer Backing Frame */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#E0007C]/20 -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#FCE4EC]/60 to-[#FBF7F0]/60 -z-20 blur-xs" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#EAE3E6]/80 bg-white aspect-[4/3] group">
                <Image
                  src="/images/hero-salon.webp"
                  alt="Divisha's Unisex Salon Luxury Interior and Hair Styling"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Top Floating Badge with Glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute top-4 right-4 glass-panel-dark px-3.5 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-white/15"
                >
                  <span className="text-amber-400">★</span>
                  <span>4.9 / 5</span>
                  <span className="text-[#C8BFC4] text-[11px] font-normal">• 1,200+ Reviews</span>
                </motion.div>

                {/* Floating Bottom Card with Glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-3.5 inset-x-3.5 sm:bottom-4 sm:inset-x-4 p-3.5 sm:p-4 rounded-2xl glass-panel shadow-xl flex items-center justify-between gap-3 border border-white/80"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-xs border border-[#FCE4EC]">
                      <Image
                        src="/images/favicon.png"
                        alt="Divisha's Emblem"
                        width={38}
                        height={38}
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-[#181517] truncate">
                        Divisha&apos;s Unisex Salon
                      </p>
                      <p className="text-[10.5px] sm:text-xs text-[#C2185B] font-medium truncate">
                        Hair • Makeup • Nails • Grooming
                      </p>
                    </div>
                  </div>

                  <Badge variant="gold" className="text-[10px] sm:text-[11px] shrink-0 py-1 px-3 shadow-2xs">
                    Open 7 Days
                  </Badge>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

