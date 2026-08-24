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
    phone: "+918527091578",
    phoneDisplay: "+91 85270 91578",
    whatsapp: "918527091578",
    whatsappDisplay: "+91 85270 91578",
    whatsappMessage:
      "Hello Divisha's Salon! I would like to enquire about booking an appointment.",
    email: "arkoseinfosoftweb@gmail.com", // Contact form inquiry email (FormSubmit)
  },
  location: {
    addressLine1: "Shop No. 12-14, Ground Floor, Sector 14 Main Market",
    addressLine2: "Near HUDA Complex, Commercial Belt",
    city: "Kanpur",
    state: "Uttar Pradesh",
    postalCode: "208005",
    country: "India",
    fullAddress:
      "Shop No. 12-14, Ground Floor, Sector 14 Main Market, Near HUDA Complex, Kanpur, Uttar Pradesh 208005",
    landmark: "Opposite Sector 14 Central Plaza",
    googleMapsUrl: "https://maps.google.com/?q=Divishas+Unisex+Salon+Kanpur",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112260.67756184132!2d77.0084478!3d28.4721474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5e64b1e!2sSector%2014%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
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
    instagram: "https://www.instagram.com/divisha_unisex_salon_?igsi=M2IzMGJtM2Q1dTZq",
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
