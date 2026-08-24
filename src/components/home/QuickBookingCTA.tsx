import React from "react";
import { MessageCircle, Calendar, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";

export function QuickBookingCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1A1618] via-[#2A1D24] to-[#1A1618] text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E0007C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF80AB]/15 border border-[#FF80AB]/30 text-[#FF80AB] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Walk-ins &amp; Prior Bookings Welcome</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Ready for Your Next Transformation?
        </h2>

        <p className="text-base sm:text-lg text-[#CFC7CC] max-w-2xl mx-auto font-sans leading-relaxed">
          Book your slot online or send us a quick WhatsApp message. We look forward to welcoming you to Divisha&apos;s Unisex Salon.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact#appointment"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-5 h-5 mr-2" />}
            className="w-full sm:w-auto text-base px-8 py-4"
          >
            Book an Appointment Online
          </Button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base font-semibold shadow-lg shadow-[#25D366]/20 transition-all duration-300 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-medium border border-white/20 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#FF80AB]" />
            <span>Call: {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
