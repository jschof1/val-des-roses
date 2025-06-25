'use client';

import { 
  AnimatedSection, 
  AnimatedText, 
  AnimatedSecondaryButton,
  staggerContainerVariants,
  fadeInUpVariants
} from '@/components/animations';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Link from 'next/link';

export default function BrandIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gray-900 textured-overlay">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <AnimatedSection 
            animation="slideInLeft"
            className="space-y-10"
          >
            <AnimatedText
              as="h2"
              className="text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight"
              delay={0.2}
            >
              Architecture-Inspired Floral Design
            </AnimatedText>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="h-px bg-gray-400 w-24"
            />

            <AnimatedSection
              animation="fadeInUp"
              delay={0.4}
            >
              <p className="text-xl text-white/80 leading-relaxed">
                Founded by Iryna, Vallée des Roses creates extraordinary preserved rose arrangements
                inspired by architectural principles. Each design celebrates the intersection of 
                structural beauty and natural elegance, lasting 2-3 years.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="fadeInUp"
              delay={0.6}
            >
              <p className="text-lg text-white/70 leading-relaxed">
                Based in London, we specialize in luxury preserved roses with same-day delivery.
                Our architectural approach transforms premium roses into lasting works of art.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="fadeInUp"
              delay={0.8}
            >
              <Link href="/about">
                <AnimatedSecondaryButton>
                  DISCOVER OUR STORY
                </AnimatedSecondaryButton>
              </Link>
            </AnimatedSection>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection
            animation="slideInRight"
            delay={0.3}
            className="relative h-96 lg:h-[600px]"
          >
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              {/* Placeholder for brand image */}
              <div className="text-center text-white/60">
                <motion.div 
                  className="text-6xl mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                >
                  🌹
                </motion.div>
                <p className="text-lg font-light">Preserved Beauty</p>
                <p className="text-sm opacity-60">Architecture-Inspired Design</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats or Features */}
        <AnimatedSection
          animation="stagger"
          delay={1}
                      className="mt-32 pt-20 border-t border-gray-600"
        >
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div 
              variants={fadeInUpVariants}
              className="text-center"
            >
              <h3 className="text-3xl font-light text-white mb-3">2-3 Years</h3>
              <p className="text-white/70 tracking-wide">Lasting Beauty</p>
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              className="text-center"
            >
              <h3 className="text-3xl font-light text-white mb-3">London</h3>
              <p className="text-white/70 tracking-wide">Same-Day Delivery</p>
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              className="text-center"
            >
              <h3 className="text-3xl font-light text-white mb-3">Bespoke</h3>
              <p className="text-white/70 tracking-wide">Design Approach</p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 