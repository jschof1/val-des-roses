'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function CareGuidePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-cream textured-overlay">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-light tracking-wider mb-8 text-burgundy"
          >
            Preserved Rose Care Guide
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl text-dark/80 leading-relaxed"
          >
            Experience the timeless beauty of our preserved roses with minimal care. 
            Sustainably crafted to last years, not weeks—luxury that honors nature.
          </motion.p>
        </div>
      </section>

      {/* What Are Preserved Roses Section */}
      <section className="relative py-20 px-4 bg-burgundy textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 ">
                The Art of Preservation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 ">Natural Beauty, Lasting</h3>
                  <p className="/80 leading-relaxed">
                    Our preserved roses are real roses that undergo a special preservation process, 
                    replacing their natural sap with eco-friendly glycerin to maintain their 
                    softness and natural appearance for years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 ">Sustainable Luxury</h3>
                  <p className="/80 leading-relaxed">
                    By choosing preserved roses, you&apos;re making an eco-conscious decision. 
                    No water, no fertilizers, no pesticides—just enduring beauty that reduces 
                    environmental impact while bringing joy for years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 ">Perfect Every Day</h3>
                  <p className="/80 leading-relaxed">
                    Unlike fresh flowers that wilt in days, our preserved roses maintain their 
                    peak beauty for 3-5 years with virtually no maintenance required.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/planting-roses.jpg"
                alt="Beautiful preserved roses in elegant arrangement"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple Care Instructions */}
      <section className="relative py-20 px-4 bg-cream textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-burgundy">
              Effortless Care
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto leading-relaxed">
              Enjoy the luxury of roses without the maintenance. Our preserved roses require 
              minimal care to maintain their stunning appearance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-burgundy">No Water Needed</h3>
              <p className="text-dark/70 leading-relaxed">
                Never water your preserved roses. They maintain their beauty through our 
                special glycerin preservation process, not water.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-burgundy/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-burgundy">Keep Dry</h3>
              <p className="text-dark/70 leading-relaxed">
                Place in a dry environment away from humidity, steam, and moisture. 
                Avoid bathrooms, kitchens, or areas with high humidity.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-burgundy">Gentle Dusting</h3>
              <p className="text-dark/70 leading-relaxed">
                Occasionally dust with a soft, dry brush or cloth. Handle with care 
                to maintain their delicate texture and natural appearance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement & Environment */}
      <section className="relative py-20 px-4 bg-dark textured-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-[500px] order-2 lg:order-1"
            >
              <Image
                src="/images/pruning-roses.jpg"
                alt="Preserved roses in perfect home setting"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 ">
                Perfect Placement
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 ">Ideal Environment</h3>
                  <p className="/80 leading-relaxed">
                    Choose a location with room temperature (60-75°F) and normal humidity. 
                    Living rooms, bedrooms, and offices are perfect environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 ">Light Considerations</h3>
                  <p className="/80 leading-relaxed">
                    While our preserved roses can handle normal indoor lighting, 
                    avoid prolonged direct sunlight which may cause gradual color fading.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 ">Display Options</h3>
                  <p className="/80 leading-relaxed">
                    Perfect for tabletops, shelving, mantels, or anywhere you want 
                    to add natural beauty without the commitment of fresh flower care.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability & Benefits */}
      <section className="relative py-20 px-4 bg-cream textured-overlay">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-burgundy">
              Sustainable Beauty
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed mb-12">
              Our preserved roses represent a commitment to sustainable luxury—
              beautiful choices that honor both elegance and environmental responsibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-burgundy ">
                <h3 className="text-lg font-medium mb-3">Zero Waste</h3>
                <p className="/80 text-sm leading-relaxed">
                  No wilted petals, no weekly replacements. One purchase brings 
                  years of beauty without waste.
                </p>
              </div>
              
              <div className="p-6 bg-white/70 backdrop-blur-sm">
                <h3 className="text-lg font-medium mb-3 text-burgundy">Water Conservation</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Save thousands of gallons of water over time. No daily watering, 
                  no irrigation systems needed.
                </p>
              </div>
              
              <div className="p-6 bg-burgundy ">
                <h3 className="text-lg font-medium mb-3">Chemical-Free</h3>
                <p className="/80 text-sm leading-relaxed">
                  No pesticides, fertilizers, or harmful chemicals. Pure, natural 
                  beauty preserved through eco-friendly processes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}