"use client"

import { motion } from "framer-motion"
import { MessageSquare, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

// Extend HTML attributes to include Facebook Messenger custom attributes
declare module 'react' {
  interface HTMLAttributes<T> {
    attribution?: string
    page_id?: string
    theme_color?: string
    logged_in_greeting?: string
    logged_out_greeting?: string
  }
}

interface MessengerChatProps {
  pageId: string
  appId: string
  position?: "bottom-right" | "bottom-left"
  themeColor?: string
  loggedInGreeting?: string
  loggedOutGreeting?: string
  className?: string
}

export function MessengerChat({
  pageId,
  appId,
  position = "bottom-right",
  themeColor = "#0084ff",
  loggedInGreeting = "Hi! How can we help you today?",
  loggedOutGreeting = "Hi! How can we help you today?",
  className = ""
}: MessengerChatProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined' && !(window as any).FB) {
      // Set up Facebook SDK
      ;(window as any).fbAsyncInit = function() {
        ;(window as any).FB.init({
          xfbml: true,
          version: 'v18.0'
        })
        setIsLoaded(true)
      }

      // Load SDK script
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      script.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`
      document.head.appendChild(script)
    }
  }, [])

  const positionClasses = {
    "bottom-right": "bottom-6 right-20",
    "bottom-left": "bottom-6 left-20"
  }

  if (!isVisible) return null

  return (
    <>
      {/* Facebook Messenger Customer Chat Plugin */}
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id={pageId}
        theme_color={themeColor}
        logged_in_greeting={loggedInGreeting}
        logged_out_greeting={loggedOutGreeting}
      />

      {/* Custom Messenger Button */}
      <div className={`fixed ${positionClasses[position]} z-40 ${className}`}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 3 // Show after 3 seconds
          }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              onClick={() => {
                if ((window as any).FB) {
                  // Show Facebook Messenger chat
                  const chatPlugin = document.querySelector('.fb-customerchat')
                  if (chatPlugin) {
                    ;(chatPlugin as any).click()
                  }
                }
              }}
              className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl border-4 border-white dark:border-gray-800 relative overflow-hidden"
              size="icon"
            >
              {/* Pulse Animation */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-blue-400 rounded-full"
              />
              
              {/* Messenger Icon */}
              <MessageSquare className="w-5 h-5 relative z-10" />
            </Button>
          </motion.div>

          {/* Close Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-1 -right-1"
          >
            <Button
              variant="secondary"
              size="icon"
              className="h-5 w-5 rounded-full shadow-lg"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-2 w-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

// Alternative: Simple Messenger Link Component
interface MessengerLinkProps {
  messengerUrl: string
  buttonText?: string
  variant?: "button" | "icon"
  className?: string
}

export function MessengerLink({
  messengerUrl,
  buttonText = "Message Us",
  variant = "button",
  className = ""
}: MessengerLinkProps) {
  const handleClick = () => {
    window.open(messengerUrl, '_blank', 'width=600,height=600')
  }

  if (variant === "icon") {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={className}
      >
        <Button
          onClick={handleClick}
          variant="outline"
          size="icon"
          className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <MessageSquare className="w-4 h-4" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        {buttonText}
      </Button>
    </motion.div>
  )
}
