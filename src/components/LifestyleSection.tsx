'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function LifestyleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative bg-gray-50 overflow-hidden textured-overlay">
      {/* First lifestyle block - Image left, content right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden">
        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative bg-white/50 flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center p-16">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🏺</div>
              <p className="text-lg font-light">Elegant Living</p>
              <p className="text-sm opacity-60">Lifestyle Image</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center justify-center p-8 lg:p-16"
        >
          <div className="max-w-md">
            <h3 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-8 leading-tight">
              Wabi Sabi
              <br />
              Philosophy
            </h3>
            <div className="h-px bg-gray-400 w-16 mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Finding beauty in imperfection, elegance in simplicity. Our roses embody 
              the Japanese philosophy of wabi-sabi, celebrating natural forms and 
              authentic beauty.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Each bloom is unique, carrying the subtle variations that make 
              nature extraordinary.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second lifestyle block - Content left, image right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden">
        {/* Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1"
        >
          <div className="max-w-md">
            <h3 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-8 leading-tight">
              Clean &
              <br />
              Refined
            </h3>
            <div className="h-px bg-gray-400 w-16 mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Luxurious yet minimal. Our approach to rose cultivation reflects 
              a commitment to purity and refinement, stripping away the unnecessary 
              to reveal essential beauty.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Every element serves a purpose, every detail contributes to 
              the harmonious whole.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
          className="relative bg-white/50 flex items-center justify-center order-1 lg:order-2"
        >
          <div className="w-full h-full flex items-center justify-center p-16">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🌿</div>
              <p className="text-lg font-light">Natural Forms</p>
              <p className="text-sm opacity-60">Texture & Detail</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
        className="relative z-10 min-h-screen flex items-center justify-center p-8 bg-white/30"
      >
        <div className="text-center max-w-4xl">
          <h3 className="text-5xl lg:text-7xl font-light tracking-wide text-gray-900 mb-12 leading-tight">
            Confident Elegance
          </h3>
          <div className="h-px bg-gray-400 w-32 mx-auto mb-12" />
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
            Our heritage roses speak with quiet confidence, their natural beauty 
            requiring no embellishment. They are statements of refined taste, 
            chosen by those who understand that true luxury lies in authenticity.
          </p>
          <button className="bg-gray-900 text-white px-16 py-5 text-sm font-medium tracking-[0.15em] hover:bg-gray-700 transition-all duration-500">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </motion.div>
    </section>
  );
} 