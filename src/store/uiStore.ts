import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number; // in milliseconds, null = persistent
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface UIState {
  // Navigation state
  isMobileMenuOpen: boolean;
  
  // Modal state
  activeModal: string | null;
  modalData: unknown;
  
  // Loading states
  pageLoading: boolean;
  searchLoading: boolean;
  
  // Notifications
  notifications: Notification[];
  
  // Product filters UI
  filtersOpen: boolean;
  
  // Search state
  searchQuery: string;
  searchResults: unknown[];
  isSearchOpen: boolean;
  
  // Actions
  
  // Navigation actions
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  
  // Modal actions
  openModal: (modalId: string, data?: unknown) => void;
  closeModal: () => void;
  
  // Loading actions
  setPageLoading: (loading: boolean) => void;
  setSearchLoading: (loading: boolean) => void;
  
  // Notification actions
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  
  // Filter actions
  toggleFilters: () => void;
  openFilters: () => void;
  closeFilters: () => void;
  
  // Search actions
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: unknown[]) => void;
  openSearch: () => void;
  closeSearch: () => void;
  clearSearch: () => void;
}

export const useUIStore = create<UIState>()(
  immer((set, get) => ({
    // Initial state
    isMobileMenuOpen: false,
    activeModal: null,
    modalData: null,
    pageLoading: false,
    searchLoading: false,
    notifications: [],
    filtersOpen: false,
    searchQuery: '',
    searchResults: [],
    isSearchOpen: false,

    // Navigation actions
    openMobileMenu: () => {
      set((state) => {
        state.isMobileMenuOpen = true;
      });
    },

    closeMobileMenu: () => {
      set((state) => {
        state.isMobileMenuOpen = false;
      });
    },

    toggleMobileMenu: () => {
      set((state) => {
        state.isMobileMenuOpen = !state.isMobileMenuOpen;
      });
    },

    // Modal actions
    openModal: (modalId: string, data?: unknown) => {
      set((state) => {
        state.activeModal = modalId;
        state.modalData = data || null;
        // Close mobile menu when opening modal
        state.isMobileMenuOpen = false;
      });
    },

    closeModal: () => {
      set((state) => {
        state.activeModal = null;
        state.modalData = null;
      });
    },

    // Loading actions
    setPageLoading: (loading: boolean) => {
      set((state) => {
        state.pageLoading = loading;
      });
    },

    setSearchLoading: (loading: boolean) => {
      set((state) => {
        state.searchLoading = loading;
      });
    },

    // Notification actions
    addNotification: (notification: Omit<Notification, 'id'>) => {
      const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newNotification: Notification = {
        ...notification,
        id,
        duration: notification.duration ?? 5000, // Default 5 seconds
      };

      set((state) => {
        state.notifications.push(newNotification);
      });

      // Auto-remove notification after duration (if not persistent)
      if (newNotification.duration && newNotification.duration > 0) {
        setTimeout(() => {
          get().removeNotification(id);
        }, newNotification.duration);
      }
    },

    removeNotification: (id: string) => {
      set((state) => {
        state.notifications = state.notifications.filter(n => n.id !== id);
      });
    },

    clearNotifications: () => {
      set((state) => {
        state.notifications = [];
      });
    },

    // Filter actions
    toggleFilters: () => {
      set((state) => {
        state.filtersOpen = !state.filtersOpen;
      });
    },

    openFilters: () => {
      set((state) => {
        state.filtersOpen = true;
      });
    },

    closeFilters: () => {
      set((state) => {
        state.filtersOpen = false;
      });
    },

    // Search actions
    setSearchQuery: (query: string) => {
      set((state) => {
        state.searchQuery = query;
      });
    },

    setSearchResults: (results: unknown[]) => {
      set((state) => {
        state.searchResults = results;
      });
    },

    openSearch: () => {
      set((state) => {
        state.isSearchOpen = true;
        // Close mobile menu when opening search
        state.isMobileMenuOpen = false;
      });
    },

    closeSearch: () => {
      set((state) => {
        state.isSearchOpen = false;
      });
    },

    clearSearch: () => {
      set((state) => {
        state.searchQuery = '';
        state.searchResults = [];
        state.isSearchOpen = false;
      });
    },
  }))
);

// Direct selectors - use these instead of the problematic combined selectors
export const useMobileMenuOpen = () => useUIStore((state) => state.isMobileMenuOpen);
export const useOpenMobileMenu = () => useUIStore((state) => state.openMobileMenu);
export const useCloseMobileMenu = () => useUIStore((state) => state.closeMobileMenu);
export const useToggleMobileMenu = () => useUIStore((state) => state.toggleMobileMenu);

export const useActiveModal = () => useUIStore((state) => state.activeModal);
export const useModalData = () => useUIStore((state) => state.modalData);
export const useOpenModal = () => useUIStore((state) => state.openModal);
export const useCloseModal = () => useUIStore((state) => state.closeModal);

export const useNotificationsList = () => useUIStore((state) => state.notifications);
export const useAddNotification = () => useUIStore((state) => state.addNotification);
export const useRemoveNotification = () => useUIStore((state) => state.removeNotification);
export const useClearNotifications = () => useUIStore((state) => state.clearNotifications);

// Additional individual selectors for search and loading states
export const useSearchQuery = () => useUIStore((state) => state.searchQuery);
export const useSearchResults = () => useUIStore((state) => state.searchResults);
export const useIsSearchOpen = () => useUIStore((state) => state.isSearchOpen);
export const useSearchLoading = () => useUIStore((state) => state.searchLoading);
export const useSetSearchQuery = () => useUIStore((state) => state.setSearchQuery);
export const useSetSearchResults = () => useUIStore((state) => state.setSearchResults);
export const useOpenSearch = () => useUIStore((state) => state.openSearch);
export const useCloseSearch = () => useUIStore((state) => state.closeSearch);
export const useClearSearch = () => useUIStore((state) => state.clearSearch);
export const useSetSearchLoading = () => useUIStore((state) => state.setSearchLoading);

export const usePageLoading = () => useUIStore((state) => state.pageLoading);
export const useSetPageLoading = () => useUIStore((state) => state.setPageLoading); 