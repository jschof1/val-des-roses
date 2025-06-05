'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { fetchProductByHandle, fetchAllProducts } from '@/lib/shopify';
import Breadcrumb from '@/components/Breadcrumb';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import RelatedProducts from '@/components/RelatedProducts';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: Array<{
    id: string;
    src: string;
    altText: string | null;
  }>;
  variants: Array<{
    id: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    title?: string;
    selectedOptions?: Array<{
      name: string;
      value: string;
    }>;
  }>;
  productType?: string;
  tags?: string[];
  options?: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
}

interface ProductDetailClientProps {
  handle: string;
}

export default function ProductDetailClient({ handle }: ProductDetailClientProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<Product['variants'][0] | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductByHandle(handle);
        
        if (!productData) {
          notFound();
          return;
        }

        setProduct(productData);
        setSelectedVariant(productData.variants[0]);

        // Fetch related products (same product type or similar tags)
        const allProducts = await fetchAllProducts();
        const related = allProducts
          .filter(p => 
            p.id !== productData.id && (
              p.productType === productData.productType ||
              p.tags?.some((tag: string) => productData.tags?.includes(tag))
            )
          )
          .slice(0, 4);
        
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error loading product:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-cream/40 w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-cream/40"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-cream/40"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-cream/40 w-3/4"></div>
                <div className="h-6 bg-cream/40 w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-cream/40"></div>
                  <div className="h-4 bg-cream/40"></div>
                  <div className="h-4 bg-cream/40 w-2/3"></div>
                </div>
                <div className="h-12 bg-cream/40"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: product.title, href: `/shop/${product.handle}` }
            ]} 
          />
        </motion.div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          {/* Product Images */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <ProductImageGallery 
              images={product.images}
              productTitle={product.title}
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {selectedVariant && (
              <ProductInfo
                product={product}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />
            )}
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-20"
          >
            <RelatedProducts products={relatedProducts} />
          </motion.div>
        )}
      </div>
      <Footer />
    </main>
  );
} 