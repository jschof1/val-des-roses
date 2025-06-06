# Vallée des Roses – Luxury E-commerce Website Spec

## Project Goal & UX Philosophy

The goal is to build a **luxury e-commerce website** for *Vallée des Roses*, a London-based preserved rose brand. The website should embody a **minimal, elegant user experience** that reflects luxury and quality. All design and UX choices should evoke a premium feel – **opulent yet understated**, with an emphasis on **simplicity, performance, and smooth interactivity**. High-end websites use refined typography and immersive visuals to convey trust and sophistication. Likewise, this project will prioritize a **clean, uncluttered interface**, **high-impact visuals**, and **intuitive shopping UX** to position Vallée des Roses as a top-tier luxury brand online.

Key principles of the UX philosophy include:

* **Simplicity & Clarity:** Navigation and content should be straightforward. The shopping experience must be frictionless (easy product discovery, quick add-to-cart, and simple checkout) to meet *best-in-class e-commerce UX* standards.
* **Elegance in Design:** Employ a restrained design language – **ample white space, graceful typography, and subtle details** – to let the product and brand story shine. Luxury brands often favor elegant serif fonts to convey trust and sophistication, so we will use a serif typeface for headings and a complementary sans-serif for body text for clear reading.
* **Performance & Polish:** The site should feel **fast and smooth**. Despite using large images and animations, it must load quickly and respond fluidly, as delays can hurt conversion rates. We will leverage Next.js static generation and image optimization to keep load times low, ensuring that even image-rich pages remain performant.
* **Immersive Experience:** Incorporate **smooth scroll-based animations and transitions** that create a sense of depth and interactivity without overwhelming the user. This includes gentle fades, **parallax scrolling effects**, and refined hover interactions that enrich the experience. Such touches help a site feel interactive and premium, as seen on top luxury sites (e.g., Armani’s site uses eye-catching parallax with high-res images).

By adhering to these principles, the website will **invite users into the brand’s world** – much like how luxury hospitality or fashion sites usher visitors into an aspirational lifestyle – while maintaining usability and encouraging conversions.

## Visual Design Direction

The visual direction for Vallée des Roses is **minimalist luxury**. The design will use a **modern, sparse aesthetic** that highlights the beauty of the preserved roses. Key visual guidelines:

* **Large Hero Imagery:** Utilize full-width, high-quality photographs of the rose arrangements as impactful hero sections. Luxury websites often feature immersive, screen-filling images to captivate users. For example, Off-White’s site balances generous whitespace with a large central image to grab attention. Our homepage will open with a striking hero image (or video) showcasing the roses, immediately conveying quality. Images should be optimized and use Next.js `<Image>` for responsive sizing and fast loads.
* **Sophisticated Typography:** Use an elegant **serif font for headings** (e.g. a high-end typeface) to project luxury and trust. Pair this with a clean sans-serif for body text for readability. Headings will be set in a relatively large size to appear bold and confident, but with a refined weight. All text will have ample spacing and align to a grid system to maintain a polished look.
* **Neutral Palette & Soft Textures:** The color scheme will be **monochromatic neutrals** (whites, blacks, subtle grays), possibly accented by the natural colors of the roses (soft pinks, reds) used sparingly. A predominantly neutral background allows the vibrant roses to stand out (as Hermès’ site shows – neutral space lets luxury products shine). We can also incorporate **soft, subtle textures** in backgrounds (like a faint paper or fabric grain) to add depth without clutter. Using **soft textures aligns with luxury branding** and adds a tactile quality. These textures must remain subtle (low contrast) so as not to distract, following best practice to enhance design quietly.
* **Iconography:** Any icons (e.g., cart, menu, social icons) will be **monochrome** (single-color) and simple. A consistent line-style icon set (such as Heroicons or Lucide) will be used to match the minimalist aesthetic. Research indicates that a bold, modern design often minimizes icon usage; if icons are used, they should be small, simple, and typically black-on-white or vice versa. This approach ensures icons support the content without drawing undue attention.
* **No Border Radius:** All elements like buttons, images, and containers will use **sharp, squared corners** (no or very minimal border-radius) to maintain a **clean and formal look**. Rounded corners often feel playful or casual, whereas sharp corners convey seriousness and elegance. In fact, many high-end or “bold” modern designs opt for no border-radius on cards and buttons. Our design will consistently use straight edges for a cohesive, refined appearance.
* **Minimal UI & Monochrome Elements:** The UI chrome (navigation bar, buttons, inputs) will be kept minimal. Expect lots of white (or black) space, thin dividers or no visible borders, and text-only or icon-only buttons without heavy styling. Buttons might be plain text with an underline on hover or very light borders, to keep them elegant. Form fields and boxes will have **no heavy shadows or gradients** (avoiding drop shadows unless needed for hierarchy). This flat design approach aligns with luxury minimalism (no heavy embellishments). Any decorative elements (like lines or background sections) should be done in a subtle way, possibly with opacity or texture rather than bright colors.

Overall, the **look and feel** should be **timeless and high-end**: think of editorial layouts or luxury print magazines – plenty of white space, gorgeous imagery, tasteful typography. We aim for users to subconsciously associate the site’s polished design with the premium quality of the product.

## Animations & Framer Motion Interactions

We will implement **smooth, scroll-based animations and interactive effects** using Framer Motion (Motion.dev for React). Animations should enhance the luxury feel (by adding sophistication and interactivity) but **must not hinder usability**. All motion will be **deliberate and subtle** – avoiding anything too flashy or distracting. Key animation implementations:

* **Fade-in Scroll Reveals:** As the user scrolls down each page, elements (text blocks, images, product cards) will gently **fade into view** with a slight upward motion. Using Framer Motion’s viewport triggers (e.g. `whileInView` or `useInView` variants), we can animate components to appear when they enter the viewport. This gives a polished reveal effect, guiding the user’s attention to content as they scroll. For example, section headings might start at 0% opacity and translate Y = 20px, then animate to 100% opacity and Y = 0 on enter.
* **Parallax Scrolling Effects:** To create depth, we will incorporate **parallax effects** on hero sections or background images. The parallax technique (moving elements at different scroll speeds) adds a dynamic, immersive layer to the experience. For instance, on the homepage hero, the background image could scroll slightly slower than the foreground text, creating a subtle 3D effect as the user scrolls. Framer Motion’s `useScroll` hook and `useTransform` can map the scroll position to CSS transforms on elements. This is a common feature in luxury sites (e.g., Armani’s site uses parallax scroll to make images feel interactive). We will ensure the parallax movement is smooth and not too exaggerated – just a **gentle offset** that enhances depth.
* **Hover Lift and Micro-interactions:** All interactive elements (buttons, product cards, images) will get refined **hover effects** to provide tactile feedback. Using Framer Motion’s `whileHover`, we can slightly **raise or scale up** a component on hover (e.g. scale to 1.03, or translateY(-2px) with a shadow) to simulate a “lift”. For example, product cards might lift and cast a soft shadow on hover, indicating clickability in a delightful way. Links and buttons can subtly change opacity or underlines can animate from center. These micro-interactions make the site feel alive and responsive to the user’s actions, which is key for a best-in-class UX.
* **Section Transitions & Continuity:** Between major scroll sections or page transitions, we will use **smooth transitions** so the experience feels cohesive. For instance, as the user scrolls from the hero into the product grid, we can animate the change in background or introduce the next section with a slight delay/stagger so content doesn’t just “pop” abruptly. On route changes (navigating between pages), we can utilize Framer Motion’s `<AnimatePresence>` to animate page exit and entry (e.g. fade out old page, fade in new page) rather than a hard cut, giving a more seamless feel.
* **Loading and Feedback Animations:** Consider adding a subtle loading indicator or transition when adding an item to cart or loading checkout. For example, when “Add to Cart” is clicked, the button might briefly morph or show a checkmark, and the cart icon could animate to indicate the item addition. These little touches reinforce an intuitive UX.
* **Easing and Timing:** We will use easing curves that feel smooth and natural (such as `easeOut` or `circOut` for fades and movements) and keep animation durations fairly short (200–500ms range) so interactions feel responsive. Longer animations (like parallax or section reveals) will be tied to scroll or use slight delays to create a luxurious paced feel without being slow. All animations will be tested for **performance** (using transform and opacity properties which are GPU-optimized).
* **Reduced Motion Support:** Importantly, we will respect user preferences for reduced motion. Using the `useReducedMotion()` hook from Framer Motion, we can disable or simplify animations if `prefers-reduced-motion` is enabled. For example, instead of moving elements on scroll, we might simply show them without motion for users who opt out of animations, ensuring accessibility and comfort.

Each animation will be implemented with attention to **consistency** (using variants to reuse animation definitions across components) and **accessibility** (no essential content hidden behind animation; providing fallbacks or instant display if motion is reduced). The result will be a site that feels **polished and engaging**, with animations that **delight users subtly** in line with the luxurious theme.

## Key Pages & Features

The site will consist of several core pages, each statically generated via Next.js and styled for a cohesive experience:

* **Homepage:** This is the flagship introduction to the brand. It will feature a **full-screen hero section** with a striking image (or video) of the roses arrangement, plus a tagline or call-to-action (e.g., “Luxury Preserved Roses – Timeless Elegance”). A smooth scroll cue may prompt users to scroll down. As the user scrolls, we’ll present a series of **sections**:

  * A brief **brand intro or value proposition** (e.g., “Real Ecuadorian roses, preserved to last a year” with icons or stats).
  * A **featured products or collection preview** – e.g., a grid of bestsellers or new arrivals with product images. These product cards will animate in (fade-up) as the user scrolls to this section.
  * An **about teaser** – a short snippet of the brand story or craftsmanship, possibly with a background image and a link to the full About page.
  * Possibly a **newsletter signup or offer section** to capture user interest, if relevant (minimal design, just an email field and submit, with proper consent messaging).
  * **Footer** snippet (which on all pages) containing navigation links, contact info, and social media links.

  The homepage design will lean heavily on **visual storytelling** – large imagery and concise, impactful text – to immediately signal the luxury positioning.

* **Product Listing / Collection Page:** This page will display a **catalog of products** (for example, all preserved rose arrangements or specific collections like “Bouquets”, “Single Rose Boxes”, etc.). It will fetch products from Shopify’s Storefront API, likely by collection handle or product tags. The layout will be a **clean grid** of product cards:

  * Each product card shows a **photo, product name, price**, and perhaps a subtle indication if it’s available in multiple colors or sizes (if applicable).
  * The grid will be responsive (e.g., 2 columns on mobile, up to 3-4 columns on desktop with adequate whitespace).
  * No heavy borders or shadows on cards; on hover the card may lift (as described) or the image may subtly zoom to show interactivity.
  * If the product range is large, include **filters and sorting** controls at the top: e.g., filter by color, size, price range, sort by price or popularity. These controls should be minimal but accessible (use native selects or a simple dropdown, styled with Tailwind). Comprehensive filters are a known usability booster for product findability.
  * Breadcrumb navigation at the top can show “Home / Shop / Collection Name” for orientation (helpful for UX and SEO).
  * When clicking a product, it goes to the Product Detail page.

* **Product Detail Page:** This page provides an immersive look at a single product:

  * **Image Gallery:** A primary large product image at top. Users should be able to see multiple images (e.g., different angles or variants). Use a gallery component with thumbnails or a slider. We might implement a lightbox or zoom on click to see details. Ensuring images have descriptive alt text for accessibility.
  * **Product Info:** The product title (using serif font for elegance), description (outlining materials, preservation process, etc.), and price (formatted nicely, e.g., “£120”). If there are variants (like box color or rose color), provide a clear UI to select (e.g., a set of swatches or a dropdown). Use clear labels and ensure selecting variants is keyboard-accessible.
  * **Add to Cart:** A prominent but classily styled button to add the item to cart. The button could span full width on mobile for easy tapping. On click, we will use Shopify’s API to add the item to a cart. Possibly show a confirmation (“Added to cart”) or open the mini-cart.
  * **Details:** Sections for additional info like care instructions, dimensions, or sustainability notes can be presented in an accordion or tab interface (but ensure that even if JavaScript is off, the info is accessible – perhaps using disclosure components from Headless UI for accessibility).
  * **Related Products:** Below, showcase a few related or recommended items (“You may also like”) to encourage browsing. These can be fetched via Shopify (for example, using product tags or a “related” collection). This section also will have a simple horizontal scroll list or small grid, keeping the same minimalist style.

* **About Page:** A content-rich page telling the story of Vallée des Roses. This will include:

  * The brand’s **history and mission** – possibly with an image or two of the founder or the rose arrangements in decor settings.
  * **Quality and Craftsmanship:** An explanation of the preservation process, emphasizing the luxury and care (could use small icons or illustrations for steps – monochrome style).
  * **Sustainability or Values:** If the brand emphasizes sustainability (preserved flowers are eco-friendly vs fresh), include a section on that (the original site had a Sustainability page, which we can integrate here or as separate page).
  * **Layout:** Use a mix of text and images arranged elegantly. For instance, a full-width banner image at top, then a two-column text/image block that might alternate (text next to image) as you scroll, to keep visual interest (with smooth fade-in animations per block).
  * Typography and style here should be consistent: headings in serif, body in sans-serif, and perhaps pull-quotes or stylized text for important points. Soft section separators or background colors (e.g., a very light gray behind a quote) can add refinement.
  * Include any **press mentions or testimonials** if available, as social proof (styled in a simple, elegant way, maybe italic serif for quote text).
  * **Contact Information:** Possibly at bottom or a separate Contact page. If not separate, ensure the About page or footer provides contact email, phone, and a simple contact form (with accessible labels).

* **Checkout / Cart:** The site being headless means we have to handle cart and checkout flow:

  * We will implement a **Cart** component accessible from every page (often via a cart icon in the header). Clicking the cart icon could open a **slide-out cart drawer** from the side, listing items added. This mini-cart will show product thumbnails, names, prices, quantity controls, and a subtotal. It should allow removing items or adjusting quantity inline. The cart drawer can be implemented as a modal using Headless UI for focus trap and escape-to-close (ensuring accessibility).
  * For **Checkout**, since Shopify handles the actual payment securely, we have two options:

    1. **Redirect to Shopify Checkout:** The simplest approach is when the user clicks “Checkout” in our cart, we generate a checkout session via Storefront API and redirect the user to the Shopify-hosted checkout page (on the brand’s `.myshopify.com` domain). This ensures all secure payment processing and order finalization happens via Shopify. We will style the Shopify checkout to match branding as much as allowed.
    2. **On-site Checkout (Hybrid):** Alternatively, we can create a custom checkout page on our site that uses Shopify’s Storefront API to process the order (this would involve capturing shipping info, etc., then using the API to create an order). This is more complex and usually not needed unless a fully integrated feel is desired. Given this is a luxury brand, we may opt for the simpler redirect (to ensure reliability and security compliance), unless a fully custom checkout is a requirement.
  * If we implement a **Checkout page** on-site (for example, to review order summary before final redirect), it will have a clean form for shipping details and a summary of cart items. It should be broken into clear steps or sections (Shipping Address, Payment Info, Review) with a progress indicator if multi-step. However, to avoid PCI compliance issues, actual payment input is likely handled by Shopify’s domain.
  * In either case, ensure the **checkout process is as seamless as possible**: minimal steps, clear error messages on forms, and provide reassurance (e.g., trust badges or a note about secure payment). A complicated checkout can cause drop-off, so we emphasize simplicity.
  * **Order Confirmation:** If redirecting to Shopify, they’ll show confirmation. If not, we’d show an Order Confirmation page with details and perhaps an invitation to follow on social or sign up for newsletter for updates.

* **Miscellaneous Pages:**

  * **Care Guide:** The original site had a Care Guide. We can incorporate that content either under About or as a separate static info page. It will detail how to care for the preserved roses (keep out of direct sunlight, no watering, etc.). This page should follow the same layout style as About (text and images, maybe an FAQ format).
  * **404 Page:** A custom 404 page with a graceful message (“Lost in the petals?”) and a link back to Home or Shop, maintaining the brand tone.
  * **Policies (Privacy, Terms, Shipping, Returns):** These can be in the footer as links to simple pages or modals with text. They should be accessible and simple in layout (mostly text with heading hierarchy).

All pages will be **fully responsive** and tested on mobile, tablet, and desktop. The design will follow a **mobile-first approach**: start with a clean single-column mobile layout (easy tap targets, mobile nav menu), then enhance for larger screens with multi-column grids and additional whitespace. This ensures a good experience on all devices.

Throughout the site, we maintain **consistency** in styling and behavior. Elements like the header and footer are consistent on all pages. The header likely contains the logo (which could be centered for a classic look, or left-aligned), a minimal nav (perhaps just “Shop” and “About”, plus an icon for cart). On mobile, the nav condenses to a menu icon. The footer can repeat key links and show social media icons (monochrome) and contact info.

By covering these pages and features, the site will provide a **complete end-to-end shopping experience** – from first impression through product browsing, education about the brand, purchase, and post-purchase support – all in a luxurious, user-friendly interface.

## Tech Stack & Integration Details

We will use a **modern Jamstack** approach leveraging the following technologies:

* **Next.js (React)**: Next.js will be the foundation, providing the React framework for our UI and the ability to pre-render pages for performance. We will primarily use **Static Generation** (getStaticProps/Paths or the newer `generateStaticParams` if using Next 13+ `app` directory) to fetch product data at build time from Shopify. This yields a fast, static site that can be deployed on Vercel and served globally. Where dynamic updates are needed (e.g., new products or inventory changes), we can use **Incremental Static Regeneration** to revalidate pages after a certain interval, or fallback to client-side fetch for real-time data if necessary (though we’ll try to avoid too many client fetches to keep things fast).
* **TypeScript**: The project will be written in TypeScript for type safety and maintainability. Data models (like product, collection, cart item types) will be defined based on Shopify’s GraphQL schema. This helps catch errors early and makes the code more self-documenting.
* **Tailwind CSS**: Tailwind will handle the styling with utility classes, enabling rapid UI development with consistent spacing, color, and typography scales. We will configure Tailwind’s theme to include the brand’s font families (serif and sans), and perhaps adjust the color palette (likely just black, white, gray, plus maybe a gold or rose color if needed for accents). Using Tailwind ensures we follow an **atomic CSS** approach (small, reusable styles) which keeps the CSS footprint minimal and avoids specificity wars. It also encourages responsive design via its mobile-first breakpoints (`sm:`, `md:`, etc. for progressively enhanced styles).
* **Motion (formaly known as Framer Motion)**: As described, for animations we use Motion (the `motion` NPM package). It integrates with React easily and will allow us to create the variety of animations (scroll-linked, hover, transitions) in an orchestrated way. We'll create reusable motion variants and use features like `AnimatePresence` and `LayoutGroup` for coordinating animations between components.
* **Headless Shopify (Storefront API)**: Shopify will serve as the e-commerce backend (product info, inventory, checkout). We will **not** use a Shopify theme or Liquid – instead the site is headless, communicating with Shopify via the Storefront GraphQL API. To simplify this integration:

  * We will use the **Storefront API Client** library from Shopify (e.g. `@shopify/storefront-api-client`) which provides a lightweight wrapper for querying the API. With this, we can initialize a client with our shop domain and Storefront API access token and perform queries for products, collections, and creating checkouts.
  * Alternatively, we could use `graphql-request` or Apollo Client for GraphQL calls, but the Shopify client is straightforward and comes with TypeScript types. Using it ensures we handle auth and API versions properly.
  * We will secure the **Storefront API token** in a Next.js environment variable (e.g., `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_TOKEN` in `.env.local`). The Next.js build can use these to fetch data server-side. (No secret admin API keys will be exposed to the client; the Storefront token is safe to use in client-side if needed, as it’s meant for public queries with limited scopes.)
  * Data fetching strategy: Product listing pages (`/shop` or collection pages) will use getStaticProps to fetch a list of products (maybe limited to certain collections). Product detail pages will use getStaticPaths (to pre-generate pages for each product by handle or ID) and getStaticProps to fetch the specific product by its handle. The Shopify GraphQL queries will retrieve all necessary fields (title, description(HTML), images, price, options, variants, etc.) in one go to avoid multiple calls.
  * For dynamic data like the cart, we will use Shopify's Storefront mutations. For example, when adding to cart, we might use the `cartCreate` and `cartLinesAdd` mutations from the Storefront API (Shopify has a newer Cart API). Alternatively, we can manage a local cart state and on checkout create a Checkout session via `checkoutCreate` containing line items, then redirect.
  * We will implement a small **serverless API route** (Next.js API) if needed for any secure operations (though most can be done client-side with the Storefront token). For instance, to avoid exposing certain logic, we could have `/api/createCheckout` that calls Shopify and returns a checkout URL.
* **Hosting on Vercel:** The site will be deployed on Vercel, which is well-optimized for Next.js. Vercel will handle CDN caching, and we can set up preview deployments for testing. The static nature of the site means it will be globally fast. We should configure a custom domain (valleedesroses.co.uk presumably) on Vercel and ensure SSL. Vercel’s analytics and monitoring can be used to keep an eye on performance.
* **Analytics & SEO:** We will integrate basic SEO optimizations: appropriate `<title>` and `<meta description>` on each page (maybe using Next.js Head or a library like `next-seo`). For analytics/tracking (if needed), a simple Google Analytics or similar snippet can be added, but it must not slow the site (defer it). Also, we ensure good HTML semantic structure which improves SEO (e.g., using proper headings, alt text, etc., which also ties into accessibility).
* **State Management:** For local state (like cart state, UI state for modals), we can use React’s Context or a light state library. We prefer **Zustand** (a small but powerful state management library) for the cart state because it’s simple and avoids prop drilling. This helps maintain cart items globally accessible to the Nav (for item count badge) and the Cart drawer, without heavy Redux setup. Alternatively, the built-in React Context + useReducer could suffice for a simple cart.
* **Utility Libraries:** We will make use of a few key utility libraries:

  * `clsx` (or `classnames`) for conditionally joining Tailwind classes in JSX easily. This keeps our className props clean when applying dynamic classes.
  * `tailwind-variants` for creating reusable styled components with Tailwind. This helps define, for example, a Button variant factory – ensuring consistent styles for primary/secondary buttons, etc., without duplicating class lists. It provides a typed API to manage variants and is framework-agnostic, improving maintainability.
  * Possibly `@headlessui/react` for pre-built accessible components (like modals, popovers, accordions). For example, the mobile menu and cart drawer modal could use HeadlessUI Dialog for robust accessibility (focus trapping, etc.) with our own styling.
  * If needed, `react-hook-form` for forms (like contact or checkout fields) to manage validation cleanly, and `yup` or similar for schema validation of form inputs.
  * **Icon Library:** Rather than custom images for icons, use an icon library such as Heroicons (Tailwind’s icons) or Lucide icons to have a consistent set of SVG icons that can be easily styled (we can set their stroke color to currentColor so they inherit text color, making them easy to turn monochrome).
  * For currency formatting, use Intl APIs or a library like `Dinero.js` or simply a util function to format prices to GBP with proper symbols and decimals.
  * Testing: For unit or integration testing, if in scope, we could use Jest and React Testing Library to ensure components (like the cart logic) work correctly. Visual regression testing on key pages might be done via Storybook or Percy in the future given the importance of design consistency.

All code will follow a **clean structure**: pages (or app route handlers) handle data fetching, and we create modular UI components (in a `/components` directory) for pieces like Header, Footer, ProductCard, etc. Styles are largely inlined via Tailwind classes, but for any custom CSS (like keyframes or global resets) we will have a global stylesheet (Tailwind’s base and components layers can be used for typography defaults, etc.).

By carefully choosing these technologies and libraries, we ensure the development process is efficient and the final product is **fast, reliable, and easy to maintain**. The stack is **scalable** (we can add more pages or features easily) and aligned with modern best practices.

## Accessibility & Responsive Design

Accessibility is a first-class concern, and we will include **accessible design/development practices from the start** (many of these will also be codified in Cursor “Always” rules for the project). Key accessibility considerations:

* **Semantic HTML:** Use appropriate semantic elements for content. Headings (`<h1>…<h6>`) will be used in logical order (each page has a single `<h1>` for the main title, etc.). Navigation will use `<nav>` landmarks, main content in `<main>`, footer in `<footer>`, etc. This helps screen readers and other assistive tech parse the site structure.
* **Alt Text for Images:** All images, especially product images, will have **descriptive `alt` attributes**. For product photos, the alt text will describe the product (e.g., “Small round black box with 9 red preserved roses”). This ensures visually impaired users understand what the image conveys. Purely decorative images (if any) will use empty alt (`alt=""`) so they are skipped by screen readers. We’ll follow best practices to keep alt text concise yet meaningful.
* **Keyboard Navigation:** The site will be fully usable via keyboard alone. This means:

  * All interactive elements (links, buttons, form fields) are focusable in a logical order.
  * We will ensure no component traps focus (except modals intentionally trapping focus within until closed). Use `tabindex` appropriately for custom elements if needed.
  * Visible focus indicators will be present. We won’t disable outline unless providing an equal or better styling. In fact, we will likely customize focus styles (e.g., a subtle outline or underline) to match the design but still be highly visible.
  * Dropdowns or popovers will be accessible (arrow key navigation if needed, or at least focus moves into them).
* **Contrast & Color Use:** We’ll adhere to WCAG contrast guidelines. The design is mostly black text on white which is high contrast. Any text over images (like hero text over a photo) will be placed over a darker overlay or light photo area to ensure readability, or we’ll add a subtle text-shadow/overlay. We aim for at least 4.5:1 contrast ratio for normal text. Our monochrome palette makes this easier (e.g., black on white). We’ll also ensure that **color is not the only means of conveying information** – for instance, if we have an error message it will have an icon or text, not just a red outline.
* **Accessible Forms:** Any forms (checkout, contact) will have properly associated `<label>`s for inputs. We will provide helpful placeholder or helper text and use ARIA live regions to announce form errors if any. For example, if checkout has a multi-step form, when an error occurs (like invalid card), an error message in text appears and is focusable or announced to assistive tech.
* **ARIA and Roles:** We’ll use ARIA roles and attributes where needed (but avoid overusing them if semantic elements suffice). For example, the mobile navigation menu when open will have `aria-modal="true"` and appropriate roles, the cart drawer might use `role="dialog"`, and buttons that toggle these modals will have `aria-expanded` and `aria-controls` attributes to communicate state. Product variant selectors might use `role="radiogroup"` and `role="radio"` for color swatches if they’re not literally radio inputs, to ensure screen readers know how to interact.
* **Skip Link:** Implement a “Skip to Main Content” link at the top of the page (visible on focus) to allow keyboard users to bypass the header navigation easily.
* **Responsive Design (Mobile-first):** The layout will adapt to different screen sizes gracefully:

  * On small screens, use a single-column layout, large touch-friendly buttons, and ensure text is legible without zoom. We’ll base font sizes on relative units and test scaling up to 200% zoom.
  * Images will be responsive (using Next Image with `sizes` attribute to serve appropriate resolutions). No element should cause horizontal scrolling on small screens (we will test and fix any overflow issues).
  * Interactive elements on touch devices will have adequate spacing to avoid touch errors. For example, tap targets (buttons, links) should be at least \~44px in height.
  * The design will use Tailwind’s responsive utilities to adjust padding/margins so that on larger screens the content isn’t overly narrow or wide. We aim for a comfortable max width (perhaps \~1200px container) for reading on desktop, and generous padding on either side.
* **Testing:** We will test the site with screen reader software (like VoiceOver or NVDA) to ensure the reading order and announcements make sense. Also test keyboard-only use to catch any focus traps or inaccessible components. We’ll verify forms and interactive widgets (menus, cart) for accessibility issues before launch.

Accessibility is an “always on” requirement – all team members will be instructed (via rules and guidelines) to follow these practices. This ensures the final product can be used by all customers, reflecting the inclusive values of a modern brand, and also complies with relevant legal standards (like WCAG 2.1 AA).

## Code Structure & Conventions

To manage a project of this scope, we will maintain a clear code structure and adhere to conventions that keep the codebase scalable:

* **Project Structure:** We will separate concerns clearly. Likely structure:
  * `/pages` (or `/app` if using Next 13’s App Router) for page components (each page will fetch its data and render high-level layout).
  * `/components` for reusable components (e.g., `NavBar.tsx`, `Footer.tsx`, `ProductCard.tsx`, `ProductGallery.tsx`, `CartDrawer.tsx`, etc.). Each component in its own file, possibly grouped in subfolders by domain (e.g., all cart-related components in a `cart/` subfolder).
  * `/lib` or `/utils` for utility functions (e.g., a Shopify API helper module, formatting utilities).
  * `/styles` for global styles or Tailwind config (Tailwind will generate most utility classes, but we might have a `globals.css` to import Tailwind’s base and any custom CSS).
  * `.cursor/rules` directory containing our Always/Auto/Manual rules (for our development environment to enforce guidelines – described at the end of this document).
* **Component Design:** Follow a modular, component-driven approach. We will use React functional components with clear props. For example, a `ProductCard` component will receive a product object and a variant of layout, and it will render the image and info in the prescribed style. This encourages reuse (same card component on home, listing, related items).

  * Use **hooks** to encapsulate logic (e.g., a `useCart()` hook to provide cart state and actions throughout the app).
  * Favor composition over inheritance – build small components and compose them (e.g., a generic `Button` component styled for the site, which can be used everywhere for consistency).
* **Styling Conventions:** Use Tailwind classes for the bulk of styling. We will keep className strings not too long by leveraging component abstractions and Tailwind’s variant features:

  * E.g., define a base class set for buttons in one place (using Tailwind Variants or even just a constant string) and reuse it.
  * Use **CLS (component-layer styles)** for any repeated pattern that Tailwind can’t easily handle (Tailwind Variants library will help to formalize this).
  * Keep responsive tweaks co-located with components for clarity (Tailwind makes it easy to add `md:`, `lg:` modifiers right in the JSX).
  * Ensure we don’t override Tailwind defaults in a way that breaks consistency (e.g., stick to the default spacing scale, or if we define custom spacing, apply it consistently).
* **Naming & Organization:** Use meaningful naming for components and files. For instance, use `CartDrawer.tsx` instead of something vague like `Drawer1.tsx`. Inside components, use clear variable names (e.g., `products`, `setIsOpen` for state setters). CSS classes via Tailwind will reflect design intent (e.g., `text-center text-3xl font-serif` clearly indicates a centered large serif text).
* **State and Data Handling:**

  * Keep global state minimal (cart, possibly user auth if that ever exists – though likely not for this project beyond maybe a wishlist). Use Context/Zustand as mentioned to avoid prop drilling.
  * Fetch data in Next’s data-fetching methods. Avoid heavy client-side data fetching; for any runtime needs (like filtering on the client), we can fetch all needed data at build and use client-side filtering for instantaneous response.
  * Use TypeScript interfaces or types for data shapes (e.g., `Product`, `Collection`, `CartItem`), perhaps even generating them from the GraphQL schema using codegen to avoid manual errors.
* **Error Handling:** Implement graceful error states – e.g., if product data fails to load, show a friendly message or a fallback “Try again” link. Next.js will handle 404 for unknown product pages if we don’t pre-render them; we’ll customize that page. Also handle out-of-stock or unavailable products by disabling the add-to-cart button and showing an “Sold Out” label (with appropriate styling to indicate unavailability).
* **Performance Optimizations:**

  * Use Next.js dynamic import (`import(...).then`) for any large component that’s not needed immediately (for example, maybe load the Hero video component only on client side or heavy libs like a 3D viewer if that existed).
  * All pages will be audited with Lighthouse or similar to ensure we hit good performance marks (e.g., compress images, use Next’s built-in image optimization, preload critical assets).
  * We will avoid any client-side runtime that’s unnecessary; for instance, we won’t use jQuery or heavy polyfills unnecessarily. The stack we chose (Next, Tailwind, etc.) is already quite optimized.
* **Linting & Formatting:** We’ll use ESLint with recommended configs (including `eslint-plugin-react` and `eslint-plugin-jsx-a11y` for accessibility linting) to catch code issues. Prettier will be used to format code consistently on save/commit. These ensure code quality and consistency across the team.
* **Dev Conventions:**

  * Commits will be made following a clear message format (maybe Conventional Commits if decided, e.g., “feat: add homepage hero component”).
  * The project may adopt a branching strategy (like feature branches merged into main via PRs) if multiple devs.
  * We’ll write documentation where needed (e.g., README on how to set up env vars, run the project, how to add new products in Shopify and see them on site).
  * Maintainability: We choose packages that are well-supported and avoid overly custom hacks so that updates are easier. We also keep an eye on bundle size (e.g., avoid importing huge dependencies for small features).

By following these conventions, the codebase will remain **clean, understandable, and scalable** as the project grows. New contributors would be able to read the task (this document) and the rules to quickly get up to speed on how to maintain the project’s quality and style.

## Recommended Libraries & Packages

Below is a list of key NPM packages and tools we plan to use, along with the reasons they are well-suited for this project:

* **Next.js** – The core React framework for our app, enabling hybrid static & server rendering, route pre-fetching, and a great developer experience.
* **React & React-DOM** – (Installed with Next) for building our UI components.
* **TypeScript** – Static typing for reliability (Next.js comes with TS support out of the box).
* **Tailwind CSS** – Utility-first CSS framework for rapid styling. Its atomic class approach keeps our CSS minimal and design consistent.
* **Motion (formaly known as Framer Motion)** – The go-to animation library for React, offering declarative animations and performance. It will handle all our fades, hover animations, and scroll effects.
* **Shopify Storefront API Client (`@shopify/storefront-api-client`)** – Official lightweight Shopify Storefront API client. This simplifies making GraphQL queries and managing the Shopify connection, with built-in support for the latest API versions and types.
* **SWR or React Query** (optional) – If we need client-side data fetching/caching (for dynamic content like live inventory or something), these libraries help manage fetch logic. Next.js can handle most data needs server-side, but these could be useful for client caching of cart or user session data.
* **clsx** – Utility for conditionally joining classNames (e.g., `clsx('px-4 py-2', isActive && 'bg-black text-white')`). This is small but invaluable for clean JSX when applying Tailwind classes based on state.
* **tailwind-variants** – A library to create Tailwind-based component variants easily. This helps define reusable component styles with variants (like size or theme variations) in a type-safe way. It leads to cleaner code by abstracting repetitive class combinations.
* **Headless UI (`@headlessui/react`)** – Provides unstyled, accessible components for React. We can use its Dialog for modals (cart, menu), Listbox for selects (maybe for variant picker), etc., to save time and ensure a11y. These work well with Tailwind since they come unstyled.
* **Heroicons or Lucide icons** – For a consistent icon set. These are MIT licensed and provide a wide range of monochrome icon SVGs that we can easily integrate as React components, ensuring icons match the style (we’ll likely use outline style icons for that thin, elegant look).
* **Zustand** – A lightweight state management library (if needed for global state like cart). It’s simple (no boilerplate) and performs well, which suits our needs better than heavier solutions like Redux for this scale.
* **React Hook Form** – If we implement forms (newsletter, checkout fields) we will use this for its minimal re-render and easy validation handling. It pairs nicely with Yup or Zod for schema validation if needed.
* **next-seo** – A helpful library to manage SEO tags for each page in Next.js. We can preset defaults (site name, etc.) and then customize per page. This ensures we don’t forget meta tags and get good defaults for OpenGraph, etc.
* **Lodash (modular)** – Not strictly necessary, but if we find ourselves needing common utilities (deep clones, debouncing search input, etc.), using lodash (importing specific functions) can help. We will be mindful of bundle size with any utility.
* **eslint-plugin-jsx-a11y** – Linting rules for accessibility (usually included in `next lint`). This will warn if we, say, forget an alt attribute or misuse ARIA roles.

Using these tools and libraries will help us **build faster and maintain quality**. Many are industry-standard and well-maintained, reducing risk. We will periodically review if all dependencies are needed and updated (for security and performance).

## Motion NPM Package Animation Best Practices

To get the most out of Framer Motion while keeping the experience smooth, we will follow these best practices for animations and transitions:

* **Plan Animations with Variants:** We will define animation **variants** for reusable patterns (e.g., a variant for “fadeInUp” that sets `initial: {opacity:0, y:20}` and `animate: {opacity:1, y:0}` with a certain transition). By reusing variants across components, we maintain consistency in how elements appear or exit.
* **Use Easing and Duration Consistently:** As a rule, use **ease-out** for most entrance animations (starts fast, slows into place, which feels smooth) and perhaps ease-in for exits. Keep durations short (around 0.3s for small element transitions, up to 0.5-0.7s for larger full-section transitions). Consistency in timing will ensure the site’s animations feel cohesive rather than jarring.
* **Stagger Children Animations:** For list or grid appearances (like multiple product cards), use the `staggerChildren` property in a parent variant. This way, when a section becomes visible, items animate one after the other with a tiny delay, creating a delightful cascade effect. This technique draws the eye and feels refined.
* **Idle Animations vs. Interaction Animations:** Differentiate between animations that happen on page load/scroll (passive, user just watching) and those in response to user actions (hover/click). Page load/scroll animations should be a bit more **subtle and slower**, giving a relaxed feel. Interactive animations (hover, tap feedback) should be quicker to provide immediacy (e.g., hover scale might be 0.2s and snappy). This ensures the user gets timely feedback when needed and a cinematic feel when just browsing.
* **Parallax & Scroll Tied Animation:** Use `useScroll` and `useTransform` to create scroll-linked effects responsibly. For example, tie the hero text’s `y` position to `scrollYProgress` so it moves slightly as the user scrolls, but **test on various devices**. If performance on low-end devices suffers, consider simplifying or disabling certain heavy scroll effects on mobile. Parallax should be subtle; too much movement can be distracting or cause motion sickness. A range of maybe 10-20% of screen height movement can be enough for effect.
* **Page Transition Animations:** Wrap the Next.js `<Component />` in `_app.js` (or use the App Router’s `<Layout />`) with `<AnimatePresence exitBeforeEnter>`. Define page-level variants for enter/exit. For instance, pages could fade out and the new page fades in, or slide in from the right slightly. Keep these transitions quick (perhaps 300ms) so navigation doesn’t feel sluggish. Use `ScrollRestoration` (Next 13 has a component or manually reset scroll) to handle scroll position on navigation.
* **Hover and Tap Effects:** For interactive elements, use Framer’s `whileHover` and `whileTap`. E.g., on a button: `whileHover={{ scale: 1.05 }}` for a slight grow, and maybe `whileTap={{ scale: 0.95 }}` for a pressed-in effect. This gives buttons a modern interactive feel. On product cards or images, a small upward translate or shadow on hover can indicate clickability. Ensure these are applied to clickable regions and not to large areas that could be accidentally hovered.
* **Motion Configuration:** We may use `<MotionConfig>` to globally configure things like reduced motion or a transition spring if needed. For example, if we decide all our spring animations should have a certain stiffness/damping, we can set that globally.
* **Performance Tips:** Only animate what is necessary. Animating layout (position or using `position: absolute` changes) can be expensive; prefer transforms (translate, scale) and opacity which the browser handles well. Use `will-change: transform` via Framer’s `style` or Tailwind class on heavy animated elements to hint the browser. Also avoid animating too many elements at once — better to stagger or limit simultaneous animations to keep frames per second high.
* **Testing and Fine-tuning:** We will test animations on actual devices (especially mobile phones) to ensure they feel right. We might need to adjust distances or durations. Also, we’ll verify that animations don’t interfere with reading or inputs; for example, avoid animating an element that the user is in the middle of interacting with.
* **Fallbacks:** If JS is disabled, ensure content still appears (maybe not animated, but at least visible). Framer Motion typically hydrates after initial HTML, so all elements should be present in the DOM on load (just with initial styles). We’ll double-check that important information isn’t only accessible after an animation triggers.

By adhering to these practices, we aim for animations that **elevate the experience** – creating that “wow” factor when browsing – yet remain **subtle and performant**. The end result should be a site that feels **alive and luxurious**, without ever frustrating the user.

## Luxury E-commerce UX Inspiration & References

In crafting this project, we draw inspiration from some of the **best-in-class luxury websites** and e-commerce design principles:

* **Immersive Visuals:** High-end brands like Ritz-Carlton use full-screen, immersive images to pull users into an experience. We emulate this with our large hero sections and rich photography. Off-White’s website, for example, skillfully uses whitespace and a bold hero image to captivate visitors, a balance we strive for on our homepage.
* **Typography & Elegance:** It’s noted that *“luxury and classic brands should consider using serif fonts to convey sophistication and elegance”*. We’ve taken this to heart with our font choices for Vallée des Roses. Furthermore, brands like Hermès have shown that using a distinctive font (even something like a typewriter-style serif) across the site can reinforce brand identity and memorability.
* **Monochrome & Minimal Aesthetic:** Many luxury sites opt for minimal color and UI chrome to keep focus on the product (e.g., black/white schemes, no extraneous graphics). The design research suggests that a bold, confident design language often features **no border-radius on components, minimal or no icon usage (and if icons, very simple), and no heavy shadows** – all choices we’ve integrated into our design rules. This minimalist approach conveys seriousness and high quality.
* **Smooth User Journey:** The **user experience flow** on luxury sites is often carefully crafted. For instance, Land Rover’s site immediately guides users to choose a model, and then subtly but persistently offers calls-to-action as you scroll. While our flow is simpler (shop products), we still aim to guide users gently – e.g., via clear CTAs like “Shop Now” on the hero, and a prominent yet non-intrusive cart and checkout.
* **Parallax and Interactive Scrolling:** Many top-tier sites use parallax scrolling and other interactive scroll effects to create depth. Armani’s website features an eye-catching parallax scroll with high-res imagery that adds luxury drama to the browsing. Rolex’s site similarly employs full-screen video and parallax to make a bold statement. In our site, the parallax hero and scroll animations channel this same idea of making the user experience feel rich and engaging.
* **Content & Storytelling:** Besides shopping, luxury brand sites often invest in storytelling – communicating heritage, craft, and values. The Savoy hotel’s site, for example, pairs images with text as you scroll to narrate an experience. We similarly plan the About page and throughout the site to tell the story of our roses (their origin, the preservation process, the luxury of longevity) in a visually engaging way. This not only informs users but also elevates the brand perception.
* **E-commerce Best Practices:** We also ground our design in proven e-commerce usability. Clear navigation (even if minimal) is key – e.g., having a straightforward menu and visible search if needed. Our site has only a few main links, which should be clear. A seamless cart and checkout is crucial; Baymard Institute research (and echoed by Hostinger’s article) shows complicated checkouts cause abandonment, so our approach to checkout (likely a single-page or Shopify-hosted process) focuses on simplicity. We also include elements like an informative footer (with policy links) and possibly breadcrumbs on product pages to enhance navigation clarity.
* **Mobile Experience:** We looked at mobile design trends for luxury as well – often they keep the same minimal feel, with perhaps even more emphasis on large imagery (swipeable carousels, etc.). We ensure our mobile UI is just as elegant, with a collapsible nav, touch-friendly carousels for product images, and efficient load times (very important on mobile).

Throughout the project, these references and principles serve as a north star to ensure we deliver a product that doesn’t just meet the functional requirements but also **delights and impresses the user**, standing shoulder-to-shoulder with the leading luxury brands’ web experiences. Our aim is that **Vallée des Roses’ website will feel at home among the top luxury e-commerce sites**, providing both inspiration and confidence to visitors that they’re purchasing a truly premium product.

---

## `.cursor/rules/` Directory Structure & Rules Overview

To maintain high code quality and enforce the above guidelines during development, we will set up a `.cursor/rules/` directory with custom rules. These rules serve as automated or reference checks in the Cursor editor, ensuring developers stick to the agreed practices. The structure will be organized into three categories: **Always** (rules always in effect), **Auto-Attached** (rules that attach in specific contexts), and **Manual** (rules that can be manually referenced when needed). The proposed structure and content for these rule files are:

* **`/cursor/rules/always`** – *Global rules that are always applied in the editor.*

  * **accessibility.md:** This rule file will contain guidelines that enforce accessibility best practices at all times. For example:

    * *Images must have alt text:* If an `<img>` tag or Next `Image` is used, ensure an `alt` prop is provided (even if empty for decorative images).
    * *Form elements need labels:* Inputs/selects should be properly labeled (either with `<label>` or `aria-label`). The rule might scan for form controls without an associated label.
    * *No autofocus or distractors:* Avoid using autoplaying media or animations that flash; respect `prefers-reduced-motion` (could hint to use `useReducedMotion` hook).
    * *Keyboard traps:* Ensure modals and popovers can be closed with Escape and that focus is managed (this might be more manual, but guidelines can be stated).
    * *Semantic HTML:* Remind to use appropriate elements (e.g., don’t use a `<div>` when a `<button>` is needed for a clickable element, etc.).
    * *Contrast check:* Possibly a note to manually verify color contrast for any new color combinations.
    * This file essentially reminds developers that **accessibility is not optional** – e.g., “All interactive elements **must** be accessible by keyboard and screen reader,” etc.
  * **styling.md:** This file enforces our **design and code style** guidelines:

    * *Tailwind usage:* Encourage using Tailwind utilities over ad-hoc CSS. For instance, prefer adding a Tailwind class in JSX rather than writing a new CSS rule, unless truly necessary (helps maintain atomic approach).
    * *Consistent design tokens:* Use the colors, font sizes, spacing from Tailwind config (no arbitrary hex values or random pixel values if a close Tailwind value exists). E.g., don’t hardcode styles that break consistency.
    * *No inline styles:* Generally avoid using the `style` attribute in JSX for layout/styling (except for Framer Motion dynamic transforms or very specific needs). This keeps styling centralized in Tailwind classes.
    * *No border radius & shadows:* Remind devs that per design, components should avoid border-radius (use `rounded-none` in Tailwind or simply don’t add a rounding class) and heavy shadows (`shadow-none` or minimal) to maintain the flat aesthetic.
    * *Serif for headings:* Possibly a note to ensure heading elements get the serif font class (e.g., a utility class or using a specific component) so we don’t accidentally render a heading in the wrong font.
    * *Responsive design:* Always consider mobile styles first. This might include a rule that flags if a component doesn’t have a mobile-friendly style (subjective, but e.g., if an image or section is not constrained on small screens).
    * *Naming & structure:* Could mention file naming conventions and component organization (though not strictly code style, it’s project style). E.g., PascalCase for component filenames, no deeply nested component definitions in one file (one component per file generally), etc.
    * *Clean JSX:* Encourage readability – e.g., if a JSX block has too many classes or logic, consider breaking it into sub-components.
    * Essentially, this rule ensures the **visual consistency and code styling** stays true to plan.

* **`/cursor/rules/auto-attached`** – *Rules that automatically attach based on context (e.g., when a certain import or keyword is present).*

  * **motion.md:** This rule attaches to files where Framer Motion is used (perhaps detecting `import { motion } from "motion/react"'`). It will guide proper usage of the animation library:

    * *Use variants for consistency:* Remind to define reusable variants for animations rather than inlining similar animations in many places.
    * *Avoid layout thrash:* Warn against animating width/height directly – use transforms where possible for efficiency.
    * *Prefer Motion components:* e.g., use `<motion.div>` rather than adding manual event listeners/JS for animations.
    * *Page transitions:* Suggest using `<AnimatePresence>` for route changes and component unmount animations.
    * *Staggering and sequencing:* Provide snippet or guidance on using `staggerChildren` and `delay` for a polished sequence of animations.
    * *Reduce motion:* Check for `useReducedMotion` usage – if not, remind to implement it for any potentially large motion effect, aligning with accessibility.
    * Possibly even including code examples or links to docs (like pointing out Motion’s documentation on scroll animations or transitions).
    * In summary, it ensures developers implement animations in a way that’s **performant, consistent, and follows our intended patterns**.
  * *(We could add more auto-attached rules if needed, e.g., an auto rule for `shopify` usage or Tailwind classes, but the prompt specifically gave Framer Motion as an example.)*

* **`/cursor/rules/manual`** – *Rules that are not auto-attached, but can be manually referenced for guidance on specific tasks.*

  * **shopify-api.md:** A manual rule file that developers can open when working on Shopify integration. It will outline the steps and best practices for working with the Storefront API:

    * *Setup:* How to initialize the Shopify client (e.g., code snippet using `createStorefrontApiClient({domain, token, version})`). Remind to use env vars for domain and token, not to hardcode them.
    * *GraphQL Queries:* Provide examples of GraphQL queries for common needs – e.g., get product by handle, get products in a collection (with query templates that list fields like id, title, images, variants, etc.). Perhaps a tip: request only fields you need to minimize payload.
    * *Data handling:* Note that prices come as strings or in minor units depending on API – ensure to format (e.g., Shopify might return price as a decimal string or amount in cents depending on API version).
    * *Cart and Checkout:* Explain how to use cart API vs checkout API. For instance:

      * using `cartCreate` and `cartLinesAdd` for a persistent cart that can be updated, vs.
      * using `checkoutCreate` with line items to get a checkout URL. We likely choose one approach (lean towards `checkoutCreate` + redirect for simplicity).
      * Provide a sample mutation for adding an item to cart or creating a checkout.
    * *Webhooks or Revalidation:* (if relevant) Mention if we use ISR, how we might trigger revalidation on Shopify changes (maybe via a webhook hitting a revalidate API route).
    * *Rate Limiting:* Caution that Shopify Storefront API has limits (e.g., 2 requests per second for unauthenticated or certain query cost limit) – advise to batch queries if possible (maybe not needed, but good to note).
    * *Testing:* how to use the Shopify GraphiQL app or Insomnia to test queries outside the app, to debug data.
    * Essentially, this file is the **playbook for integrating with Shopify**, so any developer can follow it to implement or modify data fetching safely.
  * **(Optional)** We could include other manual guides if needed, such as `deployment.md` for Vercel deployment steps, but that might be beyond the scope. The prompt specifically mentioned Shopify API integration as an example for manual.

Each rule file will be written in a concise, instructive style (likely bullet points or checklists) so that when open in the editor, it’s easy to scan what’s required. By structuring the rules this way, we ensure that:

* **Always rules** keep everyone mindful of critical cross-cutting concerns (accessibility, style consistency) at all times.
* **Auto-attached rules** provide on-the-spot tips when working with complex tech like Framer Motion, effectively mentoring the developer within the context.
* **Manual rules** serve as handy documentation for more involved processes (like setting up Shopify integration) without cluttering every file.

This `.cursor/rules` setup will help maintain the **quality and coherence** of the codebase, making sure the end product stays true to the luxury, elegant vision outlined in this spec while also being robust under the hood.
