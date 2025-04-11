"use client"

import { useState } from "react"
import SectionDivider from "./SectionDivider"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState("")

  const handleFormSubmit = (name: string) => {
    setSubmittedName(name)
    setFormSubmitted(true)

    // Scroll to the success message
    setTimeout(() => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleResetForm = () => {
    setFormSubmitted(false)
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-md">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          We're here to help with all your dental needs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-xl shadow-md p-10 transition-all duration-300 hover:shadow-lg">
            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Send us a message</h3>
                <ContactForm onSubmit={handleFormSubmit} />
              </>
            ) : (
              <div className="text-center py-8 animate-fadeIn">
                <i className="fas fa-check-circle text-6xl text-green-500 mb-5"></i>
                <h3 className="text-2xl font-semibold text-dark mb-3">Thank you for your message!</h3>
                <p className="mb-5 text-gray-600">We will get back to you soon, {submittedName}.</p>
                <button
                  className="btn bg-gradient-to-r from-primary to-accent text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                  onClick={handleResetForm}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          <ContactInfo />
        </div>
      </div>

      <SectionDivider
        type="tilt"
        fill="#0B1C33"
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
      />
    </section>
  )
}
