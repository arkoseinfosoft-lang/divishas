"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ShieldCheck, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import DotGrid from "@/components/ui/DotGrid";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 bg-hero-mesh border-b border-[#EAE3E6]">
      {/* Interactive DotGrid Background */}
      <DotGrid
        dotSize={5}
        gap={22}
        baseColor="#FF0000"
        activeColor="#00FF00"
        proximity={140}
        shockRadius={220}
        shockStrength={5}
        resistance={750}
        returnDuration={1.2}
        className="absolute inset-0 z-0 pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Top Brand Pill */}
            <div className="inline-flex max-w-full items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#C2185B] text-xs font-semibold tracking-wide shadow-xs mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E0007C] shrink-0" />
              <span>Kanpur&apos;s Signature Unisex Salon &amp; Bridal Atelier</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight text-[#181517] leading-[1.08]">
              Elevate Your Everyday Style &amp; Special Moments at{" "}
              <span className="text-gradient-magenta inline-block">
                Divisha&apos;s
              </span>
            </h1>

            {/* Persuasive Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-[#554e53] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal font-sans">
              Where contemporary hairdressing, couture bridal artistry, luxury nail care, and revitalizing skin grooming meet dedicated unisex expertise in an ambient, hygienic sanctuary.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                href="/contact#appointment"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                className="w-full sm:w-auto text-sm sm:text-base px-7 sm:px-9 py-4 min-h-[50px] shadow-lg shadow-[#E0007C]/20"
              >
                Book an Appointment
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-4 min-h-[50px] bg-white/80 hover:bg-white"
              >
                Explore Services Menu
              </Button>
            </div>

            {/* Trust Chips */}
            <div className="pt-6 sm:pt-8 border-t border-[#EAE3E6] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <div className="flex items-center gap-3 p-3 sm:p-2 rounded-2xl bg-white/70 sm:bg-transparent border sm:border-0 border-[#EAE3E6] shadow-2xs sm:shadow-none">
                <div className="w-9 h-9 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
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

              <div className="flex items-center gap-3 p-3 sm:p-2 rounded-2xl bg-white/70 sm:bg-transparent border sm:border-0 border-[#EAE3E6] shadow-2xs sm:shadow-none">
                <div className="w-9 h-9 rounded-xl bg-[#FBF7F0] text-[#9A7B4F] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
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

              <div className="flex items-center gap-3 p-3 sm:p-2 rounded-2xl bg-white/70 sm:bg-transparent border sm:border-0 border-[#EAE3E6] shadow-2xs sm:shadow-none">
                <div className="w-9 h-9 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
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
            </div>
          </motion.div>

          {/* Right Hero Image Card Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backing Frame */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#E0007C]/25 -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-[#FCE4EC]/50 -z-20" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-[#EAE3E6] bg-white aspect-[4/3]">
                <Image
                  src="/images/hero-salon.jpg"
                  alt="Divisha's Unisex Salon Luxury Interior and Hair Styling"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 right-4 glass-pill-dark px-3 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <span className="text-amber-400">★</span>
                  <span>4.9 / 5</span>
                  <span className="text-[#C8BFC4] text-[11px] font-normal">• 1,200+ Reviews</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3.5 inset-x-3.5 sm:bottom-4 sm:inset-x-4 p-3.5 sm:p-4 rounded-2xl glass-pill shadow-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] p-1 flex items-center justify-center shrink-0 shadow-xs">
                      <Image
                        src="/images/logo.png"
                        alt="Divisha's Logo"
                        width={38}
                        height={38}
                        className="object-contain"
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

                  <Badge variant="gold" className="text-[10px] sm:text-[11px] shrink-0 py-1 px-3">
                    Open 7 Days
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
