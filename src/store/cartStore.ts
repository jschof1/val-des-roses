import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createCheckout, addLineItems } from '@/lib/shopify';

export interface CartItem {
  id: string;
  variantId: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  image?: {
    src: string;
    altText: string | null;
  };
  handle: string;
}

interface CartState {
  // Cart data
  items: CartItem[];
  subtotal: number;
  totalQuantity: number;
  
  // Shopify checkout
  checkoutId: string | null;
  checkoutUrl: string | null;
  
  // UI state
  isOpen: boolean;
  isLoading: boolean;
  
  // Actions
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // UI actions
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  setLoading: (loading: boolean) => void;
  
  // Shopify actions
  createCheckoutSession: () => Promise<void>;
  
  // Internal helpers
  calculateTotals: () => void;
}

const calculateCartTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((total, item) => {
    return total + (parseFloat(item.price.amount) * item.quantity);
  }, 0);
  
  const totalQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return { subtotal, totalQuantity };
};

export const useCartStore = create<CartState>()(
  persist(
    immer((set, get) => ({
      // Initial state
      items: [],
      subtotal: 0,
      totalQuantity: 0,
      checkoutId: null,
      checkoutUrl: null,
      isOpen: false,
      isLoading: false,

      // Helper function to recalculate totals
      calculateTotals: () => {
        set((state) => {
          const { subtotal, totalQuantity } = calculateCartTotals(state.items);
          state.subtotal = subtotal;
          state.totalQuantity = totalQuantity;
        });
      },

      // Cart actions
      addItem: async (item: CartItem) => {
        set((state) => {
          state.isLoading = true;
        });

        try {
          set((state) => {
            const existingItemIndex = state.items.findIndex(
              existingItem => existingItem.variantId === item.variantId
            );

            if (existingItemIndex >= 0) {
              // Update quantity of existing item
              state.items[existingItemIndex].quantity += item.quantity;
            } else {
              // Add new item
              state.items.push({ ...item, id: `${item.variantId}-${Date.now()}` });
            }

            // Recalculate totals
            const { subtotal, totalQuantity } = calculateCartTotals(state.items);
            state.subtotal = subtotal;
            state.totalQuantity = totalQuantity;
            state.isLoading = false;
          });

          // Show success notification
          if (typeof window !== 'undefined') {
            // Import the UI store dynamically to avoid circular dependencies
            import('./uiStore').then(({ useUIStore }) => {
              useUIStore.getState().addNotification({
                type: 'success',
                title: 'Added to cart',
                message: `${item.title} has been added to your cart`,
                duration: 3000,
                action: {
                  label: 'View Cart',
                  onClick: () => {
                    useCartStore.getState().openCart();
                  }
                }
              });
            });
          }

          // Update Shopify checkout if we have one
          const { checkoutId } = get();
          if (checkoutId) {
            // Add line items to existing checkout
            addLineItems(checkoutId, [
              {
                variantId: item.variantId,
                quantity: item.quantity,
              },
            ]).catch((error) => {
              console.error('Error adding item to Shopify checkout:', error);
            });
          }
        } catch (error) {
          console.error('Error adding item to cart:', error);
          set((state) => {
            state.isLoading = false;
          });

          // Show error notification
          if (typeof window !== 'undefined') {
            import('./uiStore').then(({ useUIStore }) => {
              useUIStore.getState().addNotification({
                type: 'error',
                title: 'Error adding to cart',
                message: 'There was an error adding the item to your cart. Please try again.',
                duration: 5000,
              });
            });
          }
        }
      },

      removeItem: (itemId: string) => {
        set((state) => {
          state.items = state.items.filter(item => item.id !== itemId);
          
          // Recalculate totals
          const { subtotal, totalQuantity } = calculateCartTotals(state.items);
          state.subtotal = subtotal;
          state.totalQuantity = totalQuantity;
        });
      },

      updateQuantity: (itemId: string, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            // Remove item if quantity is 0 or less
            state.items = state.items.filter(item => item.id !== itemId);
          } else {
            const itemIndex = state.items.findIndex(item => item.id === itemId);
            if (itemIndex >= 0) {
              state.items[itemIndex].quantity = quantity;
            }
          }
          
          // Recalculate totals
          const { subtotal, totalQuantity } = calculateCartTotals(state.items);
          state.subtotal = subtotal;
          state.totalQuantity = totalQuantity;
        });
      },

      clearCart: () => {
        set((state) => {
          state.items = [];
          state.subtotal = 0;
          state.totalQuantity = 0;
          state.checkoutId = null;
          state.checkoutUrl = null;
        });
      },

      // UI actions
      openCart: () => {
        set((state) => {
          state.isOpen = true;
        });
      },

      closeCart: () => {
        set((state) => {
          state.isOpen = false;
        });
      },

      toggleCart: () => {
        set((state) => {
          state.isOpen = !state.isOpen;
        });
      },

      setLoading: (loading: boolean) => {
        set((state) => {
          state.isLoading = loading;
        });
      },

      // Shopify actions
      createCheckoutSession: async () => {
        const { items, setLoading } = get();
        
        if (items.length === 0) {
          console.warn('Cannot create checkout with empty cart');
          return;
        }

        setLoading(true);

        try {
          const lineItems = items.map(item => ({
            variantId: item.variantId,
            quantity: item.quantity,
          }));

          // Create empty checkout first
          const checkout = await createCheckout();
          
          if (!checkout) {
            throw new Error('Failed to create checkout');
          }

          // Add line items to the checkout
          const updatedCheckout = await addLineItems(checkout.id, lineItems);

          set((state) => {
            state.checkoutId = updatedCheckout?.id || checkout.id;
            state.checkoutUrl = updatedCheckout?.webUrl || checkout.webUrl;
            state.isLoading = false;
          });

          // Redirect to Shopify checkout
          const finalCheckoutUrl = updatedCheckout?.webUrl || checkout.webUrl;
          if (finalCheckoutUrl) {
            window.location.href = finalCheckoutUrl;
          }
        } catch (error) {
          console.error('Error creating checkout session:', error);
          setLoading(false);

          // Show error notification
          if (typeof window !== 'undefined') {
            import('./uiStore').then(({ useUIStore }) => {
              useUIStore.getState().addNotification({
                type: 'error',
                title: 'Checkout Error',
                message: 'There was an error creating your checkout session. Please try again.',
                duration: 5000,
              });
            });
          }
        }
      },
    })),
    {
      name: 'val-des-roses-cart',
      storage: createJSONStorage(() => localStorage),
      // Only persist cart items and checkout data, not UI state
      partialize: (state) => ({
        items: state.items,
        subtotal: state.subtotal,
        totalQuantity: state.totalQuantity,
        checkoutId: state.checkoutId,
        checkoutUrl: state.checkoutUrl,
      }),
      // Rehydrate calculated values
      onRehydrateStorage: () => (state) => {
        if (state) {
          const { subtotal, totalQuantity } = calculateCartTotals(state.items);
          state.subtotal = subtotal;
          state.totalQuantity = totalQuantity;
        }
      },
    }
  )
); 