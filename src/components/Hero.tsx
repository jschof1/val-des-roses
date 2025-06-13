'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  AnimatedSection,
  AnimatedText,
  AnimatedLinkButton,
  scaleInVariants,
  floatingVariants
} from '@/components/animations';


export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Parallax */}
      <motion.div
        variants={scaleInVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-roses.png"
          alt="Val des Roses luxury heritage roses"
          fill
          className="object-cover opacity-90 brightness-110"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli5mdAo04PoIIlxfrOzOyCRFa0v/2Q=="
        />
      </motion.div>

      {/* Subtle white overlay for elegance */}
      <div className="absolute inset-0 bg-white/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <AnimatedText
          as="h1"
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] mb-8 text-dark"
          delay={0.5}
          splitByWords={true}
        >
          VAL DES ROSES
        </AnimatedText>
        
        <AnimatedSection
          animation="fadeInUp"
          delay={0.8}
        >
          <div className="h-px bg-burgundy w-24 mx-auto mb-8" />
        </AnimatedSection>

        <AnimatedSection
          animation="fadeInUp"
          delay={1}
        >
          <p className="text-xl md:text-2xl font-light tracking-wide mb-12 max-w-3xl mx-auto text-dark/80 leading-relaxed">
            Heritage roses cultivated with passion and elegance
            <br className="hidden md:block" />
            in the heart of the valley since 2003
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="fadeInUp"
          delay={1.3}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <AnimatedLinkButton
            href="/shop"
            className="bg-burgundy text-cream px-10 py-4 text-sm font-medium tracking-[0.1em] hover:bg-dark transition-all duration-500 min-w-[200px] text-center"
          >
            EXPLORE COLLECTION
          </AnimatedLinkButton>
          <AnimatedLinkButton
            href="/about"
            className="border-2 border-burgundy text-burgundy px-10 py-4 text-sm font-medium tracking-[0.1em] hover:bg-burgundy hover:text-cream transition-all duration-500 min-w-[200px] text-center"
          >
            OUR HERITAGE
          </AnimatedLinkButton>
        </AnimatedSection>
      </div>

      {/* Animated Scroll Indicator */}
      <AnimatedSection
        animation="fadeIn"
        delay={1.8}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-6 h-10 border-2 border-burgundy/60 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-burgundy/60 mt-2"
          />
        </motion.div>
      </AnimatedSection>
    </section>
  );
} 