"use client"

import type React from "react"

import Image from "next/image"
import { scrollToSection, scrollToElement } from "@/utils/scrollUtils"

export default function Footer() {
  // Create handler functions to avoid inline event handlers
  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  const handleServiceLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToElement(id)
  }

  return (
    <footer className="bg-[#0B1C33] text-gray-200 pt-16 relative">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex flex-col items-start">
              <Image src="/images/logo-2.png" alt="The Dentist Logo" width={70} height={70} className="mb-4" />
              <div className="mb-4">
                <h2 className="text-xl font-bold text-primary bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  The Dentist
                </h2>
                <p className="text-base text-gray-400">Multi-Speciality Dental Hospital</p>
              </div>
              <div className="inline-flex items-center px-3 py-1 mb-4 bg-white/5 border border-primary/30 rounded-full">
                <i className="fas fa-certificate text-primary mr-2"></i>
                <span className="text-gray-300 text-sm font-medium">ISO 9001:2015 Certified</span>
              </div>
              <p className="text-sm text-gray-400 mb-5">
                Your trusted partner for comprehensive dental care and beautiful smiles.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-primary"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-primary"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-primary"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-primary"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleQuickLinkClick(e, "home")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  onClick={(e) => handleQuickLinkClick(e, "doctors")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleQuickLinkClick(e, "services")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleQuickLinkClick(e, "contact")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#service-1"
                  onClick={(e) => handleServiceLinkClick(e, "service-1")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  General Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#service-3"
                  onClick={(e) => handleServiceLinkClick(e, "service-3")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#service-4"
                  onClick={(e) => handleServiceLinkClick(e, "service-4")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Orthodontics
                </a>
              </li>
              <li>
                <a
                  href="#service-2"
                  onClick={(e) => handleServiceLinkClick(e, "service-2")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Dental Implants
                </a>
              </li>
              <li>
                <a
                  href="#service-5"
                  onClick={(e) => handleServiceLinkClick(e, "service-5")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Oral Surgery
                </a>
              </li>
              <li>
                <a
                  href="#service-6"
                  onClick={(e) => handleServiceLinkClick(e, "service-6")}
                  className="text-gray-400 transition-all duration-300 hover:text-primary hover:pl-1"
                >
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">
                  1st Floor, Commercial Space, Shashikalp Classic Building, Opposite Garden City,Samarvani, Silvassa
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">
                  <a href="tel:+919824144700" className="text-gray-400 hover:text-primary transition-colors">
                    +91 9824144700
                  </a>
                  ,{" "}
                  <a href="tel:+919727644700" className="text-gray-400 hover:text-primary transition-colors">
                    +91 9727644700
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">contact@thedentistsilvassa.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">Mon-Sat: 10:00 AM - 9:00 PM</span>
                <span className="text-gray-400">Sun: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-center border-t border-gray-800">
          <p>
            &copy; 2023 The Dentist. All Rights Reserved. |
            <span className="inline-flex items-center ml-1">
              <i className="fas fa-certificate text-primary text-xs mr-1"></i>
              <span className="text-blue-100/80 text-sm">ISO 9001:2015 Certified</span>
            </span>
            <span className="ml-1">Multi-Speciality Dental Hospital</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
