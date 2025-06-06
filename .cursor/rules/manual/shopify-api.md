# Shopify Storefront API Manual Rule

- **Setup:**
  - Initialize the Shopify client using `@shopify/storefront-api-client`:
    ```ts
    import { createStorefrontApiClient } from '@shopify/storefront-api-client';
    const client = createStorefrontApiClient({
      storeDomain: process.env.SHOPIFY_STORE_DOMAIN!,
      apiVersion: '2023-04',
      publicAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
    });
    ```
  - Use environment variables for domain and token. Never hardcode credentials.

- **GraphQL Queries:**
  - Use GraphQL to fetch products, collections, and checkout data. Example query for product by handle:
    ```graphql
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        images(first: 5) { edges { node { url altText } } }
        variants(first: 10) { edges { node { id title price { amount currencyCode } } } }
      }
    }
    ```
  - Request only the fields you need to minimize payload.

- **Data handling:**
  - Prices may be returned as strings or minor units. Always format prices for display (e.g., using Intl.NumberFormat for GBP).

- **Cart and Checkout:**
  - Use `cartCreate` and `cartLinesAdd` mutations for persistent cart management, or `checkoutCreate` for a simple checkout flow.
  - Example mutation for checkout:
    ```graphql
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout { id webUrl }
        userErrors { field message }
      }
    }
    ```
  - For most cases, use `checkoutCreate` and redirect users to the returned `webUrl` for secure payment.

- **Webhooks or Revalidation:**
  - If using ISR, set up Shopify webhooks to trigger revalidation of static pages when products change.

- **Rate Limiting:**
  - Shopify Storefront API has rate limits (e.g., 2 requests/sec for unauthenticated). Batch queries if possible and handle errors gracefully.

- **Testing:**
  - Use Shopify's GraphiQL app or tools like Insomnia/Postman to test queries and mutations before integrating into the app.

- **Security:**
  - Never expose admin API keys. Only use the Storefront public token on the client.

- **References:**
  - [Shopify Storefront API Docs](https://shopify.dev/docs/api/storefront)
  - [@shopify/storefront-api-client](https://www.npmjs.com/package/@shopify/storefront-api-client) 