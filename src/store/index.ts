/**
 * Central store exports for Val des Roses
 * 
 * This file provides easy access to all Zustand stores and related utilities.
 */

// Cart store
export { useCartStore, type CartItem } from './cartStore';

// UI store
export {
  useUIStore,
  // Individual navigation selectors
  useMobileMenuOpen,
  useOpenMobileMenu,
  useCloseMobileMenu,
  useToggleMobileMenu,
  // Individual modal selectors
  useActiveModal,
  useModalData,
  useOpenModal,
  useCloseModal,
  // Individual notification selectors
  useNotificationsList,
  useAddNotification,
  useRemoveNotification,
  useClearNotifications,
  // Individual search selectors
  useSearchQuery,
  useSearchResults,
  useIsSearchOpen,
  useSearchLoading,
  useSetSearchQuery,
  useSetSearchResults,
  useOpenSearch,
  useCloseSearch,
  useClearSearch,
  useSetSearchLoading,
  // Individual loading selectors
  usePageLoading,
  useSetPageLoading,
  type Notification,
} from './uiStore';

// Re-export zustand utilities for convenience
export { create } from 'zustand';
export { persist, createJSONStorage } from 'zustand/middleware';
export { immer } from 'zustand/middleware/immer'; 