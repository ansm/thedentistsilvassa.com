"use client"

import { useState, useEffect } from "react"
import SEO from "./SEO"

export default function ClientSEOWrapper() {
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop - 200) {
          current = section.id
        }
      })

      if (current) {
        setCurrentSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <SEO section={currentSection as "home" | "doctors" | "services" | "contact"} />
}
