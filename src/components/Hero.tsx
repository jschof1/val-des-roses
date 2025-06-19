'use client';

import { motion } from 'motion/react';

// Elegant text reveal component with dramatic timing
const MinimalistTextReveal = ({ children, delay = 0, className = '' }: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  const words = children.split(' ');
  
  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: delay + index * 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-3 md:mr-6 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

      {/* Typography Section - Dramatic and bold */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center px-6 py-8">
        
        {/* Luxury indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-6 md:w-8 h-px bg-white/80" />
            <span className="text-xs tracking-[0.4em] text-white/70 font-light uppercase">
              Curated by Iryna
            </span>
            <div className="w-6 md:w-8 h-px bg-white/80" />
          </div>
        </motion.div>

        {/* Main heading - Dramatically oversized */}
        <div className="mb-8 md:mb-12">
          <MinimalistTextReveal
            delay={1}
            className="text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[120px] font-semibold tracking-[-0.02em] leading-[0.95] text-white drop-shadow-lg mb-1 md:mb-2"
          >
            VALLÉE
          </MinimalistTextReveal>
          <MinimalistTextReveal
            delay={1.4}
            className="text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[120px] font-bold tracking-[-0.02em] leading-[0.75] text-white drop-shadow-lg"
          >
            DES ROSES
          </MinimalistTextReveal>
        </div>

        {/* Elegant divider with burgundy accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 2, delay: 2.2 }}
          className="h-px bg-white mx-auto mb-6 md:mb-10 shadow-lg"
        />

        {/* Sophisticated description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-base md:text-xl lg:text-2xl xl:text-3xl font-light tracking-wide text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Exquisite Ecuadorian Preserved Roses
            <br className="hidden sm:block" />
            <span className="text-white font-normal">London atelier</span>
          </p>
        </motion.div>

        {/* Minimal call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="/shop"
            className="group relative px-8 md:px-10 py-3 md:py-4 bg-white text-black font-medium tracking-[0.15em] text-sm uppercase overflow-hidden w-full sm:w-auto min-w-[220px] md:min-w-[260px] text-center shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-burgundy"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 group-hover:text-burgundy transition-colors duration-400">View Collection</span>
          </motion.a>
          
          <motion.a
            href="/about"
            className="group relative px-8 md:px-10 py-3 md:py-4 border-2 border-white/40 text-white font-medium tracking-[0.15em] text-sm uppercase hover:border-white/70 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto min-w-[220px] md:min-w-[260px] text-center backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Our Story</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          className="flex flex-col items-center gap-2 md:gap-3 text-white/60"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-8 md:h-12 bg-white/30" />
          <span className="text-xs tracking-[0.3em] font-light uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
} 