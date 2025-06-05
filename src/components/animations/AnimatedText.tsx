'use client';

import { motion, useInView } from 'motion/react';
import React, { useRef, ReactNode } from 'react';
import { textRevealVariants, useAnimationConfig } from '@/lib/animations';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: React.ElementType;
  splitByWords?: boolean;
  splitByChars?: boolean;
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
  as: Component = 'div',
  splitByWords = false,
  splitByChars = false,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    amount: threshold 
  });
  const { shouldReduceMotion } = useAnimationConfig();

  // Skip animations if user prefers reduced motion
  if (shouldReduceMotion) {
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    );
  }

  // If not splitting text, use simple reveal
  if (!splitByWords && !splitByChars) {
    const MotionComponent = motion(Component);
    return (
      <MotionComponent
        ref={ref}
        variants={textRevealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay }}
        className={className}
      >
        {children}
      </MotionComponent>
    );
  }

  // Convert children to string for splitting
  const text = typeof children === 'string' ? children : '';

  // Split by characters
  if (splitByChars) {
    const MotionComponent = motion(Component);
    return (
      <MotionComponent
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }
              },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  // Split by words
  if (splitByWords) {
    const MotionComponent = motion(Component);
    return (
      <MotionComponent
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay }}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }
              },
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  return null;
} 