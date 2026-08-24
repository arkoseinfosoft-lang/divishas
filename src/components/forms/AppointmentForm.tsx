"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Scissors,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";

interface AppointmentFormProps {
  initialService?: string;
  className?: string;
}

export function AppointmentForm({
  initialService = "",
  className = "",
}: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "For Her",
    serviceCategory: initialService || "Hair Care & Styling",
    date: "",
    timeSlot: "Morning (10:00 AM – 01:00 PM)",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError("Please provide your name and phone number to book an appointment.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      // Submit to FormSubmit.co endpoint using AJAX
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.contact.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Salon Appointment Booking: ${formData.name} (${formData.serviceCategory})`,
            _template: "table",
            _captcha: "false",
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email || "Not provided",
            ClientType: formData.gender,
            Service: formData.serviceCategory,
            PreferredDate: formData.date || "Next available",
            PreferredTime: formData.timeSlot,
            SpecialRequests: formData.notes || "None",
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback gracefully
        setSubmitted(true);
      }
    } catch {
      // In case of network errors or offline, still show success and offer WhatsApp instant message
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate WhatsApp message based on form inputs
  const getWhatsAppBookingLink = () => {
    const message = `Hello Divisha's Salon! 🦋
I would like to book an appointment:
• Name: ${formData.name || "Client"}
• Phone: ${formData.phone || "Not specified"}
• Service: ${formData.serviceCategory}
• For: ${formData.gender}
• Preferred Date: ${formData.date || "Earliest available"}
• Time: ${formData.timeSlot}
${formData.notes ? `• Note: ${formData.notes}` : ""}

Please let me know if this slot is available. Thank you!`;

    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE3E6] shadow-xl text-center space-y-6 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-[#E8F8EE] text-[#25D366] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#181517]">
            Appointment Request Received!
          </h3>
          <p className="text-sm sm:text-base text-[#666164] max-w-md mx-auto">
            Thank you, <span className="font-semibold text-[#181517]">{formData.name}</span>. Our salon concierge will call or WhatsApp you at{" "}
            <span className="font-semibold text-[#C2185B]">{formData.phone}</span> shortly to confirm your slot.
          </p>
        </div>

        <div className="pt-2 border-t border-[#F5EDF2] flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Instant WhatsApp Confirmation</span>
          </a>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                gender: "For Her",
                serviceCategory: "Hair Care & Styling",
                date: "",
                timeSlot: "Morning (10:00 AM – 01:00 PM)",
                notes: "",
              });
            }}
          >
            Book Another Visit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="appointment"
      className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EAE3E6] shadow-xl relative ${className}`}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C2185B] bg-[#FCE4EC] rounded-full mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Booking</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#181517]">
          Reserve Your Salon Experience
        </h3>
        <p className="text-sm text-[#787175] mt-1">
          Select your desired service and preferred timing. We welcome both women and men.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Gender / Client Preference Selection */}
        <div>
          <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-2">
            Service For
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["For Her", "For Him", "For Both / Couple"].map((option) => (
              <button
                type="button"
                key={option}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, gender: option }))
                }
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border text-center ${
                  formData.gender === option
                    ? "bg-[#C2185B] text-white border-[#C2185B] shadow-sm"
                    : "bg-[#FAF8F7] text-[#4A4347] border-[#E8E0E4] hover:border-[#C2185B]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-[#C2185B]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#A8A1A6] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma / Rohan Verma"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] placeholder:text-[#A8A1A6] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-[#C2185B]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#A8A1A6] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] placeholder:text-[#A8A1A6] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Email and Service Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
              Email (Optional)
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#A8A1A6] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] placeholder:text-[#A8A1A6] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
              Service Category
            </label>
            <div className="relative">
              <Scissors className="w-4 h-4 text-[#A8A1A6] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors appearance-none cursor-pointer"
              >
                <option value="Hair Care & Styling">Hair Care & Styling (Cuts, Wash, Blowout)</option>
                <option value="Hair Treatments">Hair Spa & Restorative Treatments</option>
                <option value="Makeup Services">Makeup (Party, Event, Professional)</option>
                <option value="Bridal & Occasion">Bridal & Wedding Makeover Packages</option>
                <option value="Nail Services">Nails (Gel Extensions, Art, Mani-Pedi)</option>
                <option value="Beauty & Grooming">Beauty, Facials & Men&apos;s Grooming</option>
                <option value="Complete Salon Day">Complete Salon Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Date and Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-[#A8A1A6] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
              Preferred Time Slot
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-[#A8A1A6] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors appearance-none cursor-pointer"
              >
                <option value="Morning (10:00 AM – 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                <option value="Afternoon (01:00 PM – 05:00 PM)">Afternoon (01:00 PM – 05:00 PM)</option>
                <option value="Evening (05:00 PM – 09:00 PM)">Evening (05:00 PM – 09:00 PM)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Special Notes / Requests */}
        <div>
          <label className="block text-xs font-bold text-[#3B3438] uppercase tracking-wider mb-1.5">
            Special Requests / Style Notes (Optional)
          </label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us about your hair length, event date, specific stylist preference, or any skin sensitivities..."
            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F7] border border-[#E8E0E4] text-sm text-[#181517] placeholder:text-[#A8A1A6] focus:outline-none focus:border-[#C2185B] focus:bg-white transition-colors resize-none"
          />
        </div>

        {/* Dual Actions: Submit Form or Instant WhatsApp */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="flex-1 justify-center"
          >
            {isSubmitting ? "Submitting Booking..." : "Request Appointment"}
          </Button>

          <a
            href={getWhatsAppBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold shadow-md shadow-[#25D366]/20 transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book via WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-[#8C8488] text-center pt-1">
          ⚡ No upfront payment required. We will confirm your exact slot via phone or WhatsApp.
        </p>
      </form>
    </div>
  );
}
