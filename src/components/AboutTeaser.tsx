'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function AboutTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-8"
        >
          Where Passion Blooms
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl text-secondary leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          Nestled in the heart of the valley, our gardens have been home to some of the world&apos;s
          rarest and most beautiful heritage roses. Each variety is carefully tended by our master
          gardeners, who carry forward centuries of botanical wisdom.
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg text-secondary leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          From soil to bloom, every step of our process honors the natural beauty and
          timeless elegance that makes each rose truly extraordinary.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <button className="bg-foreground text-background px-8 py-3 text-sm font-medium tracking-wide hover:bg-opacity-90 transition-all duration-300 mr-4">
            OUR STORY
          </button>
          <button className="border border-foreground text-foreground px-8 py-3 text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-all duration-300">
            VISIT OUR GARDENS
          </button>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 flex justify-center"
        >
          <div className="w-24 h-0.5 bg-accent"></div>
        </motion.div>
      </div>
    </section>
  );
} 