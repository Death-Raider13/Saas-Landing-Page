# SaaS Landing Page Template

A beautiful, modern, and fully responsive SaaS landing page template built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui components.

![SaaS Landing Template](https://via.placeholder.com/1200x600/3b82f6/ffffff?text=SaaS+Landing+Template)

## ✨ Features

- **🚀 Next.js 14** - Latest version with App Router
- **📘 TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **✨ Framer Motion** - Smooth animations and transitions
- **🧩 shadcn/ui** - Beautiful and accessible UI components
- **🌙 Dark Mode** - Built-in dark/light mode toggle
- **📱 Fully Responsive** - Optimized for all devices
- **⚡ Performance Optimized** - Fast loading and SEO friendly
- **🔧 Easy to Customize** - Simple configuration file
- **📚 Well Documented** - Comprehensive documentation

## 🏗️ Sections Included

- **Hero Section** - Eye-catching hero with CTA buttons
- **Features Section** - Showcase your product features
- **Pricing Section** - Beautiful pricing tables with popular badge
- **Testimonials Section** - Customer reviews and social proof
- **FAQ Section** - Collapsible FAQ with accordion
- **Contact Section** - Contact form and newsletter signup
- **Navigation** - Responsive navigation with mobile menu
- **Footer** - Comprehensive footer with links

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-landing-template.git
   cd saas-landing-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Easy Configuration

The template uses a centralized configuration file for easy customization. Edit `src/config/site.ts` to customize:

- Site metadata (name, description, URLs)
- Hero section content
- Features list
- Pricing plans
- Testimonials
- FAQ items
- Contact information

### Example Configuration

```typescript
export const siteConfig = {
  name: "Your SaaS Name",
  description: "Your SaaS description",
  hero: {
    title: "Your Hero Title",
    description: "Your hero description",
    primaryCTA: "Get Started",
    secondaryCTA: "Learn More",
  },
  // ... more configuration options
}
```

### Styling Customization

1. **Colors**: Modify the color scheme in `tailwind.config.ts`
2. **Fonts**: Change fonts in `src/app/layout.tsx`
3. **Components**: Customize individual components in `src/components/`

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links if needed

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── sections/            # Page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   └── contact.tsx
│   ├── ui/                  # UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── navigation.tsx       # Navigation component
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # Theme provider
│   └── theme-toggle.tsx    # Dark mode toggle
├── config/
│   └── site.ts             # Site configuration
└── lib/
    └── utils.ts            # Utility functions
```

## 🎯 Customization Guide

### For Non-Developers

1. **Content Changes**: Edit `src/config/site.ts` to change all text content
2. **Colors**: Use the Tailwind CSS color picker to change the primary color
3. **Images**: Replace placeholder images with your own
4. **Logo**: Update the logo in the navigation component

### For Developers

1. **Add New Components**: Create reusable components in `src/components/ui/`
2. **Custom Animations**: Add Framer Motion animations to enhance UX
3. **API Integration**: Connect forms to your backend or email service
4. **SEO Optimization**: Add meta tags and structured data
5. **Analytics**: Integrate Google Analytics or other tracking tools

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Core Dependencies
- **next**: React framework
- **react** & **react-dom**: React library
- **typescript**: Type checking
- **tailwindcss**: CSS framework
- **framer-motion**: Animation library
- **next-themes**: Theme management

### UI Components
- **@radix-ui/react-accordion**: Accessible accordion
- **@radix-ui/react-slot**: Slot component
- **lucide-react**: Icon library
- **class-variance-authority**: Component variants
- **clsx** & **tailwind-merge**: Utility functions

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our community](https://discord.gg/example)
- 📖 Documentation: [Full documentation](https://docs.example.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
