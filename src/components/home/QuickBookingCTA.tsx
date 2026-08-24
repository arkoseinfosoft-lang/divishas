"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";

export function QuickBookingCTA() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-[#181517] via-[#261D22] to-[#181517] text-white relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[600px] h-48 sm:h-[300px] bg-[#E0007C]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Large-scale Butterfly Silhouette Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[460px] h-80 sm:h-[460px] opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="#FF80AB" className="w-full h-full">
          <path d="M50 48 C45 32 30 18 12 24 C2 28 0 42 8 54 C16 66 32 72 46 64 C48 62 49 56 50 54 C51 56 52 62 54 64 C68 72 84 66 92 54 C100 42 98 28 88 24 C70 18 55 32 50 48 Z M48 66 C38 72 26 78 18 88 C14 94 22 98 30 96 C40 92 46 80 48 72 Z M52 66 C62 72 74 78 82 88 C86 94 78 98 70 96 C60 92 54 80 52 72 Z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF80AB]/15 border border-[#FF80AB]/30 text-[#FF80AB] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em]">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Walk-ins &amp; Prior Bookings Welcome</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2]">
          Ready for Your Next Transformation?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#D0C7CC] max-w-2xl mx-auto font-normal font-sans leading-relaxed">
          Book your slot online or send us a quick WhatsApp message. We look forward to welcoming you to Divisha&apos;s Unisex Salon.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Button
            href="/contact#appointment"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
            className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px]"
          >
            Book an Appointment Online
          </Button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-[#FF80AB] shrink-0" />
            <span>Call: {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
