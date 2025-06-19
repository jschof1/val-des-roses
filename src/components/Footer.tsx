'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light tracking-wider mb-4">VALLÉE DES ROSES</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Creating luxury preserved roses with architecture-inspired design by Iryna. 
              Premium arrangements lasting 2-3 years with London same-day delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                Pinterest
              </a>
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium tracking-wide mb-4">SHOP</h4>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-background/70 hover:text-background transition-colors duration-300">All Products</Link></li>
              <li><Link href="/shop" className="text-background/70 hover:text-background transition-colors duration-300">Preserved Roses</Link></li>
              <li><Link href="/shop" className="text-background/70 hover:text-background transition-colors duration-300">Luxury Arrangements</Link></li>
              <li><Link href="/shop" className="text-background/70 hover:text-background transition-colors duration-300">Bespoke Designs</Link></li>
              <li><Link href="/care-guide" className="text-background/70 hover:text-background transition-colors duration-300">Care Guide</Link></li>
            </ul>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium tracking-wide mb-4">ABOUT</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-background/70 hover:text-background transition-colors duration-300">About Iryna</Link></li>
              <li><Link href="/about" className="text-background/70 hover:text-background transition-colors duration-300">Our Process</Link></li>
              <li><Link href="/care-guide" className="text-background/70 hover:text-background transition-colors duration-300">Care Guide</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-background transition-colors duration-300">London Delivery</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-background transition-colors duration-300">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium tracking-wide mb-4">SUPPORT</h4>
            <ul className="space-y-3">
              <li><Link href="/shipping" className="text-background/70 hover:text-background transition-colors duration-300">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-background/70 hover:text-background transition-colors duration-300">Returns</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors duration-300">FAQ</a></li>
              <li><Link href="/care-guide" className="text-background/70 hover:text-background transition-colors duration-300">Size Guide</Link></li>
              <li><Link href="/about" className="text-background/70 hover:text-background transition-colors duration-300">Customer Care</Link></li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h5 className="font-medium mb-2">VISIT</h5>
              <p className="text-background/70 text-sm">
                Office 4, 41 S Audley St<br />
                London W1K 2PS, United Kingdom
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">CONTACT</h5>
              <p className="text-background/70 text-sm">
                +44 7436 229066<br />
                hello@valleedesroses.com
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">HOURS</h5>
              <p className="text-background/70 text-sm">
                Mon-Fri: 9:00-18:00<br />
                Same-day delivery available
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-background/70 text-sm">
            © {currentYear} Vallée des Roses. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-background/70 hover:text-background transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-background/70 hover:text-background transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-background/70 hover:text-background transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 