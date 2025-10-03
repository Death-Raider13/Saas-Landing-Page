"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {siteConfig.pricing.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {siteConfig.pricing.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {siteConfig.pricing.plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className={`relative h-full ${
                  plan.popular 
                    ? 'border-primary shadow-2xl scale-105' 
                    : 'border-border shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-secondary/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              All plans include
            </h3>
            <div className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Free updates & maintenance</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer custom enterprise solutions with dedicated support, custom integrations, and tailored features for your organization.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
