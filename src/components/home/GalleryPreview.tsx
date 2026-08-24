"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const previewImages = [
  {
    title: "Signature Bridal Glamour",
    category: "Bridal",
    image: "/images/bridal-makeup.jpg",
    span: "col-span-1 md:col-span-2 md:row-span-2 h-72 md:h-full",
  },
  {
    title: "Precision Haircut & Fade",
    category: "Men's Styling",
    image: "/images/hair-men.jpg",
    span: "col-span-1 h-64 md:h-64",
  },
  {
    title: "Chic Rose & Gold Nail Art",
    category: "Nails",
    image: "/images/nail-art.jpg",
    span: "col-span-1 h-64 md:h-64",
  },
  {
    title: "Voluminous Hair Blowout",
    category: "Hair",
    image: "/images/hair-women.jpg",
    span: "col-span-1 h-64 md:h-64",
  },
  {
    title: "Radiant Party Makeup",
    category: "Makeup",
    image: "/images/party-makeup.jpg",
    span: "col-span-1 h-64 md:h-64",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F7] border-b border-[#EAE3E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            align="left"
            badge="Visual Portfolio"
            title="Real Salon Artistry &amp; Proof"
            subtitle="Witness the craftsmanship, precision, and glow created by our stylists and makeup artists."
          />
          <Button href="/gallery" variant="outline" withArrow className="shrink-0 self-start md:self-auto">
            View Complete Gallery
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-auto">
          {previewImages.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl overflow-hidden group shadow-md border border-[#EAE3E6] bg-zinc-100 ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag and Title */}
              <div className="absolute bottom-5 inset-x-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-[0.14em] text-[#FF80AB] bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 inline-block mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif text-lg font-semibold leading-tight">
                    {item.title}
                  </h4>
                </div>

                <Link
                  href="/gallery"
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#181517] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C2185B] hover:text-white shrink-0 shadow-md"
                  aria-label={`View ${item.title}`}
                >
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
