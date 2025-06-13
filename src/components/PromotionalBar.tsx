'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function PromotionalBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-burgundy text-cream"
      role="banner"
      aria-label="Promotional announcement"
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          
          {/* Promotional Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-medium tracking-wide">
              ✨ Same Day Delivery Available in London ✨
            </p>
          </motion.div>

          {/* Close Button */}
          <div className="flex-1 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="text-cream/80 hover:text-cream transition-colors duration-300 p-1 focus:outline-none focus:ring-2 focus:ring-cream/50"
              aria-label="Close promotional banner"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 