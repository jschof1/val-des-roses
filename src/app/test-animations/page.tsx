'use client';

import {
  AnimatedSection,
  AnimatedText,
  AnimatedButton,
  AnimatedCTAButton,
  AnimatedSecondaryButton,
  staggerContainerVariants,
  fadeInUpVariants,
  hoverScaleVariants,
  floatingVariants,
  pulseVariants
} from '@/components/animations';
import { motion } from 'motion/react';

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-20 text-center bg-cream/20">
        <AnimatedText
          as="h1"
          className="text-6xl font-light tracking-wide text-dark mb-8"
          splitByWords={true}
        >
          Animation Test Page
        </AnimatedText>
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <p className="text-xl text-dark/70">Testing all animation variants and components</p>
        </AnimatedSection>
      </div>

      {/* Basic Animations */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            as="h2"
            className="text-4xl font-light text-center mb-16 text-dark"
          >
            Basic Animation Variants
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeIn" className="p-6 bg-cream/30 text-center">
              <h3 className="text-xl font-medium mb-2">Fade In</h3>
              <p className="text-dark/70">Simple opacity animation</p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" className="p-6 bg-cream/30 text-center">
              <h3 className="text-xl font-medium mb-2">Fade In Up</h3>
              <p className="text-dark/70">Fade with upward movement</p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInDown" className="p-6 bg-cream/30 text-center">
              <h3 className="text-xl font-medium mb-2">Fade In Down</h3>
              <p className="text-dark/70">Fade with downward movement</p>
            </AnimatedSection>

            <AnimatedSection animation="slideInLeft" className="p-6 bg-cream/30 text-center">
              <h3 className="text-xl font-medium mb-2">Slide In Left</h3>
              <p className="text-dark/70">Slide from left side</p>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" className="p-6 bg-cream/30 text-center">
              <h3 className="text-xl font-medium mb-2">Slide In Right</h3>
              <p className="text-dark/70">Slide from right side</p>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" className="p-6 bg-cream/30 text-center">
              <h3 className="text-xl font-medium mb-2">Scale In</h3>
              <p className="text-dark/70">Scale up animation</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Staggered Animations */}
      <section className="py-20 px-4 bg-cream/10">
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            as="h2"
            className="text-4xl font-light text-center mb-16 text-dark"
          >
            Staggered Animations
          </AnimatedText>

          <AnimatedSection animation="stagger">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUpVariants}
                  className="p-6 bg-white text-center shadow-sm"
                >
                  <h3 className="text-2xl font-light text-burgundy mb-2">Item {item}</h3>
                  <p className="text-dark/70">Staggered animation</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Animations */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            as="h2"
            className="text-4xl font-light text-center mb-16 text-dark"
          >
            Interactive Animations
          </AnimatedText>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <AnimatedButton
              variant="scale"
              className="px-8 py-3 bg-burgundy  font-medium tracking-wide"
            >
              Scale Button
            </AnimatedButton>

            <AnimatedButton
              variant="lift"
              className="px-8 py-3 bg-dark  font-medium tracking-wide"
            >
              Lift Button
            </AnimatedButton>

            <AnimatedCTAButton>
              CTA Button
            </AnimatedCTAButton>

            <AnimatedSecondaryButton>
              Secondary Button
            </AnimatedSecondaryButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={hoverScaleVariants}
              initial="initial"
              whileHover="hover"
              className="p-8 bg-cream/30 text-center cursor-pointer"
            >
              <h3 className="text-xl font-medium mb-2">Hover Scale</h3>
              <p className="text-dark/70">Hover to see scale effect</p>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="p-8 bg-burgundy/10 text-center"
            >
              <h3 className="text-xl font-medium mb-2">Floating</h3>
              <p className="text-dark/70">Continuous floating animation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Text Animations */}
      <section className="py-20 px-4 bg-cream/10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h2"
            className="text-4xl font-light mb-8 text-dark"
            splitByChars={true}
          >
            Character Animation
          </AnimatedText>

          <AnimatedText
            as="h3"
            className="text-2xl font-light mb-8 text-dark/80"
            splitByWords={true}
          >
            Word by word animation example
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-lg text-dark/70 max-w-2xl mx-auto"
          >
            This is a simple text reveal animation that fades in the entire paragraph at once.
          </AnimatedText>
        </div>
      </section>

      {/* Infinite Animations */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            as="h2"
            className="text-4xl font-light text-center mb-16 text-dark"
          >
            Infinite Animations
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="p-8 bg-burgundy/10 text-center"
            >
              <h3 className="text-xl font-medium mb-2">Pulse</h3>
              <p className="text-dark/70">Continuous pulse animation</p>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="p-8 bg-cream/30 text-center"
            >
              <h3 className="text-xl font-medium mb-2">Float</h3>
              <p className="text-dark/70">Gentle floating motion</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reduced Motion Notice */}
      <section className="py-12 px-4 bg-dark  text-center">
        <p className="text-sm opacity-80">
          All animations respect the user&apos;s reduced motion preferences and will be disabled accordingly.
        </p>
      </section>
    </div>
  );
} 