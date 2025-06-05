import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { handle } = await params;
  
  if (!handle) {
    notFound();
  }

  return <ProductDetailClient handle={handle} />;
} 