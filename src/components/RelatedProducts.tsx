'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formatPrice = (price: { amount: string; currencyCode: string }) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: price.currencyCode
    }).format(parseFloat(price.amount));
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-4">
          You May Also Like
        </h2>
        <div className="h-px bg-gray-400 w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => {
          const primaryImage = product.images[0] || {
            id: 'placeholder',
            src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            altText: product.title
          };

          return (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: 'easeOut' 
              }}
            >
              <Link href={`/shop/${product.handle}`} className="group block">
                <div className="space-y-4">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={primaryImage.src}
                      alt={primaryImage.altText || product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={80}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick view indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-900 tracking-wide">
                        VIEW DETAILS
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2 text-center">
                    <h3 className="text-lg font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    {product.productType && (
                      <div className="text-xs text-gray-500 tracking-wider uppercase">
                        {product.productType}
                      </div>
                    )}
                    
                    <div className="text-xl font-light text-gray-700">
                      {formatPrice(product.variants[0].price)}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* View All Products Link */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="text-center mt-12"
      >
        <Link 
          href="/shop"
          className="inline-block border-2 border-gray-400 text-gray-700 px-8 py-3 text-sm font-medium tracking-[0.1em] hover:bg-gray-400 hover:text-white transition-all duration-500"
        >
          VIEW ALL PRODUCTS
        </Link>
      </motion.div>
    </section>
  );
} 