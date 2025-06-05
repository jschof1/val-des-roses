/**
 * Animation components and utilities for Val des Roses
 * 
 * This barrel export provides easy access to all animation-related
 * components and utilities in the application.
 */

// Core animation utilities
export * from '@/lib/animations';

// Animation components
export { default as AnimatedSection } from './AnimatedSection';
export { default as AnimatedText } from './AnimatedText';
export { default as ParallaxImage } from './ParallaxImage';
export { default as PageTransition, LoadingTransition } from './PageTransition';
export { 
  default as AnimatedButton,
  AnimatedLinkButton,
  AnimatedCTAButton,
  AnimatedSecondaryButton
} from './AnimatedButton'; 