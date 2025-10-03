# Customization Guide

This guide will help you customize the SaaS Landing Page Template to match your brand and requirements.

## 🎨 Quick Customization Checklist

### 1. Basic Information
- [ ] Update site name and description in `src/config/site.ts`
- [ ] Replace hero title and description
- [ ] Update contact information
- [ ] Add your social media links

### 2. Branding
- [ ] Replace logo/icon in navigation
- [ ] Update color scheme in `tailwind.config.ts`
- [ ] Replace placeholder images
- [ ] Update favicon

### 3. Content
- [ ] Customize features list
- [ ] Update pricing plans
- [ ] Replace testimonials with real ones
- [ ] Modify FAQ questions and answers

## 📝 Step-by-Step Customization

### Step 1: Site Configuration

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your SaaS Name", // ← Change this
  description: "Your description", // ← Change this
  url: "https://yourdomain.com", // ← Your domain
  
  hero: {
    title: "Your Unique Value Proposition", // ← Main headline
    subtitle: "Your Tagline", // ← Subtitle
    description: "Detailed description of your product", // ← Hero description
    primaryCTA: "Start Free Trial", // ← Main button text
    secondaryCTA: "Watch Demo", // ← Secondary button text
  },
  
  // Update contact info
  contact: {
    email: "hello@yourdomain.com",
    phone: "+1 (555) 123-4567",
    address: "Your Business Address"
  }
}
```

### Step 2: Customize Features

Update the features array in `src/config/site.ts`:

```typescript
features: [
  {
    icon: "⚡", // ← Use emoji or replace with icon component
    title: "Your Feature Name",
    description: "Description of what this feature does for users"
  },
  // Add more features...
]
```

### Step 3: Update Pricing Plans

Modify the pricing section:

```typescript
pricing: {
  title: "Choose Your Plan",
  subtitle: "Flexible pricing for every need",
  plans: [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      popular: false,
      cta: "Get Started"
    },
    // Add more plans...
  ]
}
```

### Step 4: Replace Testimonials

Update with real customer testimonials:

```typescript
testimonials: [
  {
    name: "Customer Name",
    role: "Title, Company",
    avatar: "/path/to/avatar.jpg", // ← Add real photos
    content: "Real testimonial from your customer..."
  },
  // Add more testimonials...
]
```

### Step 5: Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(221.2 83.2% 53.3%)", // ← Your primary color
        foreground: "hsl(210 40% 98%)",
      },
      // Customize other colors...
    }
  }
}
```

### Step 6: Update Logo and Branding

Replace the logo in `src/components/navigation.tsx`:

```tsx
<Link href="/" className="flex items-center space-x-2">
  {/* Replace this with your logo */}
  <img src="/your-logo.png" alt="Your Logo" className="h-8 w-8" />
  <span className="font-bold">{siteConfig.name}</span>
</Link>
```

## 🎯 Advanced Customization

### Adding New Sections

1. Create a new component:
```tsx
// src/components/sections/your-section.tsx
export function YourSection() {
  return (
    <section className="py-24">
      <div className="container">
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. Add to main page:
```tsx
// src/app/page.tsx
import { YourSection } from "@/components/sections/your-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <YourSection /> {/* ← Add here */}
        <FeaturesSection />
        {/* ... other sections */}
      </main>
      <Footer />
    </div>
  )
}
```

### Custom Animations

Add custom Framer Motion animations:

```tsx
import { motion } from "framer-motion"

const customVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

<motion.div
  variants={customVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Your content */}
</motion.div>
```

### Form Integration

Connect forms to your backend:

```tsx
// Example form handler
const handleSubmit = async (formData: FormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // Handle response
  } catch (error) {
    // Handle error
  }
}
```

## 🔧 Common Customizations

### Change Font

Update in `src/app/layout.tsx`:

```tsx
import { Inter, Poppins } from 'next/font/google' // ← Add your font

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}> {/* ← Use your font */}
        {children}
      </body>
    </html>
  )
}
```

### Add Analytics

Add Google Analytics or other tracking:

```tsx
// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Custom 404 Page

Create `src/app/not-found.tsx`:

```tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
```

## 📱 Mobile Optimization

The template is already mobile-responsive, but you can further optimize:

### Custom Mobile Styles

```tsx
<div className="text-4xl md:text-6xl lg:text-7xl">
  {/* Responsive text sizes */}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Responsive grid */}
</div>
```

### Mobile-Specific Components

```tsx
<div className="block md:hidden">
  {/* Mobile only content */}
</div>

<div className="hidden md:block">
  {/* Desktop only content */}
</div>
```

## 🚀 Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Loading**: Components load when needed
3. **Code Splitting**: Automatic with Next.js
4. **Bundle Analysis**: Run `npm run build` to see bundle size

## ❓ Need Help?

- Check the main README.md for basic setup
- Look at existing components for examples
- Join our community for support
- Contact us for custom development

Happy customizing! 🎉
