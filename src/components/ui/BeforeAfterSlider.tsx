"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  beforeLabel = "Natural Look",
  afterLabel = "HD Bridal Glamour",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 select-none aspect-[4/5] sm:aspect-[4/3] bg-zinc-900 group ${className}`}
    >
      {/* 1. After Image (Background Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 600px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Before Image (Clipped Layer via pure CSS clip-path) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover brightness-95"
          sizes="(max-width: 640px) 100vw, 600px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 3. Floating Badges */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-md">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FF80AB] bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#FF80AB]/30 shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>{afterLabel}</span>
        </span>
      </div>

      {/* 4. Divider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-[#FF80AB] to-white z-30 pointer-events-none shadow-[0_0_12px_rgba(224,0,124,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Knob */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#E0007C] to-[#C2185B] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(224,0,124,0.6)] border-2 border-white pointer-events-none group-hover:scale-110 transition-transform">
          <ChevronsLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </div>

      {/* 5. Invisible Full-Container Range Input for Smooth Drag / Touch / Keyboard Controls */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full m-0 p-0"
        aria-label="Before and after image comparison slider"
      />

      {/* Bottom Hint */}
      <div className="absolute bottom-3 inset-x-0 text-center z-20 pointer-events-none">
        <span className="text-[10.5px] sm:text-xs text-white/80 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-xs">
          ◀ Drag slider to compare transformation ▶
        </span>
      </div>
    </div>
  );
}
