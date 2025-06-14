'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 py-32 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-8 leading-tight text-dark">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-8">
              For over seven decades, Val des Roses has been cultivating the world&apos;s most beautiful heritage roses in the heart of Provence, France.
            </p>
            <p className="text-base md:text-lg text-dark/60 leading-relaxed">
              What began as a family passion in 1952 has grown into a legacy of preserving rare rose varieties and sharing their timeless beauty with the world.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[600px]"
          >
            <Image
              src="/images/about-hero.jpg"
              alt="Val des Roses heritage garden in Provence"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>
      {/* Heritage Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-dark">
              A Heritage of Excellence
            </h2>
            <p className="text-lg text-dark/60 max-w-3xl mx-auto leading-relaxed">
              Founded in 2003, our rose garden began as a quest to preserve the heritage varieties that were disappearing from French gardens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/50"
            >
              <div className="relative h-80 mb-8">
                <Image
                  src="/images/heritage-1952.jpg"
                  alt="The original garden, 2003"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 text-dark">2003 - The Beginning</h3>
              <p className="text-dark/60 leading-relaxed">
                The first heritage roses are planted on the family estate, determined to preserve varieties dating back centuries.
              </p>
            </motion.div>            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white border border-cream"
            >
              <div className="relative h-80 mb-8">
                <Image
                  src="/images/heritage-1980s.jpg"
                  alt="Garden expansion in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 text-burgundy">2010s - Expansion</h3>
              <p className="text-dark/60 leading-relaxed">
                The garden expands to include over 200 varieties, becoming a sanctuary for rare and endangered rose species.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/50"
            >
              <div className="relative h-80 mb-8">
                <Image
                  src="/images/heritage-today.jpg"
                  alt="Modern Val des Roses garden"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light tracking-wide mb-4 text-dark">Today - Global Reach</h3>
              <p className="text-dark/60 leading-relaxed">
                Now led by the second generation, we share our passion worldwide while maintaining our commitment to heritage preservation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>      {/* Values Section */}
      <section className="py-32 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-cream">
              Our Values
            </h2>
            <p className="text-lg text-cream/70 max-w-3xl mx-auto leading-relaxed">
              Every decision we make is guided by our core principles of heritage preservation, sustainable cultivation, and timeless beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-cream">Heritage</h3>
              <p className="text-cream/70 leading-relaxed">
                Preserving rare varieties for future generations to discover and cherish.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-cream">Sustainability</h3>
              <p className="text-cream/70 leading-relaxed">
                Cultivating with respect for the environment and traditional methods.
              </p>
            </motion.div>            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-cream">Quality</h3>
              <p className="text-cream/70 leading-relaxed">
                Selecting only the finest specimens that meet our exacting standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-cream">Beauty</h3>
              <p className="text-cream/70 leading-relaxed">
                Celebrating the timeless elegance that only heritage roses can provide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>      {/* Contact Section */}
      <section className="py-32 px-4 bg-burgundy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-cream">
              Order Your Roses Today
            </h2>
            <p className="text-lg text-cream/80 leading-relaxed mb-12">
              Bring the timeless beauty of heritage roses to your doorstep. We offer same-day delivery across London and surrounding areas for orders placed before 2 PM.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="p-8 bg-cream/10 backdrop-blur-sm">
                <h3 className="text-xl font-medium tracking-wide mb-4 text-cream">Our Location</h3>
                <p className="text-cream/80 leading-relaxed">
                  Office 4, 41 S Audley St<br />
                  London W1K 2PS<br />
                  United Kingdom<br />
                  <br />
                  <strong className="text-cream">Same-Day Delivery Available</strong>
                </p>
              </div>
              
              <div className="p-8 bg-cream/10 backdrop-blur-sm">
                <h3 className="text-xl font-medium tracking-wide mb-4 text-cream">Contact Us</h3>
                <p className="text-cream/80 leading-relaxed">
                  <strong className="text-cream">Phone:</strong> +44 7436 229066<br />
                  <strong className="text-cream">Email:</strong> hello@valdesroses.com<br />
                  <br />
                  <strong className="text-cream">Orders:</strong> orders@valdesroses.com
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
                Browse Our Collection
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}