import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePillars } from "@/components/home/ValuePillars";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { ExperienceStats } from "@/components/home/ExperienceStats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BridalHighlight } from "@/components/home/BridalHighlight";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";
import { LocationSection } from "@/components/home/LocationSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { FaqPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Divisha's Unisex Salon Kanpur | Hair, Bridal & Grooming",
  description:
    "Kanpur's premium unisex salon — expert hair styling, HD bridal makeup, nail art, men's grooming & skin care in Kalyanpur. Open 7 days. Call +91 85270 91578.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const homeFaqData = [
  {
    question: "What is Divisha's Unisex Salon?",
    answer:
      "Divisha's Unisex Salon is a premium beauty and grooming salon located in Kalyanpur, Kanpur, Uttar Pradesh. It serves both men and women with professional hair styling, HD and airbrush makeup, nail art, skin facials, men's precision grooming, and complete bridal and groom wedding packages.",
  },
  {
    question: "What are Divisha's Unisex Salon opening hours?",
    answer:
      "Divisha's Unisex Salon is open 7 days a week. Monday to Friday: 10:00 AM – 9:00 PM. Saturday and Sunday: 9:30 AM – 9:30 PM. The salon does not close on public holidays — please confirm via call for specific dates.",
  },
  {
    question: "What services does Divisha's Unisex Salon offer?",
    answer:
      "Divisha's offers hair cutting and styling, professional makeup artistry, gel nail care and custom nail art, rejuvenating skin facials and body grooming, men's precision barbering, and full bridal and groom wedding packages including HD makeup, pre-bridal rituals, and royal groom styling.",
  },
  {
    question: "Where is Divisha's Unisex Salon located in Kanpur?",
    answer:
      "Divisha's Unisex Salon is at M-157, Awas Vikas Scheme-1, Kalyanpur, Kanpur, Uttar Pradesh 208019. The landmark is near Negi Banquet Hall (Back Side). You can reach the salon at +91 85270 91578 or via the Contact page for Google Maps directions.",
  },
  {
    question: "Does Divisha's offer bridal makeup packages in Kanpur?",
    answer:
      "Yes. Divisha's offers comprehensive bridal packages in Kanpur including HD and airbrush bridal makeup, traditional and contemporary bridal hairstyling, dupatta draping, pre-bridal skin and hair rituals, and royal groom grooming. Packages cover all wedding functions — engagement, Sangeet, Mehndi, and the wedding day.",
  },
  {
    question: "Is Divisha's Unisex Salon open on weekends?",
    answer:
      "Yes. Divisha's Unisex Salon is open on Saturday and Sunday from 9:30 AM to 9:30 PM — earlier opening and later closing than weekdays. Walk-ins are welcome; booking in advance is recommended for bridal consultations and occasion styling.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FaqPageJsonLd faqs={homeFaqData} />

      {/* 1. Premium Hero Section */}
      <HeroSection />

      {/* 2. Trust & Value Pillars */}
      <ValuePillars />

      {/* 3. Featured Services Bento Grid */}
      <FeaturedServices />

      {/* 4. Dark Contrast Section: Experience & Stats */}
      <ExperienceStats />

      {/* 5. Why Choose Divisha's */}
      <WhyChooseUs />

      {/* 6. Bridal & Occasion Promotional Section */}
      <BridalHighlight />

      {/* 7. Visual Gallery Preview */}
      <GalleryPreview />

      {/* 8. Strong Booking CTA Banner */}
      <QuickBookingCTA />

      {/* 9. Location & Timings Section */}
      <LocationSection />

      {/* 10. AEO FAQ — optimized for Google AI Overviews, ChatGPT, Perplexity */}
      <HomeFaqSection />
    </div>
  );
}
