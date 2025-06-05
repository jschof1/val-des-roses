'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    totalQuantity, 
    subtotal, 
    isLoading, 
    removeItem, 
    updateQuantity, 
    closeCart, 
    createCheckoutSession 
  } = useCartStore();

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen) {
      // Focus the close button when cart opens
      const closeButton = document.querySelector('[aria-label="Close cart"]') as HTMLElement;
      if (closeButton) {
        closeButton.focus();
      }
    }
  }, [isOpen]);

  // Handle escape key to close cart
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when cart is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  const formatPrice = (price: { amount: string; currencyCode: string }) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: price.currencyCode
    }).format(parseFloat(price.amount));
  };

  const formatTotal = (amount: number, currencyCode: string = 'EUR') => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currencyCode
    }).format(amount);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Cart Drawer */}
          <motion.aside
            id="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            aria-describedby="cart-description"
          >
            {/* Header */}
            <header className="flex items-center justify-between p-6 border-b border-cream">
              <h2 id="cart-title" className="text-xl font-light tracking-wide text-dark">
                Shopping Cart ({totalQuantity})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-cream/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6" role="main">
              <div id="cart-description" className="sr-only">
                Your shopping cart contains {totalQuantity} item{totalQuantity !== 1 ? 's' : ''}
              </div>
              
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4" role="img" aria-label="Empty cart">🛒</div>
                  <h3 className="text-lg font-light text-dark mb-2">Your cart is empty</h3>
                  <p className="text-dark/60 mb-6">Add some beautiful roses to get started</p>
                  <button
                    onClick={closeCart}
                    className="bg-burgundy text-cream px-6 py-3 text-sm font-medium tracking-wide hover:bg-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-burgundy"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="sr-only">Cart Items</h3>
                  {items.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 py-4 border-b border-cream/50 last:border-0"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 bg-cream/20 flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image.src}
                            alt={item.image.altText || `${item.title} product image`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center" role="img" aria-label={`${item.title} - no image available`}>
                            <div className="text-2xl">🌹</div>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/shop/${item.handle}`}
                          onClick={closeCart}
                          className="text-sm font-medium text-dark hover:text-burgundy transition-colors duration-300 line-clamp-2 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                        >
                          {item.title}
                        </Link>
                        
                        <div className="text-sm text-burgundy font-light mt-1">
                          {formatPrice(item.price)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-dark/20" role="group" aria-label={`Quantity controls for ${item.title}`}>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 hover:bg-cream/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                              aria-label={`Decrease quantity of ${item.title}`}
                            >
                              −
                            </button>
                            <div className="px-3 py-1 border-x border-dark/20 text-sm min-w-[40px] text-center" aria-label={`Quantity: ${item.quantity}`}>
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-cream/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
                              aria-label={`Increase quantity of ${item.title}`}
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-dark/60 hover:text-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                            aria-label={`Remove ${item.title} from cart`}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Checkout */}
            {items.length > 0 && (
              <footer className="border-t border-cream p-6 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-light">Subtotal</span>
                  <span className="font-medium text-burgundy">{formatTotal(subtotal)}</span>
                </div>

                <p className="text-xs text-dark/60">
                  Shipping and taxes calculated at checkout
                </p>

                  <button
                    onClick={createCheckoutSession}
                  disabled={isLoading}
                  className="w-full bg-burgundy text-cream py-4 text-sm font-medium tracking-wide hover:bg-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-burgundy"
                    aria-describedby="checkout-description"
                  >
                  {isLoading ? 'Creating Checkout...' : 'PROCEED TO CHECKOUT'}
                  </button>
                
                  <div id="checkout-description" className="sr-only">
                  Proceed to secure Shopify checkout to complete your purchase
                </div>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
} 