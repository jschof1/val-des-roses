# Val des Roses - Vercel Deployment Guide

This guide will walk you through deploying your Next.js application to Vercel and setting up a custom domain.

## Prerequisites

- Your code is committed to git (✅ Done)
- A GitHub account
- A Vercel account (free at vercel.com)
- A domain name (if you want a custom domain)

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `val-des-roses` (or your preferred name)
   - Keep it public or private (your choice)
   - Don't add README, .gitignore, or license (you already have these)

2. Add the GitHub remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/val-des-roses.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. Go to https://vercel.com and sign up/log in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" - Vercel will handle the build configuration automatically
6. Your site will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login and deploy:
   ```bash
   vercel login
   vercel --prod
   ```

## Step 3: Set Up Custom Domain

### If you already have a domain:

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your domain (e.g., `valdesroses.com`)
4. Vercel will provide DNS records to configure

### Configure DNS (varies by provider):

**For most domain providers:**
1. Add an `A` record pointing to `76.76.19.19`
2. Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`

**Alternative (CNAME method):**
1. Add a `CNAME` record for your root domain pointing to `cname.vercel-dns.com`

### If you need to buy a domain:

Popular domain registrars:
- Namecheap
- GoDaddy  
- Google Domains
- Cloudflare

## Step 4: Environment Variables (if needed)

If your app uses environment variables:

1. In Vercel dashboard → Project → Settings → Environment Variables
2. Add your variables for Production, Preview, and Development environments

## Step 5: Configure Build Settings (Optional)

Your project is already optimized with:
- ✅ `vercel.json` configuration
- ✅ Security headers
- ✅ Caching rules
- ✅ Redirects and rewrites
- ✅ Next.js optimization

## Step 6: Set Up Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments
- You can configure branch-specific deployments

## Your Current Configuration

Your project includes:
- **Security headers**: XSS protection, content type options, frame options
- **Performance**: Optimized caching for static assets and API routes  
- **SEO**: Sitemap, robots.txt, and proper redirects
- **Monitoring**: Health check endpoint at `/api/health`

## Post-Deployment Checklist

After deployment, test:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Shop functionality works
- [ ] Images load properly
- [ ] Forms submit correctly
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Site speed (use tools like PageSpeed Insights)

## Troubleshooting

### Common Issues:

1. **Build fails**: Check build logs in Vercel dashboard
2. **Images not loading**: Verify image paths and Next.js Image component usage
3. **API routes not working**: Check server-side code and environment variables
4. **Domain not working**: Verify DNS propagation (can take up to 48 hours)

### Useful Commands:

```bash
# Test build locally
npm run build
npm run start

# Check for build errors
npm run lint

# Run tests
npm run test
```

## Next Steps

1. Set up monitoring with Vercel Analytics
2. Configure error tracking (Sentry, LogRocket, etc.)
3. Set up CI/CD for automated testing
4. Consider edge functions for better performance

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Community support: Vercel Discord, GitHub Discussions

---

🚀 **Ready to deploy!** Follow Step 1 to push to GitHub, then Step 2 to deploy to Vercel. 