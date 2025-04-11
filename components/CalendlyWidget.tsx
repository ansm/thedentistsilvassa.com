"use client"

import { useEffect } from "react"

export default function CalendlyWidget() {
  useEffect(() => {
    // Try to initialize Calendly after component mounts
    const initCalendly = () => {
      if (typeof window !== "undefined" && window.Calendly) {
        console.log("Initializing Calendly from React component")
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/contact-thedentistsilvassa/new-meeting",
          text: "Book Appointment",
          color: "#02aced",
          textColor: "#ffffff",
        })
        return true
      }
      return false
    }

    // Try immediately
    if (!initCalendly()) {
      // If not successful, try again after a delay
      const timer = setTimeout(() => {
        initCalendly()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  return null // This component doesn't render anything visible
}
