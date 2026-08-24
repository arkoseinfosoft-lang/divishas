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
      <section className="pt-6 pb-16 bg-luxury-radial border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Gallery", url: "/gallery" }]} className="mb-6" />

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Visual Proof &amp; Transformations
            </Badge>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181517] leading-tight">
              Our Artistry in Every Detail
            </h1>

            <p className="text-base sm:text-lg text-[#666164] font-sans">
              Browse our portfolio of bespoke hair transformations, couture bridal makeup, men&apos;s precision grooming, and nail styling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
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
      <section className="py-16 sm:py-24 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="luxury-card bg-[#FAF8F7] rounded-3xl overflow-hidden border border-[#EAE3E6] group cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#C2185B] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-[#181517] group-hover:text-[#C2185B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666164] line-clamp-2">
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-[#EAE3E6] relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#181517] hover:bg-[#C2185B] hover:text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[420px] w-full bg-black">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <Badge variant="primary">{selectedImage.category}</Badge>
                <span className="text-xs text-[#8C8488]">Divisha&apos;s Unisex Salon</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#181517]">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-[#666164] mt-1">
                  {selectedImage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EDF2] flex flex-wrap items-center justify-between gap-4">
                <Button
                  href="/contact#appointment"
                  variant="primary"
                  size="md"
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#137A3E] hover:underline"
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
