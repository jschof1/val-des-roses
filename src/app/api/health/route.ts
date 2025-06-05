import { NextResponse } from 'next/server';

export async function GET() {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    services: {
      database: 'not_applicable',
      cache: 'not_applicable',
      shopify: await checkShopifyConnection(),
    },
  };

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}

async function checkShopifyConnection(): Promise<string> {
  try {
    const shopifyDomain = process.env.SHOPIFY_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const accessToken = process.env.SHOPIFY_ACCESS_TOKEN || process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    
    if (!shopifyDomain || !accessToken || 
        shopifyDomain.includes('placeholder') || 
        accessToken.includes('placeholder')) {
      return 'configuration_missing';
    }

    // Simple check to see if we can connect to Shopify
    const response = await fetch(`https://${shopifyDomain}/admin/api/2023-10/shop.json`, {
      headers: {
        'X-Shopify-Access-Token': accessToken,
      },
    });

    return response.ok ? 'healthy' : 'error';
  } catch {
    return 'error';
  }
} 