'use client';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data for the site
export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Val des Roses",
  description: "Luxury preserved roses crafted with timeless elegance and heritage since 1952",
  url: "https://valdesroses.com",
  logo: "https://valdesroses.com/logo.png",
  sameAs: [
    "https://www.instagram.com/valdesroses",
    "https://www.facebook.com/valdesroses",
    "https://twitter.com/valdesroses"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@valdesroses.com",
    availableLanguage: ["English", "French"]
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
    addressLocality: "Paris"
  },
  foundingDate: "1952",
  numberOfEmployees: "10-50"
};

// Website structured data
export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Val des Roses",
  url: "https://valdesroses.com",
  description: "Luxury preserved roses collection",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://valdesroses.com/shop?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// LocalBusiness structured data (if applicable)
export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://valdesroses.com",
  name: "Val des Roses",
  image: "https://valdesroses.com/logo.png",
  description: "Luxury preserved roses crafted with timeless elegance",
  url: "https://valdesroses.com",
  telephone: "+33-1-23-45-67-89",
  email: "hello@valdesroses.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Rue de la Paix",
    addressLocality: "Paris",
    postalCode: "75001",
    addressCountry: "FR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.8566",
    longitude: "2.3522"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00"
    }
  ],
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card, PayPal, Bank Transfer"
};

// Product structured data helper
export const createProductData = (product: Record<string, unknown>) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://valdesroses.com/shop/${product.handle}`,
  name: product.title,
  description: product.description,
  image: (product.images as Record<string, unknown>[])?.[0]?.src || "https://valdesroses.com/placeholder.jpg",
  url: `https://valdesroses.com/shop/${product.handle}`,
  brand: {
    "@type": "Brand",
    name: "Val des Roses"
  },
  category: product.productType || "Preserved Roses",
  offers: (product.variants as Record<string, unknown>[])?.map((variant: Record<string, unknown>) => ({
    "@type": "Offer",
    "@id": `https://valdesroses.com/shop/${product.handle}#${variant.id}`,
    price: (variant.price as Record<string, unknown>).amount,
    priceCurrency: (variant.price as Record<string, unknown>).currencyCode,
    availability: "https://schema.org/InStock",
    url: `https://valdesroses.com/shop/${product.handle}`,
    seller: {
      "@type": "Organization",
      name: "Val des Roses"
    }
  })) || []
}); 