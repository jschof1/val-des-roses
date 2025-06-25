'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

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
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-8">
              We would love to hear from you. Whether you have questions about our heritage roses, need care advice, or want to share your own rose story, we&apos;re here to help.
            </p>
            <p className="text-base md:text-lg text-dark/60 leading-relaxed">
              Our team of rose experts is passionate about sharing knowledge and helping you create beautiful moments with our preserved roses.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="bg-white p-8 shadow-lg"
          >
            <h2 className="text-2xl font-light tracking-wide mb-6 text-dark">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800"
              >
                Thank you for your message! We&apos;ll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2 tracking-wide">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-cream focus:border-burgundy focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2 tracking-wide">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-cream focus:border-burgundy focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2 tracking-wide">
                  SUBJECT *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-cream focus:border-burgundy focus:outline-none transition-colors duration-300"
                >
                  <option value="">Please select...</option>
                  <option value="general">General Inquiry</option>
                  <option value="care">Rose Care Question</option>
                  <option value="order">Order Support</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2 tracking-wide">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-cream focus:border-burgundy focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-burgundy  py-4 px-6 font-medium tracking-wide transition-colors duration-300 hover:bg-burgundy/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
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
              Explore Our Collection
            </h2>
            <p className="text-lg text-dark/60 max-w-3xl mx-auto leading-relaxed">
              Discover our exquisite selection of preserved heritage roses, each one carefully crafted to bring timeless beauty to your home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/30"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 mx-auto text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wide mb-4 text-dark">Our Office</h3>
              <p className="text-dark/60 leading-relaxed mb-2">
                Office 4,<br />
                41 S Audley St,<br />
                London W1K 2PS,<br />
                United Kingdom
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white border border-cream"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 mx-auto text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wide mb-4 text-burgundy">Phone & Email</h3>
              <p className="text-dark/60 leading-relaxed">
                <a href="tel:+447436229066" className="hover:text-burgundy transition-colors duration-300">
                  +44 7436 229066
                </a>
              </p>
              <p className="text-dark/60 leading-relaxed">
                <a href="mailto:bonjour@valdesroses.com" className="hover:text-burgundy transition-colors duration-300">
                  bonjour@valdesroses.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center p-6 bg-cream/30"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 mx-auto text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1L5 3l4 2 4-2-4-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wide mb-4 text-dark">Same-Day Delivery</h3>
              <p className="text-dark/60 leading-relaxed">
                Order before 2 PM for<br />
                same-day delivery in London<br />
                <br />
                Next-day delivery available<br />
                across the UK<br />
                <br />
                <em>Monday - Saturday</em>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              href="/shop"
              className="inline-block px-8 py-4 bg-burgundy  font-medium tracking-wider hover:bg-burgundy/90 transition-colors duration-300 text-lg"
            >
              Shop Our Roses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 text-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-dark/60 leading-relaxed">
              Quick answers to common questions about our roses and services.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-cream/50"
            >
              <h3 className="text-xl font-light tracking-wide mb-4 text-dark">How long do preserved roses last?</h3>
              <p className="text-dark/60 leading-relaxed">
                Our preserved roses maintain their beauty for 2-3 years when properly cared for. They require no water or sunlight, making them perfect for any environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-cream/50"
            >
              <h3 className="text-xl font-light tracking-wide mb-4 text-dark">Do you offer international shipping?</h3>
              <p className="text-dark/60 leading-relaxed">
                Yes, we ship worldwide. Shipping times and costs vary by destination. All our roses are carefully packaged to ensure they arrive in perfect condition.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-cream/50"
            >
              <h3 className="text-xl font-light tracking-wide mb-4 text-dark">Do you offer bulk orders for events?</h3>
              <p className="text-dark/60 leading-relaxed">
                Yes, we provide special pricing for weddings, corporate events, and other occasions. Contact us with your requirements and we&apos;ll create a custom proposal for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 