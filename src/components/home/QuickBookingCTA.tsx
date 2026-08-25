"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";

export function QuickBookingCTA() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#EAE3E6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#FFF5F9] via-[#FAF7F5] to-[#FDF4F8] border border-[#F3DFE8] shadow-sm text-center overflow-hidden space-y-6"
        >
          {/* Subtle ambient lighting inside the card */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#E0007C]/6 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F8BBD0] text-[#C2185B] text-xs font-semibold uppercase tracking-[0.14em]">
              <Sparkles className="w-3.5 h-3.5 text-[#E0007C] shrink-0" />
              <span>Walk-ins &amp; Prior Bookings Welcome</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181517] leading-[1.15]">
              Ready for Your Next Transformation?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#554E53] max-w-2xl mx-auto font-normal font-sans leading-relaxed">
              Book your slot online or send us a quick WhatsApp message. We look forward to welcoming you to Divisha&apos;s Unisex Salon.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
              <Button
                href="/contact#appointment"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                className="w-full sm:w-auto text-sm sm:text-base px-7 sm:px-9 py-4 min-h-[50px] shadow-lg shadow-[#E0007C]/20"
              >
                Book an Appointment
              </Button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] min-h-[50px]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-full bg-white hover:bg-[#FAF8F7] text-[#181517] text-sm sm:text-base font-medium border border-[#EAE3E6] shadow-2xs transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 min-h-[50px]"
              >
                <Phone className="w-4 h-4 text-[#C2185B] shrink-0" />
                <span>Call: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
