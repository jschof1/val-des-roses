import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useCartStore, useMobileMenuOpen, useToggleMobileMenu } from '@/store';
import Header from '../Header';

// Mock the store hooks
vi.mock('@/store', () => ({
  useCartStore: vi.fn(),
  useMobileMenuOpen: vi.fn(),
  useToggleMobileMenu: vi.fn(),
}));

const mockUseCartStore = vi.mocked(useCartStore);
const mockUseMobileMenuOpen = vi.mocked(useMobileMenuOpen);
const mockUseToggleMobileMenu = vi.mocked(useToggleMobileMenu);

describe('Header', () => {
  const defaultCartState = {
    totalQuantity: 0,
    isOpen: false,
    toggleCart: vi.fn(),
  };

  const mockToggleMobileMenu = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCartStore.mockReturnValue(defaultCartState);
    mockUseMobileMenuOpen.mockReturnValue(false);
    mockUseToggleMobileMenu.mockReturnValue(mockToggleMobileMenu);
  });

  describe('Rendering', () => {
    it('should render header with logo and navigation', () => {
      render(<Header />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByText('VAL DES ROSES')).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    });

    it('should render all navigation links', () => {
      render(<Header />);
      
      expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /care guide/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    });

    it('should render cart button with correct accessibility', () => {
      render(<Header />);
      
      const cartButton = screen.getByRole('button', { name: /shopping cart/i });
      expect(cartButton).toBeInTheDocument();
      expect(cartButton).toHaveAttribute('aria-expanded', 'false');
      expect(cartButton).toHaveAttribute('aria-controls', 'cart-drawer');
    });

    it('should render mobile menu toggle button', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });
  });

  describe('Cart Functionality', () => {
    it('should display cart count when items present', () => {
      mockUseCartStore.mockReturnValue({
        ...defaultCartState,
        totalQuantity: 3,
      });

      render(<Header />);
      
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /shopping cart with 3 items/i })).toBeInTheDocument();
    });

    it('should not display cart count when empty', () => {
      render(<Header />);
      
      expect(screen.queryByText('0')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /shopping cart with 0 item/i })).toBeInTheDocument();
    });

    it('should call toggleCart when cart button clicked', () => {
      const mockToggleCart = vi.fn();
      mockUseCartStore.mockReturnValue({
        ...defaultCartState,
        toggleCart: mockToggleCart,
      });

      render(<Header />);
      
      const cartButton = screen.getByRole('button', { name: /shopping cart/i });
      fireEvent.click(cartButton);
      
      expect(mockToggleCart).toHaveBeenCalledOnce();
    });

    it('should show cart as expanded when open', () => {
      mockUseCartStore.mockReturnValue({
        ...defaultCartState,
        isOpen: true,
      });

      render(<Header />);
      
      const cartButton = screen.getByRole('button', { name: /shopping cart/i });
      expect(cartButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Mobile Menu Functionality', () => {
    it('should call toggleMobileMenu when menu button clicked', () => {
      const mockToggleMobileMenu = vi.fn();
      mockUseToggleMobileMenu.mockReturnValue(mockToggleMobileMenu);

      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      fireEvent.click(menuButton);
      
      expect(mockToggleMobileMenu).toHaveBeenCalledOnce();
    });

    it('should show correct button text when menu is closed', () => {
      render(<Header />);
      
      expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /close navigation menu/i })).not.toBeInTheDocument();
    });

    it('should show correct button text when menu is open', () => {
      mockUseMobileMenuOpen.mockReturnValue(true);

      render(<Header />);
      
      expect(screen.getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /open navigation menu/i })).not.toBeInTheDocument();
    });

    it('should show mobile navigation when menu is open', () => {
      mockUseMobileMenuOpen.mockReturnValue(true);

      render(<Header />);
      
      const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
      expect(mobileNav).toBeInTheDocument();
      expect(mobileNav).toHaveAttribute('aria-hidden', 'false');
    });

    it('should hide mobile navigation when menu is closed', () => {
      render(<Header />);
      
      const mobileNav = screen.getByLabelText('Mobile navigation');
      expect(mobileNav).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      render(<Header />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByLabelText(/val des roses - go to homepage/i)).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    });

    it('should have focus management for interactive elements', () => {
      render(<Header />);
      
      const cartButton = screen.getByRole('button', { name: /shopping cart/i });
      const menuButton = screen.getByRole('button', { name: /navigation menu/i });
      
      // Buttons are focusable by default, no need for explicit tabIndex
      expect(cartButton).toBeVisible();
      expect(menuButton).toBeVisible();
    });

    it('should have proper link accessibility', () => {
      render(<Header />);
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });

    it('should handle keyboard navigation', () => {
      const mockToggleCart = vi.fn();
      mockUseCartStore.mockReturnValue({
        ...defaultCartState,
        toggleCart: mockToggleCart,
      });

      render(<Header />);
      
      const cartButton = screen.getByRole('button', { name: /shopping cart/i });
      
      cartButton.focus();
      expect(document.activeElement).toBe(cartButton);
      
      // Test that the button is clickable (keyboard accessible)
      fireEvent.click(cartButton);
      expect(mockToggleCart).toHaveBeenCalled();
    });
  });

  describe('Responsive Behavior', () => {
    it('should show desktop navigation by default', () => {
      render(<Header />);
      
      const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' });
      expect(desktopNav).not.toHaveClass('md:hidden');
    });

    it('should show mobile menu button', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /navigation menu/i });
      expect(menuButton).toHaveClass('md:hidden');
    });
  });

  describe('Logo and Branding', () => {
    it('should render logo as a link to homepage', () => {
      render(<Header />);
      
      const logoLink = screen.getByLabelText(/val des roses - go to homepage/i);
      expect(logoLink).toHaveAttribute('href', '/');
      expect(logoLink).toContainHTML('VAL DES ROSES');
    });

    it('should have proper logo styling', () => {
      render(<Header />);
      
      const logo = screen.getByText('VAL DES ROSES');
      expect(logo).toHaveClass('text-2xl', 'lg:text-3xl', 'font-light', 'tracking-[0.15em]');
    });
  });
}); 