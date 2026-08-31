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
          "Our bespoke haircutting service begins with a comprehensive consultation assessing your bone structure, hair density, and daily routine. Your stylist then performs a clarifying shampoo wash, precision shear or razor cutting, texturizing to enhance natural movement, and a tailored blowout finish. Ideal for anyone seeking a refreshed personal silhouette, eliminating split ends, or adopting a sharp, contemporary look that grows out seamlessly. Treatment duration is approximately 45–60 minutes; we recommend a refresh cut every 4–6 weeks along with a sulfate-free home care regimen.",
        features: [
          "In-depth face shape, texture & lifestyle consultation",
          "Includes clarifying wash, scalp massage & blowout finish",
          "Advanced texturizing, layering & seamless taper blending",
          "Duration: 45–60 mins | Recommended cadence: 4–6 weeks",
        ],
        forGender: "Unisex",
        image: "/images/hair-men.jpg",
      },
      {
        id: "hair-styling",
        name: "Hair Styling & Blowouts",
        shortDesc: "Signature blowouts, soft curls, straightening, and red-carpet ready styling.",
        fullDesc:
          "Transform your hair with professional thermal artistry tailored to your occasion. Using lightweight heat-protectant serums and specialized round brushes, our stylists craft voluminous bouncy blowouts, sleek glass-hair thermal straightening, or romantic curling-wand waves. Designed for clients heading to corporate galas, milestone dinners, date nights, or festive parties who want radiant, frizz-resistant hair with zero thermal damage. Styling takes 45–60 minutes and delivers 24–48 hours of salon bounce; keep away from high humidity and avoid tight bands to prolong the look.",
        features: [
          "Voluminous bouncy blowouts & Hollywood glam waves",
          "Precision thermal straightening & mirror-shine finishes",
          "Weightless anti-frizz heat protection & humidity barrier",
          "Duration: 45–60 mins | Longevity: 24–48 hours",
        ],
        forGender: "Unisex",
        image: "/images/hair-women.jpg",
      },
      {
        id: "hair-grooming",
        name: "Hair Grooming & Maintenance",
        shortDesc: "Refined everyday hair maintenance, clean trims, and beard-hair coordination.",
        fullDesc:
          "Targeted mid-cycle upkeep designed to keep your hairstyle crisp, healthy, and effortless between major haircut appointments. This service focuses on hairline detailing, split-end dusting, sideburn transitions, and quick clarifying washes. Perfect for busy professionals and grooming-conscious clients who need their edges sharp and ends nourished without spending hours in a salon chair. The appointment takes 25–35 minutes, making it the ideal bi-weekly routine to maintain polished grooming year-round.",
        features: [
          "Clean hairline edge trimming & split-end dusting",
          "Beard-to-hairline transition shaping & neckline cleanup",
          "Refreshing scalp wash & lightweight styling application",
          "Duration: 25–35 mins | Recommended cadence: 2–3 weeks",
        ],
        forGender: "Unisex",
        image: "/images/beard-grooming.jpg",
      },
      {
        id: "hair-treatments",
        name: "Restorative Hair Spa & Treatments",
        shortDesc: "Intense moisture therapies, deep conditioning spa rituals, and scalp rejuvenation.",
        fullDesc:
          "A multi-stage restorative therapy that reverses the effects of environmental pollution, hard water mineral deposits, heat styling, and chemical processing. The ritual begins with an invigorating scalp detox massage, followed by a protein and keratin-enriched deep conditioning masque, warm micro-mist steaming to open hair cuticles, and a cold rinse nutrient lock-in. Tailored for anyone struggling with dry, brittle strands, unmanageable frizz, or an irritated scalp. Treatment takes 60–75 minutes and restores softness for 3–4 weeks; maintain at home with weekly hydrating masks.",
        features: [
          "Custom protein, keratin & botanical deep conditioning",
          "Acupressure scalp massage & warm micro-mist infusion",
          "Anti-frizz cuticle sealing & intensive split-end repair",
          "Duration: 60–75 mins | Visible softness: 3–4 weeks",
        ],
        forGender: "Unisex",
        image: "/images/hero-salon.jpg",
      },
      {
        id: "professional-hair-styling",
        name: "Occasion & Professional Hair Artistry",
        shortDesc: "Architectural updos, intricate braids, and high-fashion styling for special occasions.",
        fullDesc:
          "For milestone celebrations requiring show-stopping structural elegance, our hair artisans construct intricate high updos, romantic textured braided crowns, low chignons, and fresh floral placements. Every look is built upon a sturdy thermal foundation and secured with invisible pins and flexible-hold setting mists. Specially created for brides, wedding guests, cocktail hosts, and gala attendees whose hairstyle must remain pristine under stage lighting and dance movements. Requires 60–90 minutes; delivers 10–14 hours of secure hold, with gentle unpinning and hydrating oil care recommended when unwinding.",
        features: [
          "Intricate festive updos, French/Dutch braids & textured buns",
          "Seamless floral accessory & jewelry pin coordination",
          "Sweat & movement-resistant architectural hold",
          "Duration: 60–90 mins | Longevity: 10–14 hours",
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
      "Every face is a unique canvas. Our skilled makeup artists highlight your authentic beauty with skin-first application techniques, luxury cosmetic formulations, and enduring high-definition finishes.",
    items: [
      {
        id: "makeup-different-occasions",
        name: "Makeup for Different Occasions",
        shortDesc: "Versatile, tailored makeup looks calibrated for morning functions, cocktail evenings, or festive gatherings.",
        fullDesc:
          "Whether attending an intimate family puja, a corporate award dinner, or a daytime engagement, our artists customize coverage, eye depth, and lip tones to harmonize with your attire and event lighting. The process begins with gentle skin hydration and pore-refining primer, followed by buildable featherweight foundation, subtle sculpting, and custom lash enhancement. Perfect for clients desiring an effortlessly elegant appearance that enhances their natural facial features without feeling heavy or masked. Application takes 45–60 minutes and lasts 8–10 hours; remove with an oil-based cleanser before sleep.",
        features: [
          "Daytime luminous glow or refined evening satin finish",
          "Custom eye contouring, delicate lash accents & lip tint",
          "Non-comedogenic, lightweight foundation blending",
          "Duration: 45–60 mins | Longevity: 8–10 hours",
        ],
        forGender: "Women",
        image: "/images/party-makeup.jpg",
      },
      {
        id: "party-event-makeup",
        name: "Party & Event Makeup",
        shortDesc: "Glamorous, camera-ready makeup designed to make you shine at celebrations and receptions.",
        fullDesc:
          "Make a lasting impression at receptions, cocktail galas, and festive parties with captivating, high-impact makeup artistry. Our artists sculpt facial contours, design bespoke eye artistry ranging from sultry smokey blends to champagne glitters, apply fluttery 3D lashes, and set vibrant smudge-resistant lip colors. Created for women attending high-energy celebrations where flash photography and dance-floor longevity are non-negotiable. The service requires 60–75 minutes and delivers 10–14 hours of crease-resistant, waterproof wear; double-cleansing is recommended post-event.",
        features: [
          "High-definition party makeup with zero flashback",
          "Custom smokey, cut-crease or metallic shimmer eye artistry",
          "3D luxury lash application & sculpted cheek definition",
          "Duration: 60–75 mins | Longevity: 10–14 hours",
        ],
        forGender: "Women",
        image: "/images/party-makeup.jpg",
      },
      {
        id: "bridal-wedding-makeup",
        name: "Bridal & Wedding Makeup",
        shortDesc: "Couture wedding day makeup delivering timeless royalty, flawless radiance, and emotion-proof longevity.",
        fullDesc:
          "Our signature bridal makeover combines regal Indian wedding aesthetics with contemporary precision. The comprehensive session includes micro-detailed skin prep, color correction, HD or airbrush foundation layering, intricate eye artistry, luxury lash application, and complete coordination with your bridal jewelry and dupatta draping. Designed specifically for brides who demand flawless beauty in 4K video and photography while looking radiant and authentic in person through hours of wedding rituals. Takes 90–120 minutes and delivers 14–18 hours of tear-proof, sweat-resistant wear.",
        features: [
          "Comprehensive bridal consultation & jewelry/attire coordination",
          "High-definition & airbrush flawless waterproof base",
          "Complete dupatta draping, bindi setting & jewelry fixing",
          "Duration: 90–120 mins | Longevity: 14–18 hours",
        ],
        forGender: "Women",
        image: "/images/bridal-makeup.jpg",
      },
      {
        id: "professional-makeup",
        name: "Studio & Professional Makeup",
        shortDesc: "Subtle, polished, high-definition makeup for studio shoots, corporate branding, and media appearances.",
        fullDesc:
          "Engineered specifically for corporate headshots, broadcast media, portfolio shoots, and video productions where studio lighting reveals every imperfection. We apply anti-shine primers, subtle color-balancing concealers, and matte satin foundations that neutralize redness and blemishes without reflecting camera flashes. Ideal for executives, presenters, models, and actors—both women and men—seeking clean, crisp skin definition under high-intensity 4K lenses. The session lasts 45–60 minutes, ensuring 6–8 hours of reflection-free studio performance.",
        features: [
          "Zero-glare matte & natural satin studio formulation",
          "Precision color correction for studio & 4K camera lenses",
          "Unisex blemish concealment & subtle feature enhancement",
          "Duration: 45–60 mins | Longevity: 6–8 hours",
        ],
        forGender: "Unisex",
        image: "/images/hair-women.jpg",
      },
      {
        id: "special-occasion-makeup",
        name: "Special Occasion & Milestone Makeup",
        shortDesc: "Custom styling for engagements, sangeet, anniversaries, and red-carpet milestones.",
        fullDesc:
          "Celebrate milestone occasions like Sangeet nights, Mehendi rituals, Roka ceremonies, and anniversary parties with themed, expressive makeup artistry. We craft color palettes that directly complement traditional attire, incorporating radiant dewy skin, defined brows, soft winged eyeliner, and long-wear hydrating lip colors. Perfect for family members, bridesmaids, and celebrants who want an elevated, photogenic look that feels weightless and comfortable all day. The treatment takes 60–75 minutes, maintaining vivid color and smooth texture for 10–12 hours.",
        features: [
          "Outfit & theme-coordinated color harmony and shimmer",
          "Breathable, lightweight skin feel for long festive hours",
          "Dewy cheekbone illumination & precision brow sculpting",
          "Duration: 60–75 mins | Longevity: 10–12 hours",
        ],
        forGender: "Women",
        image: "/images/bridal-makeup.jpg",
      },
    ],
    faqs: [
      {
        question: "What brands of makeup products are used?",
        answer:
          // TODO: Client to confirm specific preferred brand names or tier pricing
          "We use exclusively dermatologist-tested, luxury professional cosmetic formulations to ensure skin safety, flawless camera performance, and all-day radiance.",
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
        name: "Essential Nail Care & Buffing",
        shortDesc: "Cuticle care, nail strengthening, shaping, and restorative hydration.",
        fullDesc:
          "A fundamental wellness treatment designed to restore the natural integrity of your nails. Our nail technician performs gentle cuticle softening, precision filing to your preferred shape, ridge buffing for natural shine, and application of a vitamin-enriched strengthening serum followed by a soothing hand massage. Ideal for both men and women struggling with brittle, peeling nails or seeking clean, immaculate natural fingertips. Takes 30–40 minutes and keeps nails healthy and neat for 2–3 weeks; apply cuticle oil daily at home for optimal results.",
        features: [
          "Precision nail filing, smoothing & natural high-buff shine",
          "Gentle cuticle grooming & dead skin removal",
          "Keratin & vitamin nail plate strengthening treatment",
          "Duration: 30–40 mins | Results last: 2–3 weeks",
        ],
        forGender: "Unisex",
        image: "/images/nail-art.jpg",
      },
      {
        id: "nail-styling",
        name: "Gel Polish & Nail Styling",
        shortDesc: "Durable gel polish, glossy chip-resistant coats, and French tip classics.",
        fullDesc:
          "Say goodbye to chipped polish and dull finishes with our high-gloss gel overlays. The treatment includes nail plate sanitization and priming, base coat application, two coats of rich, high-pigment gel color, UV/LED curing, and a mirror-shine scratch-resistant top coat. Perfect for clients wanting vibrant, salon-fresh color that withstands household chores, typing, and travel without peeling. The appointment takes 45–60 minutes and delivers 3–4 weeks of chip-free wear; professional soak-off removal is recommended to protect the natural nail bed.",
        features: [
          "Extensive palette of classic, pastel & bold shades",
          "Fast UV/LED curing with zero smudge dry time",
          "High-gloss chip-resistant scratch-proof finish",
          "Duration: 45–60 mins | Longevity: 3–4 weeks",
        ],
        forGender: "Women",
        image: "/images/nail-art.jpg",
      },
      {
        id: "nail-art",
        name: "Custom Hand-Painted Nail Art & Accents",
        shortDesc: "Custom hand-painted designs, chrome foils, glitter ombré, and bridal accents.",
        fullDesc:
          "Express your signature aesthetic through bespoke nail artistry crafted by our creative nail specialists. We specialize in delicate hand-painted floral motifs, minimalist geometric lines, chrome and glazed-donut finishes, glitter ombré gradients, and luxury bridal embellishments with gold foil and crystals. Ideal for brides, festival celebrants, and fashion lovers who want unique fingertips coordinated with their wardrobe. Service takes 60–90 minutes depending on design complexity and stays pristine for 3–4 weeks.",
        features: [
          "Fine-line freehand painting & geometric line art",
          "Holographic chrome, metallic foils & glitter ombré",
          "Bridal Swarovski crystal accents & 3D embellishments",
          "Duration: 60–90 mins | Longevity: 3–4 weeks",
        ],
        forGender: "Women",
        image: "/images/nail-art.jpg",
      },
      {
        id: "manicure-pedicure",
        name: "Luxury Spa Manicure & Pedicure",
        shortDesc: "Relaxing floral foot soaks, exfoliating scrubs, mask therapies, and soothing massage.",
        fullDesc:
          "A deeply rejuvenating therapy that purifies, exfoliates, and hydrates hands and feet. The service features warm mineral foot baths infused with detox salts, gentle sugar crystal scrub exfoliation, electronic callus buffing for baby-soft heels, hydrating clay masques wrapped in warm towels, and a tension-melting acupressure massage. Essential for men and women dealing with tired feet, cracked heels, rough cuticles, or poor circulation. Takes 60–75 minutes and leaves skin silky smooth for 3–4 weeks; moisturize feet nightly with a rich foot cream.",
        features: [
          "Aromatic warm water soak with therapeutic detox salts",
          "Gentle sugar exfoliation & intensive heel callus smoothing",
          "Deep hydration masque with warm towel wraps",
          "Stress-relieving hand & foot reflex massage",
          "Duration: 60–75 mins | Smoothness: 3–4 weeks",
        ],
        forGender: "Unisex",
        image: "/images/beauty-spa.jpg",
      },
    ],
    faqs: [
      {
        question: "Are manicures and pedicures suitable for men?",
        answer:
          "Absolutely! Nail hygiene, callus smoothing, and cuticle health are vital for everyone. We provide specialized clean grooming manicures and pedicures for men in our private stations.",
      },
      {
        question: "How long does a gel nail application last?",
        answer:
          "Our professional gel polishes and overlays typically last 3 to 4 weeks with proper care, maintaining pristine shine without peeling or chipping.",
      },
      {
        question: "What sterilization standards do you follow for nail tools?",
        answer:
          "We adhere to strict hospital-grade sterilization for all metal implements, and use single-use disposable buffers, liners, and files for every client.",
      },
    ],
  },
  "mens-grooming": {
    slug: "mens-grooming",
    title: "Men's Grooming & Lounge",
    subtitle: "Precision Haircuts, Beard Architecture, Detox Facials & Executive Grooming",
    metaTitle: "Men's Haircuts, Beard Grooming & Barbering | Divisha's Unisex Salon",
    metaDescription:
      "Step into Divisha's dedicated Men's Lounge for precision fade haircuts, straight-razor beard sculpting, executive skin detan facials, and grooming packages.",
    heroImage: "/images/beard-grooming.jpg",
    badge: "Men's Lounge & Barbering",
    introText:
      "Crafted specifically for the modern gentleman. Enjoy dedicated barbering chairs, expert beard sculptors, and revitalizing skin treatments in a relaxed, masculine lounge atmosphere.",
    items: [
      {
        id: "mens-haircut-fade",
        name: "Precision Haircuts & Modern Fades",
        shortDesc: "Face-flattering scissor cuts, skin fades, and textured crops crafted for modern gentlemen.",
        fullDesc:
          "Our master barbers begin with a one-on-one consultation evaluating head shape, hair density, and personal style before delivering sharp scissor work, seamless skin fades, textured crops, or classic executive cuts. The service includes an energizing hair wash, hot lather neck detailing with a straight edge, and matte clay or pomade styling. Ideal for professionals and style-conscious men wanting a clean, distinguished silhouette that holds its form as it grows out. Takes 35–45 minutes; we recommend a haircut refresh every 3–4 weeks to maintain crisp lines.",
        features: [
          "Head shape & hairline growth pattern evaluation",
          "Precision scissor texturing, tapers & zero/skin fades",
          "Hot lather straight-razor neck cleanup & scalp tonic",
          "Duration: 35–45 mins | Recommended cadence: 3–4 weeks",
        ],
        forGender: "Men",
        image: "/images/hair-men.jpg",
      },
      {
        id: "beard-sculpting-shave",
        name: "Beard Architecture & Royal Razor Shave",
        shortDesc: "Straight-edge razor line sculpting, warm steam towel wraps, and nourishing beard conditioning.",
        fullDesc:
          "Elevate your facial hair into a clean, sculpted statement. The ritual features warm aromatic steam towel wraps to open pores and soften coarse bristles, precision clipper fading, straight-edge razor line detailing along cheeks and neckline, and a conditioning beard oil massage. Perfect for men with unruly, uneven beards, stubble, or sensitive skin prone to razor bumps. The session takes 25–35 minutes, delivering razor-sharp symmetry; maintain lines every 10–14 days and apply daily beard oil at home.",
        features: [
          "Warm aromatic steam towel pore prep & bristle softening",
          "Straight-edge razor cheek & neckline precision architecture",
          "Beard trimming, fade blending & conditioning botanical oil",
          "Duration: 25–35 mins | Maintenance: 10–14 days",
        ],
        forGender: "Men",
        image: "/images/beard-grooming.jpg",
      },
      {
        id: "executive-detan-facial",
        name: "Executive Detan & Clarifying Charcoal Facial",
        shortDesc: "Deep pore charcoal cleanse, steam blackhead extraction, and brightening anti-tan treatment.",
        fullDesc:
          "Formulated specifically for men's thicker, oil-prone skin exposed to urban pollution, commuting grime, and harsh sunlight. This facial incorporates a deep pore salicylic and activated charcoal cleanse, gentle steam extraction of blackheads, an exfoliating anti-tan pack, and an energizing facial and shoulder massage. Ideal for men battling dull skin, sun pigmentation, clogged pores, or fatigue before important meetings or celebrations. Takes 45–60 minutes and restores clear, matte vitality for 3–4 weeks; wear SPF daily to sustain results.",
        features: [
          "Activated charcoal deep pore cleanse & steam extraction",
          "Targeted anti-tan brightening pack for sun-exposed skin",
          "Energizing acupressure facial & shoulder tension release",
          "Duration: 45–60 mins | Freshness: 3–4 weeks",
        ],
        forGender: "Men",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "mens-scalp-spa",
        name: "Men's Scalp Detox & Restorative Hair Spa",
        shortDesc: "Clarifying tea tree scalp exfoliation, invigorating head massage, and anti-hairfall therapy.",
        fullDesc:
          "A targeted therapeutic ritual designed to combat dandruff, excess sebum, product buildup, and scalp fatigue. The treatment utilizes clarifying tea tree and botanical exfoliants applied directly to the scalp, followed by an invigorating 20-minute acupressure head massage, stimulating steam infusion, and an anti-hairfall tonic application. Ideal for men experiencing itchy scalps, thinning hair concerns, or daily styling stress. Requires 40–50 minutes; recommended on a monthly basis for optimal follicle health and deep mental relaxation.",
        features: [
          "Deep scalp exfoliation to eliminate dandruff & buildup",
          "20-minute acupressure head massage to stimulate microcirculation",
          "Nourishing hair follicle tonic & leave-in hydration",
          "Duration: 40–50 mins | Recommended: Monthly",
        ],
        forGender: "Men",
        image: "/images/hero-salon.jpg",
      },
      {
        id: "gentlemans-grooming-package",
        name: "The Gentleman's Complete Grooming Package",
        shortDesc: "All-inclusive executive session: Haircut, beard sculpting, detox facial clean-up, and nail buff.",
        fullDesc:
          "The definitive top-to-bottom grooming overhaul for the discerning man. This coordinated master session combines a bespoke precision haircut, beard sculpting or hot towel shave, an executive skin-brightening facial clean-up, and a hygienic hand and nail buff. Perfect for grooms, executives preparing for major presentations, or men desiring complete head-to-toe refinement in a single appointment. The experience lasts 90–105 minutes, leaving you completely refreshed, confident, and sharply styled.",
        features: [
          "Complete precision haircut, wash & matte styling",
          "Beard architecture / classic straight-razor shave",
          "Express clarifying skin clean-up & under-eye refresh",
          "Hygienic male manicure & hand massage",
          "Duration: 90–105 mins | All-in-one executive service",
        ],
        forGender: "Men",
        image: "/images/beard-grooming.jpg",
      },
    ],
    faqs: [
      {
        question: "Do you have a dedicated space for men's grooming?",
        answer:
          "Yes! Divisha's features a dedicated Men's Lounge area equipped with comfortable barbering chairs, hot towel facilities, and experienced male styling specialists.",
      },
      {
        question: "How often should I get my beard sculpted?",
        answer:
          "For sharp cheek lines and clean neckline definition, most clients visit our Men's Lounge every 10 to 14 days.",
      },
      {
        question: "Can I combine a haircut with beard and facial grooming in one session?",
        answer:
          "Yes, our Gentleman's Complete Grooming Package is structured specifically to deliver comprehensive grooming in a seamless, relaxing 90-minute visit.",
      },
    ],
  },
  "beauty-grooming": {
    slug: "beauty-grooming",
    title: "Skin & Beauty Care",
    subtitle: "Rejuvenating Facials, Precision Threading, Gentle Waxing & Body Wellness",
    metaTitle: "Beauty & Skin Care Services | Divisha's Unisex Salon",
    metaDescription:
      "Experience revitalizing skin facials, gentle waxing, precision threading, and holistic body wellness in private suites at Divisha's Unisex Salon.",
    heroImage: "/images/beauty-spa.jpg",
    badge: "Skin Care & Aesthetics",
    introText:
      "Look luminous, smooth, and confident every day. Our comprehensive beauty and skin care rituals are performed with gentle techniques and dermatologically safe formulations in private, hygienic treatment suites.",
    items: [
      {
        id: "beauty-services",
        name: "Rejuvenating Skin Facials & Clean-Ups",
        shortDesc: "Custom skin facials, brightening clean-ups, anti-aging therapies, and glow treatments.",
        fullDesc:
          "A multi-step customized facial therapy that addresses dullness, dehydration, and environmental congestion. Your esthetician analyzes your skin type before performing a double cleanse, gentle enzyme exfoliation, steam blackhead extraction, antioxidant serum infusion, and a calming cryo-mask with facial massage. Tailored for clients struggling with uneven tone, sun tan, or pollution fatigue wanting immediate radiance and velvety texture. Treatment takes 60–75 minutes and maintains a healthy glow for 3–4 weeks; avoid direct sun and apply broad-spectrum SPF daily.",
        features: [
          "Comprehensive skin typing & customized serum formulation",
          "Deep pore ultrasonic extraction & gentle enzyme peel",
          "Cooling botanical mask & lymphatic drainage facial massage",
          "Duration: 60–75 mins | Radiance lasts: 3–4 weeks",
        ],
        forGender: "Unisex",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "personal-grooming",
        name: "Precision Threading & Brow Definition",
        shortDesc: "Head-to-toe grooming rituals including hygienic waxing, precision threading, and skin polishing.",
        fullDesc:
          "Masterful brow mapping and facial hair removal utilizing 100% sanitized cotton thread for ultra-clean lines without skin pulling. Our specialists shape arches to balance your facial symmetry and gently thread upper lip, chin, and sideburns, concluding with a soothing rosewater and aloe vera ice compress. Ideal for anyone seeking sharp brow definition and smooth makeup canvas without the redness or peeling associated with hot wax. The service takes 15–25 minutes and delivers clean results for 2–4 weeks.",
        features: [
          "Individualized brow mapping tailored to face geometry",
          "Gentle 100% cotton thread technique for sensitive skin",
          "Post-threading cooling aloe & rosewater compress",
          "Duration: 15–25 mins | Results last: 2–4 weeks",
        ],
        forGender: "Unisex",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "womens-grooming",
        name: "Gentle Peel-Off & Stripless Waxing",
        shortDesc: "Fine facial contour threading, gentle waxing, body wraps, and radiant skin prep.",
        fullDesc:
          "A gentle, hygienic waxing protocol using premium low-temperature peel-off and stripless waxes that adhere strictly to hair rather than skin. Ideal for arms, legs, underarms, and sensitive bikini/facial zones, our certified estheticians ensure swift removal followed by calming tea-tree and chamomile lotions to prevent ingrowns and irritation. Perfect for clients desiring silky hair-free skin without the coarse regrowth and razor burns of shaving. Takes 30–60 minutes and maintains smooth skin for 3–5 weeks; gently exfoliate 3 days after treatment.",
        features: [
          "Strict zero double-dipping hygiene with disposable spatulas",
          "Low-temperature stripless wax designed for sensitive skin",
          "Calming tea-tree & botanical post-wax soothing treatment",
          "Duration: 30–60 mins | Smoothness: 3–5 weeks",
        ],
        forGender: "Women",
        image: "/images/beauty-spa.jpg",
      },
      {
        id: "complete-salon-beauty-care",
        name: "Holistic Salon Wellness Ritual",
        shortDesc: "Comprehensive monthly self-care ritual combining hair, facial, hands, and feet in one session.",
        fullDesc:
          "The ultimate head-to-toe pampering session designed for busy individuals who want complete rejuvenation in one coordinated appointment. This package harmonizes a nourishing hair wash and signature blowout, a radiance-boosting facial clean-up, and an express spa manicure and pedicure with warm towel therapy. Ideal for weekend indulgence, pre-vacation preparation, or a monthly wellness reset. The ritual lasts 2 to 2.5 hours, leaving you completely relaxed, beautifully styled, and radiant from head to toe.",
        features: [
          "Nourishing hair wash, conditioning & blowout styling",
          "Radiance-boosting facial clean-up & eye contour care",
          "Express manicure & pedicure with hydrating foot scrub",
          "Duration: 2 – 2.5 hours | Comprehensive full-body pampering",
        ],
        forGender: "Unisex",
        image: "/images/hero-salon.jpg",
      },
    ],
    faqs: [
      {
        question: "How do you ensure hygiene during waxing and facial services?",
        answer:
          "Hygiene is our strictest priority. We enforce a 100% zero double-dipping policy for waxing, use disposable bedsheets and towels, and sterilize all skincare instruments with autoclave UV technology.",
      },
      {
        question: "Is there a consultation for skin sensitivity before facials?",
        answer:
          "Yes, our estheticians conduct a skin sensitivity check and type assessment prior to applying any active facial formulations or peel-off waxes.",
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
