'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { useCartStore } from '@/store';

interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
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
  images?: Array<{
    id: string;
    src: string;
    altText: string | null;
  }>;
}

interface ProductVariant {
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
}

interface ProductInfoProps {
  product: Product;
  selectedVariant: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
}

export default function ProductInfo({ product, selectedVariant, onVariantChange }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [addToCartStatus, setAddToCartStatus] = useState<'idle' | 'adding' | 'success' | 'error'>('idle');
  const { addItem } = useCartStore();

  const handleAddToCart = async () => {
    if (!selectedVariant) return;

    setAddToCartStatus('adding');
    
    try {
      const cartItem = {
        id: `${product.id}-${selectedVariant.id}`,
        variantId: selectedVariant.id,
        title: product.title,
        price: selectedVariant.price,
        quantity,
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
    }
  };

  const formatPrice = (price: { amount: string; currencyCode: string }) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: price.currencyCode
    }).format(parseFloat(price.amount));
  };

  const getButtonText = () => {
    switch (addToCartStatus) {
      case 'adding':
        return 'ADDING TO CART...';
      case 'success':
        return 'ADDED TO CART!';
      case 'error':
        return 'ERROR - TRY AGAIN';
      default:
        return 'ADD TO CART';
    }
  };

  const getButtonStyles = () => {
    switch (addToCartStatus) {
      case 'success':
        return 'bg-green-600 text-cream';
      case 'error':
        return 'bg-red-600 text-cream';
      case 'adding':
        return 'bg-burgundy/50 text-cream';
      default:
        return 'bg-burgundy text-cream hover:bg-dark';
    }
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Product Title */}
      <motion.header
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-dark mb-4">
          {product.title}
        </h1>
        <div className="h-px bg-burgundy w-12 sm:w-16 mb-4 lg:mb-6" />
      </motion.header>

      {/* Price */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-2xl sm:text-3xl font-light text-burgundy mb-2" aria-label={`Price: ${formatPrice(selectedVariant.price)}`}>
          {formatPrice(selectedVariant.price)}
        </div>
        {product.productType && (
          <div className="text-sm text-dark/60 tracking-wide uppercase">
            {product.productType}
          </div>
        )}
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-base sm:prose-lg max-w-none"
      >
        <p className="text-base sm:text-lg text-dark/70 leading-relaxed">
          {product.description}
        </p>
      </motion.div>

      {/* Variant Selection */}
      {product.options && product.options.length > 0 && (
        <motion.fieldset
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4 lg:space-y-6"
        >
          <legend className="sr-only">Product variant selection</legend>
          {product.options.map((option) => (
            <div key={option.id}>
              <label className="block text-sm font-medium text-dark mb-2 tracking-wide">
                {option.name}
              </label>
              <div className="flex flex-wrap gap-2" role="group" aria-label={`${option.name} options`}>
                {option.values.map((value) => {
                  const variant = product.variants.find(v => 
                    v.selectedOptions?.some(opt => opt.name === option.name && opt.value === value)
                  );
                  const isSelected = selectedVariant.selectedOptions?.some(
                    opt => opt.name === option.name && opt.value === value
                  );
                  
                  return (
                    <button
                      key={value}
                      onClick={() => variant && onVariantChange(variant)}
                      className={`px-3 sm:px-4 py-2 border transition-all duration-300 text-sm font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 ${
                        isSelected
                          ? 'border-burgundy bg-burgundy text-cream'
                          : 'border-dark/20 text-dark hover:border-burgundy hover:text-burgundy'
                      }`}
                      aria-label={`Select ${option.name}: ${value}${isSelected ? ' (currently selected)' : ''}`}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.fieldset>
      )}

      {/* Quantity and Add to Cart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-4 lg:space-y-6"
      >
        {/* Quantity Selector */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-dark mb-2 tracking-wide">
            Quantity
          </label>
          <div className="flex items-center border border-dark/20 w-fit" role="group" aria-label="Quantity selector">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 sm:px-4 py-3 hover:bg-cream/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              −
            </button>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="text-black px-4 sm:px-6 py-3 border-x border-dark/20 min-w-[60px] sm:min-w-[80px] text-center bg-transparent focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
              aria-label="Quantity"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 sm:px-4 py-3 hover:bg-cream/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={addToCartStatus === 'adding'}
          className={`w-full py-3 sm:py-4 px-6 sm:px-8 text-sm font-medium tracking-[0.1em] transition-all duration-500 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-burgundy ${getButtonStyles()}`}
          aria-describedby="add-to-cart-status"
        >
          {getButtonText()}
        </button>
        <div id="add-to-cart-status" className="sr-only" aria-live="polite">
          {addToCartStatus === 'success' && 'Product added to cart successfully'}
          {addToCartStatus === 'error' && 'Error adding product to cart, please try again'}
        </div>

        {/* Product Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="pt-4 border-t border-cream">
            <div className="text-sm text-dark/60 mb-2 tracking-wide">TAGS</div>
            <div className="flex flex-wrap gap-1 sm:gap-2" role="list" aria-label="Product tags">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-cream/50 text-xs text-dark/70 tracking-wider uppercase"
                  role="listitem"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
} 