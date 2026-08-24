import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePillars } from "@/components/home/ValuePillars";
import { FeaturedServices } from "@/components/home/FeaturedServices";
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

      {/* 3. Featured Services */}
      <FeaturedServices />

      {/* 4. Why Choose Divisha's */}
      <WhyChooseUs />

      {/* 5. Bridal & Occasion Promotional Section */}
      <BridalHighlight />

      {/* 6. Visual Gallery Preview */}
      <GalleryPreview />

      {/* 7. Strong Booking CTA Banner */}
      <QuickBookingCTA />

      {/* 8. Location & Timings Section */}
      <LocationSection />
    </div>
  );
}
