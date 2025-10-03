"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Clock, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  position?: "bottom-right" | "bottom-left"
  className?: string
}

export function WhatsAppButton({ 
  phoneNumber, 
  message = "Hi! I'm interested in your SaaS template. Can you help me?",
  position = "bottom-right",
  className = ""
}: WhatsAppButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Show button after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // Show welcome message after 8 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true)
      // Auto hide welcome after 5 seconds
      setTimeout(() => setShowWelcome(false), 5000)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(welcomeTimer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsExpanded(false)
  }

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6"
  }

  if (!isVisible) return null

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      <AnimatePresence>
        {/* Welcome Message Tooltip */}
        {showWelcome && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 mb-2 p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-2xl max-w-xs"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium">We're online!</span>
            </div>
            <p className="text-xs opacity-90">
              Need help? Chat with us on WhatsApp 💬
            </p>
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-1 right-4 w-3 h-3 bg-green-500 rotate-45" />
          </motion.div>
        )}

        {/* Expanded Chat Preview */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 mb-2 w-80 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Support Team</p>
                    <div className="flex items-center gap-1 text-xs opacity-90">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-3 bg-gray-50 dark:bg-gray-800/50">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">ST</span>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-md p-3 shadow-sm max-w-[200px]">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Hi there! 👋 Welcome to our SaaS template!
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>Just now</span>
                    <CheckCircle2 className="w-3 h-3 text-green-500 ml-auto" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-2"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">ST</span>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-md p-3 shadow-sm max-w-[200px]">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    How can I help you today? 🚀
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>Just now</span>
                    <CheckCircle2 className="w-3 h-3 text-green-500 ml-auto" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Avg. response: 2 min</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>Available 24/7</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </motion.div>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Click to open WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.5
        }}
        className="relative"
      >
        {/* Ripple Effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-400 rounded-full"
        />
        
        {/* Outer Ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute -inset-2 bg-green-300 rounded-full"
        />

        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white shadow-2xl border-4 border-white dark:border-gray-800 relative overflow-hidden group"
            size="icon"
          >
            {/* Shine Effect */}
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            
            {/* WhatsApp Icon */}
            <motion.div
              animate={{ 
                rotate: isExpanded ? 45 : 0,
                scale: isExpanded ? 0.9 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {isExpanded ? (
                <X className="w-7 h-7 relative z-10" />
              ) : (
                <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
              )}
            </motion.div>
            
            {/* Notification Badge */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-xs text-white font-bold">1</span>
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
