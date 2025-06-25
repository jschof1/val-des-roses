'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchAllProducts } from '@/lib/shopify';

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
  }>;
  productType?: string;
  tags?: string[];
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🔄 FeaturedProducts useEffect running');
    const loadProducts = async () => {
      try {
        console.log('📦 About to call fetchAllProducts...');
        console.log('📦 fetchAllProducts function:', typeof fetchAllProducts);
        
        const productsData = await fetchAllProducts();
        console.log('📦 fetchAllProducts returned:', productsData?.length || 0, 'products');
        console.log('📦 Full products data:', productsData);
        
        // Take first 4 products for featured section
        const featuredProducts = (productsData || []).slice(0, 4);
        console.log('⭐ Setting featured products:', featuredProducts.length, 'items');
        featuredProducts.forEach((product, index) => {
          console.log(`⭐ Featured Product ${index + 1}:`, {
            id: product.id,
            title: product.title,
            handle: product.handle,
            hasImages: product.images?.length > 0
          });
        });
        
        setProducts(featuredProducts);
      } catch (error) {
        console.error('❌ Error loading featured products:', error);
        setProducts([]);
      } finally {
        console.log('✅ Setting loading to false');
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  console.log('🔍 FeaturedProducts render - loading:', loading, 'products count:', products.length);

  if (loading) {
    console.log('⏳ Showing loading state');
    return (
      <section className="relative py-32 px-4 bg-white textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-center text-dark mb-20">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-cream/40 mb-4"></div>
                <div className="h-4 bg-cream/40 mb-2"></div>
                <div className="h-4 bg-cream/40 w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  console.log('✅ Rendering main FeaturedProducts section with', products.length, 'products');

  return (
    <section className="relative py-32 px-4 bg-white textured-overlay">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl lg:text-6xl font-light tracking-wide text-center text-dark mb-8"
        >
          Featured Collection
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="h-px bg-burgundy w-32 mx-auto mb-20"
        />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: 'easeOut'
              }}
              className="group"
            >
              <Link 
                href={`/shop/${product.handle}`} 
                className="block focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                aria-label={`View details for ${product.title}`}
              >
                {/* Product Image */}
                <div className="aspect-square relative overflow-hidden bg-cream/30 mb-6">
                  {product.images?.[0] ? (
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].altText || `${product.title} - luxury preserved rose product`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 4}
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center bg-cream/40"
                      role="img"
                      aria-label={`${product.title} - no image available`}
                    >
                      <div className="text-center text-dark/50">
                        <div className="text-4xl mb-2">🌹</div>
                        <p className="text-sm">No image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className=" text-sm font-medium tracking-wide">
                      VIEW DETAILSSS
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
                        ? `${product.description.slice(0, 120)}...` 
                        : product.description
                      }
                    </p>
                  )}
                  
                  {product.variants?.[0] && (
                    <p className="text-lg font-light text-burgundy">
                      £{product.variants[0].price.amount} {product.variants[0].price.currencyCode}
                    </p>
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

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-center mt-20"
        >
          <Link 
            href="/shop" 
            className="inline-block border-2 border-burgundy text-burgundy px-12 py-4 text-sm font-medium tracking-[0.1em] hover:bg-burgundy hover: transition-all duration-500"
          >
            EXPLORE ALL ROSES
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 