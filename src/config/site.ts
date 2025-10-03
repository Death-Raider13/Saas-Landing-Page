import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "SaaS Landing Template",
  description: "A beautiful, modern SaaS landing page template built with Next.js, TypeScript, and Tailwind CSS",
  url: "https://your-domain.com",
  ogImage: "https://your-domain.com/og.jpg",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  hero: {
    title: "Build Your SaaS Product Faster",
    subtitle: "The Ultimate Landing Page Template",
    description: "Launch your SaaS product with confidence using our professionally designed, fully responsive landing page template. Built with modern technologies and best practices.",
    primaryCTA: "Get Started Free",
    secondaryCTA: "View Demo",
  },
  features: [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built with Next.js 14 and optimized for performance. Your users will love the speed."
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Professionally designed with modern UI/UX principles and beautiful animations."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Looks perfect on all devices - desktop, tablet, and mobile. Tested across all browsers."
    },
    {
      icon: "🔧",
      title: "Easy to Customize",
      description: "Simple configuration file makes it easy to customize colors, content, and branding."
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      description: "Built-in dark mode support with smooth transitions and system preference detection."
    },
    {
      icon: "🚀",
      title: "Production Ready",
      description: "Clean, documented code with TypeScript support and best practices included."
    }
  ],
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that's right for you",
    plans: [
      {
        name: "Starter",
        price: "$9",
        period: "/month",
        description: "Perfect for small projects and personal use",
        features: [
          "Up to 5 projects",
          "Basic analytics",
          "Email support",
          "1GB storage",
          "SSL certificate"
        ],
        popular: false,
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: "$29",
        period: "/month",
        description: "Best for growing businesses and teams",
        features: [
          "Unlimited projects",
          "Advanced analytics",
          "Priority support",
          "10GB storage",
          "Custom domain",
          "Team collaboration",
          "API access"
        ],
        popular: true,
        cta: "Start Free Trial"
      },
      {
        name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For large organizations with advanced needs",
        features: [
          "Everything in Professional",
          "Dedicated support",
          "100GB storage",
          "Advanced security",
          "Custom integrations",
          "SLA guarantee",
          "White-label options"
        ],
        popular: false,
        cta: "Contact Sales"
      }
    ]
  },
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/avatars/sarah.jpg",
      content: "This template saved us months of development time. The design is beautiful and the code quality is exceptional.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      avatar: "/avatars/michael.jpg",
      content: "The customization options are fantastic. We were able to match our brand perfectly and launch quickly.",
      rating: 5,
      company: "InnovateCorp"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      avatar: "/avatars/emily.jpg",
      content: "Professional, modern, and responsive. Our conversion rates improved significantly after switching to this template.",
      rating: 5,
      company: "StartupXYZ"
    },
    {
      name: "David Kim",
      role: "CTO, DevFlow",
      avatar: "/avatars/david.jpg",
      content: "The TypeScript support and modern architecture made integration seamless. Highly recommend for any SaaS project.",
      rating: 5,
      company: "DevFlow"
    },
    {
      name: "Lisa Wang",
      role: "Designer, CreativeStudio",
      avatar: "/avatars/lisa.jpg",
      content: "Beautiful design system and components. The dark mode implementation is flawless.",
      rating: 5,
      company: "CreativeStudio"
    },
    {
      name: "Alex Thompson",
      role: "Founder, GrowthLab",
      avatar: "/avatars/alex.jpg",
      content: "Converted 40% better than our previous landing page. The animations and UX are top-notch.",
      rating: 5,
      company: "GrowthLab"
    }
  ],
  faqs: [
    {
      question: "What's included in the template?",
      answer: "The template includes all source code, documentation, and assets needed to create a professional SaaS landing page. This includes the hero section, features, pricing, testimonials, FAQ, and contact sections."
    },
    {
      question: "Can I customize the design?",
      answer: "Absolutely! The template is built with customization in mind. You can easily modify colors, fonts, content, and layout through the configuration files and Tailwind CSS classes."
    },
    {
      question: "Is it mobile responsive?",
      answer: "Yes, the template is fully responsive and optimized for all devices including desktop, tablet, and mobile. It's been tested across all major browsers."
    },
    {
      question: "Do you provide support?",
      answer: "Yes, we provide comprehensive documentation and email support to help you get started and customize the template to your needs."
    },
    {
      question: "Can I use this for commercial projects?",
      answer: "Yes, you can use this template for both personal and commercial projects. The license allows for unlimited use and modifications."
    },
    {
      question: "What technologies are used?",
      answer: "The template is built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion for animations, and shadcn/ui components for a modern, professional look."
    }
  ],
  contact: {
    title: "Ready to Get Started?",
    subtitle: "Join thousands of satisfied customers who have transformed their business with our template.",
    email: "hello@yourdomain.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, Suite 100, City, State 12345",
    whatsapp: {
      number: "1234567890", // Your WhatsApp number (without + or spaces)
      message: "Hi! I'm interested in your SaaS template. Can you help me?"
    }
  },
  stats: [
    {
      number: "10,000+",
      label: "Happy Customers",
      description: "Businesses trust our template"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable performance guaranteed"
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "Based on 2,500+ reviews"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help you"
    }
  ],
  trustedBy: [
    {
      name: "TechCorp",
      logo: "/logos/techcorp.svg",
      url: "https://techcorp.com"
    },
    {
      name: "InnovateLab",
      logo: "/logos/innovatelab.svg",
      url: "https://innovatelab.com"
    },
    {
      name: "StartupXYZ",
      logo: "/logos/startupxyz.svg",
      url: "https://startupxyz.com"
    },
    {
      name: "DigitalFlow",
      logo: "/logos/digitalflow.svg",
      url: "https://digitalflow.com"
    },
    {
      name: "CloudSync",
      logo: "/logos/cloudsync.svg",
      url: "https://cloudsync.com"
    }
  ]
}
