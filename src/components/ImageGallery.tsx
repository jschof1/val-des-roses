'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';

export default function ImageGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const galleryImages = [
    {
      src: "/gallery-1.jpg",
      alt: "Heritage red roses in bloom",
      title: "Crimson Heritage",
      subtitle: "Classic red roses"
    },
    {
      src: "/gallery-2.jpg", 
      alt: "White garden roses",
      title: "Pure Elegance",
      subtitle: "Garden whites"
    },
    {
      src: "/gallery-3.jpg",
      alt: "Pink heritage roses",
      title: "Blush Romance",
      subtitle: "Delicate pinks"
    },
    {
      src: "/gallery-4.jpg",
      alt: "Rose garden landscape",
      title: "Valley Gardens",
      subtitle: "Our heritage grounds"
    },
    {
      src: "/gallery-5.jpg",
      alt: "Vintage roses arrangement",
      title: "Artisan Craft",
      subtitle: "Hand-selected blooms"
    },
    {
      src: "/gallery-6.jpg",
      alt: "Rose cultivation process",
      title: "Heritage Process",
      subtitle: "Traditional methods"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-dark mb-6">
            A Gallery of Beauty
          </h2>
          <div className="h-px bg-burgundy w-32 mx-auto mb-8" />
          <p className="text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed">
            Each rose tells a story of heritage, craftsmanship, and natural perfection
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: 'easeOut' 
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 lg:h-96 overflow-hidden bg-cream/20">
                <div className="w-full h-full bg-cream/30 flex items-center justify-center">
                  <div className="text-center text-dark/60">
                    <div className="text-4xl mb-2">🌹</div>
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs text-dark/40">{image.subtitle}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-burgundy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-cream">
                    <h3 className="text-xl font-light mb-2">{image.title}</h3>
                    <p className="text-sm tracking-wide opacity-90">{image.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-center mt-20"
        >
          <Link href="/shop" className="inline-block border-2 border-burgundy text-burgundy px-12 py-4 text-sm font-medium tracking-[0.1em] hover:bg-burgundy hover:text-cream transition-all duration-500">
            VIEW FULL COLLECTION
          </Link>
        </motion.div>
      </div>

    </section>
  );
} 