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
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28 bg-hero-mesh border-b border-[#EAE3E6] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2E93]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5A880]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Contact & Visit", url: "/contact" }]} className="mb-6 sm:mb-8" />

          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Connect With Us
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.12]">
              Visit Divisha&apos;s Unisex Salon
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#554e53] font-normal font-sans leading-relaxed">
              Book your bespoke salon appointment, ask questions, or drop in for a personal style consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Grid */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F3E8DC] border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              {/* Phone & WhatsApp Card */}
              <div className="luxury-card bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#EAE3E6] shadow-sm space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-[#181517] leading-[1.18]">
                  Instant Touchpoints
                </h3>

                <div className="space-y-3.5 sm:space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F7] hover:bg-[#FCE4EC]/60 border border-[#EAE3E6] transition-all hover:scale-[1.01] group min-h-[48px]"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8488]">
                        Phone Call
                      </p>
                      <p className="text-base font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors">
                        {siteConfig.contact.phoneDisplay}
                      </p>
                      <p className="text-xs text-[#7A7276] mt-0.5 font-normal">
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
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#E8F8EE] hover:bg-[#D3F3DC] border border-[#C6EBD0] transition-all hover:scale-[1.01] group min-h-[48px]"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#137A3E]">
                        WhatsApp Chat
                      </p>
                      <p className="text-base font-semibold text-[#137A3E]">
                        {siteConfig.contact.whatsappDisplay}
                      </p>
                      <p className="text-xs text-[#20834B] mt-0.5 font-normal">
                        Instant chat, bridal queries &amp; photos
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F7] hover:bg-[#FCE4EC]/60 border border-[#EAE3E6] transition-all hover:scale-[1.01] group min-h-[48px]"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8488]">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors truncate">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location & Timings Card */}
              <div className="luxury-card bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#EAE3E6] shadow-sm space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#181517] mb-3 leading-[1.2]">
                    Salon Address &amp; Timings
                  </h3>
                  <div className="flex items-start gap-3.5 text-sm text-[#554e53]">
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

                <div className="pt-4 border-t border-[#F5EDF2] flex items-start gap-3.5 text-sm">
                  <Clock className="w-5 h-5 text-[#C2185B] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8488]">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#181517] hover:bg-[#332C30] text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md min-h-[46px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7">
              <AppointmentForm className="shadow-2xl border-[#EAE3E6]" />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Maps Embed */}
      <section className="py-16 sm:py-24 md:py-32 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-xl h-72 sm:h-96 md:h-[480px] w-full">
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
