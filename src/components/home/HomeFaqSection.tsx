"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * AEO-optimized FAQ section for the homepage.
 * Answers are direct, factual, and 40–60 words — optimized for
 * Google AI Overviews, ChatGPT, Perplexity, and Gemini citations.
 * Pairs with FaqPageJsonLd in page.tsx for structured data.
 */

const homeFaqs = [
  {
    question: "What is Divisha's Unisex Salon?",
    answer: `Divisha's Unisex Salon is a premium beauty and grooming salon located in Kalyanpur, Kanpur, Uttar Pradesh. It serves both men and women with professional hair styling, HD and airbrush makeup, nail art, skin facials, men's precision grooming, and complete bridal and groom wedding packages.`,
  },
  {
    question: "What are Divisha's Unisex Salon opening hours?",
    answer: `Divisha's Unisex Salon is open 7 days a week. Monday to Friday: 10:00 AM – 9:00 PM. Saturday and Sunday: 9:30 AM – 9:30 PM. The salon does not close on public holidays — please confirm via call for specific dates.`,
  },
  {
    question: "What services does Divisha's Unisex Salon offer?",
    answer: `Divisha's offers hair cutting and styling, professional makeup artistry, gel nail care and custom nail art, rejuvenating skin facials and body grooming, men's precision barbering, and full bridal and groom wedding packages including HD makeup, pre-bridal rituals, and royal groom styling.`,
  },
  {
    question: "Where is Divisha's Unisex Salon located in Kanpur?",
    answer: `Divisha's Unisex Salon is at M-157, Awas Vikas Scheme-1, Kalyanpur, Kanpur, Uttar Pradesh 208019. The landmark is near Negi Banquet Hall (Back Side). You can reach the salon at ${siteConfig.contact.phoneDisplay} or via the Contact page for Google Maps directions.`,
  },
  {
    question: "Does Divisha's offer bridal makeup packages in Kanpur?",
    answer: `Yes. Divisha's offers comprehensive bridal packages in Kanpur including HD and airbrush bridal makeup, traditional and contemporary bridal hairstyling, dupatta draping, pre-bridal skin and hair rituals, and royal groom grooming. Packages cover all wedding functions — engagement, Sangeet, Mehndi, and the wedding day.`,
  },
  {
    question: "Is Divisha's Unisex Salon open on weekends?",
    answer: `Yes. Divisha's Unisex Salon is open on Saturday and Sunday from 9:30 AM to 9:30 PM — earlier opening and later closing than weekdays. Walk-ins are welcome; booking in advance is recommended for bridal consultations and occasion styling.`,
  },
];

export function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 md:py-32 bg-white border-t border-[#EAE3E6]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC]/80 border border-[#F8BBD0] text-[#C2185B] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
            Quick Answers
          </div>
          <h2
            id="faq-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181517] leading-[1.15]"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#554e53] leading-relaxed font-normal max-w-xl mx-auto">
            Everything you need to know about Divisha&apos;s Unisex Salon — hours, location, services, and booking.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl sm:rounded-3xl border border-[#EAE3E6] bg-[#FAF8F7] overflow-hidden shadow-2xs hover:border-[#F8BBD0] transition-colors duration-200"
              >
                <button
                  type="button"
                  id={`faq-q-${index}`}
                  aria-controls={`faq-a-${index}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#181517] leading-snug group-hover:text-[#C2185B] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#C2185B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-a-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 sm:px-7 pb-5 sm:pb-6 text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal border-t border-[#EAE3E6] pt-3 sm:pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#554e53] font-normal">
            Have more questions?{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-[#C2185B] hover:underline"
            >
              Call {siteConfig.contact.phoneDisplay}
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="font-semibold text-[#C2185B] hover:underline"
            >
              visit our Contact page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
