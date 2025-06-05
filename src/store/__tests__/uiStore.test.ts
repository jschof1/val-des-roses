import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUIStore } from '../uiStore';

describe('UI Store', () => {
  beforeEach(() => {
    // Reset store state before each test
    useUIStore.setState({
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
    });
    
    // Clear all mocks
    vi.clearAllMocks();
  });

  describe('Initial State', () => {
    it('should have correct initial state', () => {
      const state = useUIStore.getState();
      
      expect(state.isMobileMenuOpen).toBe(false);
      expect(state.activeModal).toBe(null);
      expect(state.modalData).toBe(null);
      expect(state.pageLoading).toBe(false);
      expect(state.searchLoading).toBe(false);
      expect(state.notifications).toEqual([]);
      expect(state.filtersOpen).toBe(false);
      expect(state.searchQuery).toBe('');
      expect(state.searchResults).toEqual([]);
      expect(state.isSearchOpen).toBe(false);
    });
  });

  describe('Navigation Actions', () => {
    it('should open mobile menu', () => {
      const { openMobileMenu } = useUIStore.getState();
      
      openMobileMenu();
      
      const state = useUIStore.getState();
      expect(state.isMobileMenuOpen).toBe(true);
    });

    it('should close mobile menu', () => {
      const { openMobileMenu, closeMobileMenu } = useUIStore.getState();
      
      openMobileMenu();
      expect(useUIStore.getState().isMobileMenuOpen).toBe(true);
      
      closeMobileMenu();
      expect(useUIStore.getState().isMobileMenuOpen).toBe(false);
    });

    it('should toggle mobile menu', () => {
      const { toggleMobileMenu } = useUIStore.getState();
      
      expect(useUIStore.getState().isMobileMenuOpen).toBe(false);
      
      toggleMobileMenu();
      expect(useUIStore.getState().isMobileMenuOpen).toBe(true);
      
      toggleMobileMenu();
      expect(useUIStore.getState().isMobileMenuOpen).toBe(false);
    });
  });

  describe('Modal Actions', () => {
    it('should open modal with id', () => {
      const { openModal } = useUIStore.getState();
      
      openModal('test-modal');
      
      const state = useUIStore.getState();
      expect(state.activeModal).toBe('test-modal');
      expect(state.modalData).toBe(null);
    });

    it('should open modal with data', () => {
      const { openModal } = useUIStore.getState();
      const testData = { test: 'data' };
      
      openModal('test-modal', testData);
      
      const state = useUIStore.getState();
      expect(state.activeModal).toBe('test-modal');
      expect(state.modalData).toEqual(testData);
    });

    it('should close mobile menu when opening modal', () => {
      const { openMobileMenu, openModal } = useUIStore.getState();
      
      openMobileMenu();
      expect(useUIStore.getState().isMobileMenuOpen).toBe(true);
      
      openModal('test-modal');
      
      const state = useUIStore.getState();
      expect(state.isMobileMenuOpen).toBe(false);
      expect(state.activeModal).toBe('test-modal');
    });

    it('should close modal', () => {
      const { openModal, closeModal } = useUIStore.getState();
      
      openModal('test-modal', { test: 'data' });
      expect(useUIStore.getState().activeModal).toBe('test-modal');
      
      closeModal();
      
      const state = useUIStore.getState();
      expect(state.activeModal).toBe(null);
      expect(state.modalData).toBe(null);
    });
  });

  describe('Loading Actions', () => {
    it('should set page loading', () => {
      const { setPageLoading } = useUIStore.getState();
      
      setPageLoading(true);
      expect(useUIStore.getState().pageLoading).toBe(true);
      
      setPageLoading(false);
      expect(useUIStore.getState().pageLoading).toBe(false);
    });

    it('should set search loading', () => {
      const { setSearchLoading } = useUIStore.getState();
      
      setSearchLoading(true);
      expect(useUIStore.getState().searchLoading).toBe(true);
      
      setSearchLoading(false);
      expect(useUIStore.getState().searchLoading).toBe(false);
    });
  });

  describe('Notification Actions', () => {
    it('should add notification with default duration', () => {
      const { addNotification } = useUIStore.getState();
      
      const notification = {
        type: 'success' as const,
        title: 'Test Notification',
        message: 'Test message',
      };
      
      addNotification(notification);
      
      const state = useUIStore.getState();
      expect(state.notifications).toHaveLength(1);
      expect(state.notifications[0].title).toBe('Test Notification');
      expect(state.notifications[0].type).toBe('success');
      expect(state.notifications[0].duration).toBe(5000); // default duration
      expect(state.notifications[0].id).toBeDefined();
    });

    it('should add notification with custom duration', () => {
      const { addNotification } = useUIStore.getState();
      
      const notification = {
        type: 'error' as const,
        title: 'Error Notification',
        duration: 10000,
      };
      
      addNotification(notification);
      
      const state = useUIStore.getState();
      expect(state.notifications[0].duration).toBe(10000);
    });

    it('should add notification with action', () => {
      const { addNotification } = useUIStore.getState();
      const mockAction = vi.fn();
      
      const notification = {
        type: 'info' as const,
        title: 'Info Notification',
        action: {
          label: 'Click me',
          onClick: mockAction,
        },
      };
      
      addNotification(notification);
      
      const state = useUIStore.getState();
      expect(state.notifications[0].action?.label).toBe('Click me');
      expect(state.notifications[0].action?.onClick).toBe(mockAction);
    });

    it('should remove notification by id', () => {
      const { addNotification, removeNotification } = useUIStore.getState();
      
      addNotification({
        type: 'success',
        title: 'Test 1',
      });
      
      addNotification({
        type: 'error',
        title: 'Test 2',
      });
      
      expect(useUIStore.getState().notifications).toHaveLength(2);
      
      const notificationId = useUIStore.getState().notifications[0].id;
      removeNotification(notificationId);
      
      const state = useUIStore.getState();
      expect(state.notifications).toHaveLength(1);
      expect(state.notifications[0].title).toBe('Test 2');
    });

    it('should clear all notifications', () => {
      const { addNotification, clearNotifications } = useUIStore.getState();
      
      addNotification({ type: 'success', title: 'Test 1' });
      addNotification({ type: 'error', title: 'Test 2' });
      
      expect(useUIStore.getState().notifications).toHaveLength(2);
      
      clearNotifications();
      
      expect(useUIStore.getState().notifications).toHaveLength(0);
    });
  });

  describe('Filter Actions', () => {
    it('should toggle filters', () => {
      const { toggleFilters } = useUIStore.getState();
      
      expect(useUIStore.getState().filtersOpen).toBe(false);
      
      toggleFilters();
      expect(useUIStore.getState().filtersOpen).toBe(true);
      
      toggleFilters();
      expect(useUIStore.getState().filtersOpen).toBe(false);
    });

    it('should open filters', () => {
      const { openFilters } = useUIStore.getState();
      
      openFilters();
      expect(useUIStore.getState().filtersOpen).toBe(true);
    });

    it('should close filters', () => {
      const { openFilters, closeFilters } = useUIStore.getState();
      
      openFilters();
      expect(useUIStore.getState().filtersOpen).toBe(true);
      
      closeFilters();
      expect(useUIStore.getState().filtersOpen).toBe(false);
    });
  });

  describe('Search Actions', () => {
    it('should set search query', () => {
      const { setSearchQuery } = useUIStore.getState();
      
      setSearchQuery('test query');
      
      expect(useUIStore.getState().searchQuery).toBe('test query');
    });

    it('should set search results', () => {
      const { setSearchResults } = useUIStore.getState();
      const mockResults = [{ id: '1', title: 'Result 1' }];
      
      setSearchResults(mockResults);
      
      expect(useUIStore.getState().searchResults).toEqual(mockResults);
    });

    it('should open search', () => {
      const { openSearch } = useUIStore.getState();
      
      openSearch();
      
      expect(useUIStore.getState().isSearchOpen).toBe(true);
    });

    it('should close search', () => {
      const { openSearch, closeSearch } = useUIStore.getState();
      
      openSearch();
      expect(useUIStore.getState().isSearchOpen).toBe(true);
      
      closeSearch();
      expect(useUIStore.getState().isSearchOpen).toBe(false);
    });

    it('should close mobile menu when opening search', () => {
      const { openMobileMenu, openSearch } = useUIStore.getState();
      
      openMobileMenu();
      expect(useUIStore.getState().isMobileMenuOpen).toBe(true);
      
      openSearch();
      
      const state = useUIStore.getState();
      expect(state.isMobileMenuOpen).toBe(false);
      expect(state.isSearchOpen).toBe(true);
    });

    it('should clear search', () => {
      const { setSearchQuery, setSearchResults, openSearch, clearSearch } = useUIStore.getState();
      
      setSearchQuery('test');
      setSearchResults([{ id: '1' }]);
      openSearch();
      
      expect(useUIStore.getState().searchQuery).toBe('test');
      expect(useUIStore.getState().searchResults).toHaveLength(1);
      expect(useUIStore.getState().isSearchOpen).toBe(true);
      
      clearSearch();
      
      const state = useUIStore.getState();
      expect(state.searchQuery).toBe('');
      expect(state.searchResults).toEqual([]);
      expect(state.isSearchOpen).toBe(false);
    });
  });

  describe('Auto-dismiss Notifications', () => {
    it('should auto-remove notification after timeout', async () => {
      vi.useFakeTimers();
      
      const { addNotification } = useUIStore.getState();
      
      addNotification({
        type: 'success',
        title: 'Auto Remove',
        duration: 1000,
      });
      
      expect(useUIStore.getState().notifications).toHaveLength(1);
      
      // Fast-forward time
      vi.advanceTimersByTime(1000);
      
      // Wait for async cleanup
      await vi.runAllTimersAsync();
      
      expect(useUIStore.getState().notifications).toHaveLength(0);
      
      vi.useRealTimers();
    });
  });
}); 