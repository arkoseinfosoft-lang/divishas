"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface LightboxItem {
  title: string;
  category: string;
  image: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  items: LightboxItem[];
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  currentIndex,
  items,
  onNavigate,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < items.length - 1)
        onNavigate(currentIndex + 1);
    },
    [isOpen, onClose, currentIndex, items.length, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!currentItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={() => onNavigate(currentIndex - 1)}
              aria-label="Previous image"
              className="absolute left-4 sm:left-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < items.length - 1 && (
            <button
              type="button"
              onClick={() => onNavigate(currentIndex + 1)}
              aria-label="Next image"
              className="absolute right-4 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-4xl w-full max-h-[88vh] rounded-3xl overflow-hidden glass-panel-dark border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-zinc-950">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-4 sm:p-6 bg-[#181517]/95 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#FF80AB] bg-[#E0007C]/20 px-3 py-1 rounded-full border border-[#FF80AB]/30 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{currentItem.category}</span>
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
                  {currentItem.title}
                </h3>
              </div>

              <div className="text-xs text-[#A8A1A6] font-sans">
                {currentIndex + 1} of {items.length}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
