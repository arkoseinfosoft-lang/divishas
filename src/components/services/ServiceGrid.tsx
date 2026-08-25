"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Calendar, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/config/servicesData";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface ServiceGridProps {
  items: ServiceItem[];
  categoryTitle: string;
}

export function ServiceGrid({ items, categoryTitle }: ServiceGridProps) {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white bg-diagonal-pattern border-b border-[#EAE3E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-14 md:space-y-18">
          {items.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-card bg-[#FAF8F7] rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#EAE3E6] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-4 sm:space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant={
                          item.forGender === "Unisex"
                            ? "primary"
                            : item.forGender === "Men"
                            ? "dark"
                            : "gold"
                        }
                      >
                        {item.forGender === "Unisex"
                          ? "Unisex (Men & Women)"
                          : item.forGender === "Men"
                          ? "For Men"
                          : "For Women"}
                      </Badge>
                      <span className="text-xs text-[#787175] font-medium">
                        • {categoryTitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#181517] leading-[1.2]">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-[#554e53] leading-relaxed font-normal font-sans">
                      {item.fullDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 sm:space-y-2.5 pt-1">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#383236] font-normal">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <Button
                        href="/contact#appointment"
                        variant="primary"
                        size="md"
                        icon={<Calendar className="w-4 h-4 mr-1.5" />}
                        className="w-full sm:w-auto min-h-[44px]"
                      >
                        Book {item.name}
                      </Button>
                      <Link
                        href="/contact"
                        className="text-xs sm:text-sm font-semibold text-[#C2185B] hover:text-[#E0007C] inline-flex items-center justify-center sm:justify-start gap-1 transition-colors min-h-[36px]"
                      >
                        <span>Enquire Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  {item.image && (
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative h-56 sm:h-72 lg:h-88 rounded-3xl overflow-hidden shadow-lg border border-[#EAE3E6]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
