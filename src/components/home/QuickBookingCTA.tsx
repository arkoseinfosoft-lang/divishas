"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";

export function QuickBookingCTA() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#181517] text-white relative overflow-hidden border-y border-white/10">
      {/* Decorative ambient glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 sm:w-[500px] h-48 sm:h-[320px] bg-[#E0007C]/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 sm:w-[450px] h-44 sm:h-[300px] bg-[#C2185B]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6"
      >
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF80AB] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em]">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Walk-ins &amp; Prior Bookings Welcome</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
          Ready for Your Next Transformation?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal font-sans leading-relaxed">
          Book your slot online or send us a quick WhatsApp message. We look forward to welcoming you to Divisha&apos;s Unisex Salon.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
          <Button
            href="/contact#appointment"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
            className="w-full sm:w-auto text-sm sm:text-base px-7 sm:px-9 py-4 min-h-[50px] shadow-lg shadow-[#E0007C]/30"
          >
            Book an Appointment Online
          </Button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] min-h-[50px]"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium border border-white/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 min-h-[50px]"
          >
            <Phone className="w-4 h-4 text-[#FF80AB] shrink-0" />
            <span>Call: {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
