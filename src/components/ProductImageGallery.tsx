'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

interface ProductImage {
  id: string;
  src: string;
  altText: string | null;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  productTitle: string;
}

export default function ProductImageGallery({ images, productTitle }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Fallback to placeholder if no images
  const displayImages = images.length > 0 ? images : [
    {
      id: 'placeholder',
      src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      altText: `${productTitle} image`
    }
  ];

  const selectedImage = displayImages[selectedImageIndex];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div 
        className="relative aspect-square bg-cream/10 overflow-hidden cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: isZoomed ? 1.5 : 1,
              transition: { duration: 0.4, ease: 'easeOut' }
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full h-full"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.altText || `${productTitle} image`}
              fill
              className="object-cover"
              quality={90}
              priority={selectedImageIndex === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 text-xs font-medium text-dark/60">
          {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
        </div>
      </motion.div>

      {/* Thumbnail Gallery */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {displayImages.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-square overflow-hidden border-2 transition-all duration-300 ${
                index === selectedImageIndex 
                  ? 'border-burgundy' 
                  : 'border-transparent hover:border-burgundy/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src}
                alt={image.altText || `${productTitle} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                quality={70}
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </motion.button>
          ))}
        </div>
      )}

      {/* Image navigation dots for mobile */}
      {displayImages.length > 1 && (
        <div className="flex justify-center space-x-2 md:hidden">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`View image ${index + 1} of ${displayImages.length}`}
              className={`w-2 h-2 transition-all duration-300 ${
                index === selectedImageIndex 
                  ? 'bg-burgundy scale-125' 
                  : 'bg-burgundy/40 hover:bg-burgundy/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 