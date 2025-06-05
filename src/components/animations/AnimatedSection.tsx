'use client';

import { motion, useInView } from 'motion/react';
import React, { useRef, ReactNode } from 'react';
import {
  fadeInVariants,
  fadeInUpVariants,
  fadeInDownVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleInVariants,
  staggerContainerVariants,
  createDelayedVariant,
  useAnimationConfig,
} from '@/lib/animations';

type AnimationType = 
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'scaleIn'
  | 'stagger';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  as?: React.ElementType;
}

const animationVariants = {
  fadeIn: fadeInVariants,
  fadeInUp: fadeInUpVariants,
  fadeInDown: fadeInDownVariants,
  slideInLeft: slideInLeftVariants,
  slideInRight: slideInRightVariants,
  scaleIn: scaleInVariants,
  stagger: staggerContainerVariants,
};

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.2,
  triggerOnce = true,
  as: Component = 'div',
}: AnimatedSectionProps) {
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

  const variants = delay > 0 
    ? createDelayedVariant(animationVariants[animation], delay)
    : animationVariants[animation];

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </MotionComponent>
  );
} 