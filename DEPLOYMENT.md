# Deployment Guide

This guide will help you deploy your SaaS Landing Page Template to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **One-Click Deploy**
   ```bash
   # Connect your GitHub repository to Vercel
   # Visit: https://vercel.com/new
   ```

2. **Manual Deploy**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **GitHub Integration**
   - Push to GitHub (already done!)
   - Connect repository to Vercel
   - Automatic deployments on every push

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Railway

1. **Connect GitHub**
   - Visit [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Automatic deployment

### DigitalOcean App Platform

1. **Create App**
   - Connect GitHub repository
   - Select Node.js environment
   - Build command: `npm run build`
   - Run command: `npm start`

## 🔧 Environment Variables

Create `.env.local` file for production:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Your SaaS Name"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=1234567

# Contact Form (Optional)
CONTACT_EMAIL=hello@yourdomain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Newsletter (Optional)
MAILCHIMP_API_KEY=your-mailchimp-api-key
MAILCHIMP_LIST_ID=your-list-id
```

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Add to next.config.js
   images: {
     domains: ['your-domain.com'],
     formats: ['image/webp', 'image/avif'],
   }
   ```

2. **Bundle Analysis**
   ```bash
   npm install @next/bundle-analyzer
   npm run analyze
   ```

3. **Lighthouse Audit**
   - Run in Chrome DevTools
   - Aim for 90+ scores in all categories

### Production Checklist

- [ ] Update site configuration in `src/config/site.ts`
- [ ] Replace placeholder images with real ones
- [ ] Add your logo and branding
- [ ] Update contact information
- [ ] Set up analytics (Google Analytics, Hotjar)
- [ ] Configure contact form backend
- [ ] Set up newsletter integration
- [ ] Test all forms and interactions
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Set up domain and SSL

## 🌐 Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to site settings
2. Click "Domain management"
3. Add custom domain
4. Update DNS records

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get Measurement ID

2. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Add Tracking Code**
   ```tsx
   // src/app/layout.tsx
   import Script from 'next/script'

   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <Script
             src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
             strategy="afterInteractive"
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
             `}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

### Hotjar (Optional)

1. **Create Hotjar Account**
   - Visit [hotjar.com](https://hotjar.com)
   - Get Site ID

2. **Add Tracking Code**
   ```env
   NEXT_PUBLIC_HOTJAR_ID=1234567
   ```

## 📧 Contact Form Backend

### Option 1: Formspree
```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  {/* Your form fields */}
</form>
```

### Option 2: Netlify Forms
```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* Your form fields */}
</form>
```

### Option 3: Custom API Route
```tsx
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  // Process form data
  // Send email using nodemailer or similar
  
  return NextResponse.json({ success: true })
}
```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env.local` to git
   - Use platform-specific environment variable settings

2. **CORS Setup**
   ```js
   // next.config.js
   async headers() {
     return [
       {
         source: '/api/:path*',
         headers: [
           { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
         ],
       },
     ]
   }
   ```

3. **Rate Limiting**
   - Implement rate limiting for contact forms
   - Use services like Upstash or Redis

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   # Check types
   npm run type-check
   ```

3. **Styling Issues**
   ```bash
   # Rebuild Tailwind
   npm run build:css
   ```

### Performance Issues

1. **Large Bundle Size**
   - Use dynamic imports for heavy components
   - Optimize images and fonts
   - Remove unused dependencies

2. **Slow Loading**
   - Enable compression
   - Use CDN for static assets
   - Optimize database queries (if applicable)

## 📱 Mobile Testing

Test on real devices:
- iOS Safari
- Android Chrome
- Various screen sizes
- Touch interactions
- Form submissions

## 🎯 SEO Optimization

1. **Sitemap**
   ```xml
   <!-- public/sitemap.xml -->
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

2. **Robots.txt**
   ```txt
   # public/robots.txt
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

3. **Meta Tags**
   - Already included in layout.tsx
   - Update with your actual content

## 🎉 Launch Checklist

- [ ] Domain configured and SSL active
- [ ] Analytics tracking working
- [ ] Contact forms functional
- [ ] All links working
- [ ] Mobile responsive
- [ ] Performance optimized (90+ Lighthouse score)
- [ ] SEO meta tags updated
- [ ] Social media preview working
- [ ] Error pages customized
- [ ] Backup and monitoring set up

## 🆘 Support

If you need help with deployment:
- Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
- Visit platform-specific documentation
- Contact support for your chosen platform

---

**Congratulations! Your SaaS landing page is now live! 🚀**
