import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  withArrow?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
  withArrow = false,
  icon,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 shadow-sm",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#E0007C] to-[#C2185B] text-white hover:from-[#FF2E93] hover:to-[#D81B60] shadow-md shadow-[#E0007C]/20 hover:shadow-lg hover:shadow-[#E0007C]/30",
    secondary:
      "bg-[#181517] text-white hover:bg-[#2F2B2D] shadow-sm",
    outline:
      "bg-transparent text-[#181517] border border-[#181517]/20 hover:border-[#E0007C] hover:text-[#E0007C] hover:bg-[#FCE4EC]/40",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-md shadow-[#25D366]/20",
    ghost:
      "bg-transparent text-[#181517] hover:text-[#E0007C] hover:bg-[#FCE4EC]/50",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {withArrow && <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClasses}`}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${combinedClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
