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
    <section ref={ref} className="py-32 px-4 bg-burgundy">
      <div className="max-w-6xl mx-auto">
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
              Heritage Meets Modern Elegance
            </AnimatedText>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="h-px bg-burgundy w-24"
            />

            <AnimatedSection
              animation="fadeInUp"
              delay={0.4}
            >
              <p className="text-xl text-white/80 leading-relaxed">
                For over a decade, Val des Roses has been cultivating the world&apos;s most
                exquisite preserved roses from Ecuador. Each bloom tells a story of dedication, craftsmanship,
                and an unwavering commitment to beauty.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="fadeInUp"
              delay={0.6}
            >
              <p className="text-lg text-white/70 leading-relaxed">
                From our valley gardens to your home, we bring you roses that embody
                timeless elegance and natural perfection.
              </p>
            </AnimatedSection>

            <AnimatedSection
              animation="fadeInUp"
              delay={0.8}
            >
              <Link href="/about">
                <AnimatedSecondaryButton>
                  DISCOVER OUR HERITAGE
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
            <div className="w-full h-full bg-cream/40 flex items-center justify-center">
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
                <p className="text-lg font-light">Brand Heritage</p>
                <p className="text-sm opacity-60">Three Generations of Craft</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats or Features */}
        <AnimatedSection
          animation="stagger"
          delay={1}
          className="mt-32 pt-20 border-t border-cream"
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
              <h3 className="text-3xl font-light text-white mb-3">2003</h3>
              <p className="text-white/70 tracking-wide">Founded</p>
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              className="text-center"
            >
              <h3 className="text-3xl font-light text-white mb-3">20+</h3>
              <p className="text-white/70 tracking-wide">Rose Varieties</p>
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              className="text-center"
            >
              <h3 className="text-3xl font-light text-white mb-3">Same-Day</h3>
              <p className="text-white/70 tracking-wide">Delivery Available</p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 