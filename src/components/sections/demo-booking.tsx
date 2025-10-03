"use client"

import { motion } from "framer-motion"
import { CalendlyWidget } from "@/components/ui/calendly-widget"
import { siteConfig } from "@/config/site"

export function DemoBookingSection() {
  if (!siteConfig.contact.calendly.enabled) {
    return null
  }

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            See It in{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Book a personalized demo to see how our template can transform your business. 
            Get expert guidance and see real results.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Demo Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">What you'll get:</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Personalized Walkthrough",
                  description: "See the template customized for your specific needs"
                },
                {
                  title: "Expert Guidance",
                  description: "Get tips on customization and best practices"
                },
                {
                  title: "Q&A Session",
                  description: "Ask questions and get immediate answers"
                },
                {
                  title: "Implementation Plan",
                  description: "Leave with a clear roadmap for your project"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <CalendlyWidget
              calendlyUrl={siteConfig.contact.calendly.url}
              variant="card"
              title="Schedule Your Demo"
              description="Choose a time that works best for you. We'll send you a calendar invite with all the details."
              buttonText="Book Your Demo"
            />
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Usually responds within 2 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐⭐⭐⭐⭐</span>
              <span>4.9/5 demo satisfaction rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>No commitment required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
