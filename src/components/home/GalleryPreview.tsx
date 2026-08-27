"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { LightboxModal, LightboxItem } from "../ui/LightboxModal";

const previewImages: (LightboxItem & { span: string })[] = [
  {
    title: "Signature Bridal Glamour",
    category: "Bridal",
    image: "/images/bridal-makeup.jpg",
    span: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 min-h-[320px] sm:min-h-[400px] md:min-h-[540px] h-full",
  },
  {
    title: "Precision Haircut & Fade",
    category: "Men's Styling",
    image: "/images/hair-men.jpg",
    span: "col-span-1 min-h-[250px] sm:min-h-[260px] md:min-h-[260px] h-64 md:h-auto",
  },
  {
    title: "Chic Rose & Gold Nail Art",
    category: "Nails",
    image: "/images/nail-art.jpg",
    span: "col-span-1 min-h-[250px] sm:min-h-[260px] md:min-h-[260px] h-64 md:h-auto",
  },
  {
    title: "Voluminous Hair Blowout",
    category: "Hair",
    image: "/images/hair-women.jpg",
    span: "col-span-1 min-h-[250px] sm:min-h-[260px] md:min-h-[260px] h-64 md:h-auto",
  },
  {
    title: "Radiant Party Makeup",
    category: "Makeup",
    image: "/images/party-makeup.jpg",
    span: "col-span-1 min-h-[250px] sm:min-h-[260px] md:min-h-[260px] h-64 md:h-auto",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-[#FAF6F3] via-[#F6EFEA] to-[#F3E8DC] border-b border-[#EAE3E6] relative overflow-hidden">
      {/* Soft Ambient Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#E0007C]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C5A880]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <SectionHeading
            align="left"
            badge="Visual Portfolio"
            title="Real Salon Artistry &amp; Proof"
            subtitle="Witness the craftsmanship, precision, and glow created by our stylists and makeup artists."
          />
          <Button
            href="/gallery"
            variant="outline"
            withArrow
            className="shrink-0 self-start sm:self-auto min-h-[48px] bg-white/90 backdrop-blur-md hover:bg-white border-[#EAE3E6] shadow-2xs"
          >
            View Complete Gallery
          </Button>
        </div>

        {/* Masonry-Style Gallery Grid with Interactive Lightbox Triggers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-auto"
        >
          {previewImages.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              onClick={() => setLightboxIndex(idx)}
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl border border-white/80 bg-zinc-900 cursor-pointer transition-all duration-500 hover:-translate-y-1 ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              />

              {/* Glassmorphic Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Sparkle Pill Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#C2185B] flex items-center justify-center shadow-md">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              {/* Tag and Title Bar */}
              <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex items-end justify-between gap-2 pointer-events-none">
                <div>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold tracking-[0.14em] text-[#FF80AB] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 mb-2 shadow-xs">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{item.category}</span>
                  </span>
                  <h4 className="text-white font-serif text-base sm:text-lg font-semibold leading-snug group-hover:text-[#FF80AB] transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md text-[#181517] flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-[#C2185B] hover:text-white shrink-0 shadow-lg min-w-[36px]">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex ?? 0}
        items={previewImages}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}

