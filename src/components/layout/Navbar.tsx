"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Scissors,
  Paintbrush,
  Sparkle,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";

const serviceLinks = [
  {
    name: "Hair Services",
    href: "/services/hair",
    desc: "Haircuts, Styling, Treatments & Hair Grooming",
    icon: Scissors,
  },
  {
    name: "Makeup Services",
    href: "/services/makeup",
    desc: "Party, Occasion, Bridal & HD Professional Makeup",
    icon: Sparkles,
  },
  {
    name: "Nail Services",
    href: "/services/nails",
    desc: "Nail Care, Gel Polish, Nail Art & Spa Mani-Pedi",
    icon: Paintbrush,
  },
  {
    name: "Beauty & Grooming",
    href: "/services/beauty-grooming",
    desc: "Men's & Women's Skin Care, Facials & Grooming",
    icon: Sparkle,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Close menus on path change directly during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Bridal & Occasion", href: "/bridal", highlight: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#181517] text-[#E8D5D8] text-xs py-2 px-4 border-b border-[#2C2729]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#FF80AB]" />
              <span>Premium Unisex Salon • Welcoming Men & Women</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#BBB4B8]">
              <Clock className="w-3 h-3 text-[#FF80AB]" />
              <span>{siteConfig.timings.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FF80AB] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FF80AB]" />
              <span className="font-semibold">{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#EAE3E6] py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-[#F0EAE8] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#C2185B] bg-[#FCE4EC]/60"
                          : "text-[#2A2428] hover:text-[#C2185B] hover:bg-[#FAF5F7]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-[#8C8488] group-hover:text-[#C2185B] transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown Mega Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-[#F0E4EB] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="px-3 py-2 border-b border-[#F5EDF2] mb-1">
                            <span className="text-[11px] font-semibold text-[#8C8488] tracking-wider uppercase">
                              Salon Services
                            </span>
                          </div>
                          <div className="space-y-1">
                            {serviceLinks.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FDF2F7] transition-colors group/item"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0 group-hover/item:bg-[#C2185B] group-hover/item:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-[#181517] group-hover/item:text-[#C2185B] transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-[#7A7276] line-clamp-1">
                                      {service.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 pt-2 border-t border-[#F5EDF2]">
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-[#C2185B] hover:text-[#E0007C] flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-[#FCE4EC]/40"
                            >
                              <span>View All Services</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                    link.highlight
                      ? "text-[#C2185B] font-semibold hover:bg-[#FCE4EC]/60"
                      : isActive
                      ? "text-[#C2185B] bg-[#FCE4EC]/60"
                      : "text-[#2A2428] hover:text-[#C2185B] hover:bg-[#FAF5F7]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/contact#appointment"
              variant="primary"
              size="sm"
              icon={<Calendar className="w-4 h-4 mr-1.5" />}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/contact#appointment"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Book
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#181517] hover:bg-[#FCE4EC] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C2185B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#181517]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-white/98 backdrop-blur-xl border-b border-[#EAE3E6] shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/"
                    ? "bg-[#FCE4EC] text-[#C2185B]"
                    : "text-[#181517] hover:bg-[#FAF5F7]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/about"
                    ? "bg-[#FCE4EC] text-[#C2185B]"
                    : "text-[#181517] hover:bg-[#FAF5F7]"
                }`}
              >
                About Divisha&apos;s
              </Link>

              {/* Mobile Services Accordion */}
              <div className="pt-2 pb-1 border-t border-[#F5EDF2]">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-xs font-bold text-[#8C8488] uppercase tracking-wider"
                >
                  All Salon Services
                </Link>
                <div className="grid grid-cols-1 gap-1 mt-1 pl-2">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FDF2F7] text-sm font-medium text-[#2A2428] hover:text-[#C2185B]"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#FCE4EC] text-[#C2185B] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/bridal"
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/bridal"
                    ? "bg-[#FCE4EC] text-[#C2185B]"
                    : "text-[#C2185B] hover:bg-[#FAF5F7]"
                }`}
              >
                Bridal & Occasion Artistry ✨
              </Link>
              <Link
                href="/gallery"
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/gallery"
                    ? "bg-[#FCE4EC] text-[#C2185B]"
                    : "text-[#181517] hover:bg-[#FAF5F7]"
                }`}
              >
                Visual Gallery
              </Link>
              <Link
                href="/contact"
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "bg-[#FCE4EC] text-[#C2185B]"
                    : "text-[#181517] hover:bg-[#FAF5F7]"
                }`}
              >
                Contact & Visit Us
              </Link>
            </div>

            {/* Quick Mobile Action Buttons */}
            <div className="pt-4 border-t border-[#F5EDF2] space-y-3">
              <Button
                href="/contact#appointment"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Book Appointment Now
              </Button>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20BA5A] transition-colors"
              >
                WhatsApp Direct Booking
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
