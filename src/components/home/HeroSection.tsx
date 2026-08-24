"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ShieldCheck, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-hero-mesh border-b border-[#EAE3E6]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#E0007C]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-60 sm:w-[400px] h-60 sm:h-[400px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left"
          >
            {/* Top Brand Pill */}
            <div className="inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#C2185B] text-[10.5px] sm:text-xs font-semibold tracking-wide shadow-xs mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E0007C] shrink-0" />
              <span className="truncate sm:overflow-visible">Premium Unisex Salon • Welcoming Men &amp; Women</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-[#181517] leading-[1.2]">
              Elevate Your Everyday Style &amp; Special Moments at{" "}
              <span className="text-gradient-magenta inline-block">
                Divisha&apos;s
              </span>
            </h1>

            {/* Persuasive Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-[#554e53] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal font-sans">
              Experience the harmony of contemporary hairdressing, couture bridal
              makeup, luxury nail art, and revitalizing skin grooming — delivered by
              certified master stylists in a welcoming, hygienic atmosphere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <Button
                href="/contact#appointment"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px]"
              >
                Book an Appointment
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 min-h-[48px]"
              >
                Explore All Services
              </Button>
            </div>

            {/* Trust Chips */}
            <div className="pt-5 sm:pt-6 border-t border-[#EAE3E6] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <div className="flex items-center gap-3 p-2 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-[#EAE3E6]">
                <div className="w-8 h-8 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#181517]">
                    100% Sanitized
                  </p>
                  <p className="text-[11px] text-[#7A7276]">
                    Sterilized equipment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-[#EAE3E6]">
                <div className="w-8 h-8 rounded-full bg-[#FBF7F0] text-[#9A7B4F] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#181517]">
                    Expert Stylists
                  </p>
                  <p className="text-[11px] text-[#7A7276]">
                    Certified professionals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-[#EAE3E6]">
                <div className="w-8 h-8 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#181517]">
                    Unisex Care
                  </p>
                  <p className="text-[11px] text-[#7A7276]">
                    Custom for all
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Elements */}
              <div className="hidden sm:block absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full rounded-3xl border-2 border-[#E0007C]/20 -z-10" />
              <div className="hidden sm:block absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full rounded-3xl bg-[#FCE4EC]/40 -z-20" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/8 border border-[#EAE3E6] bg-white aspect-[4/3]">
                <Image
                  src="/images/hero-salon.jpg"
                  alt="Divisha's Unisex Salon Luxury Interior and Hair Styling"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-md flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FCE4EC] p-1 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/logo.png"
                        alt="Divisha's Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#181517] truncate">
                        Divisha&apos;s Unisex Salon
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-[#C2185B] font-medium truncate">
                        Hair • Makeup • Nails • Grooming
                      </p>
                    </div>
                  </div>

                  <Badge variant="gold" className="text-[10px] shrink-0 py-1 px-2.5">
                    Open Today
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
