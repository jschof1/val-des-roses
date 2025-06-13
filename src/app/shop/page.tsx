'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchAllProducts } from '@/lib/shopify';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: Array<{
    id: string;
    src: string;
    altText: string | null;
  }>;
  variants: Array<{
    id: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    title?: string;
    selectedOptions?: Array<{
      name: string;
      value: string;
    }>;
  }>;
  productType?: string;
  tags?: string[];
  options?: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
}

export default function ShopPage() {
  const ref = useRef(null);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productsData = await fetchAllProducts();
        
        setProducts(productsData || []);
        
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-burgundy mx-auto mb-4"></div>
              <p className="text-lg text-dark/60">Loading products...</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-8">Shop</h1>
            <div className="bg-red-50 border border-red-200 p-6 max-w-md mx-auto">
              <p className="text-red-800">Sorry, we&apos;re having trouble loading our products right now.</p>
              <p className="text-red-600 text-sm mt-2">Please try again later.</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main ref={ref} className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide text-dark mb-4">Shop</h1>
          <div className="h-px bg-burgundy w-16 mx-auto mb-6" />
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Discover our curated collection of premium preserved roses and luxury floral arrangements
          </p>
        </motion.header>
        
        {products.length === 0 && !loading ? (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🌹</div>
            <p className="text-lg text-dark/60 mb-2">No products available at the moment.</p>
            <p className="text-dark/40">Please check back soon!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: mounted ? Math.min(index * 0.1, 0.8) : 0,
                  ease: 'easeOut'
                }}
                className="group"
              >
                <Link 
                  href={`/shop/£{product.handle}`} 
                  className="block focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                  aria-label={`View details for £{product.title}`}
                >
                  {/* Product Image */}
                  <div className="aspect-square relative overflow-hidden bg-cream/30 mb-6">
                    {product.images?.[0] ? (
                      <Image
                        src={product.images[0].src}
                        alt={product.images[0].altText || `£{product.title} - luxury preserved rose product`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 6}
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center bg-cream/40"
                        role="img"
                        aria-label={`£{product.title} - no image available`}
                      >
                        <div className="text-center text-dark/50">
                          <div className="text-4xl mb-2">🌹</div>
                          <p className="text-sm">No image</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-cream text-sm font-medium tracking-wide">
                        VIEW DETAILS
                      </span>
                    </div>

                    {/* Product Type Badge */}
                    {product.productType && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-dark">
                        {product.productType}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-light text-dark tracking-wide group-hover:text-burgundy transition-colors duration-300 line-clamp-2">
                      {product.title}
                    </h3>
                    
                    {product.description && (
                      <p className="text-sm text-dark/60 leading-relaxed line-clamp-2">
                        {product.description.length > 120 
                          ? `£{product.description.slice(0, 120)}...` 
                          : product.description
                        }
                      </p>
                    )}
                    
                    {product.variants?.[0] && (
                      <div className="space-y-1">
                        <p className="text-lg font-light text-burgundy">
                          £{product.variants[0].price.amount}
                        </p>
                        {product.options && product.options.length > 0 && (
                          <p className="text-xs text-dark/50">
                            {product.options.map(option => option.values.length).join(' × ')} variants available
                          </p>
                        )}
                      </div>
                    )}

                    {/* Tags */}
                    {product.tags && product.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1" aria-label="Product tags">
                        {product.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-dark/40 bg-cream/40 px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {product.tags.length > 2 && (
                          <span className="text-xs text-dark/40">
                            +{product.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
} 