import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { vi } from 'vitest';
import { CartItem } from '@/store';

// Test data fixtures
export const mockProduct = {
  id: 'test-product-1',
  title: 'Test Rose Product',
  handle: 'test-rose-product',
  description: 'A beautiful test rose for testing purposes',
  images: [
    {
      id: 'image-1',
      src: '/test-image.jpg',
      altText: 'Test Rose Image',
    },
  ],
  variants: [
    {
      id: 'variant-1',
      price: {
        amount: '29.99',
        currencyCode: 'EUR',
      },
      title: 'Default Variant',
      selectedOptions: [
        {
          name: 'Color',
          value: 'Red',
        },
      ],
    },
  ],
  productType: 'Preserved Rose',
  tags: ['luxury', 'preserved', 'rose'],
  options: [
    {
      id: 'option-1',
      name: 'Color',
      values: ['Red', 'Pink', 'White'],
    },
  ],
};

export const mockCartItem: CartItem = {
  id: 'cart-item-1',
  variantId: 'variant-1',
  title: 'Test Rose Product',
  price: {
    amount: '29.99',
    currencyCode: 'EUR',
  },
  quantity: 1,
  handle: 'test-rose-product',
  image: {
    src: '/test-image.jpg',
    altText: 'Test Rose Image',
  },
};

export const mockProducts = [
  mockProduct,
  {
    ...mockProduct,
    id: 'test-product-2',
    title: 'Test Rose Product 2',
    handle: 'test-rose-product-2',
  },
  {
    ...mockProduct,
    id: 'test-product-3',
    title: 'Test Rose Product 3',
    handle: 'test-rose-product-3',
  },
];

export const mockShopifyCheckout = {
  id: 'checkout-123',
  webUrl: 'https://test-shop.myshopify.com/checkout/123',
  totalPrice: {
    amount: '29.99',
    currencyCode: 'EUR',
  },
  lineItems: [],
};

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Helper functions for testing
export const waitForElementToBeRemoved = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
};

export const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      Object.keys(store).forEach(key => delete store[key]);
    }),
  };
};

// Accessibility testing helper
export const expectAccessibleName = (element: HTMLElement, name: string) => {
  expect(element).toHaveAccessibleName(name);
};

export const expectFocusable = (element: HTMLElement) => {
  expect(element).toHaveAttribute('tabIndex', '0');
  expect(element).toBeVisible();
};

// Animation testing helpers
export const expectElementToBeAnimated = (element: HTMLElement) => {
  // Check if element has motion-related attributes or classes
  const hasAnimation = 
    element.style.transform || 
    element.style.opacity || 
    element.classList.contains('motion-') ||
    element.hasAttribute('data-motion');
  
  expect(hasAnimation).toBeTruthy();
}; 