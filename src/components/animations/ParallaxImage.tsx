'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  children?: React.ReactNode;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  intensity = 0.5,
  children,
  priority = false,
  fill = true,
  width,
  height,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform the scroll progress to parallax movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${intensity * 100}%`, `-${intensity * 100}%`]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.1, 1, 1.1]
  );

  // Skip animations if user prefers reduced motion
  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover"
            priority={priority}
          />
        )}
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        className="relative w-full h-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover w-full h-full"
            priority={priority}
          />
        )}
      </motion.div>
      {children && (
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      )}
    </div>
  );
} 