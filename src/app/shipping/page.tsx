'use client';

import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function ShippingPage() {
  return (
    <main>
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-8">
              Shipping Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Delivering heritage roses with care across Europe and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Shipping Zones</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-muted/30">
                  <h3 className="text-lg font-medium mb-3">France & EU</h3>
                  <p className="text-muted-foreground text-sm">
                    Standard: 3-5 days | Express: 1-2 days<br />
                    <strong>Free shipping</strong> on orders over €75
                  </p>
                </div>
                
                <div className="p-6 bg-muted/30">
                  <h3 className="text-lg font-medium mb-3">International</h3>
                  <p className="text-muted-foreground text-sm">
                    Standard: 7-14 days | Express: 3-7 days<br />
                    <strong>Free shipping</strong> on orders over €150
                  </p>
                </div>
              </div>
            </div>            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Special Care for Live Plants</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our heritage roses require special handling to ensure they arrive in perfect condition:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• Climate-controlled packaging for temperature-sensitive varieties</li>
                <li>• Moisture-retention systems for root protection</li>
                <li>• Expedited shipping during optimal planting seasons</li>
                <li>• Detailed care instructions included with every shipment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Processing Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orders are typically processed within 1-2 business days. During peak seasons (spring and fall), 
                processing may take 3-5 business days. You will receive a tracking number once your order ships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Seasonal Shipping</h2>
              <p className="text-muted-foreground leading-relaxed">
                To ensure the health of our roses, we may delay shipments during extreme weather conditions. 
                We will notify you of any delays and work to ship your order as soon as conditions improve.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Contact our shipping team at <strong>shipping@valdesroses.com</strong> or call +33 4 90 123 456 
                for any questions about your order or delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}