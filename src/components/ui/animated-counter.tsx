"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ 
  from, 
  to, 
  duration = 2, 
  className = "",
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, isInView, to])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
      }
    })

    return () => unsubscribe()
  }, [springValue, prefix, suffix])

  return <span ref={ref} className={className} />
}

interface AnimatedNumberProps {
  value: string
  label: string
  description?: string
  className?: string
}

export function AnimatedNumber({ value, label, description, className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Extract number from value string for animation
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0
  const suffix = value.replace(/[\d,]/g, '')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`text-center space-y-2 ${className}`}
    >
      <div className="text-3xl font-bold text-primary">
        {numericValue > 0 ? (
          <AnimatedCounter from={0} to={numericValue} suffix={suffix} />
        ) : (
          value
        )}
      </div>
      <div className="text-sm font-medium">{label}</div>
      {description && (
        <div className="text-xs text-muted-foreground">{description}</div>
      )}
    </motion.div>
  )
}
