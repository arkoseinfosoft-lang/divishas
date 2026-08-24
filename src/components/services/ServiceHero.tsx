import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs, BreadcrumbItem } from "../ui/Breadcrumbs";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  introText: string;
  heroImage: string;
  breadcrumbs: BreadcrumbItem[];
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  introText,
  heroImage,
  breadcrumbs,
}: ServiceHeroProps) {
  return (
    <section className="pt-8 pb-16 sm:pb-24 bg-luxury-radial border-b border-[#EAE3E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
              {badge}
            </Badge>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181517] leading-[1.2]">
              {title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#C2185B]">
              {subtitle}
            </p>

            <p className="text-base text-[#554e53] leading-relaxed max-w-2xl font-normal font-sans">
              {introText}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/contact#appointment"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4 mr-2" />}
                className="w-full sm:w-auto"
              >
                Book An Appointment
              </Button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  `Hello Divisha's Salon! I'd like to enquire about ${title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3E6]">
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
