"use client"

import type React from "react"
import { useState, type FormEvent } from "react"

interface ContactFormProps {
  onSubmit: (name: string) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xrbprvrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Form submitted successfully")
        onSubmit(formData.name)
      } else {
        console.error("Form submission failed")
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/xrbprvrd">
      <div className="mb-5">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300"
        />
      </div>

      <div className="mb-5">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300"
        />
      </div>

      <div className="mb-5">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300"
        />
      </div>

      <div className="mb-5">
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300"
        >
          <option value="" disabled>
            Select Service
          </option>
          <option value="General Dentistry">General Dentistry</option>
          <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
          <option value="Orthodontics">Orthodontics</option>
          <option value="Dental Implants">Dental Implants</option>
          <option value="Oral Surgery">Oral Surgery</option>
          <option value="Emergency Care">Emergency Care</option>
        </select>
      </div>

      <div className="mb-5">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 resize-none focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300"
        ></textarea>
      </div>

      {/* Hidden field for spam protection */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
