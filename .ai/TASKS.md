# Project Tasks

- [x] **ID 1: Project Scaffolding & Environment Setup** (Priority: critical)
> Set up Next.js, TypeScript, Tailwind, Motion, and initial repo structure. Configure linting, Prettier, and environment variables.

- [x] **ID 2: Tailwind & Global Styling Configuration** (Priority: high)
> Configure Tailwind theme, fonts, color palette, and global styles for luxury/minimalist look. Ensure no border-radius, proper typography, and responsive base.

- [x] **ID 3: Shopify Storefront API Integration** (Priority: critical)
> Integrate Shopify Storefront API client, set up env vars, and implement product/collection data fetching utilities.

- [x] **ID 4: Homepage Implementation** (Priority: high)
> Build the homepage with hero, brand intro, featured products, about teaser, newsletter, and footer. Use large imagery and scroll-based animations.

- [x] **ID 5: Product Listing/Collection Page** (Priority: high)
> Implement product grid, filtering, sorting, and responsive layout. Fetch products from Shopify and animate product cards.
> Dependencies: 3

- [x] **ID 6: Product Detail Page** (Priority: high)
> Build immersive product detail page with image gallery, variant selectors, add-to-cart, and related products. Integrate with Shopify cart logic.
> Dependencies: 3

- [x] **ID 7: Cart & Checkout Flow** (Priority: critical)
> Implement cart drawer, quantity controls, and checkout session creation (Shopify redirect). Ensure seamless, accessible UX.
> Dependencies: 3

- [x] **ID 8: About, Care Guide, and Misc Pages** (Priority: medium)
> Create About, Care Guide, 404, and policy pages. Ensure consistent layout, accessibility, and minimal design.

- [x] **ID 9: Animations & Framer Motion Patterns** (Priority: high)
> Implement fade-in, parallax, hover, and page transitions using Motion. Set up variants, stagger, and reduced motion support.
> Dependencies: 1

- [x] **ID 10: Accessibility & Responsive Design** (Priority: critical)
> Ensure semantic HTML, alt text, keyboard navigation, color contrast, and mobile-first responsive layouts across all pages.

- [x] **ID 11: State Management (Cart, UI, etc.)** (Priority: high)
> Set up Zustand or Context for cart and UI state. Integrate with cart drawer, nav, and checkout logic.
> Dependencies: 7

- [x] **ID 12: Testing & QA** (Priority: high)
> Write unit/integration tests for components, cart logic, and API utilities. Test accessibility and responsive behavior.
> Dependencies: 4, 5, 6, 7, 8, 9, 10, 11

- [x] **ID 13: Deployment & Analytics** (Priority: medium)
> Set up Vercel deployment, custom domain, and analytics/SEO. Ensure environment is production-ready.
> Dependencies: 12

- [ ] **ID 14: Vallée des Roses Brand Content Update** (Priority: high)
> Update all website copy to reflect Vallée des Roses branding, Iryna's story, and preserved roses business focus. Replace generic content with authentic brand messaging.

- [ ] **ID 15: London Same-Day Delivery Feature** (Priority: high)
> Implement same-day delivery option for London postcodes with postcode validation, delivery fee calculation, and cart integration.
> Dependencies: 7

- [ ] **ID 16: Preserved Roses Education Content** (Priority: medium)
> Add comprehensive preserved roses education section with care instructions, longevity information, and comparison with fresh/artificial flowers.
> Dependencies: 14

- [ ] **ID 17: Conversion Optimization Improvements** (Priority: high)
> Implement conversion-focused features like urgency indicators, social proof elements, improved CTAs, and trust signals to increase sales conversion.
> Dependencies: 14, 15

- [ ] **ID 18: Homepage Hero & Navigation Updates** (Priority: high)
> Update homepage hero section with Vallée des Roses messaging, improve navigation with delivery info prominence, and add London delivery callout.
> Dependencies: 14, 15