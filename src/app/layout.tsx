import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FloatingDesktopCTA } from "@/components/layout/FloatingDesktopCTA";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#E0007C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Hair, Makeup & Bridal Salon Kanpur`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Divisha's Unisex Salon in Kanpur offers expert hair styling, HD bridal makeup, nail art, men's grooming, and luxury skin care. Open 7 days — Mon–Fri 10AM–9PM, Sat–Sun 9:30AM–9:30PM. Book at +91 85270 91578.",
  keywords: [
    "unisex salon Kanpur",
    "bridal makeup Kanpur",
    "hair salon Kanpur",
    "hair salon Kalyanpur Kanpur",
    "best salon in Kanpur",
    "bridal salon Kanpur",
    "Divisha's Unisex Salon",
    "makeup artist Kanpur",
    "nail art salon Kanpur",
    "men's grooming Kanpur",
    "unisex salon near me",
    "luxury hair spa Kanpur",
    "party makeup Kanpur",
    "pedicure manicure Kanpur",
    "salon Kalyanpur",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Premium Unisex Salon in Kanpur`,
    description:
      "Divisha's Unisex Salon in Kanpur — professional hair styling, bridal makeup, nail art, men's grooming & skin care. Open 7 days a week.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-salon.webp",
        width: 1200,
        height: 630,
        alt: "Divisha's Unisex Salon — Premium Hair, Makeup & Bridal Salon in Kanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Unisex Salon in Kanpur`,
    description:
      "Divisha's Unisex Salon in Kanpur — professional hair styling, bridal makeup, nail art, men's grooming & skin care. Open 7 days a week.",
    images: ["/images/hero-salon.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/images/favicon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/images/favicon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  // NOTE: No root-level canonical here — each page sets its own via alternates.canonical.
  // Having a root canonical caused every page to inherit the homepage URL as its canonical.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full w-full max-w-full overflow-x-clip relative flex flex-col bg-[#F3E8DC] text-[#221E20] font-sans antialiased selection:bg-[#FCE4EC] selection:text-[#C2185B]">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-clip pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
        <FloatingDesktopCTA />
      </body>
    </html>
  );
}
