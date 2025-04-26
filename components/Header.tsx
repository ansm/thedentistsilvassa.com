"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { scrollToSection } from "@/utils/scrollUtils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll for header styling
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Handle active section detection
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
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full bg-[#0B1C33] z-50 transition-all duration-300 ${
          isScrolled ? "py-2.5 shadow-md" : "py-4 shadow-sm"
        }`}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-2 sm:px-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo-2.png"
              alt="The Dentist Logo"
              width={60}
              height={60}
              className="mr-3"
              itemProp="logo"
              priority
            />
            <div className="flex flex-col">
              <h1
                className="text-2xl font-bold leading-tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                itemProp="name"
              >
                The Dentist
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <p className="text-base text-white" itemProp="description">
                  Multi-Speciality Dental Hospital
                </p>
                <div className="hidden md:flex items-center ml-3 bg-white/10 rounded-full px-2 py-0.5 border border-primary/30">
                  <i className="fas fa-certificate text-primary mr-1" aria-hidden="true"></i>
                  <span className="text-xs text-blue-100 font-medium">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center" aria-label="Main Navigation">
            <ul className="hidden md:flex">
              <li className="mx-3">
                <a
                  href="#home"
                  onClick={(e) => handleNavLinkClick(e, "home")}
                  className={`font-medium relative py-1.5 text-white hover:text-light ${
                    activeSection === "home" ? "after:w-full" : ""
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:w-0`}
                  aria-current={activeSection === "home" ? "page" : undefined}
                >
                  Home
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#doctors"
                  onClick={(e) => handleNavLinkClick(e, "doctors")}
                  className={`font-medium relative py-1.5 text-white hover:text-light ${
                    activeSection === "doctors" ? "after:w-full" : ""
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:w-0`}
                  aria-current={activeSection === "doctors" ? "page" : undefined}
                >
                  Our Doctors
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#services"
                  onClick={(e) => handleNavLinkClick(e, "services")}
                  className={`font-medium relative py-1.5 text-white hover:text-light ${
                    activeSection === "services" ? "after:w-full" : ""
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:w-0`}
                  aria-current={activeSection === "services" ? "page" : undefined}
                >
                  Our Services
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavLinkClick(e, "contact")}
                  className={`font-medium relative py-1.5 text-white hover:text-light ${
                    activeSection === "contact" ? "after:w-full" : ""
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:w-0`}
                  aria-current={activeSection === "contact" ? "page" : undefined}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="hidden md:flex items-center text-white font-medium ml-4 group">
              <i className="fas fa-phone-alt mr-2 group-hover:animate-bounce text-accent" aria-hidden="true"></i>
              <a
                href="tel:+919824144700"
                className="relative text-white transition-all duration-300 group-hover:text-accent group-hover:scale-105 inline-block transform origin-left"
                itemProp="telephone"
              >
                <span className="relative z-10">+91 9824144700</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -inset-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-white/10 rounded-lg blur-sm"></span>
              </a>
            </div>

            {/* Mobile Phone Button - Expandable on hover */}
            <div className="md:hidden flex items-center">
              <div className="group relative mr-3">
                {/* Unified expandable button */}
                <div className="flex h-9 items-center">
                  <a
                    href="tel:+919824144700"
                    className="flex items-center justify-center h-full rounded-full bg-primary overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    {/* Phone number text */}
                    <span className="whitespace-nowrap text-white font-medium text-sm opacity-0 max-w-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-w-[150px] group-hover:px-3">
                      +91 9824144700
                    </span>

                    {/* Phone icon */}
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white">
                      <i className="fas fa-phone-alt text-sm group-hover:animate-pulse"></i>
                    </span>
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="flex flex-col cursor-pointer"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                    isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        id="mobile-menu"
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
