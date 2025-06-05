'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-64 w-64 mx-auto mb-12"
        >
          <Image
            src="/images/rose-404.jpg"
            alt="A single heritage rose"
            fill
            className="object-cover rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-light tracking-wider mb-8 text-muted-foreground"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-light tracking-wider mb-8"
        >
          Page Not Found
        </motion.h2>        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Like a rare rose variety that has yet to bloom, this page seems to have wandered off the garden path. 
          Let us guide you back to our beautiful collection.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
        >
          <Link
            href="/"
            className="inline-block bg-foreground text-background px-8 py-4 text-lg font-medium tracking-wide hover:bg-foreground/90 transition-colors duration-300"
          >
            Return Home
          </Link>
          
          <Link
            href="/shop"
            className="inline-block border border-foreground text-foreground px-8 py-4 text-lg font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Browse Roses
          </Link>
        </motion.div>
      </div>
    </main>
  );
}