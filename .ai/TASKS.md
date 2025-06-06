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