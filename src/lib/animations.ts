/**
 * Animation utilities and variants for Val des Roses
 * Provides consistent animation patterns across the application
 */

import { Variants, useReducedMotion } from 'motion/react';

// Animation configuration
export const animationConfig = {
  // Timing
  durations: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
    extraSlow: 1.5,
  },
  // Delays
  delays: {
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },
  // Easing
  ease: {
    smooth: [0.25, 0.1, 0.25, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    ease: 'easeOut',
    easeIn: 'easeIn',
    easeOut: 'easeOut',
    easeInOut: 'easeInOut',
  },
  // Stagger
  stagger: {
    fast: 0.05,
    medium: 0.1,
    slow: 0.2,
  },
};

// Core animation variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
};

export const fadeInDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
};

export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
};

export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
};

export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
};

// Container variants for staggered animations
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationConfig.stagger.medium,
      delayChildren: animationConfig.delays.short,
    },
  },
};

export const staggerFastContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationConfig.stagger.fast,
      delayChildren: animationConfig.delays.short,
    },
  },
};

export const staggerSlowContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationConfig.stagger.slow,
      delayChildren: animationConfig.delays.medium,
    },
  },
};

// Hover and interaction variants
export const hoverScaleVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: animationConfig.durations.fast,
      ease: animationConfig.ease.easeOut,
    }
  },
};

export const hoverLiftVariants: Variants = {
  initial: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { 
    y: -8,
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: {
      duration: animationConfig.durations.fast,
      ease: animationConfig.ease.easeOut,
    }
  },
};

export const pressVariants: Variants = {
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: animationConfig.ease.easeInOut,
    }
  },
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    }
  },
  out: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: animationConfig.durations.fast,
      ease: animationConfig.ease.easeIn,
    }
  },
};

// Parallax effect utilities
export const parallaxVariants = {
  slow: {
    y: [-20, 20],
    transition: {
      y: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'linear',
      },
    },
  },
  medium: {
    y: [-15, 15],
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'linear',
      },
    },
  },
  fast: {
    y: [-10, 10],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'linear',
      },
    },
  },
};

// Custom hooks for common animation patterns
export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    ...animationConfig,
    // Reduce motion settings
    durations: shouldReduceMotion 
      ? {
          fast: 0.1,
          medium: 0.1,
          slow: 0.1,
          extraSlow: 0.1,
        }
      : animationConfig.durations,
    shouldReduceMotion,
  };
}

// Utility function to create delayed variants
export function createDelayedVariant(
  baseVariant: Variants,
  delay: number
): Variants {
  const visible = baseVariant.visible;
  const visibleTransition = visible && typeof visible === 'object' && 'transition' in visible 
    ? (visible as { transition?: Record<string, unknown> }).transition 
    : {};

  return {
    ...baseVariant,
    visible: {
      ...visible,
      transition: {
        ...visibleTransition,
        delay,
      },
    },
  };
}

// Utility function to create custom stagger container
export function createStaggerContainer(
  staggerDelay: number = animationConfig.stagger.medium,
  delayChildren: number = animationConfig.delays.short
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

// Image loading animation
export const imageLoadVariants: Variants = {
  loading: {
    opacity: 0,
    scale: 1.1,
  },
  loaded: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: animationConfig.durations.medium,
      ease: animationConfig.ease.ease,
    },
  },
};

// Text reveal animation for titles
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animationConfig.durations.slow,
      ease: animationConfig.ease.ease,
    },
  },
};

// Infinite animations
export const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
}; 