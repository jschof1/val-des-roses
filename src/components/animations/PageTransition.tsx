'use client';

import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { pageTransitionVariants, useAnimationConfig } from '@/lib/animations';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ 
  children, 
  className = '' 
}: PageTransitionProps) {
  const pathname = usePathname();
  const { shouldReduceMotion } = useAnimationConfig();

  // Skip animations if user prefers reduced motion
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageTransitionVariants}
        initial="initial"
        animate="in"
        exit="out"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Loading transition component
interface LoadingTransitionProps {
  isLoading: boolean;
  children: ReactNode;
  loadingContent?: ReactNode;
  className?: string;
}

export function LoadingTransition({
  isLoading,
  children,
  loadingContent,
  className = '',
}: LoadingTransitionProps) {
  const { shouldReduceMotion } = useAnimationConfig();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {isLoading ? loadingContent : children}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          variants={pageTransitionVariants}
          initial="initial"
          animate="in"
          exit="out"
          className={className}
        >
          {loadingContent}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={pageTransitionVariants}
          initial="initial"
          animate="in"
          exit="out"
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 