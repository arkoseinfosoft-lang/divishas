export interface GalleryItem {
  id: string;
  title: string;
  category: "Hair" | "Bridal" | "Makeup" | "Men's Grooming" | "Nails & Spa" | "Salon Space";
  image: string;
  alt: string;
  aspect: "landscape" | "portrait" | "square";
  description: string;
}

export const galleryCategories = [
  "All",
  "Hair",
  "Bridal",
  "Makeup",
  "Men's Grooming",
  "Nails & Spa",
  "Salon Space",
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    title: "Signature Royal Bridal Artistry",
    category: "Bridal",
    image: "/images/bridal-makeup.jpg",
    alt: "Indian bride in royal magenta lehenga with exquisite bridal makeup and jewelry",
    aspect: "portrait",
    description: "Flawless HD bridal look coordinated with traditional jewelry and fresh floral styling.",
  },
  {
    id: "g-2",
    title: "Luxury Unisex Salon Experience",
    category: "Salon Space",
    image: "/images/hero-salon.jpg",
    alt: "Divisha's Unisex Salon modern luxury interior with illuminated mirrors and styling chairs",
    aspect: "landscape",
    description: "Our welcoming, sanitized styling floors designed for both men and women.",
  },
  {
    id: "g-3",
    title: "Glamorous Evening Reception Makeup",
    category: "Makeup",
    image: "/images/party-makeup.jpg",
    alt: "Indian woman with radiant party makeup, smokey eyes and glossy lips",
    aspect: "portrait",
    description: "Subtle yet mesmerizing occasion makeup designed for flash photography.",
  },
  {
    id: "g-4",
    title: "Voluminous Blowout & Styling",
    category: "Hair",
    image: "/images/hair-women.jpg",
    alt: "Woman with shiny, healthy blow-dried wavy hair in a luxury salon",
    aspect: "portrait",
    description: "Heat-protected blow-dry with long-lasting bounce and mirror shine.",
  },
  {
    id: "g-5",
    title: "Precision Haircut & Fade",
    category: "Men's Grooming",
    image: "/images/hair-men.jpg",
    alt: "Man receiving precision scissor haircut and clean fade in a salon chair",
    aspect: "portrait",
    description: "Modern textured crop and fade tailored to head shape and hair texture.",
  },
  {
    id: "g-6",
    title: "Rose & Gold Accent Nail Extensions",
    category: "Nails & Spa",
    image: "/images/nail-art.jpg",
    alt: "Female hands with elegant rose-pink gel nails, gold accents, and cuticle care",
    aspect: "landscape",
    description: "Long-lasting gel overlay with delicate gold foil and cuticle nourishment.",
  },
  {
    id: "g-7",
    title: "Artisan Caramel Balayage Highlights",
    category: "Hair",
    image: "/images/hair-balayage.jpg",
    alt: "Rear view of glossy dark hair with seamless warm caramel and mocha balayage waves",
    aspect: "portrait",
    description: "Custom dimensional color blending that grows out naturally without harsh lines.",
  },
  {
    id: "g-8",
    title: "Sculpted Beard Architecture & Trim",
    category: "Men's Grooming",
    image: "/images/beard-grooming.jpg",
    alt: "Man with sharp sculpted beard and clean cheek lines at a salon chair",
    aspect: "portrait",
    description: "Straight-edge precision beard shaping paired with soothing oil massage.",
  },
  {
    id: "g-9",
    title: "Traditional Floral Braided Bridal Bun",
    category: "Bridal",
    image: "/images/bridal-hair.jpg",
    alt: "Intricate Indian bridal braided hair adorned with fresh baby breath flowers and pastel roses",
    aspect: "portrait",
    description: "Elaborate bridal hair creation adorned with natural fragrant blooms.",
  },
  {
    id: "g-10",
    title: "Rejuvenating Herbal Skin Facial",
    category: "Nails & Spa",
    image: "/images/beauty-spa.jpg",
    alt: "Client relaxing during a glowing facial treatment in a tranquil spa room",
    aspect: "landscape",
    description: "Organic deep-pore cleansing and hydration mask in a peaceful wellness suite.",
  },
];
