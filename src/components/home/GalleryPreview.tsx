import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <section className="py-16 sm:py-24 bg-[#FAF8F7] border-b border-[#EAE3E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          {previewImages.map((item) => (
            <div
              key={item.title}
              className={`relative rounded-3xl overflow-hidden group shadow-md border border-[#EAE3E6] bg-zinc-100 ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag and Title */}
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF80AB] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 inline-block mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif text-lg font-bold">
                    {item.title}
                  </h4>
                </div>

                <Link
                  href="/gallery"
                  className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#181517] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C2185B] hover:text-white shrink-0"
                  aria-label={`View ${item.title}`}
                >
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
