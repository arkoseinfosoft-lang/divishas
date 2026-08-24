import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "hero";
  showTagline?: boolean;
}

export function Logo({
  className = "",
  variant = "header",
  showTagline = true,
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01] ${className}`}
      aria-label={`${siteConfig.name} - Home`}
    >
      {/* Butterfly D Logo Graphic */}
      <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm border border-[#F3E5EC] p-1 shrink-0 overflow-hidden">
        <Image
          src="/images/logo.png"
          alt="Divisha's Logo"
          width={56}
          height={56}
          className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-wide leading-none font-bold uppercase transition-colors ${
            isFooter
              ? "text-2xl text-white group-hover:text-[#FF80AB]"
              : "text-2xl text-[#181517] group-hover:text-[#C2185B]"
          }`}
        >
          DIVISHA&apos;S
        </span>
        {showTagline && (
          <span
            className={`text-[10px] tracking-[0.2em] uppercase font-semibold mt-1 ${
              isFooter ? "text-[#E8D5D8]" : "text-[#C2185B]"
            }`}
          >
            UNISEX SALON
          </span>
        )}
      </div>
    </Link>
  );
}
