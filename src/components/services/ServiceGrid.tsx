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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          {items.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-card bg-[#FAF8F7] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#EAE3E6] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
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

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517] leading-[1.2]">
                      {item.name}
                    </h3>

                    <p className="text-base text-[#554e53] leading-relaxed font-normal font-sans">
                      {item.fullDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-2">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm text-[#383236] font-normal">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button
                        href="/contact#appointment"
                        variant="primary"
                        size="md"
                        icon={<Calendar className="w-4 h-4 mr-1.5" />}
                      >
                        Book {item.name}
                      </Button>
                      <Link
                        href="/contact"
                        className="text-sm font-semibold text-[#C2185B] hover:text-[#E0007C] inline-flex items-center gap-1 transition-colors"
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
                      <div className="relative h-72 sm:h-88 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3E6]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 500px"
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
