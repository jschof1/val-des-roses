# Deployment Guide for Val des Roses

## Environment Variables

Configure the following environment variables in your deployment platform:

### Required - Shopify Configuration
```
SHOPIFY_DOMAIN=your-shop.myshopify.com
SHOPIFY_ACCESS_TOKEN=your_storefront_access_token
```

### Optional - Analytics & Tracking
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Optional - SEO & Verification
```
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code
```

### System Configuration
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=https://valdesroses.com
```

## Vercel Deployment

### 1. Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Next.js" framework preset

### 2. Configure Environment Variables
1. In your Vercel project settings, go to "Environment Variables"
2. Add all the environment variables listed above
3. Set them for "Production", "Preview", and "Development" environments

### 3. Configure Custom Domain
1. Go to "Domains" in your Vercel project settings
2. Add your custom domain (e.g., `valdesroses.com`)
3. Follow Vercel's DNS configuration instructions
4. SSL certificates will be automatically provisioned

### 4. Build Settings
The following settings are automatically configured:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Performance Optimizations

### Caching Strategy
- Static assets: 1 year cache
- API routes: 5 minutes with stale-while-revalidate
- Sitemap: 24 hours cache

### Security Headers
- Content Security Policy
- XSS Protection
- Frame Options
- Content Type Options

### SEO Features
- Dynamic sitemap generation
- Structured data (JSON-LD)
- OpenGraph and Twitter meta tags
- Robots.txt configuration

## Analytics Setup

### Google Analytics 4
1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (starts with G-)
3. Add it to `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Google Tag Manager (Optional)
1. Create a GTM container at [Google Tag Manager](https://tagmanager.google.com)
2. Get your Container ID (starts with GTM-)
3. Add it to `NEXT_PUBLIC_GTM_ID`

## Monitoring & Health Checks

### Health Endpoint
- **URL**: `/api/health` or `/healthz`
- **Method**: GET
- **Response**: JSON with system status

### Monitoring Setup
1. Use Vercel's built-in monitoring
2. Set up uptime monitoring (UptimeRobot, Pingdom)
3. Monitor Core Web Vitals through Google PageSpeed Insights

## SEO Checklist

- [x] Meta tags and descriptions
- [x] OpenGraph and Twitter cards
- [x] Structured data (JSON-LD)
- [x] Dynamic sitemap
- [x] Robots.txt
- [x] Canonical URLs
- [x] Image alt texts
- [x] Semantic HTML structure

## Post-Deployment Testing

1. **Functionality Test**
   - [ ] Homepage loads correctly
   - [ ] Product pages display properly
   - [ ] Cart functionality works
   - [ ] Checkout redirects to Shopify

2. **SEO Test**
   - [ ] Run Google PageSpeed Insights
   - [ ] Test structured data with Google's Rich Results Test
   - [ ] Verify sitemap accessibility (`/sitemap.xml`)
   - [ ] Check robots.txt (`/robots.txt`)

3. **Analytics Test**
   - [ ] Verify Google Analytics tracking
   - [ ] Test event tracking (page views, cart actions)
   - [ ] Confirm conversion tracking setup

4. **Performance Test**
   - [ ] Test mobile responsiveness
   - [ ] Verify loading speeds
   - [ ] Check Core Web Vitals

## Troubleshooting

### Common Issues

**Build Failures:**
- Check environment variables are properly set
- Verify Shopify credentials and permissions
- Review build logs for missing dependencies

**Analytics Not Working:**
- Confirm measurement IDs are correct
- Check browser's Network tab for analytics requests
- Verify environment variables are public (prefixed with `NEXT_PUBLIC_`)

**SEO Issues:**
- Test meta tags with social media debuggers
- Verify canonical URLs are correct
- Check structured data with Google's tools

## Support

For deployment issues:
1. Check Vercel's deployment logs
2. Review this documentation
3. Test in development environment first
4. Contact support with specific error messages 