'use client';

import { motion } from 'motion/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { 
  hoverScaleVariants, 
  hoverLiftVariants, 
  useAnimationConfig 
} from '@/lib/animations';

type AnimatedButtonVariant = 'scale' | 'lift' | 'none';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AnimatedButtonVariant;
  className?: string;
  href?: string;
  external?: boolean;
}

export default function AnimatedButton({
  children,
  variant = 'scale',
  className = '',
  href,
  external = false,
  ...props
}: AnimatedButtonProps) {
  const { shouldReduceMotion } = useAnimationConfig();

  const getVariants = () => {
    switch (variant) {
      case 'lift':
        return hoverLiftVariants;
      case 'scale':
        return hoverScaleVariants;
      case 'none':
      default:
        return {};
    }
  };

  const variants = shouldReduceMotion ? {} : getVariants();
  const whileTap = shouldReduceMotion ? undefined : { scale: 0.95 };

  // If href is provided, render as a link
  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variants={variants}
          initial="initial"
          whileHover="hover"
          whileTap={whileTap}
          className={className}
        >
          {children}
        </motion.a>
      );
    }

    // For internal links, you might want to use Next.js Link
    return (
      <motion.a
        href={href}
        variants={variants}
        initial="initial"
        whileHover="hover"
        whileTap={whileTap}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  // Regular button
  return (
    <motion.button
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileTap={whileTap}
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
      form={props.form}
      name={props.name}
      value={props.value}
      aria-label={props['aria-label']}
      aria-describedby={props['aria-describedby']}
      tabIndex={props.tabIndex}
    >
      {children}
    </motion.button>
  );
}

// Specialized button variants
export function AnimatedLinkButton({
  children,
  href,
  className = '',
  external = false,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <AnimatedButton
      href={href}
      external={external}
      variant="scale"
      className={className}
    >
      {children}
    </AnimatedButton>
  );
}

export function AnimatedCTAButton({
  children,
  className = '',
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <AnimatedButton
      variant="lift"
      className={`bg-gray-900 text-white px-10 py-4 text-sm font-medium tracking-[0.1em] hover:bg-gray-700 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}

export function AnimatedSecondaryButton({
  children,
  className = '',
  ...props
}: {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <AnimatedButton
      variant="scale"
      className={`border-2 border-gray-400 text-white px-10 py-4 text-sm font-medium tracking-[0.1em] hover:bg-gray-400 hover:text-white transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
} 