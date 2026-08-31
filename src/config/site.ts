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
    addressLine1: "M-157, Awas Vikas Scheme-1",
    addressLine2: "Kalyanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    postalCode: "208019",
    country: "India",
    fullAddress:
      "M-157, Awas Vikas Scheme-1, Kalyanpur, Kanpur, Uttar Pradesh 208019",
    landmark: "Near Negi Banquet Hall (Back Side)",
    googleMapsUrl:
      "https://maps.google.com/?q=Divishas+Unisex+Salon+M-157+Awas+Vikas+Scheme+1+Kalyanpur+Kanpur+208019",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=M-157%2C%20Awas%20Vikas%20Scheme-1%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208019&t=&z=15&ie=UTF8&iwloc=&output=embed",
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
