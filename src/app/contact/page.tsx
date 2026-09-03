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
import { BreadcrumbsJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Divisha's Salon, Kanpur | Book an Appointment",
  description:
    "Contact Divisha's Unisex Salon in Kalyanpur, Kanpur — book online, call +91 85270 91578, WhatsApp, or get Google Maps directions. Open Mon–Fri 10AM–9PM, Sat–Sun 9:30AM–9:30PM.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Divisha's Salon, Kanpur | Book an Appointment",
    description:
      "Book at Divisha's Unisex Salon, Kalyanpur, Kanpur. Call, WhatsApp, or fill the online form. Open 7 days a week.",
    url: `${siteConfig.url}/contact`,
  },
};

const contactFaqs = [
  {
    question: "How do I book an appointment at Divisha's Unisex Salon?",
    answer:
      "You can book an appointment at Divisha's by calling +91 85270 91578, sending a WhatsApp message to the same number, or by submitting the online booking form on this Contact page. Walk-in appointments are welcome subject to stylist availability.",
  },
  {
    question: "What are the opening hours of Divisha's Unisex Salon in Kanpur?",
    answer:
      "Divisha's Unisex Salon is open 7 days a week. Monday to Friday: 10:00 AM – 9:00 PM. Saturday and Sunday: 9:30 AM – 9:30 PM. The salon is open on most public holidays — call ahead to confirm.",
  },
  {
    question: "Where exactly is Divisha's Unisex Salon located in Kanpur?",
    answer:
      "Divisha's Unisex Salon is located at M-157, Awas Vikas Scheme-1, Kalyanpur, Kanpur, Uttar Pradesh 208019. The nearest landmark is Negi Banquet Hall (Back Side). Use the embedded Google Maps on this page for turn-by-turn directions.",
  },
  {
    question: "Can I walk in to Divisha's Unisex Salon without an appointment?",
    answer:
      "Walk-ins are welcome at Divisha's Unisex Salon subject to stylist availability. For guaranteed slots — especially for bridal consultations, special occasion styling, or multiple services — prior booking via call or WhatsApp is recommended.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbsJsonLd items={[{ name: "Contact & Visit", url: "/contact" }]} />
      <FaqPageJsonLd faqs={contactFaqs} />

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
              Visit Divisha&apos;s Unisex Salon in Kanpur
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#554e53] font-normal font-sans leading-relaxed">
              Book your bespoke salon appointment, ask questions, or drop in to our salon in Kalyanpur, Kanpur for a personal style consultation.
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
                <h2 className="font-serif text-2xl font-semibold text-[#181517] leading-[1.18]">
                  Instant Touchpoints
                </h2>

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
                  <h2 className="font-serif text-xl font-semibold text-[#181517] mb-3 leading-[1.2]">
                    Salon Address &amp; Timings
                  </h2>
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

      {/* AEO FAQ Section — above the map for visibility */}
      <section className="py-16 sm:py-20 bg-[#FAF8F7] border-b border-[#EAE3E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC]/80 border border-[#F8BBD0] text-[#C2185B] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
              Contact FAQ
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517]">
              Common Questions About Visiting Us
            </h2>
          </div>
          <div className="space-y-4">
            {contactFaqs.map((faq) => (
              <div key={faq.question} className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE3E6] shadow-2xs">
                <h3 className="text-sm sm:text-base font-semibold text-[#181517] mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Google Maps Embed */}
      <section className="py-16 sm:py-24 md:py-32 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517]">
              Find Us in Kalyanpur, Kanpur
            </h2>
            <p className="text-sm text-[#554e53] mt-2">
              M-157, Awas Vikas Scheme-1, Kalyanpur, Kanpur 208019 · Near Negi Banquet Hall
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-xl h-72 sm:h-96 md:h-[480px] w-full">
            <iframe
              src={siteConfig.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Divisha's Unisex Salon Location — Kalyanpur, Kanpur, Uttar Pradesh"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
