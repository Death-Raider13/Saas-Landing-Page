export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
  hero: HeroConfig
  features: Feature[]
  pricing: PricingConfig
  testimonials: Testimonial[]
  faqs: FAQ[]
  contact: ContactConfig
  stats: Stat[]
  trustedBy: TrustedCompany[]
}

export interface HeroConfig {
  title: string
  subtitle: string
  description: string
  primaryCTA: string
  secondaryCTA: string
  demoVideo?: string
  heroImage?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  image?: string
}

export interface PricingConfig {
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  cta: string
  badge?: string
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  company?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactConfig {
  title: string
  subtitle: string
  email: string
  phone: string
  address: string
  whatsapp: {
    number: string
    message: string
  }
}

export interface Stat {
  number: string
  label: string
  description?: string
}

export interface TrustedCompany {
  name: string
  logo: string
  url?: string
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  message: string
}

export interface NewsletterData {
  email: string
}
