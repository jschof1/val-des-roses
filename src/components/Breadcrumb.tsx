'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center space-x-2 text-sm text-dark/60 mb-8"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex items-center"
        >
          {index === items.length - 1 ? (
            <span className="text-dark font-medium">{item.label}</span>
          ) : (
            <>
              <Link
                href={item.href}
                className="hover:text-burgundy transition-colors duration-200"
              >
                {item.label}
              </Link>
              <svg
                className="w-4 h-4 mx-2 text-dark/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          )}
        </motion.div>
      ))}
    </motion.nav>
  );
} 