import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "gold" | "dark" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
  icon,
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors";

  const variants = {
    primary:
      "bg-[#FCE4EC] text-[#C2185B] border border-[#F8BBD0]/60",
    gold: "bg-[#FBF7F0] text-[#9A7B4F] border border-[#EADBBE]/70",
    dark: "bg-[#181517] text-white",
    outline:
      "bg-transparent text-[#181517] border border-[#EAE3E6] hover:border-[#C2185B]",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
}
