"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingDesktopCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past roughly the hero section (> 420px)
      if (window.scrollY > 420) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 p-1.5 rounded-full bg-[#181517]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_35px_rgba(224,0,124,0.22),0_4px_12px_rgba(0,0,0,0.35)]"
        >
          {/* WhatsApp Direct Icon Button */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Book Appointment CTA Pill */}
          <Link
            href="/contact#appointment"
            className="group relative flex items-center gap-2 pl-3.5 pr-5 py-2.5 rounded-full bg-gradient-to-r from-[#E0007C] to-[#C2185B] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:shadow-[#E0007C]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            {/* Shimmer light sweep on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <Calendar className="w-4 h-4 text-white shrink-0" />
            <span>Book Appointment</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF80AB] group-hover:rotate-12 transition-transform shrink-0" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
