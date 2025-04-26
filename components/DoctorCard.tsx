"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Doctor {
  id: number
  name: string
  specialty: string
  description: string
  image: string
  qualifications?: string[] // Added qualifications field
}

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
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

  return (
    <article
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg p-8 text-center relative z-10 transition-all duration-500 ease-out opacity-0 translate-y-12 hover:-translate-y-4 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-secondary before:to-primary before:opacity-0 before:transition-opacity before:duration-300 before:z-[-1] before:rounded-xl hover:before:opacity-5"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-4 border-light transition-all duration-300 hover:border-primary hover:scale-105 shadow-md">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={`Dr. ${doctor.name} - ${doctor.specialty} at The Dentist Silvassa`}
          width={150}
          height={150}
          className="w-full h-full object-cover"
          itemProp="image"
          priority={doctor.id === 1}
        />
      </div>

      <h3 className="text-xl font-semibold text-dark mb-1" itemProp="name">
        {doctor.name}
      </h3>

      {/* Qualifications Section - Now positioned right below the name */}
      {doctor.qualifications && doctor.qualifications.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap justify-center gap-1">
            {doctor.qualifications.map((qualification, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium"
                itemProp="hasCredential"
              >
                {qualification}
              </span>
            ))}
          </div>
        </div>
      )}

      <p
        className="inline-block px-4 py-1 bg-light text-primary font-medium rounded-full text-sm mb-4"
        itemProp="jobTitle"
      >
        {doctor.specialty}
      </p>

      <p className="text-gray-600 text-sm mb-5" itemProp="description">
        {doctor.description}
      </p>
    </article>
  )
}
