"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "../ui/Logo";
import DotGrid from "../ui/DotGrid";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141213] text-[#CCC6CA] pt-16 pb-24 md:pb-12 border-t border-[#262124] relative overflow-hidden">
      {/* Interactive DotGrid Background */}
      <DotGrid
        dotSize={4}
        gap={24}
        baseColor="#2f293a"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={200}
        shockStrength={4}
        resistance={750}
        returnDuration={1.2}
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      />

      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0007C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#282326]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="footer" />
            <p className="text-sm text-[#A8A1A6] leading-relaxed max-w-sm font-sans">
              Divisha&apos;s Unisex Salon is a premier beauty and grooming destination
              where trendsetting styling meets inclusive, personalized care for both men
              and women.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FF80AB] bg-[#221C20] py-2 px-3 rounded-xl border border-[#362C32] w-fit">
              <ShieldCheck className="w-4 h-4 text-[#FF80AB]" />
              <span>Certified Unisex Hair & Makeup Specialists</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#231F21] hover:bg-[#E0007C] text-white flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#231F21] hover:bg-[#E0007C] text-white flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-[#231F21] hover:bg-[#E0007C] text-white flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase font-sans">
              Navigation
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FF80AB] transition-colors flex items-center gap-2 py-1.5 min-h-[36px]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E676C]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FF80AB] transition-colors flex items-center gap-2 py-1.5 min-h-[36px]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E676C]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FF80AB] transition-colors flex items-center gap-2 py-1.5 min-h-[36px]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E676C]" />
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/bridal"
                  className="hover:text-[#FF80AB] transition-colors flex items-center gap-2 py-1.5 min-h-[36px] text-[#FF80AB] font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF80AB]" />
                  <span>Bridal &amp; Occasion</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#FF80AB] transition-colors flex items-center gap-2 py-1.5 min-h-[36px]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E676C]" />
                  <span>Visual Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF80AB] transition-colors flex items-center gap-2 py-1.5 min-h-[36px]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#6E676C]" />
                  <span>Contact &amp; Visit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase font-sans">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/hair"
                  className="hover:text-[#FF80AB] transition-colors block py-1"
                >
                  <span className="text-white font-medium">Hair Care &amp; Styling</span>
                  <span className="block text-xs text-[#8A8388] mt-0.5">
                    Cuts, Styling, Treatments, Men&apos;s Grooming
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/makeup"
                  className="hover:text-[#FF80AB] transition-colors block py-1"
                >
                  <span className="text-white font-medium">Makeup Services</span>
                  <span className="block text-xs text-[#8A8388] mt-0.5">
                    Party, HD Occasion &amp; Wedding Artistry
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nails"
                  className="hover:text-[#FF80AB] transition-colors block py-1"
                >
                  <span className="text-white font-medium">Nail Care &amp; Artistry</span>
                  <span className="block text-xs text-[#8A8388] mt-0.5">
                    Gel Nails, Extensions, Manicure &amp; Pedicure
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/beauty-grooming"
                  className="hover:text-[#FF80AB] transition-colors block py-1"
                >
                  <span className="text-white font-medium">Beauty &amp; Grooming</span>
                  <span className="block text-xs text-[#8A8388] mt-0.5">
                    Facials, Skin Detox, Waxing &amp; Men&apos;s Shave
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Col */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase font-sans">
              Visit & Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF80AB] shrink-0 mt-1" />
                <span className="text-xs text-[#B8B1B6] leading-relaxed">
                  {siteConfig.location.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF80AB] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-xs text-white hover:text-[#FF80AB] transition-colors font-medium"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF80AB] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs text-[#B8B1B6] hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-[#262124]">
                <Clock className="w-4 h-4 text-[#FF80AB] shrink-0 mt-0.5" />
                <div className="text-xs text-[#A8A1A6] space-y-0.5">
                  <p>{siteConfig.timings.weekdays}</p>
                  <p>{siteConfig.timings.weekends}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8388]">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. Designed & Developed by Arkose Infosoft.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Salon
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Book Visit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
