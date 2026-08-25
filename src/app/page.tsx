import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePillars } from "@/components/home/ValuePillars";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { ExperienceStats } from "@/components/home/ExperienceStats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BridalHighlight } from "@/components/home/BridalHighlight";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { QuickBookingCTA } from "@/components/home/QuickBookingCTA";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
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
    </div>
  );
}
