'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function PromotionalBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="relative bg-gray-900 text-white textured-overlay"
      role="banner"
      aria-label="Promotional announcement"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          
          {/* Promotional Message */}
          <div
            className="text-center"
          >
            <p className="text-sm font-medium tracking-wide">
              ✨ Same Day Delivery Available in London ✨
            </p>
          </div>

          {/* Close Button */}
          <div className="flex-1 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors duration-300 p-1 focus:outline-none focus:ring-2 focus:ring-white/50"
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
    </div>
  );
} 