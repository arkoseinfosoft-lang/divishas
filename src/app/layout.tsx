import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

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
    default: `${siteConfig.name} | Luxury Hair, Makeup & Grooming for Men & Women`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  keywords: [
    "Divisha's Unisex Salon",
    "unisex salon near me",
    "bridal makeup artist",
    "makeup artist for wedding",
    "hair salon for men and women",
    "nail art and extensions",
    "men's grooming salon",
    "luxury hair spa treatments",
    "party makeup salon",
    "pedicure manicure salon",
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
    title: `${siteConfig.name} | Premium Unisex Salon`,
    description: siteConfig.shortDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-salon.jpg",
        width: 1200,
        height: 630,
        alt: "Divisha's Unisex Salon Interior & Beauty Styling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Unisex Salon`,
    description: siteConfig.shortDescription,
    images: ["/images/hero-salon.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
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
      </body>
    </html>
  );
}
