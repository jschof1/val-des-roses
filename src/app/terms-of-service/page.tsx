'use client';

import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Val des Roses website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted for personal, non-commercial use only. You may not:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• Modify or copy the materials</li>
                <li>• Use materials for commercial purposes</li>
                <li>• Reverse engineer any software</li>
                <li>• Remove copyright notations</li>
              </ul>
            </div>            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and images. However, we do not warrant that 
                product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are subject to change without notice. We reserve the right to refuse or cancel any order 
                for any reason at any time. Payment must be received before shipment of products.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Val des Roses be liable for any damages arising out of the use or inability to use 
                the materials on our website, even if we have been notified of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about the Terms of Service should be sent to us at:
                <br /><br />
                <strong>Email:</strong> legal@valdesroses.com<br />
                <strong>Address:</strong> 123 Rose Valley Lane, Provence, France 84000
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}