'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  AnimatedSection, 
  AnimatedText,
  staggerContainerVariants,
  fadeInUpVariants
} from '@/components/animations';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Charlotte",
    location: "Chelsea, London",
    review: "Absolutely breathtaking. The architectural precision in each arrangement is unlike anything I've seen. My roses have maintained their beauty for over two years now.",
    rating: 5,
    product: "Premium Rose Box"
  },
  {
    id: 2,
    name: "James Morrison",
    location: "Kensington, London",
    review: "Vallée des Roses transformed our anniversary into something truly magical. The attention to detail and craftsmanship is extraordinary.",
    rating: 5,
    product: "Bespoke Collection"
  },
  {
    id: 3,
    name: "Isabella Chen",
    location: "Marylebone, London",
    review: "The philosophy behind each piece resonates deeply. These aren't just preserved roses; they're works of art that bring serenity to our home.",
    rating: 5,
    product: "Signature Series"
  },
  {
    id: 4,
    name: "Marcus Hartwell",
    location: "Notting Hill, London",
    review: "Same-day delivery exceeded expectations. The roses arrived perfectly preserved and beautifully presented. Exceptional service and quality.",
    rating: 5,
    product: "Express Collection"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={`text-lg ${i < rating ? 'text-gray-700' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gray-50 textured-overlay">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedText
            as="h2"
            className="text-5xl lg:text-6xl font-light tracking-wide text-gray-900 leading-tight mb-8"
            delay={0.2}
          >
            Testimonials
          </AnimatedText>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="h-px bg-gray-400 mx-auto mb-8"
          />

          <AnimatedSection
            animation="fadeInUp"
            delay={0.6}
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover what our clients say about their experience with Vallée des Roses. 
              Each testimonial reflects our commitment to architectural beauty and lasting quality.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <AnimatedSection
          animation="stagger"
          delay={0.8}
        >
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUpVariants}
                className="bg-white border border-gray-200 p-8 lg:p-10 group hover:bg-gray-50 transition-all duration-500 shadow-sm"
              >
                <StarRating rating={testimonial.rating} />
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-gray-900 font-medium text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm tracking-wide">
                        {testimonial.location}
                      </p>
                    </div>
                    {testimonial.product && (
                      <div className="text-right">
                        <p className="text-gray-700 text-sm font-medium">
                          {testimonial.product}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection
          animation="fadeInUp"
          delay={1.4}
          className="text-center mt-20"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          >
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of discerning clients who appreciate the intersection 
              of architectural precision and natural beauty.
            </p>
            <button className="bg-gray-900 text-white px-12 py-4 text-sm font-medium tracking-[0.15em] hover:bg-gray-700 transition-all duration-500 group">
              <span className="group-hover:tracking-[0.2em] transition-all duration-300">
                EXPLORE COLLECTION
              </span>
            </button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 