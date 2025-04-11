"use client"

import { useEffect, useRef } from "react"

interface Service {
  id: number
  title: string
  description: string
  icon: string
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

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
      case "heartbeat":
        return "fas fa-heartbeat"
      case "bone":
        return "fas fa-bone"
      default:
        return "fas fa-tooth"
    }
  }

  return (
    <article
      id={`service-${service.id}`}
      ref={cardRef}
      className="bg-white rounded-xl shadow-md p-8 text-center relative overflow-hidden transition-all duration-500 ease-out opacity-0 translate-y-12 hover:-translate-y-4 hover:shadow-xl group"
      itemScope
      itemType="https://schema.org/MedicalService"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
      <div className="absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl transform transition-transform duration-700 ease-in-out group-hover:scale-150"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-xl transform transition-transform duration-700 ease-in-out group-hover:scale-150"></div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-primary/20 border-r-transparent transform rotate-0 transition-all duration-300 group-hover:border-t-primary/40"></div>

      {/* Icon container with pulse effect */}
      <div className="relative z-10 mb-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white text-3xl shadow-lg transition-all duration-500 group-hover:shadow-primary/30 group-hover:shadow-lg">
          <i className={getIconClass(service.icon)} aria-hidden="true"></i>
        </div>

        {/* Pulse animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/20 z-[-1] animate-ping-slow opacity-0 group-hover:opacity-100"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="text-xl font-semibold text-dark mb-4 transition-all duration-300 group-hover:text-primary"
          itemProp="name"
        >
          {service.title}
        </h3>

        <p className="text-gray-600 transition-all duration-300 relative" itemProp="description">
          {service.description}
        </p>
        <meta itemProp="provider" content="The Dentist - Multi-speciality Dental Hospital" />

        {/* Bottom accent line that expands on hover */}
        <div className="h-0.5 w-10 bg-gradient-to-r from-secondary to-primary mx-auto mt-6 rounded-full transition-all duration-500 group-hover:w-1/2 opacity-70"></div>
      </div>
    </article>
  )
}
