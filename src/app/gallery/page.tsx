"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { galleryData, galleryCategories, GalleryItem } from "@/config/galleryData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pb-24 bg-hero-mesh border-b border-[#EAE3E6] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2E93]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5A880]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Gallery", url: "/gallery" }]} className="mb-4 sm:mb-6" />

          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Visual Proof &amp; Transformations
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.2]">
              Our Artistry in Every Detail
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#554e53] font-normal font-sans leading-relaxed">
              Browse our portfolio of bespoke hair transformations, couture bridal makeup, men&apos;s precision grooming, and nail styling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {galleryCategories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[38px] ${
                  activeCategory === category
                    ? "bg-[#C2185B] text-white shadow-md shadow-[#C2185B]/20 scale-105"
                    : "bg-white text-[#4A4347] border border-[#E8E0E4] hover:border-[#C2185B] hover:text-[#C2185B]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="luxury-card bg-[#FAF8F7] rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#C2185B] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[#181517] group-hover:text-[#C2185B] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554e53] font-normal line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg lg:max-w-2xl w-full shadow-2xl border border-[#EAE3E6] relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-[#181517] hover:bg-[#C2185B] hover:text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 md:h-[380px] w-full bg-black">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 650px"
              />
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-4">
                <Badge variant="primary">{selectedImage.category}</Badge>
                <span className="text-xs text-[#8C8488]">Divisha&apos;s Unisex Salon</span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#181517] leading-[1.2]">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#554e53] mt-1 font-normal font-sans leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#F5EDF2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <Button
                  href="/contact#appointment"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto min-h-[44px]"
                  onClick={() => setSelectedImage(null)}
                >
                  Book This Look
                </Button>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello Divisha's Salon! I'm interested in booking the look: "${selectedImage.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#137A3E] hover:underline min-h-[36px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking CTA */}
      <QuickBookingCTA />
    </div>
  );
}
