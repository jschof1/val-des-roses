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
  name: "Vallée des Roses",
  description: "Luxury preserved roses with architecture-inspired design by Iryna. Premium London-based florist specializing in preserved roses that last 2-3 years.",
  url: "https://valleedesroses.com",
  logo: "https://valleedesroses.com/logo.png",
  sameAs: [
    "https://www.instagram.com/valleedesroses",
    "https://www.facebook.com/valleedesroses",
    "https://twitter.com/valleedesroses"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@valleedesroses.com",
    telephone: "+44 7436 229066",
    availableLanguage: ["English"]
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 4, 41 S Audley St",
    addressLocality: "London",
    postalCode: "W1K 2PS",
    addressCountry: "GB"
  },
  founder: {
    "@type": "Person",
    name: "Iryna"
  },
  numberOfEmployees: "1-10"
};

// Website structured data
export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vallée des Roses",
  url: "https://valleedesroses.com",
  description: "Luxury preserved roses with architecture-inspired design by Iryna. London delivery available.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://valleedesroses.com/shop?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// LocalBusiness structured data (if applicable)
export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://valleedesroses.com",
  name: "Vallée des Roses",
  image: "https://valleedesroses.com/logo.png",
  description: "Luxury preserved roses with architecture-inspired design by Iryna",
  url: "https://valleedesroses.com",
  telephone: "+44 7436 229066",
  email: "hello@valleedesroses.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 4, 41 S Audley St",
    addressLocality: "London",
    postalCode: "W1K 2PS",
    addressCountry: "GB"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "51.5074",
    longitude: "-0.1278"
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
  priceRange: "£££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Credit Card, PayPal, Bank Transfer"
};

// Product structured data helper
export const createProductData = (product: Record<string, unknown>) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://valleedesroses.com/shop/${product.handle}`,
  name: product.title,
  description: product.description,
  image: (product.images as Record<string, unknown>[])?.[0]?.src || "https://valleedesroses.com/placeholder.jpg",
  url: `https://valleedesroses.com/shop/${product.handle}`,
  brand: {
    "@type": "Brand",
    name: "Vallée des Roses"
  },
  category: product.productType || "Preserved Roses",
  offers: (product.variants as Record<string, unknown>[])?.map((variant: Record<string, unknown>) => ({
    "@type": "Offer",
    "@id": `https://valleedesroses.com/shop/${product.handle}#${variant.id}`,
    price: (variant.price as Record<string, unknown>).amount,
    priceCurrency: (variant.price as Record<string, unknown>).currencyCode,
    availability: "https://schema.org/InStock",
    url: `https://valleedesroses.com/shop/${product.handle}`,
    seller: {
      "@type": "Organization",
      name: "Vallée des Roses"
    }
  })) || []
}); 