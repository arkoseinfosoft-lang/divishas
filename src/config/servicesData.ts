export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  forGender: "Unisex" | "Women" | "Men" | "All";
  image?: string;
  highlights?: string[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  badge: string;
  introText: string;
  items: ServiceItem[];
  faqs: Array<{ question: string; answer: string }>;
}

export const servicesData: Record<string, ServiceCategory> = {
  hair: {
    slug: "hair",
    title: "Hair Care & Styling",
    subtitle: "Precision Haircuts, Signature Styling & Restorative Treatments",
    metaTitle: "Hair Salon Services for Men & Women | Divisha's Unisex Salon",
    metaDescription:
      "Explore bespoke haircuts, modern styling, restorative hair spa treatments, and professional grooming for men and women at Divisha's Unisex Salon.",
    heroImage: "/images/hair-women.jpg",
    badge: "Hair Artistry & Care",
    introText:
      "From trendsetting haircuts and precision fades to restorative hair rituals and custom blowouts, our certified hair specialists craft looks tailored to your facial structure, hair texture, and individual lifestyle.",
    items: [
      {
        id: "haircuts",
        name: "Haircuts (Men & Women)",
        shortDesc: "Custom precision haircuts designed to flatter your facial profile and personal style.",
        fullDesc:
          "Experience customized haircutting crafted by our master stylists. Includes personal consultation, hair wash, precision cut, and blow-dry finish for both men and women.",
        features: [
          "In-depth consultation for face shape & hair texture",
          "Advanced texturizing & layering techniques",
          "Includes refreshing wash & blow-dry styling",
          "Dedicated men's precision fades & scissor cuts",
        ],
        forGender: "Unisex",
        image: "/images/hair-men.jpg",
      },
      {
        id: "hair-styling",
        name: "Hair Styling",
        shortDesc: "Signature blowouts, soft curls, straightening, and red-carpet ready styling.",
        fullDesc:
          "Transform your hair for date nights, formal corporate galas, or festive family occasions with our heat-protected signature blow-dries, bouncy waves, and sleek finishes.",
        features: [
          "Voluminous blowouts & bouncy waves",
          "Thermal straightening & glass-hair finishes",
          "Curling, tongs & retro wave styling",
          "Long-lasting hold with lightweight premium serums",
        ],
        forGender: "Unisex",
        image: "/images/hair-women.jpg",
      },
      {
        id: "hair-grooming",
        name: "Hair Grooming",
        shortDesc: "Refined everyday hair maintenance, clean trims, and beard-hair coordination.",
        fullDesc:
          "Comprehensive hair grooming tailored to keep your hair healthy, neat, and effortlessly manageable between full cuts.",
        features: [
          "Beard trimming & hair blend transitions",
          "Split-end dusting & edge cleanup",
          "Scalp detox & clarifying washes",
          "Quick touch-up styling for busy professionals",
        ],
        forGender: "Unisex",
        image: "/images/beard-grooming.jpg",
      },
      {
        id: "hair-treatments",
        name: "Hair Treatments",
        shortDesc: "Intense moisture therapies, deep conditioning spa rituals, and scalp rejuvenation.",
        fullDesc:
          "Revitalize dull, dry, or chemically processed hair with our nourishing treatment protocols. We restore moisture, repair hair bonds, and calm stressed scalps.",
        features: [
          "Deep-conditioning botanical hair spas",
          "Keratin & protein infusion treatments",
          "Anti-frizz smoothing therapies",
          "Scalp revitalizing & anti-dandruff care",
        ],
        forGender: "Unisex",
        image: "/images/hero-salon.jpg",
      },
      {
        id: "professional-hair-styling",
        name: "Professional Hair Styling",
        shortDesc: "Avant-garde updos, elaborate braids, and high-fashion styling for special occasions.",
        fullDesc:
          "For milestone moments requiring structural elegance, our stylists craft intricate updos, floral braided buns, and editorial styles that stay flawless all day and night.",
        features: [
          "Intricate festive & cocktail updos",
          "Traditional & modern braided styles",
          "Hair accessory & floral placement",
          "Weather-resistant styling hold",
        ],
        forGender: "Unisex",
        image: "/images/hair-balayage.jpg",
      },
    ],
    faqs: [
      {
        question: "Do you cater to both men and women for hair services?",
        answer:
          "Yes! Divisha's is a full-fledged unisex salon. We have dedicated stylists experienced in both contemporary men's haircuts/grooming and women's precision styling and treatments.",
      },
      {
        question: "Do I need to book a consultation before getting a hair treatment?",
        answer:
          "We offer a complimentary hair and scalp evaluation before starting any deep treatment to ensure the products used are ideal for your hair's unique condition.",
      },
      {
        question: "Can I bring my own hairstyle reference photo?",
        answer:
          "Absolutely. Our stylists love visual references and will adapt your dream look to harmonize with your hair density, length, and face shape.",
      },
    ],
  },
  makeup: {
    slug: "makeup",
    title: "Makeup Services",
    subtitle: "High-Definition Artistry for Weddings, Events & Milestone Moments",
    metaTitle: "Professional Makeup Services | Divisha's Unisex Salon",
    metaDescription:
      "Explore bespoke makeup artistry at Divisha's Unisex Salon, from subtle day looks and radiant party glam to couture bridal and special occasion makeup.",
    heroImage: "/images/party-makeup.jpg",
    badge: "Makeup & Beauty Artistry",
    introText:
      "Every face is a unique canvas. Our skilled makeup artists highlight your authentic beauty with skin-first application techniques, luxury non-comedogenic cosmetics, and enduring high-definition finishes.",
    items: [
      {
        id: "makeup-different-occasions",
        name: "Makeup for Different Occasions",
        shortDesc: "Versatile, tailored makeup looks calibrated for morning functions, cocktail evenings, or festive gatherings.",
        fullDesc:
          "Whether attending a family puja, corporate award night, or festive celebration, we customize foundation tones, eye depth, and lip palettes to complement your attire and lighting.",
        features: [
          "Daytime luminous & dewy finishes",
          "Evening glam & rich color palettes",
          "High-grade long-wear cosmetic formulas",
          "Custom lash application & contouring",
        ],
        forGender: "Women",
        image: "/images/party-makeup.jpg",
      },
      {
        id: "party-event-makeup",
        name: "Party / Event Makeup",
        shortDesc: "Glamorous, camera-ready makeup designed to make you shine at celebrations and receptions.",
        fullDesc:
          "Turn heads at any party with radiant skin, sultry smokey or champagne eye artistry, sculpted cheekbones, and smudge-resistant lips tailored for high-energy celebrations.",
        features: [
          "HD party makeup with seamless blending",
          "Custom glitter, shimmer, or matte eye options",
          "Sweat-resistant, flash-photography friendly base",
          "Complementary basic hair setting options",
        ],
        forGender: "Women",
        image: "/images/party-makeup.jpg",
      },
      {
        id: "bridal-wedding-makeup",
        name: "Bridal / Wedding Makeup",
        shortDesc: "Couture wedding day makeup delivering timeless royalty, flawless radiance, and emotion-proof longevity.",
        fullDesc:
          "Our signature bridal artistry combines traditional Indian wedding aesthetics with contemporary elegance. We ensure your bridal look is breathtaking in person and magnificent in 4K photography.",
        features: [
          "Comprehensive bridal consultation & theme matching",
          "Luxury HD & Airbrush application techniques",
          "Draping & jewelry setting coordination",
          "Waterproof, tear-resistant formulations",
        ],
        forGender: "Women",
        image: "/images/bridal-makeup.jpg",
      },
      {
        id: "professional-makeup",
        name: "Professional Makeup",
        shortDesc: "Subtle, polished, high-definition makeup for studio shoots, corporate branding, and media appearances.",
        fullDesc:
          "Designed for portfolio shoots, professional videos, and corporate engagements where natural skin texture and zero flash reflection are paramount.",
        features: [
          "Zero-glare matte and natural satin finishes",
          "Precision color correction for studio lighting",
          "Unisex grooming and blemish neutralisation",
          "Minimalist, refined aesthetic",
        ],
        forGender: "Unisex",
        image: "/images/hair-women.jpg",
      },
      {
        id: "special-occasion-makeup",
        name: "Special Occasion Makeup",
        shortDesc: "Custom styling for engagements, sangeet, anniversaries, and red-carpet milestones.",
        fullDesc:
          "Tailored for pre-wedding ceremonies like Mehendi, Haldi, Cocktail, and Anniversaries. We craft cohesive looks that match your outfit's intricate hues and jewelry.",
        features: [
          "Theme-coordinated color harmony",
          "Airy, comfortable skin feel for long ceremonies",
          "Highlighting & natural skin glow enhancement",
          "Touch-up advice & setting spray lock",
        ],
        forGender: "Women",
        image: "/images/bridal-makeup.jpg",
      },
    ],
    faqs: [
      {
        question: "What brands of makeup products are used?",
        answer:
          "We use only dermatologist-tested, luxury professional cosmetic brands (such as MAC, Huda Beauty, Bobbi Brown, NARS, Charlotte Tilbury, and Kryolan) to ensure skin safety and long-lasting radiance.",
      },
      {
        question: "How far in advance should I book my bridal or party makeup?",
        answer:
          "For wedding dates and bridal makeup, we recommend reserving your date at least 4-8 weeks in advance. For party and occasion makeup, booking 3-7 days in advance is ideal.",
      },
    ],
  },
  nails: {
    slug: "nails",
    title: "Nail Care & Artistry",
    subtitle: "Pampering Manicures, Pedicures, Custom Extensions & Nail Art",
    metaTitle: "Nail Care, Manicure, Pedicure & Nail Art | Divisha's Unisex Salon",
    metaDescription:
      "Pamper your hands and feet at Divisha's Unisex Salon. Explore nail care, luxury manicures, soothing pedicures, and bespoke nail art.",
    heroImage: "/images/nail-art.jpg",
    badge: "Nail Care & Extensions",
    introText:
      "Give your hands and feet the nourishment they deserve. From hygienic nail shaping and hydrating spa pedicures to trendsetting gel extensions and intricate nail art, our nail technicians deliver perfection in every stroke.",
    items: [
      {
        id: "nail-care",
        name: "Nail Care",
        shortDesc: "Cuticle care, nail strengthening, shaping, and restorative hydration.",
        fullDesc:
          "Essential nail wellness designed to strengthen brittle nails, tidy cuticles, buff away ridges, and nourish nail beds with botanical oils and keratin boosters.",
        features: [
          "Precision shaping & smoothing",
          "Gentle cuticle grooming & dead skin removal",
          "Keratin nail strengthening treatment",
          "Deep moisturizing hand & nail massage",
        ],
        forGender: "Unisex",
        image: "/images/nail-art.jpg",
      },
      {
        id: "nail-styling",
        name: "Nail Styling",
        shortDesc: "Durable gel polish, glossy chip-resistant coats, and French tip classics.",
        fullDesc:
          "Elevate your look with high-shine gel polish overlays that remain vibrant and chip-free for up to 3-4 weeks. Available in an extensive spectrum of shades.",
        features: [
          "Wide spectrum of nude, vibrant & metallic shades",
          "UV/LED cured long-wear gel polish",
          "Classic and modern French tip styling",
          "Quick, clean, non-damaging application",
        ],
        forGender: "Women",
        image: "/images/nail-art.jpg",
      },
      {
        id: "nail-art",
        name: "Nail Art",
        shortDesc: "Custom hand-painted designs, chrome foils, glitter ombré, and bridal accents.",
        fullDesc:
          "Express your individuality with bespoke nail art. From delicate floral motifs and minimalist geometric lines to lavish bridal embellishments with gold foil and crystals.",
        features: [
          "Custom hand-painted motifs & patterns",
          "Glitter gradients, chrome & holographic finishes",
          "Bridal nail ornamentation & stone work",
          "Bespoke designs tailored to your outfit",
        ],
        forGender: "Women",
        image: "/images/nail-art.jpg",
      },
      {
        id: "manicure-pedicure",
        name: "Manicure / Pedicure",
        shortDesc: "Relaxing floral foot soaks, exfoliating scrubs, mask therapies, and soothing massage.",
        fullDesc:
          "Indulge in a luxurious, hygienic spa experience for hands and feet. Includes warm aromatic soaks, gentle sugar scrub exfoliation, clarifying mud masks, and relaxing pressure-point massage.",
        features: [
          "Aromatic warm water soak with detox salts",
          "Dead skin exfoliation & heel buffing",
          "Deep hydration mask with warm towels",
          "Stress-relieving hand & foot massage",
        ],
        forGender: "Unisex",
        image: "/images/beauty-spa.jpg",
      },
    ],
    faqs: [
      {
        question: "Are manicures and pedicures suitable for men?",
        answer:
          "Absolutely! Nail hygiene, callus smoothing, and cuticle health are vital for everyone. We provide specialized clean grooming manicures and pedicures for men.",
      },
      {
        question: "How long does a gel nail application last?",
        answer:
          "Our professional gel polishes and overlays typically last 3 to 4 weeks with proper care, maintaining pristine shine without peeling or chipping.",
      },
      {
        question: "What sterilization standards do you follow for nail tools?",
        answer:
          "We adhere to strict hospital-grade sterilization for all metal implements, and use disposable buffers, liners, and files for every client.",
      },
    ],
  },
  "beauty-grooming": {
    slug: "beauty-grooming",
    title: "Beauty & Grooming",
    subtitle: "Complete Skin Care, Men's & Women's Grooming, and Salon Wellness",
    metaTitle: "Beauty & Personal Grooming for Men & Women | Divisha's Unisex Salon",
    metaDescription:
      "Discover complete unisex salon grooming at Divisha's: Men's beard care, customized skin facials, gentle waxing, threading, and full-body wellness.",
    heroImage: "/images/beauty-spa.jpg",
    badge: "Skin & Personal Grooming",
    introText:
      "Look sharp, fresh, and confident every day. Our comprehensive beauty and grooming services cater meticulously to both women and men in private, hygienic, and relaxing treatment suites.",
    items: [
      {
        id: "beauty-services",
        name: "Beauty Services",
        shortDesc: "Custom skin facials, brightening clean-ups, anti-aging therapies, and glow treatments.",
        fullDesc:
          "Revitalize tired, pollution-exposed skin with our curated facials and clean-ups. Each treatment uses targeted organic extracts and vitamins to restore natural radiance.",
        features: [
          "Hydrating & brightening organic facials",
          "Deep pore cleansing & blackhead removal",
          "Anti-tan, pigmentation & glow treatments",
          "Soothing collagen masks & cryo-cooling",
        ],
        forGender: "Unisex",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "personal-grooming",
        name: "Personal Grooming",
        shortDesc: "Head-to-toe grooming rituals including hygienic waxing, precision threading, and skin polishing.",
        fullDesc:
          "Essential grooming executed with gentle techniques and soothing after-care aloe treatments to ensure smooth, irritation-free skin.",
        features: [
          "Precision eyebrow shaping & facial threading",
          "Hygienic stripless & peel-off waxing options",
          "Full-body detan & skin polishing",
          "Post-grooming soothing botanical lotions",
        ],
        forGender: "Unisex",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "mens-grooming",
        name: "Men's Grooming",
        shortDesc: "Beard sculpting, hot towel shaves, detox facials, and executive styling.",
        fullDesc:
          "Tailored exclusively for the modern gentleman. We offer sharp beard architecture, classic hot towel straight-razor shaves, energizing scalp massages, and detoxifying male facials.",
        features: [
          "Precision beard shaping, trimming & fade blends",
          "Hot towel straight-razor classic shaves",
          "Charcoal detox & oil-control men's facials",
          "Grey hair blending & mustache styling",
        ],
        forGender: "Men",
        image: "/images/beard-grooming.jpg",
      },
      {
        id: "womens-grooming",
        name: "Women's Grooming",
        shortDesc: "Fine facial contour threading, gentle waxing, body wraps, and radiant skin prep.",
        fullDesc:
          "Comprehensive self-care treatments delivered with premium products that respect delicate skin, leaving you smooth, rejuvenated, and fully refreshed.",
        features: [
          "Gentle peel-off Rica & organic wax options",
          "High-definition brow mapping & tinting",
          "Hydra-infusion skin cleanups",
          "Full-body scrub & relaxation rituals",
        ],
        forGender: "Women",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "complete-salon-beauty-care",
        name: "Complete Salon & Beauty Care",
        shortDesc: "Holistic monthly maintenance rituals combining hair, face, hands, and feet.",
        fullDesc:
          "All-in-one grooming sessions designed for busy individuals who desire complete rejuvenation in a single, well-coordinated appointment.",
        features: [
          "Combined hair wash, cut & style",
          "Quick rejuvenating facial clean-up",
          "Express manicure & pedicure",
          "Streamlined appointment scheduling",
        ],
        forGender: "Unisex",
        image: "/images/hero-salon.jpg",
      },
    ],
    faqs: [
      {
        question: "How do you ensure hygiene during waxing and facial services?",
        answer:
          "Hygiene is our top priority. We use disposable bed sheets, single-use spatulas (no double-dipping), sanitized towels, and medical-grade sanitizers before every service.",
      },
      {
        question: "Is there a consultation for skin sensitivity?",
        answer:
          "Yes, our estheticians conduct a skin patch test and type assessment prior to applying any active facial formulations or peel-off waxes.",
      },
    ],
  },
};

export const bridalPageData = {
  title: "Bridal & Occasion Artistry",
  subtitle: "Exquisite Transformations for the Bride, Groom & Wedding Party",
  metaTitle: "Bridal Makeup & Groom Styling | Divisha's Unisex Salon",
  metaDescription:
    "Make your wedding unforgettable with Divisha's bespoke bridal makeup, groom grooming packages, pre-bridal rituals, and occasion styling.",
  heroImage: "/images/bridal-makeup.jpg",
  badge: "Weddings & Celebrations",
  introText:
    "Your wedding day is one of the most cherished milestones of your life. At Divisha's Unisex Salon, we craft personalized bridal and groom experiences that bring your dream vision to life with regal elegance and contemporary finesse.",
  pillars: [
    {
      title: "Bridal Makeup",
      desc: "High-definition bridal makeup tailored to match your wedding attire, jewelry, and lighting.",
      icon: "Sparkles",
      image: "/images/bridal-makeup.jpg",
    },
    {
      title: "Wedding / Event Makeup",
      desc: "Glamorous makeup for Sangeet, Mehendi, Engagement, Haldi, and Reception functions.",
      icon: "Crown",
      image: "/images/party-makeup.jpg",
    },
    {
      title: "Occasion Styling",
      desc: "Complete hair updos, floral hair arrangements, dupatta draping, and saree styling.",
      icon: "Flower2",
      image: "/images/bridal-hair.jpg",
    },
    {
      title: "Bridal Beauty Preparation",
      desc: "Pre-bridal skin regimes, glow facials, full-body polishing, and nail extensions.",
      icon: "HeartHandshake",
      image: "/images/beauty-spa.jpg",
    },
    {
      title: "Groom Wedding Styling",
      desc: "Executive beard grooming, skin prep, hairstyle setting, and royal groom styling.",
      icon: "UserCheck",
      image: "/images/beard-grooming.jpg",
    },
  ],
  whyChooseUs: [
    "One-on-one pre-wedding consultation & look trials",
    "Airbrush & HD formulas that withstand hours of rituals & emotions",
    "Seamless coordination for bridal party, family & friends",
    "Dedicated private styling suite for complete comfort",
  ],
};
