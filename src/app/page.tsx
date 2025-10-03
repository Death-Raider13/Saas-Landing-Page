import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { TrustedBySection } from "@/components/sections/trusted-by"
import { StatsSection } from "@/components/sections/stats"
import { FeaturesSection } from "@/components/sections/features"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { DemoBookingSection } from "@/components/sections/demo-booking"
import { FAQSection } from "@/components/sections/faq"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { MessengerChat } from "@/components/ui/messenger-chat"
import { CalendlyWidget } from "@/components/ui/calendly-widget"
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
        <DemoBookingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating Contact Buttons */}
      <WhatsAppButton 
        phoneNumber={siteConfig.contact.whatsapp.number}
        message={siteConfig.contact.whatsapp.message}
        position="bottom-right"
      />
      
      {siteConfig.contact.messenger.enabled && (
        <MessengerChat
          pageId={siteConfig.contact.messenger.pageId}
          appId={siteConfig.contact.messenger.appId}
          position="bottom-left"
        />
      )}
    </div>
  )
}
