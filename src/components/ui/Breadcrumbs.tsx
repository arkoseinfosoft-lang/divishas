import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbsJsonLd } from "../seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <BreadcrumbsJsonLd items={allItems} />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs sm:text-sm text-[#787175] overflow-x-auto py-1.5 scrollbar-none ${className}`}
      >
        <ol className="flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-1 text-[#BBB4B8] shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-[#C2185B] truncate max-w-[200px]"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-[#181517] transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
