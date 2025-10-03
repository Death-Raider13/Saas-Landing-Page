"use client"

import { motion } from "framer-motion"
import { AnimatedNumber } from "@/components/ui/animated-counter"
import { siteConfig } from "@/config/site"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AnimatedNumber
                value={stat.number}
                label={stat.label}
                description={stat.description}
                className="p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
