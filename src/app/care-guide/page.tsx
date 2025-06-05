'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function CareGuidePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-32 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-light tracking-wider mb-8 text-burgundy"
          >
            Rose Care Guide
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-lg md:text-xl text-dark/80 leading-relaxed"
          >
            Discover the essential practices for nurturing your heritage roses to their full potential, 
            guided by decades of cultivation expertise from our Provence gardens.
          </motion.p>
        </div>
      </section>

      {/* Planting Section */}
      <section className="py-20 px-4 bg-burgundy">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-cream">
                Planting Your Roses
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-cream">Location Selection</h3>
                  <p className="text-cream/80 leading-relaxed">
                    Choose a spot with 6+ hours of morning sunlight and good air circulation. 
                    Avoid areas with standing water or strong winds.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-cream">Soil Preparation</h3>
                  <p className="text-cream/80 leading-relaxed">
                    Ensure well-draining soil with pH 6.0-7.0. Enrich with organic compost 
                    and aged manure before planting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-cream">Best Timing</h3>
                  <p className="text-cream/80 leading-relaxed">
                    Plant in early spring after the last frost, or in fall 6-8 weeks before the first frost.
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
                alt="Planting heritage roses in garden"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Watering & Feeding */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-burgundy">
              Watering & Feeding
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto leading-relaxed">
              Proper nutrition and hydration are essential for healthy growth and abundant blooms.
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
              <h3 className="text-xl font-medium tracking-wide mb-4 text-burgundy">Deep Watering</h3>
              <p className="text-dark/70 leading-relaxed">
                Water deeply 1-2 times per week rather than frequent shallow watering. 
                Apply water at soil level to avoid wetting foliage.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-burgundy/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-burgundy">Seasonal Feeding</h3>
              <p className="text-dark/70 leading-relaxed">
                Feed with balanced fertilizer in early spring, then monthly during growing season. 
                Use organic compost and bone meal for best results.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-medium tracking-wide mb-4 text-burgundy">Mulching</h3>
              <p className="text-dark/70 leading-relaxed">
                Apply 2-3 inches of organic mulch around the base to retain moisture, 
                suppress weeds, and regulate soil temperature.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pruning Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
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
                alt="Pruning heritage roses with proper technique"
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
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-cream">
                Pruning & Maintenance
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-cream">When to Prune</h3>
                  <p className="text-cream/80 leading-relaxed">
                    Prune in late winter or early spring, just before new growth begins. 
                    Remove dead, diseased, or damaged wood first.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-cream">Pruning Technique</h3>
                  <p className="text-cream/80 leading-relaxed">
                    Make clean cuts at a 45-degree angle, ¼ inch above an outward-facing bud. 
                    Use sharp, clean pruning shears to prevent disease transmission.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-cream">Deadheading</h3>
                  <p className="text-cream/80 leading-relaxed">
                    Remove spent blooms regularly to encourage repeat flowering. 
                    Cut back to the first strong five-leaflet leaf.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disease Prevention */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-burgundy">
              Disease Prevention
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed mb-12">
              Healthy roses are naturally more resistant to common diseases. 
              Prevention is always better than treatment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-burgundy text-cream">
                <h3 className="text-lg font-medium mb-3">Good Air Circulation</h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  Space plants properly and prune to allow air flow through the center of the bush.
                </p>
              </div>
              
              <div className="p-6 bg-white/70 backdrop-blur-sm">
                <h3 className="text-lg font-medium mb-3 text-burgundy">Avoid Overhead Watering</h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Water at soil level to keep foliage dry and prevent fungal diseases.
                </p>
              </div>
              
              <div className="p-6 bg-burgundy text-cream">
                <h3 className="text-lg font-medium mb-3">Regular Inspection</h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  Check plants weekly for early signs of disease or pest problems.
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