"use client"

import type React from "react"
import { scrollToSection } from "@/utils/scrollUtils"

interface MobileMenuProps {
  id: string
  isOpen: boolean
  activeSection: string
  onClose: () => void
}

export default function MobileMenu({ id, isOpen, activeSection, onClose }: MobileMenuProps) {
  // Create a handler function to avoid inline event handlers
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    onClose()

    // Add a small delay to ensure the menu closes before scrolling
    setTimeout(() => {
      scrollToSection(sectionId)
    }, 100)
  }

  return (
    <div
      id={id}
      className={`fixed top-[80px] left-0 w-full bg-[#0B1C33] p-5 shadow-md z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!isOpen}
      role="navigation"
      aria-label="Mobile Navigation"
    >
      <ul>
        <li className="my-4">
          <a
            href="#home"
            className={`block font-medium py-1.5 ${
              activeSection === "home"
                ? "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                : "text-white"
            }`}
            onClick={(e) => handleLinkClick(e, "home")}
            aria-current={activeSection === "home" ? "page" : undefined}
          >
            Home
          </a>
        </li>
        <li className="my-4">
          <a
            href="#doctors"
            className={`block font-medium py-1.5 ${
              activeSection === "doctors"
                ? "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                : "text-white"
            }`}
            onClick={(e) => handleLinkClick(e, "doctors")}
            aria-current={activeSection === "doctors" ? "page" : undefined}
          >
            Our Doctors
          </a>
        </li>
        <li className="my-4">
          <a
            href="#services"
            className={`block font-medium py-1.5 ${
              activeSection === "services"
                ? "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                : "text-white"
            }`}
            onClick={(e) => handleLinkClick(e, "services")}
            aria-current={activeSection === "services" ? "page" : undefined}
          >
            Our Services
          </a>
        </li>
        <li className="my-4">
          <a
            href="#contact"
            className={`block font-medium py-1.5 ${
              activeSection === "contact"
                ? "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                : "text-white"
            }`}
            onClick={(e) => handleLinkClick(e, "contact")}
            aria-current={activeSection === "contact" ? "page" : undefined}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  )
}
