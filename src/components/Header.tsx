'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useCartStore, useMobileMenuOpen, useToggleMobileMenu } from '@/store';

export default function Header() {
  const isMobileMenuOpen = useMobileMenuOpen();
  const toggleMobileMenu = useToggleMobileMenu();
  const { totalQuantity, isOpen: isCartOpen, toggleCart } = useCartStore();

  // Animation variants for underline
  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-cream/40"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="justify-self-start">
            <Link 
              href="/" 
              className="flex items-center space-x-2" 
              aria-label="Val des Roses - Go to homepage"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-2xl lg:text-lg font-light tracking-[0.15em] text-dark"
              >
                VAL DES ROSES
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation - Always Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-8" role="navigation" aria-label="Main navigation">
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/shop"
                className="text-dark transition-colors duration-300 text-sm font-medium tracking-wide focus:outline-none pb-1"
              >
                SHOP
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/about"
                className="text-dark transition-colors duration-300 text-sm font-medium tracking-wide focus:outline-none pb-1"
              >
                ABOUT
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/care-guide"
                className="text-dark transition-colors duration-300 text-sm font-medium tracking-wide focus:outline-none pb-1"
              >
                CARE GUIDE
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <Link
                href="/contact"
                className="text-dark transition-colors duration-300 text-sm font-medium tracking-wide focus:outline-none pb-1"
              >
                CONTACT
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
          </nav>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center justify-end space-x-4">
            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className="relative p-2 text-dark hover:text-burgundy transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
              aria-label={`Shopping cart with ${totalQuantity} item${totalQuantity !== 1 ? 's' : ''}`}
              aria-expanded={isCartOpen ? 'true' : 'false'}
              aria-controls="cart-drawer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l1.5 6m0 0h9M16 19a2 2 0 11-4 0 2 2 0 014 0zM9 19a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Cart count badge */}
              {totalQuantity > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-burgundy text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                  aria-hidden="true"
                >
                  {totalQuantity}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-dark hover:text-burgundy transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-controls="mobile-menu"
            >
              <motion.svg
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          id="mobile-menu"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="py-4 space-y-4 border-t border-cream/40 mt-4">
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative inline-block"
            >
              <Link
                href="/shop"
                onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                className="block text-dark transition-colors duration-300 text-lg font-light tracking-wide focus:outline-none pb-1"
              >
                SHOP
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative inline-block"
            >
              <Link
                href="/about"
                onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                className="block text-dark transition-colors duration-300 text-lg font-light tracking-wide focus:outline-none pb-1"
              >
                ABOUT
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative inline-block"
            >
              <Link
                href="/care-guide"
                onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                className="block text-dark transition-colors duration-300 text-lg font-light tracking-wide focus:outline-none pb-1"
              >
                CARE GUIDE
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
            
            <motion.div
              initial="initial"
              whileHover="hover"
              className="relative inline-block"
            >
              <Link
                href="/contact"
                onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                className="block text-dark transition-colors duration-300 text-lg font-light tracking-wide focus:outline-none pb-1"
              >
                CONTACT
              </Link>
              <motion.div
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left"
              />
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
} 