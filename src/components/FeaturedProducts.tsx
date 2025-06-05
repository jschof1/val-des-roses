'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
}

// Dummy product data for development
const dummyProducts: Product[] = [
  {
    id: '1',
    title: 'Heritage Rosa Damascena',
    handle: 'heritage-rosa-damascena',
    description: 'A classic Damask rose with an intoxicating fragrance, cultivated since ancient times. Known for its deep pink petals and therapeutic properties.',
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Heritage Rosa Damascena pink roses'
      }
    ],
    variants: [
      {
        id: '1',
        price: {
          amount: '45.00',
          currencyCode: 'EUR'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Gallica Officinalis',
    handle: 'gallica-officinalis',
    description: 'The apothecary rose, steeped in history and known for its medicinal properties. Deep crimson blooms with a rich, complex fragrance.',
    images: [
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Gallica Officinalis red roses'
      }
    ],
    variants: [
      {
        id: '2',
        price: {
          amount: '52.00',
          currencyCode: 'EUR'
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Alba Maxima',
    handle: 'alba-maxima',
    description: 'The great white rose, symbol of purity and elegance. Large, fragrant white blooms that have graced European gardens for centuries.',
    images: [
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Alba Maxima white roses'
      }
    ],
    variants: [
      {
        id: '3',
        price: {
          amount: '48.00',
          currencyCode: 'EUR'
        }
      }
    ]
  },
  {
    id: '4',
    title: 'Centifolia Muscosa',
    handle: 'centifolia-muscosa',
    description: 'The moss rose with its distinctive mossy sepals and cabbage-like form. A romantic choice with deep pink, heavily scented blooms.',
    images: [
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1455659817273-f2fd515cbdfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Centifolia Muscosa moss roses'
      }
    ],
    variants: [
      {
        id: '4',
        price: {
          amount: '55.00',
          currencyCode: 'EUR'
        }
      }
    ]
  }
];

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 800));
      setProducts(dummyProducts);
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
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
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: 'easeOut'
              }}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden bg-cream/30 mb-6">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].altText || product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-cream/40">
                    <div className="text-center text-dark/50">
                      <div className="text-3xl mb-2">🌹</div>
                      <p className="text-sm font-light">{product.title}</p>
                    </div>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="text-cream text-sm font-medium tracking-wide">
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-light text-dark tracking-wide group-hover:text-burgundy transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-sm text-dark/60 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                
                {product.variants && product.variants.length > 0 && (
                  <p className="text-lg font-light text-burgundy">
                    €{product.variants[0].price.amount}
                  </p>
                )}
              </div>
            </motion.div>
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
            className="inline-block border-2 border-burgundy text-burgundy px-12 py-4 text-sm font-medium tracking-[0.1em] hover:bg-burgundy hover:text-cream transition-all duration-500"
          >
            EXPLORE ALL ROSES
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 