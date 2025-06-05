import Client from 'shopify-buy';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

// Check if Shopify is properly configured (not just placeholder values)
const isShopifyConfigured = domain && 
  storefrontAccessToken && 
  domain !== 'placeholder.myshopify.com' && 
  storefrontAccessToken !== 'placeholder_token' &&
  !domain.includes('placeholder') &&
  !storefrontAccessToken.includes('placeholder');

// Initialize the Shopify client only if properly configured
let shopifyClient: Client | null = null;

if (isShopifyConfigured) {
  try {
    shopifyClient = Client.buildClient({
      domain: domain,
      storefrontAccessToken: storefrontAccessToken,
      apiVersion: '2023-10',
    });
    console.log('✅ Shopify client initialized successfully');
  } catch (error) {
    console.warn('❌ Failed to initialize Shopify client:', error);
    shopifyClient = null;
  }
} else {
  console.log('🔧 Shopify not configured - using dummy data for development');
  console.log(`Domain: ${domain}`);
  console.log(`Token: ${storefrontAccessToken ? 'present but placeholder' : 'missing'}`);
}

// Dummy data for development
const dummyProducts = [
  {
    id: '1',
    title: 'Heritage Rosa Damascena',
    handle: 'heritage-rosa-damascena',
    description: 'A classic Damask rose with an intoxicating fragrance, cultivated since ancient times.',
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Heritage Rosa Damascena pink roses'
      },
      {
        id: '1b',
        src: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Close-up of Heritage Rosa Damascena'
      }
    ],
    variants: [
      {
        id: '1',
        price: { amount: '45.00', currencyCode: 'EUR' }
      }
    ],
    productType: 'Single Rose',
    tags: ['heritage', 'classic', 'pink']
  },
  {
    id: '2',
    title: 'Gallica Officinalis',
    handle: 'gallica-officinalis',
    description: 'The apothecary rose, steeped in history and known for its medicinal properties.',
    images: [
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Gallica Officinalis red roses'
      },
      {
        id: '2b',
        src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Red roses in garden setting'
      }
    ],
    variants: [
      {
        id: '2',
        price: { amount: '52.00', currencyCode: 'EUR' }
      }
    ],
    productType: 'Single Rose',
    tags: ['historic', 'medicinal', 'red']
  },
  {
    id: '3',
    title: 'Alba Maxima',
    handle: 'alba-maxima',
    description: 'The great white rose, symbol of purity and elegance.',
    images: [
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Alba Maxima white roses'
      },
      {
        id: '3b',
        src: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Pure white roses in bloom'
      }
    ],
    variants: [
      {
        id: '3',
        price: { amount: '48.00', currencyCode: 'EUR' }
      }
    ],
    productType: 'Single Rose',
    tags: ['white', 'elegant', 'pure']
  },
  {
    id: '4',
    title: 'Luxury Rose Bouquet',
    handle: 'luxury-rose-bouquet',
    description: 'An exquisite arrangement of our finest preserved roses.',
    images: [
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Luxury rose bouquet'
      },
      {
        id: '4b',
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Elegant bouquet arrangement'
      }
    ],
    variants: [
      {
        id: '4',
        price: { amount: '125.00', currencyCode: 'EUR' }
      }
    ],
    productType: 'Bouquet',
    tags: ['luxury', 'arrangement', 'mixed']
  },
  {
    id: '5',
    title: 'Classic Rose Box',
    handle: 'classic-rose-box',
    description: 'Preserved roses presented in our signature luxury box.',
    images: [
      {
        id: '5',
        src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Classic rose box arrangement'
      },
      {
        id: '5b',
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Luxury box with preserved roses'
      }
    ],
    variants: [
      {
        id: '5',
        price: { amount: '85.00', currencyCode: 'EUR' }
      }
    ],
    productType: 'Box Arrangement',
    tags: ['luxury', 'box', 'gift']
  },
  {
    id: '6',
    title: 'Vintage Garden Collection',
    handle: 'vintage-garden-collection',
    description: 'A collection inspired by old English gardens and vintage charm.',
    images: [
      {
        id: '6',
        src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Vintage garden collection'
      },
      {
        id: '6b',
        src: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        altText: 'Vintage style rose arrangement'
      }
    ],
    variants: [
      {
        id: '6',
        price: { amount: '95.00', currencyCode: 'EUR' }
      }
    ],
    productType: 'Collection',
    tags: ['vintage', 'garden', 'collection']
  }
];

const dummyCollections = [
  {
    id: '1',
    title: 'Single Roses',
    handle: 'single-roses',
    description: 'Exquisite individual roses, each one a masterpiece of nature.',
    image: {
      id: 'col-1',
      src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      altText: 'Single heritage roses collection'
    }
  },
  {
    id: '2',
    title: 'Bouquets',
    handle: 'bouquets',
    description: 'Carefully crafted bouquets for special moments and celebrations.',
    image: {
      id: 'col-2',
      src: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      altText: 'Luxury rose bouquets collection'
    }
  },
  {
    id: '3',
    title: 'Box Arrangements',
    handle: 'box-arrangements',
    description: 'Elegant roses presented in our signature luxury boxes.',
    image: {
      id: 'col-3',
      src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      altText: 'Luxury box arrangements collection'
    }
  },
  {
    id: '4',
    title: 'Collections',
    handle: 'collections',
    description: 'Curated collections that tell a story of elegance and heritage.',
    image: {
      id: 'col-4',
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      altText: 'Vintage garden collections'
    }
  }
];

// Helper function to get products by type for collections
function getProductsByType(productType: string) {
  return dummyProducts.filter(p => p.productType === productType);
}

// Helper function to get collections with products
function getCollectionsWithProducts() {
  return dummyCollections.map(collection => ({
    ...collection,
    products: getProductsByType(
      collection.handle === 'single-roses' ? 'Single Rose' :
      collection.handle === 'bouquets' ? 'Bouquet' :
      collection.handle === 'box-arrangements' ? 'Box Arrangement' :
      'Collection'
    )
  }));
}

// --- Product Functions ---

/**
 * Fetches all products from Shopify.
 * @returns {Promise<Array<any>>} A promise that resolves to an array of products.
 */
export async function fetchAllProducts() {
  // If Shopify is not configured, return dummy data
  if (!shopifyClient) {
    console.log('📦 Using dummy products for development');
    return Promise.resolve(dummyProducts);
  }

  try {
    console.log('🔄 Fetching products from Shopify...');
    const products = await shopifyClient.product.fetchAll();
    console.log(`✅ Fetched ${products.length} products from Shopify`);
    return products.map(product => JSON.parse(JSON.stringify(product))); // Serialize to plain objects
  } catch (error) {
    console.error('❌ Error fetching all products:', error);
    console.log('📦 Falling back to dummy products');
    return dummyProducts;
  }
}

/**
 * Fetches a single product by its ID.
 * @param {string} id The ID of the product to fetch.
 * @returns {Promise<any | null>} A promise that resolves to the product object or null if not found.
 */
export async function fetchProductById(id: string) {
  // If Shopify is not configured, find from dummy data
  if (!shopifyClient) {
    console.log(`Using dummy product for ID: ${id}`);
    const product = dummyProducts.find(p => p.id === id);
    return Promise.resolve(product || null);
  }

  try {
    const product = await shopifyClient.product.fetch(id);
    return product ? JSON.parse(JSON.stringify(product)) : null;
  } catch (error) {
    console.error(`Error fetching product by ID ${id}:`, error);
    // Fallback to dummy data
    const product = dummyProducts.find(p => p.id === id);
    return product || null;
  }
}

/**
 * Fetches a single product by its handle.
 * @param {string} handle The handle of the product to fetch.
 * @returns {Promise<any | null>} A promise that resolves to the product object or null if not found.
 */
export async function fetchProductByHandle(handle: string) {
  // If Shopify is not configured, find from dummy data
  if (!shopifyClient) {
    console.log(`Using dummy product for handle: ${handle}`);
    const product = dummyProducts.find(p => p.handle === handle);
    return Promise.resolve(product || null);
  }

  try {
    // Example: Fetch all and find by handle (less efficient for large catalogs)
    const products = await fetchAllProducts();
    const product = products.find(p => p.handle === handle);
    return product || null;
  } catch (error) {
    console.error(`Error fetching product by handle ${handle}:`, error);
    // Fallback to dummy data
    const product = dummyProducts.find(p => p.handle === handle);
    return product || null;
  }
}

// --- Collection Functions ---

/**
 * Fetches all collections from Shopify.
 * @returns {Promise<Array<any>>} A promise that resolves to an array of collections.
 */
export async function fetchAllCollections() {
  // If Shopify is not configured, return dummy data
  if (!shopifyClient) {
    console.log('📁 Using dummy collections for development');
    return Promise.resolve(getCollectionsWithProducts());
  }

  try {
    console.log('🔄 Fetching collections from Shopify...');
    const collections = await shopifyClient.collection.fetchAllWithProducts(); // Fetch collections and their products
    console.log(`✅ Fetched ${collections.length} collections from Shopify`);
    return collections.map(collection => JSON.parse(JSON.stringify(collection)));
  } catch (error) {
    console.error('❌ Error fetching all collections:', error);
    console.log('📁 Falling back to dummy collections');
    return getCollectionsWithProducts();
  }
}

/**
 * Fetches a single collection by its ID, including its products.
 * @param {string} id The ID of the collection to fetch.
 * @returns {Promise<any | null>} A promise that resolves to the collection object or null if not found.
 */
export async function fetchCollectionById(id: string) {
  // If Shopify is not configured, find from dummy data
  if (!shopifyClient) {
    console.log(`Using dummy collection for ID: ${id}`);
    const collectionsWithProducts = getCollectionsWithProducts();
    const collection = collectionsWithProducts.find(c => c.id === id);
    return Promise.resolve(collection || null);
  }

  try {
    const collection = await shopifyClient.collection.fetchWithProducts(id);
    return collection ? JSON.parse(JSON.stringify(collection)) : null;
  } catch (error) {
    console.error(`Error fetching collection by ID ${id}:`, error);
    // Fallback to dummy data
    const collectionsWithProducts = getCollectionsWithProducts();
    const collection = collectionsWithProducts.find(c => c.id === id);
    return collection || null;
  }
}

// --- Cart Functions (Example - Cart functionality will be part of a later task) ---

/**
 * Creates a new checkout.
 * @returns {Promise<any>} A promise that resolves to the new checkout object.
 */
export async function createCheckout() {
  if (!shopifyClient) {
    console.log('Shopify not configured - checkout functionality disabled');
    return null;
  }

  try {
    const checkout = await shopifyClient.checkout.create();
    return JSON.parse(JSON.stringify(checkout));
  } catch (error) {
    console.error('Error creating checkout:', error);
    return null;
  }
}

/**
 * Adds line items to a checkout.
 * @param {string} checkoutId The ID of the checkout.
 * @param {Array<{variantId: string, quantity: number}>} lineItems An array of line items to add.
 * @returns {Promise<any | null>} A promise that resolves to the updated checkout object.
 */
export async function addLineItems(checkoutId: string, lineItems: Array<{variantId: string, quantity: number}>) {
  if (!shopifyClient) {
    console.log('Shopify not configured - cart functionality disabled');
    return null;
  }

  try {
    const checkout = await shopifyClient.checkout.addLineItems(checkoutId, lineItems);
    return checkout ? JSON.parse(JSON.stringify(checkout)) : null;
  } catch (error) {
    console.error(`Error adding line items to checkout ${checkoutId}:`, error);
    return null;
  }
}

/**
 * Fetches an existing checkout.
 * @param {string} checkoutId The ID of the checkout to fetch.
 * @returns {Promise<any | null>} A promise that resolves to the checkout object or null if not found.
 */
export async function fetchCheckout(checkoutId: string) {
  if (!shopifyClient) {
    console.log('Shopify not configured - checkout functionality disabled');
    return null;
  }

  try {
    const checkout = await shopifyClient.checkout.fetch(checkoutId);
    return checkout ? JSON.parse(JSON.stringify(checkout)) : null;
  } catch (error) {
    console.error(`Error fetching checkout ${checkoutId}:`, error);
    return null;
  }
}

export default shopifyClient; 