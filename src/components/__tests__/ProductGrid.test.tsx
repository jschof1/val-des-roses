import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@/test/utils';
import { useCartStore } from '@/store';
import { mockProducts, mockProduct } from '@/test/utils';
import ProductGrid from '../ProductGrid';

// Mock the cart store
vi.mock('@/store', () => ({
  useCartStore: vi.fn(),
}));

describe('ProductGrid Component', () => {
  const mockUseCartStore = vi.mocked(useCartStore);
  const mockAddItem = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCartStore.mockReturnValue({
      addItem: mockAddItem,
    });
  });

  describe('Rendering', () => {
    it('should render products grid with correct structure', () => {
      render(<ProductGrid products={mockProducts} />);
      
      const grid = screen.getByRole('region', { name: /product grid/i });
      expect(grid).toBeInTheDocument();
      expect(grid).toHaveClass('grid');
    });

    it('should render all products', () => {
      render(<ProductGrid products={mockProducts} />);
      
      expect(screen.getByText(mockProducts[0].title)).toBeInTheDocument();
      expect(screen.getByText(mockProducts[1].title)).toBeInTheDocument();
      expect(screen.getByText(mockProducts[2].title)).toBeInTheDocument();
    });

    it('should render product images with proper alt text', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const productImage = screen.getByRole('img');
      expect(productImage).toHaveAttribute('alt', 'Test Rose Image');
    });

    it('should render product prices', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      // Price should be formatted as EUR currency
      expect(screen.getByText(/£29.99/)).toBeInTheDocument();
    });

    it('should render product descriptions on larger screens', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    });

    it('should render product type badges', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      expect(screen.getByText(mockProduct.productType!)).toBeInTheDocument();
    });
  });

  describe('Empty State', () => {
    it('should show empty state when no products', () => {
      render(<ProductGrid products={[]} />);
      
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByText('No products found')).toBeInTheDocument();
      expect(screen.getByText(/try adjusting your filters/i)).toBeInTheDocument();
    });

    it('should have proper accessibility for empty state', () => {
      render(<ProductGrid products={[]} />);
      
      const emptyState = screen.getByRole('status');
      expect(emptyState).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Product Links', () => {
    it('should render product links with correct href', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const productLink = screen.getByRole('link', { name: new RegExp(mockProduct.title, 'i') });
      expect(productLink).toHaveAttribute('href', `/shop/${mockProduct.handle}`);
    });

    it('should have proper accessibility labels for product links', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const productLink = screen.getByLabelText(`View details for ${mockProduct.title}`);
      expect(productLink).toBeInTheDocument();
    });
  });

  describe('Quick Add Functionality', () => {
    it('should render quick add button on hover', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const quickAddButton = screen.getByRole('button', { name: /quick add/i });
      expect(quickAddButton).toBeInTheDocument();
    });

    it('should call addItem when quick add is clicked', async () => {
      mockAddItem.mockResolvedValue(undefined);
      
      render(<ProductGrid products={[mockProduct]} />);
      
      const quickAddButton = screen.getByRole('button', { name: /quick add/i });
      fireEvent.click(quickAddButton);
      
      expect(mockAddItem).toHaveBeenCalledWith({
        id: expect.stringContaining(mockProduct.id),
        variantId: mockProduct.variants[0].id,
        title: mockProduct.title,
        price: mockProduct.variants[0].price,
        quantity: 1,
        handle: mockProduct.handle,
        image: mockProduct.images[0],
      });
    });

    it('should show loading state during add to cart', () => {
      mockAddItem.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
      
      render(<ProductGrid products={[mockProduct]} />);
      
      const quickAddButton = screen.getByRole('button', { name: /quick add/i });
      fireEvent.click(quickAddButton);
      
      expect(screen.getByText('ADDING...')).toBeInTheDocument();
    });

    it('should show success state after successful add', async () => {
      mockAddItem.mockResolvedValue(undefined);
      
      render(<ProductGrid products={[mockProduct]} />);
      
      const quickAddButton = screen.getByRole('button', { name: /quick add/i });
      fireEvent.click(quickAddButton);
      
      await waitFor(() => {
        expect(screen.getByText('ADDED!')).toBeInTheDocument();
      });
    });

    it('should show error state when add fails', async () => {
      mockAddItem.mockRejectedValue(new Error('Add failed'));
      
      render(<ProductGrid products={[mockProduct]} />);
      
      const quickAddButton = screen.getByRole('button', { name: /quick add/i });
      fireEvent.click(quickAddButton);
      
      await waitFor(() => {
        expect(screen.getByText('ERROR')).toBeInTheDocument();
      });
    });

    it('should not show quick add button when no variants available', () => {
      const productWithoutVariants = { ...mockProduct, variants: [] };
      
      render(<ProductGrid products={[productWithoutVariants]} />);
      
      const quickAddButton = screen.queryByRole('button', { name: /quick add/i });
      expect(quickAddButton).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels for product grid', () => {
      render(<ProductGrid products={mockProducts} />);
      
      const grid = screen.getByLabelText(`Product grid showing ${mockProducts.length} products`);
      expect(grid).toBeInTheDocument();
    });

    it('should have proper heading structure', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const productTitle = screen.getByRole('heading', { level: 3 });
      expect(productTitle).toHaveTextContent(mockProduct.title);
    });

    it('should have proper image alt text', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveAccessibleName();
    });

    it('should handle products without images gracefully', () => {
      const productWithoutImage = { ...mockProduct, images: [] };
      
      render(<ProductGrid products={[productWithoutImage]} />);
      
      expect(screen.getByText('No image')).toBeInTheDocument();
      expect(screen.getByLabelText(`${productWithoutImage.title} - no image available`)).toBeInTheDocument();
    });
  });

  describe('Product Information Display', () => {
    it('should display product tags on desktop', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const tagsContainer = screen.getByLabelText('Product tags');
      expect(tagsContainer).toBeInTheDocument();
      
      // Should show first 2 tags
      expect(screen.getByText(mockProduct.tags![0])).toBeInTheDocument();
      expect(screen.getByText(mockProduct.tags![1])).toBeInTheDocument();
    });

    it('should show tag count when more than 2 tags', () => {
      const productWithManyTags = {
        ...mockProduct,
        tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
      };
      
      render(<ProductGrid products={[productWithManyTags]} />);
      
      expect(screen.getByText('+3')).toBeInTheDocument();
    });

    it('should truncate long product titles', () => {
      const productWithLongTitle = {
        ...mockProduct,
        title: 'This is a very long product title that should be truncated to prevent layout issues',
      };
      
      render(<ProductGrid products={[productWithLongTitle]} />);
      
      const titleElement = screen.getByRole('heading', { level: 3 });
      expect(titleElement).toHaveClass('line-clamp-2');
    });

    it('should truncate long descriptions', () => {
      const productWithLongDescription = {
        ...mockProduct,
        description: 'This is a very long product description that should be truncated to prevent layout issues and maintain consistent card heights across the grid',
      };
      
      render(<ProductGrid products={[productWithLongDescription]} />);
      
      const descriptionElement = screen.getByText(productWithLongDescription.description);
      expect(descriptionElement).toHaveClass('line-clamp-2');
    });
  });

  describe('Responsive Behavior', () => {
    it('should have responsive grid classes', () => {
      render(<ProductGrid products={mockProducts} />);
      
      const grid = screen.getByRole('region');
      expect(grid).toHaveClass(
        'grid-cols-1',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
        'xl:grid-cols-4'
      );
    });

    it('should hide descriptions on mobile', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const description = screen.getByText(mockProduct.description);
      expect(description).toHaveClass('hidden', 'sm:block');
    });
  });

  describe('Animation and Interactions', () => {
    it('should have hover effects on product cards', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const productLink = screen.getByRole('link', { name: new RegExp(mockProduct.title, 'i') });
      
      fireEvent.mouseEnter(productLink);
      
      // Verify hover overlay is shown
      expect(screen.getByText('VIEW DETAILS')).toBeInTheDocument();
    });

    it('should show proper hover states for quick add button', () => {
      render(<ProductGrid products={[mockProduct]} />);
      
      const quickAddButton = screen.getByRole('button', { name: /quick add/i });
      expect(quickAddButton).toHaveClass('opacity-0', 'group-hover:opacity-100');
    });
  });
}); 