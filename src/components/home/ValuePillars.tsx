import React from "react";
import {
  Sparkles,
  Users,
  Award,
  ShieldCheck,
  Smile,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  {
    icon: Award,
    title: "Professional Care",
    desc: "Every cut, color, and makeup session is executed by certified professionals using high-grade cosmetics and salon tools.",
  },
  {
    icon: Sparkles,
    title: "Personalized Styling",
    desc: "We analyze your facial structure, skin type, and lifestyle to tailor a bespoke look that accentuates your authentic features.",
  },
  {
    icon: Users,
    title: "Unisex Services",
    desc: "Equally dedicated styling sections for men and women, ranging from precision fades and beard trims to bridal couture.",
  },
  {
    icon: Smile,
    title: "Occasion-Ready Beauty",
    desc: "From subtle day wear to high-impact wedding and party looks, our artistry stays radiant through celebrations and photo sessions.",
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Hygiene",
    desc: "Strict sterilization of tools, disposable linens, and clean treatment rooms for complete peace of mind.",
  },
  {
    icon: HeartHandshake,
    title: "Welcoming Experience",
    desc: "Relax in an ambient, friendly setting designed to make every visit refreshing, comfortable, and revitalizing.",
  },
];

export function ValuePillars() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#EAE3E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Divisha's Standard"
          title="Why Our Clients Trust Divisha's"
          subtitle="We combine the precision of modern beauty techniques with a warm, inclusive environment designed for everyone."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="luxury-card bg-[#FAF8F7] rounded-3xl p-7 border border-[#EAE3E6] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#181517] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#666164] leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
