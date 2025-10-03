import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { TrustedBySection } from "@/components/sections/trusted-by"
import { StatsSection } from "@/components/sections/stats"
import { FeaturesSection } from "@/components/sections/features"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <StatsSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber={siteConfig.contact.whatsapp.number}
        message={siteConfig.contact.whatsapp.message}
        position="bottom-right"
      />
    </div>
  )
}
