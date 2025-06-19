'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call - replace with actual newsletter service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6"
        >
          Stay In Bloom
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg text-secondary leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Subscribe to receive exclusive updates on new varieties, seasonal care tips,
          and special events from our gardens.
        </motion.p>

        {isSubscribed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-accent/10 border border-accent/20 p-8 max-w-md mx-auto"
          >
            <h3 className="text-xl font-light text-foreground mb-2">Thank You!</h3>
            <p className="text-secondary">
              You&apos;ve successfully subscribed to our newsletter.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 border border-foreground/20 bg-background text-foreground placeholder-secondary focus:outline-none focus:border-foreground transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-foreground text-background px-8 py-3 text-sm font-medium tracking-wide hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </div>
            
            <p className="text-xs text-secondary mt-4 leading-relaxed">
                              By subscribing, you agree to receive marketing emails from Vallée des Roses.
              You can unsubscribe at any time.
            </p>
          </motion.form>
        )}

        {/* Decorative elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 flex justify-center space-x-8"
        >
          <div className="w-1 h-1 bg-accent rounded-full"></div>
          <div className="w-1 h-1 bg-accent rounded-full"></div>
          <div className="w-1 h-1 bg-accent rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
} 