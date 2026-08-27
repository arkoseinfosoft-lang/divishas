"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Pooja Sharma",
    role: "Bride • Wedding & Reception",
    service: "HD Bridal & Saree Draping",
    rating: 5,
    quote:
      "The bridal makeup for my wedding and reception was absolute perfection! It stayed radiant and completely tear-proof for over 14 hours through all the rituals. Master artists who truly listen.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Regular Grooming Client",
    service: "Precision Fade & Beard Sculpting",
    rating: 5,
    quote:
      "The premier unisex salon experience in Kanpur. Impeccable hygiene with UV autoclave sanitized tools, sterile capes, and sharp styling. Highly recommended for gentlemen who value precision.",
  },
  {
    id: 3,
    name: "Ananya Dixit",
    role: "Occasion Styling Client",
    service: "Balayage Blend & Nail Art",
    rating: 5,
    quote:
      "Got my gel nail extensions and caramel balayage done here. The subtle dimension in the hair color and the luxury ambience is world-class! The team is warm and exceptionally talented.",
  },
  {
    id: 4,
    name: "Megha & Tanmay Gupta",
    role: "Couple Members",
    service: "Unisex Hair & Rejuvenating Spas",
    rating: 5,
    quote:
      "My husband and I both visit regularly. The thoughtfully zoned spaces for men and women make it so relaxing, private, and comfortable. A true 5-star standard in beauty care.",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = testimonials[currentIndex];

  return (
    <div
      className="relative rounded-3xl glass-panel p-6 sm:p-8 md:p-10 border border-white/80 shadow-[0_12px_40px_rgba(224,0,124,0.06)] overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Watermark Quote Icon */}
      <Quote className="absolute top-4 right-6 w-20 h-20 text-[#E0007C]/6 pointer-events-none -scale-x-100" />

      {/* Header Pill & Star Rating */}
      <div className="flex items-center justify-between gap-4 mb-4 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE4EC] text-[#C2185B] text-xs font-semibold uppercase tracking-wider border border-[#F8BBD0]/60 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Client Voice</span>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Active Testimonial Quote with Crossfade Animation */}
      <div className="min-h-[140px] sm:min-h-[120px] flex items-center relative z-10 py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <p className="font-serif text-base sm:text-lg md:text-xl text-[#181517] leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Client Meta Bar & Navigation Arrows */}
      <div className="pt-4 border-t border-[#EAE3E6]/80 flex items-center justify-between gap-4 relative z-10 mt-2">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-sans font-bold text-sm sm:text-base text-[#181517]">
              {current.name}
            </h4>
            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
          </div>
          <p className="text-xs text-[#554e53]">
            {current.role} • <span className="text-[#C2185B] font-medium">{current.service}</span>
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Indicator Dots */}
          <div className="hidden sm:flex items-center gap-1.5 mr-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-6 bg-[#E0007C]" : "w-2 bg-[#EAE3E6] hover:bg-[#C2185B]/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full bg-white text-[#181517] hover:bg-[#FCE4EC] hover:text-[#C2185B] border border-[#EAE3E6] flex items-center justify-center transition-colors shadow-2xs active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full bg-white text-[#181517] hover:bg-[#FCE4EC] hover:text-[#C2185B] border border-[#EAE3E6] flex items-center justify-center transition-colors shadow-2xs active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
