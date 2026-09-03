import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Crown,
  Calendar,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { bridalPageData } from "@/config/servicesData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { BreadcrumbsJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: bridalPageData.metaTitle,
  description: bridalPageData.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/bridal`,
  },
  openGraph: {
    title: bridalPageData.metaTitle,
    description: bridalPageData.metaDescription,
    url: `${siteConfig.url}/bridal`,
    images: [{ url: bridalPageData.heroImage, width: 1200, height: 630, alt: "Bridal makeup and styling at Divisha's Unisex Salon, Kanpur" }],
  },
};

const bridalFaqs = [
  {
    question: "How much does bridal makeup cost at Divisha's Salon in Kanpur?",
    answer:
      "Bridal package pricing at Divisha's varies by package type — HD makeup, airbrush finish, pre-bridal rituals, or complete wedding day packages. Prices are shared during a personalised consultation. Contact the salon at +91 85270 91578 or via WhatsApp to receive a quote based on your wedding date and requirements.",
  },
  {
    question: "Does Divisha's offer pre-bridal packages in Kanpur?",
    answer:
      "Yes. Divisha's offers pre-bridal glow rituals spanning 2 to 4 weeks before the wedding. These include organic deep-hydration skin facials, restorative keratin hair spas, luxury bridal manicure and pedicure, and full-body polishing — all designed to achieve maximum natural radiance by the wedding day.",
  },
  {
    question: "Can I book a bridal trial session at Divisha's?",
    answer:
      "Yes. Divisha's recommends a bridal trial session before the wedding day to finalize the exact makeup look, hairstyle, and colour palette. Contact the salon at +91 85270 91578 or via WhatsApp to schedule your trial appointment.",
  },
  {
    question: "Does Divisha's offer groom styling for weddings?",
    answer:
      "Yes. Divisha's offers a Royal Groom Styling package including a precision wedding haircut, razor beard sculpting, exfoliating skin brightener and detan, and discreet camera-ready grooming for 4K wedding photography — all in a private suite.",
  },
  {
    question: "What is airbrush bridal makeup and does Divisha's offer it?",
    answer:
      "Airbrush bridal makeup uses a fine spray gun to apply foundation in ultra-thin, buildable layers, producing a flawless and long-lasting finish that photographs beautifully and is sweat-resistant. Divisha's offers both HD and airbrush bridal makeup options. The artist recommends based on your skin type during the consultation.",
  },
];

const bridalPackages = [
  {
    title: "Signature Bridal Makeup & Styling",
    forWho: "For The Bride",
    desc: "Couture wedding day transformation combining HD / Airbrush makeup, luxury lash accents, intricate bridal hair with fresh floral setting, and royal saree/dupatta draping.",
    features: [
      "Custom skin prep & tone matching",
      "High-Definition or Airbrush finish",
      "Traditional or modern bridal hairstyle",
      "Dupatta & jewelry setting coordination",
      "Tear-proof, weather-resistant longevity",
    ],
    image: "/images/bridal-makeup.jpg",
    imageAlt: "HD and airbrush bridal makeup by Divisha's Salon, Kanpur",
  },
  {
    title: "Royal Groom Styling & Grooming",
    forWho: "For The Groom",
    desc: "Executive wedding day grooming including bespoke haircut, razor beard sculpting, detoxifying facial clean-up, styling setting, and discreet camera-ready blemish care.",
    features: [
      "Precision wedding haircut & beard fade",
      "Exfoliating skin brightener & detan",
      "Discreet studio grooming for 4K photography",
      "Hair setting with long-lasting lightweight hold",
    ],
    image: "/images/beard-grooming.jpg",
    imageAlt: "Royal groom styling and beard grooming at Divisha's Salon, Kanpur",
  },
  {
    title: "Pre-Wedding & Function Glam",
    forWho: "Sangeet, Mehendi, Haldi & Cocktail",
    desc: "Vibrant, thematic looks designed for high-energy pre-wedding functions, cocktail galas, and engagement ceremonies.",
    features: [
      "Theme-matched eyeshadow & lip palettes",
      "Messy textured braids & soft wave curls",
      "Sweat-resistant, dance-proof formulations",
      "Quick touch-up advice",
    ],
    image: "/images/party-makeup.jpg",
    imageAlt: "Pre-wedding function and event makeup at Divisha's Unisex Salon",
  },
  {
    title: "Pre-Bridal Glow Rituals",
    forWho: "Pre-Wedding Preparation",
    desc: "Comprehensive skin and hair wellness sessions spread across 2-4 weeks prior to the wedding date to ensure maximum natural radiance.",
    features: [
      "Organic deep-hydration skin facials",
      "Restorative keratin hair spas",
      "Luxury bridal manicure & pedicure",
      "Full-body polishing & soothing hydration",
    ],
    image: "/images/beauty-spa.jpg",
    imageAlt: "Pre-bridal skin and hair rituals at Divisha's Salon, Kanpur",
  },
];

export default function BridalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbsJsonLd items={[{ name: "Bridal & Occasion", url: "/bridal" }]} />
      <FaqPageJsonLd faqs={bridalFaqs} />

      {/* Bridal Hero */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28 bg-[#141213] text-white relative overflow-hidden border-b border-[#2A2327]">
        <div className="absolute top-0 right-0 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-[#E0007C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-[#C2185B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ name: "Bridal & Occasion", url: "/bridal" }]}
            className="mb-6 sm:mb-8 text-[#A8A1A6]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
              <Badge
                variant="primary"
                className="bg-[#FF80AB]/20 text-[#FF80AB] border-[#FF80AB]/30"
                icon={<Crown className="w-3.5 h-3.5" />}
              >
                {bridalPageData.badge}
              </Badge>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
                {bridalPageData.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#FF80AB] font-medium">
                {bridalPageData.subtitle}
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#D0C7CC] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal font-sans">
                {bridalPageData.introText}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  href="#bridal-booking"
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                  className="w-full sm:w-auto min-h-[48px] shadow-lg shadow-[#E0007C]/25"
                >
                  Plan Your Bridal Look
                </Button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Divisha's Salon! I would like to enquire about Bridal / Wedding packages."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="relative h-72 sm:h-96 lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={bridalPageData.heroImage}
                  alt="Divisha's signature bridal makeup and hairstyling — wedding beauty in Kanpur"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 p-3.5 sm:p-4 rounded-2xl glass-pill-dark text-center">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FF80AB] font-semibold">
                    Unisex Wedding Excellence
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Dedicated Suites for Bride &amp; Groom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Offerings Grid */}
      <section className="py-16 sm:py-24 md:py-32 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Wedding Offerings"
            title="Complete Bridal &amp; Groom Services"
            subtitle="From engagement trials to the final wedding pheras, we ensure every detail is impeccably executed."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {bridalPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="luxury-card bg-[#FAF8F7] rounded-3xl overflow-hidden border border-[#EAE3E6] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-60 sm:h-72 lg:h-80 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" className="bg-white/95 text-[#C2185B] backdrop-blur-md">
                      {pkg.forWho}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 space-y-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#181517] leading-[1.18] group-hover:text-[#C2185B] transition-colors">
                      {pkg.title}
                    </h2>
                    <p className="text-sm text-[#554e53] mt-2.5 leading-relaxed font-normal font-sans">
                      {pkg.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#F0EAE8] mt-4">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C2185B] shrink-0" />
                          <span className="text-xs sm:text-sm text-[#383236] font-normal">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      href="#bridal-booking"
                      variant="primary"
                      size="md"
                      className="w-full justify-center min-h-[46px] shadow-md shadow-[#E0007C]/15"
                    >
                      Enquire for This Look
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Divisha's for Bridal */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F3E8DC] border-b border-[#EAE3E6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
          <SectionHeading
            badge="The Bridal Advantage"
            title="Why Couples Choose Divisha's"
            subtitle="We understand how important your big day is. Our artists provide personalized attention, calm luxury, and flawless execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left pt-2">
            {bridalPageData.whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="p-5 sm:p-7 rounded-3xl bg-white border border-[#EAE3E6] flex items-start gap-3.5 shadow-2xs hover:border-[#C2185B]/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-normal text-[#2A2428] leading-relaxed">
                  {reason}
                </span>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              View Bridal Gallery <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[#EAE3E6]">|</span>
            <a href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2185B] hover:underline">
              All Salon Services <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* AEO Bridal FAQ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EAE3E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC]/80 border border-[#F8BBD0] text-[#C2185B] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
              Bridal FAQ
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181517]">
              Bridal &amp; Wedding Questions Answered
            </h2>
            <p className="text-sm text-[#554e53] font-normal max-w-xl mx-auto">
              Everything you need to know about bridal packages at Divisha&apos;s Unisex Salon, Kanpur.
            </p>
          </div>
          <div className="space-y-4">
            {bridalFaqs.map((faq) => (
              <div key={faq.question} className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF8F7] border border-[#EAE3E6] shadow-2xs">
                <h3 className="text-sm sm:text-base font-semibold text-[#181517] mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-[#554e53] leading-relaxed font-normal">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Booking Form Anchor */}
      <section id="bridal-booking" className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm
            initialService="Bridal & Occasion"
            className="shadow-2xl border-[#E8D5D8]"
          />
        </div>
      </section>
    </div>
  );
}
