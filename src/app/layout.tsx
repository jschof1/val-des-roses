import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import SkipLink from "@/components/SkipLink";
import NotificationManager from "@/components/NotificationManager";
import StructuredData, { organizationData, websiteData } from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Val des Roses - Luxury Preserved Roses",
    template: "%s | Val des Roses"
  },
  description: "Discover our collection of preserved roses, crafted with timeless elegance and heritage since 1952. Premium preserved roses that last forever.",
  keywords: [
    "preserved roses",
    "luxury roses",
    "forever roses",
    "eternal roses",
    "rose preservation",
    "premium flowers",
    "luxury floral",
    "romantic gifts",
    "anniversary gifts",
    "valentine roses"
  ],
  authors: [{ name: "Val des Roses" }],
  creator: "Val des Roses",
  publisher: "Val des Roses",
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
    locale: "en_US",
    url: "https://valdesroses.com",
    siteName: "Val des Roses",
    title: "Val des Roses - Luxury Preserved Roses",
    description: "Discover our collection of preserved roses, crafted with timeless elegance and heritage since 1952.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Val des Roses - Luxury Preserved Roses Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Val des Roses - Luxury Preserved Roses",
    description: "Discover our collection of preserved roses, crafted with timeless elegance and heritage since 1952.",
    images: ["/og-image.jpg"],
    creator: "@valdesroses",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: "https://valdesroses.com",
  },
  category: "luxury goods",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#8B0000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationData} />
        <StructuredData data={websiteData} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Analytics 
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
        />
        <SkipLink />
        <Header />
        <main id="main-content" className="pt-16" tabIndex={-1}>
          {children}
        </main>
        <CartDrawer />
        <NotificationManager />
      </body>
    </html>
  );
}
