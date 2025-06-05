'use client';

import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function ReturnsPage() {
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
              Returns & Exchanges
            </h1>
            <p className="text-lg text-muted-foreground">
              Your satisfaction is our priority
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Our Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                We stand behind the quality of our heritage roses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Live Plant Returns</h2>
              <div className="bg-muted/30 p-6 mb-6">
                <h3 className="text-lg font-medium mb-3">30-Day Health Guarantee</h3>
                <p className="text-muted-foreground text-sm">
                  If your rose doesn&apos;t establish within 30 days, we&apos;ll replace it free.
                </p>
              </div>
            </div>            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Return Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To initiate a return:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• Email returns@valdesroses.com with your order number</li>
                <li>• Include photos and description of the issue</li>
                <li>• We&apos;ll provide return instructions within 24 hours</li>
                <li>• Refunds processed within 5-7 business days</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about returns? Contact our customer service team:
                <br /><br />
                <strong>Email:</strong> returns@valdesroses.com<br />
                <strong>Phone:</strong> +33 4 90 123 456<br />
                <strong>Hours:</strong> Mon-Fri 9:00-17:00 CET
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}