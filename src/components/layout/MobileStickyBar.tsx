"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#EAE3E6] px-3 py-2.5 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FAF5F7] text-[#181517] hover:bg-[#FCE4EC] active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#C2185B] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
            siteConfig.contact.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#E8F8EE] text-[#137A3E] hover:bg-[#D3F3DC] active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <Link
          href="/contact#appointment"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-[#E0007C] to-[#C2185B] text-white shadow-sm active:scale-95 transition-all text-center"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
