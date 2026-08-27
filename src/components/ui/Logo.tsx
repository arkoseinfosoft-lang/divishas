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
}: LogoProps) {
  const isFooter = variant === "footer";
  const isHero = variant === "hero";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label={`${siteConfig.name} - Home`}
    >
      <div
        className={`relative transition-transform duration-300 ${
          isHero
            ? "h-16 w-52 sm:h-20 sm:w-64"
            : isFooter
            ? "h-12 w-40 sm:h-14 sm:w-48"
            : "h-11 w-36 sm:h-12 sm:w-44"
        }`}
      >
        <Image
          src={isFooter ? "/images/logo-full-light.png" : "/images/logo-full.png"}
          alt="Divisha's Unisex Saloon"
          fill
          sizes="(max-width: 640px) 180px, 220px"
          className="object-contain object-left group-hover:brightness-105 transition-all duration-300"
          priority
        />
      </div>
    </Link>
  );
}
