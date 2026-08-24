"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#EAE3E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Visit Our Salon"
          title="Where to Find Us"
          subtitle="Conveniently located with dedicated unisex styling facilities and ample parking nearby."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Contact & Timing Details Card */}
          <div className="lg:col-span-5 bg-[#FAF8F7] rounded-3xl p-8 sm:p-10 border border-[#EAE3E6] shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C2185B]">
                  Physical Address
                </span>
                <div className="mt-3 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C2185B] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#181517]">
                      {siteConfig.name}
                    </h3>
                    <p className="text-sm text-[#554e53] mt-1.5 leading-relaxed font-normal">
                      {siteConfig.location.addressLine1}
                      <br />
                      {siteConfig.location.addressLine2}
                      <br />
                      {siteConfig.location.city}, {siteConfig.location.state} – {siteConfig.location.postalCode}
                    </p>
                    {siteConfig.location.landmark && (
                      <p className="text-xs font-semibold text-[#787175] mt-2">
                        Landmark: {siteConfig.location.landmark}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-5 border-t border-[#EAE3E6]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C2185B]">
                  Operating Hours
                </span>
                <div className="mt-3 flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C2185B] shrink-0 mt-1" />
                  <div className="text-sm text-[#554e53] space-y-1 font-normal">
                    <p className="font-semibold text-[#181517]">{siteConfig.timings.closedOn}</p>
                    <p>{siteConfig.timings.weekdays}</p>
                    <p>{siteConfig.timings.weekends}</p>
                  </div>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="pt-5 border-t border-[#EAE3E6] space-y-3.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C2185B]">
                  Instant Touchpoints
                </span>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-[#C2185B]" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-semibold text-[#181517] hover:text-[#C2185B] transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-[#C2185B]" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#554e53] hover:text-[#181517] transition-colors font-normal"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#181517] hover:bg-[#332C30] text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <Button href="/contact#appointment" variant="primary" size="md">
                Book Visit
              </Button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#FAF8F7] rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-sm relative min-h-[400px] flex flex-col">
            <iframe
              src={siteConfig.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.name} Location Map`}
              className="w-full flex-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
