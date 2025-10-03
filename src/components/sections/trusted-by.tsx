"use client"

import { motion } from "framer-motion"
import Link from "next/link"
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

export function TrustedBySection() {
  return (
    <section className="py-16 border-b">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by innovative companies worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {siteConfig.trustedBy.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              {company.url ? (
                <Link
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center justify-center h-16 px-6 py-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group-hover:bg-primary/5">
                    {/* Placeholder for logo - in real implementation, you'd use an Image component */}
                    <div className="w-24 h-8 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        {company.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center justify-center h-16 px-6 py-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:bg-primary/5">
                  <div className="w-24 h-8 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/10 rounded flex items-center justify-center">
                    <span className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                      {company.name}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated marquee effect for additional visual appeal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full"
            />
            <span>Join 10,000+ satisfied customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
