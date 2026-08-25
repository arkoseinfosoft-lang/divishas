"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  categoryTitle: string;
}

export function ServiceFAQ({ faqs, categoryTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-editorial-linen border-t border-[#EAE3E6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title={`Common Questions about ${categoryTitle}`}
          subtitle="Everything you need to know before visiting Divisha's Unisex Salon."
        />

        <div className="mt-10 sm:mt-14 space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-3xl border border-[#EAE3E6] overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#C2185B]/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-7 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-[#FAF8F7] transition-colors min-h-[50px] cursor-pointer"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#181517] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#C2185B] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-7 sm:pb-8 pt-1 text-sm sm:text-base text-[#554e53] leading-relaxed border-t border-[#F5EDF2] animate-in fade-in duration-200 font-normal font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
