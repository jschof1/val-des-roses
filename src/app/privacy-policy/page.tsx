'use client';

import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative py-32 px-4 bg-background textured-overlay">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-8">
              Privacy Policy
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
              <h2 className="text-2xl font-light tracking-wide mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Val des Roses, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• Create an account or make a purchase</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Contact us with questions or comments</li>
                <li>• Participate in surveys or promotions</li>
              </ul>
            </div>            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your account and orders</li>
                <li>• Send you marketing communications (with your consent)</li>
                <li>• Improve our products and services</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• To trusted service providers who assist us in operating our website</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request a copy of your data</li>
              </ul>
            </div>            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br /><br />
                <strong>Email:</strong> privacy@valdesroses.com<br />
                <strong>Address:</strong> 123 Rose Valley Lane, Provence, France 84000<br />
                <strong>Phone:</strong> +33 4 90 123 456
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}