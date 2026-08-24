import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact Us & Book Appointment | Divisha's Unisex Salon",
  description:
    "Contact Divisha's Unisex Salon. Book an appointment online, send a WhatsApp message, view salon opening hours, or get Google Maps directions.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pb-24 bg-luxury-radial border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact & Visit", url: "/contact" }]} className="mb-4 sm:mb-6" />

          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Connect With Us
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.2]">
              Visit Divisha&apos;s Unisex Salon
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#554e53] font-normal font-sans leading-relaxed">
              Book your bespoke salon appointment, ask questions, or drop in for a personal style consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#FAF8F7] border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              {/* Phone & WhatsApp Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#EAE3E6] shadow-xs space-y-5 sm:space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181517] leading-[1.2]">
                  Instant Touchpoints
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F7] hover:bg-[#FCE4EC]/50 border border-[#EAE3E6] transition-all hover:scale-[1.01] group min-h-[44px]"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C8488]">
                        Phone Call
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors">
                        {siteConfig.contact.phoneDisplay}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#7A7276] mt-0.5 font-normal">
                        Direct salon reception line
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      siteConfig.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#E8F8EE] hover:bg-[#D3F3DC] border border-[#C6EBD0] transition-all hover:scale-[1.01] group min-h-[44px]"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#137A3E]">
                        WhatsApp Chat
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-[#137A3E]">
                        {siteConfig.contact.whatsappDisplay}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#20834B] mt-0.5 font-normal">
                        Instant chat, bridal queries &amp; photos
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F7] hover:bg-[#FCE4EC]/50 border border-[#EAE3E6] transition-all hover:scale-[1.01] group min-h-[44px]"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C8488]">
                        Email
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors truncate">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location & Timings Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#EAE3E6] shadow-xs space-y-5 sm:space-y-6">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#181517] mb-2.5 leading-[1.2]">
                    Salon Address &amp; Timings
                  </h3>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#554e53]">
                    <MapPin className="w-5 h-5 text-[#C2185B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#181517]">
                        {siteConfig.name}
                      </p>
                      <p className="mt-1 leading-relaxed font-normal">
                        {siteConfig.location.fullAddress}
                      </p>
                      {siteConfig.location.landmark && (
                        <p className="text-xs font-semibold text-[#8C8488] mt-1.5">
                          Landmark: {siteConfig.location.landmark}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#F5EDF2] flex items-start gap-3 text-xs sm:text-sm">
                  <Clock className="w-5 h-5 text-[#C2185B] shrink-0 mt-0.5" />
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8C8488]">
                      Operating Hours
                    </p>
                    <p className="font-medium text-[#181517]">{siteConfig.timings.weekdays}</p>
                    <p className="font-medium text-[#181517]">{siteConfig.timings.weekends}</p>
                    <p className="text-xs text-[#25D366] font-semibold">
                      ● {siteConfig.timings.closedOn}
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-full bg-[#181517] hover:bg-[#332C30] text-white text-xs sm:text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs min-h-[44px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Maps Embed */}
      <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-md h-72 sm:h-96 md:h-[450px] w-full">
            <iframe
              src={siteConfig.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Divisha's Unisex Salon Location Map"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
