"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, ShieldCheck, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-luxury-radial">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E0007C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#D81B60]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#C2185B] text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E0007C]" />
              <span>Premium Unisex Salon • Welcoming Men & Women</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181517] leading-[1.12]">
              Elevate Your Everyday Style &amp; Special Moments at{" "}
              <span className="text-gradient-magenta inline-block">
                Divisha&apos;s
              </span>
            </h1>

            {/* Persuasive Subtext */}
            <p className="text-base sm:text-lg text-[#5E575B] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              Experience the harmony of contemporary hairdressing, couture bridal
              makeup, luxury nail art, and revitalizing skin grooming — delivered by
              certified master stylists in a welcoming, hygienic atmosphere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contact#appointment"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5 mr-2" />}
                className="w-full sm:w-auto text-base px-8 py-4"
              >
                Book an Appointment
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                withArrow
                className="w-full sm:w-auto text-base px-7 py-4"
              >
                Explore All Services
              </Button>
            </div>

            {/* Trust Chips */}
            <div className="pt-6 border-t border-[#EAE3E6] grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#181517]">
                    100% Sanitized
                  </p>
                  <p className="text-[11px] text-[#7A7276] hidden sm:block">
                    Sterilized equipment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FBF7F0] text-[#9A7B4F] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#181517]">
                    Expert Stylists
                  </p>
                  <p className="text-[11px] text-[#7A7276] hidden sm:block">
                    Certified professionals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#181517]">
                    Unisex Care
                  </p>
                  <p className="text-[11px] text-[#7A7276] hidden sm:block">
                    Custom for all
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#E0007C]/20 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-[#FCE4EC]/40 -z-20" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3E6] bg-white aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]">
                <Image
                  src="/images/hero-salon.jpg"
                  alt="Divisha's Unisex Salon Luxury Interior and Hair Styling"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] p-1 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/logo.png"
                        alt="Divisha's Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#181517]">
                        Divisha&apos;s Unisex Salon
                      </p>
                      <p className="text-[11px] text-[#C2185B] font-medium">
                        Hair • Makeup • Nails • Grooming
                      </p>
                    </div>
                  </div>

                  <Badge variant="gold" className="text-[10px] shrink-0">
                    Open Today
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
