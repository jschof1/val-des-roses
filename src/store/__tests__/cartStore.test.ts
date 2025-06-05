import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useCartStore } from '../cartStore';
import { mockCartItem, mockShopifyCheckout } from '@/test/utils';

// Mock the UI store to test notifications
vi.mock('../uiStore', () => ({
  useUIStore: {
    getState: () => ({
      addNotification: vi.fn(),
    }),
  },
}));

// Mock Shopify API
vi.mock('@/lib/shopify', () => ({
  createCheckout: vi.fn(),
  addLineItems: vi.fn(),
}));

describe('Cart Store', () => {
  beforeEach(() => {
    // Reset store state before each test
    useCartStore.setState({
      items: [],
      subtotal: 0,
      totalQuantity: 0,
      checkoutId: null,
      checkoutUrl: null,
      isOpen: false,
      isLoading: false,
    });
    
    // Clear all mocks
    vi.clearAllMocks();
  });

  describe('Initial State', () => {
    it('should have correct initial state', () => {
      const state = useCartStore.getState();
      
      expect(state.items).toEqual([]);
      expect(state.subtotal).toBe(0);
      expect(state.totalQuantity).toBe(0);
      expect(state.checkoutId).toBe(null);
      expect(state.checkoutUrl).toBe(null);
      expect(state.isOpen).toBe(false);
      expect(state.isLoading).toBe(false);
    });
  });

  describe('Cart Actions', () => {
    it('should add new item to cart', async () => {
      const { addItem } = useCartStore.getState();
      
      await addItem(mockCartItem);
      
      const state = useCartStore.getState();
      expect(state.items).toHaveLength(1);
      expect(state.items[0].title).toBe(mockCartItem.title);
      expect(state.totalQuantity).toBe(1);
      expect(state.subtotal).toBe(29.99);
    });

    it('should update quantity when adding existing item', async () => {
      const { addItem } = useCartStore.getState();
      
      // Add item twice
      await addItem(mockCartItem);
      await addItem(mockCartItem);
      
      const state = useCartStore.getState();
      expect(state.items).toHaveLength(1);
      expect(state.items[0].quantity).toBe(2);
      expect(state.totalQuantity).toBe(2);
      expect(state.subtotal).toBe(59.98);
    });

    it('should remove item from cart', async () => {
      const { addItem, removeItem } = useCartStore.getState();
      
      await addItem(mockCartItem);
      const state = useCartStore.getState();
      const itemId = state.items[0].id;
      
      removeItem(itemId);
      
      const updatedState = useCartStore.getState();
      expect(updatedState.items).toHaveLength(0);
      expect(updatedState.totalQuantity).toBe(0);
      expect(updatedState.subtotal).toBe(0);
    });

    it('should update item quantity', async () => {
      const { addItem, updateQuantity } = useCartStore.getState();
      
      await addItem(mockCartItem);
      const state = useCartStore.getState();
      const itemId = state.items[0].id;
      
      updateQuantity(itemId, 3);
      
      const updatedState = useCartStore.getState();
      expect(updatedState.items[0].quantity).toBe(3);
      expect(updatedState.totalQuantity).toBe(3);
      expect(updatedState.subtotal).toBe(89.97);
    });

    it('should remove item when quantity is updated to 0', async () => {
      const { addItem, updateQuantity } = useCartStore.getState();
      
      await addItem(mockCartItem);
      const state = useCartStore.getState();
      const itemId = state.items[0].id;
      
      updateQuantity(itemId, 0);
      
      const updatedState = useCartStore.getState();
      expect(updatedState.items).toHaveLength(0);
      expect(updatedState.totalQuantity).toBe(0);
    });

    it('should clear entire cart', async () => {
      const { addItem, clearCart } = useCartStore.getState();
      
      await addItem(mockCartItem);
      await addItem({ ...mockCartItem, id: 'item-2', variantId: 'variant-2' });
      
      clearCart();
      
      const state = useCartStore.getState();
      expect(state.items).toHaveLength(0);
      expect(state.totalQuantity).toBe(0);
      expect(state.subtotal).toBe(0);
      expect(state.checkoutId).toBe(null);
      expect(state.checkoutUrl).toBe(null);
    });
  });

  describe('UI Actions', () => {
    it('should open cart', () => {
      const { openCart } = useCartStore.getState();
      
      openCart();
      
      const state = useCartStore.getState();
      expect(state.isOpen).toBe(true);
    });

    it('should close cart', () => {
      const { openCart, closeCart } = useCartStore.getState();
      
      openCart();
      expect(useCartStore.getState().isOpen).toBe(true);
      
      closeCart();
      expect(useCartStore.getState().isOpen).toBe(false);
    });

    it('should toggle cart', () => {
      const { toggleCart } = useCartStore.getState();
      
      expect(useCartStore.getState().isOpen).toBe(false);
      
      toggleCart();
      expect(useCartStore.getState().isOpen).toBe(true);
      
      toggleCart();
      expect(useCartStore.getState().isOpen).toBe(false);
    });

    it('should set loading state', () => {
      const { setLoading } = useCartStore.getState();
      
      setLoading(true);
      expect(useCartStore.getState().isLoading).toBe(true);
      
      setLoading(false);
      expect(useCartStore.getState().isLoading).toBe(false);
    });
  });

  describe('Checkout Actions', () => {
    it('should create checkout session', async () => {
      const { createCheckout } = await import('@/lib/shopify');
      const mockedCreateCheckout = vi.mocked(createCheckout);
      
      mockedCreateCheckout.mockResolvedValue(mockShopifyCheckout);
      
      const { addItem, createCheckoutSession } = useCartStore.getState();
      
      // Add an item first
      await addItem(mockCartItem);
      
      // Mock window.location.href
      Object.defineProperty(window, 'location', {
        value: { href: '' },
        writable: true,
      });
      
      await createCheckoutSession();
      
      expect(mockedCreateCheckout).toHaveBeenCalled();
      expect(window.location.href).toBe(mockShopifyCheckout.webUrl);
      
      const state = useCartStore.getState();
      expect(state.checkoutId).toBe(mockShopifyCheckout.id);
      expect(state.checkoutUrl).toBe(mockShopifyCheckout.webUrl);
    });

    it('should not create checkout with empty cart', async () => {
      const { createCheckout } = await import('@/lib/shopify');
      const mockedCreateCheckout = vi.mocked(createCheckout);
      
      const { createCheckoutSession } = useCartStore.getState();
      
      await createCheckoutSession();
      
      expect(mockedCreateCheckout).not.toHaveBeenCalled();
    });
  });

  describe('Totals Calculation', () => {
    it('should correctly calculate subtotal with multiple items', async () => {
      const { addItem } = useCartStore.getState();
      
      const item1 = { ...mockCartItem, price: { amount: '10.00', currencyCode: 'EUR' } };
      const item2 = { ...mockCartItem, id: 'item-2', variantId: 'variant-2', price: { amount: '20.00', currencyCode: 'EUR' } };
      
      await addItem(item1);
      await addItem(item2);
      
      const state = useCartStore.getState();
      expect(state.subtotal).toBe(30.00);
      expect(state.totalQuantity).toBe(2);
    });

    it('should handle decimal calculations correctly', async () => {
      const { addItem } = useCartStore.getState();
      
      const item = { ...mockCartItem, price: { amount: '19.99', currencyCode: 'EUR' } };
      
      await addItem(item);
      await addItem(item); // Add twice
      
      const state = useCartStore.getState();
      expect(state.subtotal).toBe(39.98);
      expect(state.totalQuantity).toBe(2);
    });
  });
}); 