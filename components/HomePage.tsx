"use client"

import Image from "next/image"
import SectionDivider from "./SectionDivider"
import { scrollToSection } from "@/utils/scrollUtils"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initialize Calendly if it exists
  useEffect(() => {
    // This ensures Calendly is initialized even if window.onload already fired
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/contact-thedentistsilvassa/new-meeting",
        text: "Book Appointment",
        color: "#02aced",
        textColor: "#ffffff",
      })
    }
  }, [])

  // Key services with icons
  const keyServices = [
    { icon: "tooth", name: "General Dentistry", color: "#00AAE9" },
    { icon: "smile", name: "Cosmetic Dentistry", color: "#0097C1" },
    { icon: "bolt", name: "Dental Implants", color: "#007AB8" },
    { icon: "user-md", name: "Oral Surgery", color: "#006A9E" },
  ]

  const getIconClass = (icon: string) => {
    switch (icon) {
      case "tooth":
        return "fas fa-tooth"
      case "smile":
        return "fas fa-smile"
      case "teeth-open":
        return "fas fa-teeth-open"
      case "user-md":
        return "fas fa-user-md"
      case "bone":
        return "fas fa-bone"
      case "bolt":
        return "fas fa-bolt"
      default:
        return "fas fa-tooth"
    }
  }

  // Service card component to avoid inline event handlers
  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const isHovered = hoveredIndex === index

    return (
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => scrollToSection("services")}
      >
        <div
          className={`
          p-4 rounded-xl cursor-pointer transition-all duration-500
          ${isHovered ? "bg-white text-primary shadow-xl transform -translate-y-1" : "bg-white/15 backdrop-blur-md text-white"}
        `}
        >
          {/* Animated background */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : ""}`}
          ></div>

          {/* Animated circles */}
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-white/5"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-white/5"></div>

          <div className="flex items-center relative z-10">
            <div
              className={`
                w-12 h-12 rounded-full flex items-center justify-center mr-3 transition-all duration-500
                ${
                  isHovered
                    ? `bg-gradient-to-r from-secondary to-primary shadow-lg shadow-${service.color}/20`
                    : "bg-white/20"
                }
              `}
              style={{
                transform: isHovered ? "scale(1.1) rotate(10deg)" : "scale(1) rotate(0deg)",
              }}
            >
              <i className={`${getIconClass(service.icon)} ${isHovered ? "text-white" : "text-white"} text-xl`}></i>
            </div>
            <div>
              <span className={`font-medium transition-all duration-500 ${isHovered ? "text-primary" : "text-white"}`}>
                {service.name}
              </span>

              {/* Animated underline */}
              <div
                className={`h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-500 mt-1
                  ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mobile service card to avoid inline event handlers
  const MobileServiceCard = ({ service, index }: { service: any; index: number }) => {
    return (
      <div
        className="bg-white/15 backdrop-blur-md rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/25 animate-fadeIn"
        style={{ animationDelay: `${index * 0.15}s` }}
        onClick={() => scrollToSection("services")}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
            <i className={`${getIconClass(service.icon)} text-white text-xl`}></i>
          </div>
          <span className="font-medium text-white text-sm">{service.name}</span>
        </div>
      </div>
    )
  }

  // Render key services component
  const KeyServicesSection = () => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 text-white/90 md:text-white/90">Our Key Services</h3>
      <div className="grid grid-cols-2 gap-4">
        {keyServices.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  )

  // All services button component
  const AllServicesButton = () => (
    <a
      href="#services"
      onClick={(e) => {
        e.preventDefault()
        scrollToSection("services")
      }}
      className="inline-block bg-gradient-to-r from-[#00507A] to-[#006A9E] text-white py-4 px-10 rounded-full font-medium 
      transition-all duration-300 transform hover:-translate-y-2 
      shadow-[0_5px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] 
      border-2 border-[#007AB8]/30 
      relative overflow-hidden 
      hover:bg-gradient-to-r hover:from-[#003F61] hover:to-[#005885]
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-white/10 before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left 
      before:transition-transform before:duration-300
      font-bold tracking-wide text-[#F0F8FF]"
    >
      All Services
    </a>
  )

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Desktop view */}
      {!isMobile && (
        <>
          <div className="pt-32 pb-48 relative">
            {/* Background image for desktop - full width */}
            <div className="absolute inset-0 w-full h-full z-0">
              {/* Full width image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/td-banner1.png"
                  alt="Dental Consultation"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                  className="max-h-full"
                />
              </div>
              {/* Semi-transparent overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0097C1]/70 to-transparent z-10"></div>
            </div>

            {/* Content container for desktop */}
            <div className="container mx-auto px-5 relative z-20">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 text-white md:pr-12 mb-12 md:mb-0 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-shadow-strong">
                    Your Smile Is Our Priority
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-shadow-medium">
                    Experience world-class dental care with our team of specialists using the latest tools, technology,
                    and techniques.
                  </p>

                  {/* ISO Badge */}
                  <div className="flex items-center justify-center md:justify-start mb-8">
                    <div className="bg-white/20 backdrop-blur-md rounded-full py-2 px-4 inline-flex items-center border border-primary/30">
                      <i className="fas fa-certificate text-primary mr-2 text-xl"></i>
                      <div>
                        <span className="text-white font-medium">ISO 9001:2015 Certified</span>
                        <p className="text-white/80 text-xs">Quality Management System</p>
                      </div>
                    </div>
                  </div>

                  <KeyServicesSection />
                  <AllServicesButton />
                </div>
              </div>
            </div>
          </div>

          <SectionDivider
            type="wave"
            fill="#ffffff"
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30"
          />
        </>
      )}

      {/* Mobile view with seamless background-image blend */}
      {isMobile && (
        <div className="relative">
          {/* Full-width background image with overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/td-banner1.png"
              alt="Dental Consultation"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
            {/* Gradient overlay that fades from semi-transparent blue at top to transparent at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0097C1]/80 via-[#0097C1]/60 to-transparent"></div>
          </div>

          {/* Content section with proper padding */}
          <div className="relative z-20 pt-28 pb-0 px-5">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-6 leading-tight text-shadow-strong">Your Smile Is Our Priority</h2>
              <p className="text-lg mb-8 text-shadow-medium">
                Experience world-class dental care with our team of specialists using the latest technology and
                techniques.
              </p>

              {/* ISO Badge for Mobile */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-md rounded-full py-2 px-4 inline-flex items-center border border-primary/30">
                  <i className="fas fa-certificate text-primary mr-2 text-xl"></i>
                  <div>
                    <span className="text-white font-medium">ISO 9001:2015 Certified</span>
                    <p className="text-white/80 text-xs">Quality Management System</p>
                  </div>
                </div>
              </div>

              {/* Mobile Key Services */}
              <div className="w-full mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Key Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {keyServices.map((service, index) => (
                    <MobileServiceCard key={index} service={service} index={index} />
                  ))}
                </div>
              </div>

              <div className="mb-64">
                <AllServicesButton />
              </div>
            </div>
          </div>

          {/* Section divider */}
          <SectionDivider
            type="wave"
            fill="#ffffff"
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30"
          />
        </div>
      )}
    </section>
  )
}
