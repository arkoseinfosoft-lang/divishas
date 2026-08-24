/**
 * Centralized Business Configuration for Divisha's Unisex Salon
 * All contact details, location, timings, and social profiles are easily editable here.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  url: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    email: string;
  };
  location: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    landmark?: string;
  };
  timings: {
    weekdays: string;
    weekends: string;
    closedOn: string;
    openHoursSpecification: Array<{
      dayOfWeek: string[];
      opens: string;
      closes: string;
    }>;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube?: string;
    threads?: string;
  };
  features: string[];
  genderServed: "Unisex (Men & Women)";
}

export const siteConfig: SiteConfig = {
  name: "Divisha's Unisex Salon",
  tagline: "Where Elegance Meets Precision Grooming",
  shortDescription:
    "Premium unisex salon offering professional hair styling, couture makeup, luxury nail care, bridal transformations, and advanced skin grooming.",
  fullDescription:
    "Divisha's Unisex Salon is a premier beauty and grooming destination crafted for both men and women. Combining artistic flair, state-of-the-art styling techniques, and personalized care, we provide exceptional salon experiences from bespoke haircuts and rejuvenating hair treatments to couture bridal transformations and luxury nail artistry.",
  url: "https://divishas-salon.vercel.app", // Editable client domain
  contact: {
    phone: "+919876543210", // Editable Salon Phone Number
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210", // Editable WhatsApp Number (digits only with country code)
    whatsappDisplay: "+91 98765 43210",
    whatsappMessage:
      "Hello Divisha's Salon! I would like to enquire about booking an appointment.",
    email: "arkoseinfosoftweb@gmail.com", // Contact form inquiry email (FormSubmit)
  },
  location: {
    addressLine1: "Shop No. 12-14, Ground Floor, Royal Palm Avenue", // Editable Placeholder Address
    addressLine2: "Opposite City Mall, Main Commercial Boulevard",
    city: "New Delhi", // Editable City
    state: "Delhi",
    postalCode: "110001",
    country: "India",
    fullAddress:
      "Shop No. 12-14, Ground Floor, Royal Palm Avenue, Opposite City Mall, Main Commercial Boulevard, New Delhi, Delhi 110001",
    landmark: "Opposite City Mall",
    // Embed map placeholder (standard clean embed URL)
    googleMapsUrl: "https://maps.google.com/?q=Divishas+Unisex+Salon",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.09262729792!2d77.10541785!3d28.6327888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  timings: {
    weekdays: "10:00 AM – 09:00 PM (Mon – Fri)",
    weekends: "09:30 AM – 09:30 PM (Sat – Sun)",
    closedOn: "Open 7 Days a Week",
    openHoursSpecification: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
      {
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:30",
        closes: "21:30",
      },
    ],
  },
  social: {
    instagram: "https://instagram.com/divishas_salon",
    facebook: "https://facebook.com/divishassalon",
    youtube: "https://youtube.com/@divishassalon",
  },
  features: [
    "Certified Hair & Makeup Artists",
    "Dedicated Unisex Styling Sections",
    "Premium Clean Sanitized Products",
    "Bespoke Bridal & Groom Consultations",
    "Relaxed Luxury Salon Atmosphere",
  ],
  genderServed: "Unisex (Men & Women)",
};
