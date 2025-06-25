'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 py-32 bg-cream textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-8 leading-tight text-dark">
              Meet Iryna
            </h1>
            <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-8">
              The visionary founder behind Vallée des Roses, where architectural precision meets the timeless beauty of preserved roses.
            </p>
            <p className="text-base md:text-lg text-dark/60 leading-relaxed">
              Based in London, Iryna creates extraordinary floral arrangements that blend her background in architecture with her passion for botanical artistry.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[600px]"
          >
            <Image
              src="/images/iryna-portrait.jpg"
              alt="Iryna, founder of Vallée des Roses"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Iryna's Story Section */}
      <section className="relative py-32 px-4 bg-white textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-dark">
              Architecture Meets Floristry
            </h2>
            <p className="text-lg text-dark/60 max-w-3xl mx-auto leading-relaxed">
              Iryna&apos;s unique approach to floral design stems from her architectural background, where precision, structure, and aesthetic harmony are paramount.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-dark">
                From Blueprints to Blooms
              </h3>
              <p className="text-dark/70 leading-relaxed mb-6">
                With a foundation in architectural design, Iryna brings a unique perspective to floristry. Her approach treats each arrangement as a three-dimensional composition, where form, proportion, and spatial relationships create visual harmony.
              </p>
              <p className="text-dark/70 leading-relaxed">
                This architectural lens transforms traditional floral design into something more structured, intentional, and enduring—much like the preserved roses she works with.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <Image
                src="/images/design-process.jpg"
                alt="Iryna's design process showing architectural sketches and rose arrangements"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-96 order-2 lg:order-1"
            >
              <Image
                src="/images/preserved-roses-studio.jpg"
                alt="Vallée des Roses London studio with preserved roses"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-dark">
                The London Studio
              </h3>
              <p className="text-dark/70 leading-relaxed mb-6">
                Located in the heart of London, Vallée des Roses operates from a carefully curated studio where each preserved rose arrangement is crafted by hand. The space reflects Iryna&apos;s aesthetic philosophy—clean lines, natural light, and thoughtful composition.
              </p>
              <p className="text-dark/70 leading-relaxed">
                Here, premium preserved roses are transformed into architectural compositions that celebrate both the natural beauty of the flower and the structured elegance of design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preserved Roses Philosophy */}
      <section className="relative py-32 px-4 bg-dark textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 ">
              Why Preserved Roses
            </h2>
            <p className="text-lg /70 max-w-3xl mx-auto leading-relaxed">
              Iryna chose preserved roses for their unique ability to maintain perfect form and color for 2-3 years, allowing architectural compositions to retain their intended beauty over time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 ">Longevity</h3>
              <p className="/70 leading-relaxed">
                Unlike fresh flowers, preserved roses maintain their beauty for 2-3 years, making them a lasting investment in luxury.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 ">Sustainability</h3>
              <p className="/70 leading-relaxed">
                No water, no maintenance, no waste. Preserved roses offer an eco-conscious alternative to constantly replacing fresh arrangements.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 ">Perfection</h3>
              <p className="/70 leading-relaxed">
                Each rose is preserved at its peak bloom, ensuring consistent quality and the architectural precision Iryna demands.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-xl /80 leading-relaxed max-w-4xl mx-auto">
              &ldquo;I believe that beautiful design should be enduring. Preserved roses allow me to create arrangements that maintain their architectural integrity for years, not days.&rdquo;
            </p>
            <p className="text-lg /60 mt-4">— Iryna, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* London Delivery & Contact */}
      <section className="relative py-32 px-4 bg-burgundy textured-overlay">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 ">
              London Same-Day Delivery
            </h2>
            <p className="text-lg /80 leading-relaxed mb-12">
              Experience Iryna&apos;s architectural floral designs with same-day delivery across London. Each arrangement is carefully crafted and personally curated for lasting beauty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="p-8 bg-cream/10 backdrop-blur-sm">
                <h3 className="text-xl font-medium tracking-wide mb-4 ">Studio Location</h3>
                <p className="/80 leading-relaxed">
                  Office 4, 41 S Audley St<br />
                  London W1K 2PS<br />
                  United Kingdom<br />
                  <br />
                  <strong className="">Same-Day Delivery Available</strong><br />
                  <span className="text-sm /70">Orders placed before 2 PM</span>
                </p>
              </div>
              
              <div className="p-8 bg-cream/10 backdrop-blur-sm">
                <h3 className="text-xl font-medium tracking-wide mb-4 ">Contact Iryna</h3>
                <p className="/80 leading-relaxed">
                  <strong className="">Phone:</strong> +44 7436 229066<br />
                  <strong className="">Email:</strong> hello@valleedesroses.com<br />
                  <br />
                  <strong className="">Consultations:</strong> Available for bespoke arrangements and architectural installations
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link 
                href="/shop"
                className="inline-block px-8 py-4 bg-cream text-dark font-medium tracking-wider hover:bg-cream/90 transition-colors duration-300 text-lg"
              >
                Explore Collections
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}