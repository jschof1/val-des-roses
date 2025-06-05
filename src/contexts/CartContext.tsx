'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { createCheckout, addLineItems } from '@/lib/shopify';

interface CartItem {
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
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
  checkoutId: string | null;
  checkoutUrl: string | null;
  subtotal: number;
  totalQuantity: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'SET_CHECKOUT'; payload: { checkoutId: string; checkoutUrl: string } }
  | { type: 'HYDRATE_CART'; payload: CartItem[] };

const initialState: CartState = {
  items: [],
  isOpen: false,
  isLoading: false,
  checkoutId: null,
  checkoutUrl: null,
  subtotal: 0,
  totalQuantity: 0,
};

function calculateCartTotals(items: CartItem[]) {
  const subtotal = items.reduce((total, item) => {
    return total + (parseFloat(item.price.amount) * item.quantity);
  }, 0);
  
  const totalQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return { subtotal, totalQuantity };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  let newItems: CartItem[];
  let totals: { subtotal: number; totalQuantity: number };

  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.variantId === action.payload.variantId
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        // Add new item
        newItems = [...state.items, action.payload];
      }

      totals = calculateCartTotals(newItems);
      return {
        ...state,
        items: newItems,
        subtotal: totals.subtotal,
        totalQuantity: totals.totalQuantity,
      };

    case 'REMOVE_ITEM':
      newItems = state.items.filter(item => item.id !== action.payload);
      totals = calculateCartTotals(newItems);
      return {
        ...state,
        items: newItems,
        subtotal: totals.subtotal,
        totalQuantity: totals.totalQuantity,
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        // Remove item if quantity is 0 or less
        newItems = state.items.filter(item => item.id !== action.payload.id);
      } else {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      totals = calculateCartTotals(newItems);
      return {
        ...state,
        items: newItems,
        subtotal: totals.subtotal,
        totalQuantity: totals.totalQuantity,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        subtotal: 0,
        totalQuantity: 0,
        checkoutId: null,
        checkoutUrl: null,
      };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'SET_CHECKOUT':
      return {
        ...state,
        checkoutId: action.payload.checkoutId,
        checkoutUrl: action.payload.checkoutUrl,
      };

    case 'HYDRATE_CART':
      totals = calculateCartTotals(action.payload);
      return {
        ...state,
        items: action.payload,
        subtotal: totals.subtotal,
        totalQuantity: totals.totalQuantity,
      };

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  createCheckoutSession: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Persist cart to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(state.items));
    }
  }, [state.items]);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          dispatch({ type: 'HYDRATE_CART', payload: parsedCart });
        } catch (error) {
          console.error('Error parsing saved cart:', error);
        }
      }
    }
  }, []);

  const addItem = async (item: CartItem) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      dispatch({ type: 'ADD_ITEM', payload: item });
      dispatch({ type: 'OPEN_CART' });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
    }
  };

  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });

  const createCheckoutSession = async () => {
    if (state.items.length === 0) return;

    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      // Create checkout session with Shopify
      const checkout = await createCheckout();
      
      if (checkout) {
        // Add line items to checkout
        const lineItems = state.items.map(item => ({
          variantId: item.variantId,
          quantity: item.quantity,
        }));

        const updatedCheckout = await addLineItems(checkout.id, lineItems);
        
        if (updatedCheckout?.webUrl) {
          dispatch({
            type: 'SET_CHECKOUT',
            payload: {
              checkoutId: checkout.id,
              checkoutUrl: updatedCheckout.webUrl,
            },
          });

          // Redirect to Shopify checkout
          window.location.href = updatedCheckout.webUrl;
        }
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error creating your checkout. Please try again.');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        createCheckoutSession,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 