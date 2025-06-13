'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

interface Collection {
  id: string;
  title: string;
  handle: string;
}

interface FilterState {
  collection: string;
  sortBy: string;
  priceRange: [number, number];
}

interface ProductFiltersProps {
  collections: Collection[];
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  productCount: number;
}

export default function ProductFilters({
  collections,
  filters,
  onFiltersChange,
  productCount
}: ProductFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'alphabetical', label: 'A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  const priceRanges: Array<{ value: [number, number]; label: string }> = [
    { value: [0, 200], label: 'All Prices' },
    { value: [0, 50], label: 'Under £50' },
    { value: [50, 100], label: '£50 - £100' },
    { value: [100, 150], label: '£100 - £150' },
    { value: [150, 200], label: '£150+' }
  ];

  const handleFilterChange = (key: keyof FilterState, value: string | [number, number]) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center justify-between w-full p-4 bg-cream/20 text-dark hover:bg-cream/30 transition-colors duration-200"
        >
          <span className="font-medium">Filters & Sort</span>
          <motion.svg
            initial={false}
            animate={{ rotate: showMobileFilters ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </div>

      {/* Filters */}
      <motion.div
        initial={false}
        animate={{ height: showMobileFilters ? 'auto' : 'auto' }}
        className={`${showMobileFilters ? 'block' : 'hidden'} lg:block bg-white border-b border-cream/40 pb-6`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Collection Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <label htmlFor="collection-filter" className="text-sm font-medium text-dark lg:whitespace-nowrap">
              Collection:
            </label>
            <select
              id="collection-filter"
              value={filters.collection}
              onChange={(e) => handleFilterChange('collection', e.target.value)}
              className="px-4 py-2 border border-cream/60 bg-white text-dark focus:outline-none focus:border-burgundy transition-colors duration-200"
            >
              <option value="all">All Collections</option>
              {collections.map((collection) => (
                <option key={collection.id} value={collection.handle}>
                  {collection.title}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <label htmlFor="price-filter" className="text-sm font-medium text-dark lg:whitespace-nowrap">
              Price Range:
            </label>
            <select
              id="price-filter"
              value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
              onChange={(e) => {
                const range = priceRanges.find(r => `${r.value[0]}-${r.value[1]}` === e.target.value);
                if (range) handleFilterChange('priceRange', range.value);
              }}
              className="px-4 py-2 border border-cream/60 bg-white text-dark focus:outline-none focus:border-burgundy transition-colors duration-200"
            >
              {priceRanges.map((range) => (
                <option key={`${range.value[0]}-${range.value[1]}`} value={`${range.value[0]}-${range.value[1]}`}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <label htmlFor="sort-filter" className="text-sm font-medium text-dark lg:whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sort-filter"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="px-4 py-2 border border-cream/60 bg-white text-dark focus:outline-none focus:border-burgundy transition-colors duration-200"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Product Count */}
          <div className="text-sm text-dark/60 lg:ml-auto">
            {productCount} {productCount === 1 ? 'product' : 'products'}
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.collection !== 'all' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/10 text-burgundy text-sm"
            >
              Collection: {collections.find(c => c.handle === filters.collection)?.title}
              <button
                onClick={() => handleFilterChange('collection', 'all')}
                className="hover:text-burgundy/80 transition-colors duration-200"
              >
                ×
              </button>
            </motion.span>
          )}

          {filters.sortBy !== 'featured' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/10 text-burgundy text-sm"
            >
              Sort: {sortOptions.find(s => s.value === filters.sortBy)?.label}
              <button
                onClick={() => handleFilterChange('sortBy', 'featured')}
                className="hover:text-burgundy/80 transition-colors duration-200"
              >
                ×
              </button>
            </motion.span>
          )}

          {(filters.priceRange[0] !== 0 || filters.priceRange[1] !== 200) && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy/10 text-burgundy text-sm"
            >
              Price: {priceRanges.find(r => r.value[0] === filters.priceRange[0] && r.value[1] === filters.priceRange[1])?.label}
              <button
                onClick={() => handleFilterChange('priceRange', [0, 200])}
                className="hover:text-burgundy/80 transition-colors duration-200"
              >
                ×
              </button>
            </motion.span>
          )}
        </div>
      </motion.div>
    </>
  );
} 