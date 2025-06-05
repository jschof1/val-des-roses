'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store';

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

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const ref = useRef(null);

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16"
        role="status"
        aria-live="polite"
      >
        <div className="text-6xl mb-4" role="img" aria-label="No products found">🌹</div>
        <h3 className="text-2xl font-light text-dark mb-4">No products found</h3>
        <p className="text-dark/60">Try adjusting your filters or browse our full collection.</p>
      </motion.div>
    );
  }

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      aria-label={`Product grid showing ${products.length} product${products.length !== 1 ? 's' : ''}`}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </section>
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addToCartStatus, setAddToCartStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { addItem } = useCartStore();

  const formatPrice = (amount: string, currencyCode: string) => {
    const numAmount = parseFloat(amount);
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: currencyCode,
    }).format(numAmount);
  };

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product.variants || product.variants.length === 0) return;

    setIsAddingToCart(true);
    setAddToCartStatus('idle');

    try {
      const cartItem = {
        id: `${product.id}-${product.variants[0].id}`,
        variantId: product.variants[0].id,
        title: product.title,
        price: product.variants[0].price,
        quantity: 1,
        handle: product.handle,
        image: product.images?.[0] || undefined,
      };

      await addItem(cartItem);
      setAddToCartStatus('success');

      // Reset status after 2 seconds
      setTimeout(() => setAddToCartStatus('idle'), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setAddToCartStatus('error');
      setTimeout(() => setAddToCartStatus('idle'), 2000);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const getQuickAddText = () => {
    if (isAddingToCart) return 'ADDING...';
    if (addToCartStatus === 'success') return 'ADDED!';
    if (addToCartStatus === 'error') return 'ERROR';
    return 'QUICK ADD';
  };

  const getQuickAddStyles = () => {
    if (addToCartStatus === 'success') return 'bg-green-600 text-cream';
    if (addToCartStatus === 'error') return 'bg-red-600 text-cream';
    return 'bg-burgundy text-cream hover:bg-burgundy/80';
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ y: 60, opacity: 0 }}
      animate={cardInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.1, 0.8),
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
        <div className="aspect-square relative overflow-hidden bg-cream/30 mb-4 sm:mb-6">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0].src}
              alt={product.images[0].altText || `${product.title} - luxury preserved rose product`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              priority={index < 4} // Prioritize first 4 images for performance
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
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-burgundy/80 flex items-center justify-center"
            aria-hidden="true"
          >
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-cream text-sm font-medium tracking-wide"
            >
              VIEW DETAILS
            </motion.span>
          </motion.div>

          {/* Product Type Badge */}
          {product.productType && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-dark"
              aria-label={`Product type: ${product.productType}`}
            >
              {product.productType}
            </motion.div>
          )}
        </div>

        {/* Product Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={cardInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-2 sm:space-y-3"
        >
          <h3 className="text-base sm:text-lg font-light text-dark tracking-wide group-hover:text-burgundy transition-colors duration-300 line-clamp-2">
            {product.title}
          </h3>
          
          <p className="text-sm text-dark/60 leading-relaxed line-clamp-2 hidden sm:block">
            {product.description}
          </p>
          
          {product.variants && product.variants.length > 0 && (
            <div className="flex items-center justify-between gap-2">
              <p className="text-base sm:text-lg font-light text-burgundy">
                {formatPrice(product.variants[0].price.amount, product.variants[0].price.currencyCode)}
              </p>
              
              {/* Quick Add Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleQuickAdd}
                disabled={isAddingToCart}
                className={`opacity-0 group-hover:opacity-100 transition-all duration-300 px-3 py-1 text-xs font-medium tracking-wide disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 ${getQuickAddStyles()}`}
                aria-label={`Quick add ${product.title} to cart`}
              >
                {getQuickAddText()}
              </motion.button>
            </div>
          )}

          {/* Tags - Desktop only for space optimization */}
          {product.tags && product.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex flex-wrap gap-1"
              aria-label="Product tags"
            >
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
            </motion.div>
          )}
        </motion.div>
      </Link>
    </motion.article>
  );
} 