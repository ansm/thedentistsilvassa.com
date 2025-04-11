// SEO Configuration File
// You can modify these values to update SEO settings across the website

export const seoConfig = {
  // General SEO
  siteName: "The Dentist - Multi-speciality Dental Hospital",
  siteUrl: "https://thedentistsilvassa.com",

  // Home page
  home: {
    title: "The Dentist - Multi-speciality Dental Hospital in Silvassa | ISO 9001:2015 Certified",
    description:
      "Experience world-class dental care at The Dentist, Silvassa's premier ISO 9001:2015 certified multi-specialty dental hospital. Our expert team offers general dentistry, cosmetic procedures, dental implants, and more.",
    keywords:
      "dentist, dental hospital, dental clinic, dental care, dental implants, cosmetic dentistry, orthodontics, oral surgery, Silvassa, ISO certified dental hospital",
  },

  // Doctors section
  doctors: {
    title: "Our Doctors - Expert Dental Specialists | The Dentist Silvassa",
    description:
      "Meet our team of experienced dental specialists at The Dentist Silvassa. Our doctors are experts in orthodontics, prosthodontics, endodontics, and cosmetic dentistry.",
    keywords:
      "dental specialists, dentists, orthodontist, prosthodontist, endodontist, cosmetic dentist, Silvassa dentists",
  },

  // Services section
  services: {
    title: "Dental Services - Comprehensive Dental Care | The Dentist Silvassa",
    description:
      "Comprehensive dental services at The Dentist Silvassa include general dentistry, cosmetic procedures, dental implants, orthodontics, oral surgery, and emergency care.",
    keywords:
      "dental services, general dentistry, cosmetic dentistry, dental implants, orthodontics, oral surgery, emergency dental care, Silvassa",
  },

  // Contact section
  contact: {
    title: "Contact Us - The Dentist Silvassa | Book Your Appointment",
    description:
      "Contact The Dentist Silvassa for appointments and inquiries. Visit our ISO 9001:2015 certified dental hospital or call us at +91 9824144700.",
    keywords:
      "dental appointment, contact dentist, dental clinic contact, Silvassa dental hospital, book dental appointment",
  },

  // Social Media
  socialMedia: {
    image: "/images/td-banner1.png", // Updated to use the new image
    twitterHandle: "@thedentistsilvassa", // Your Twitter handle
  },

  // Business Information for Schema.org
  businessInfo: {
    name: "The Dentist - Multi-speciality Dental Hospital",
    legalName: "The Dentist",
    address: {
      streetAddress: "1st Floor, Commercial Space, Shashikalp Classic Building, Opposite Garden City, Samarvani",
      addressLocality: "Silvassa",
      postalCode: "396230",
      addressRegion: "Dadra & Nagar Haveli",
      addressCountry: "IN",
    },
    telephone: "+919824144700",
    secondaryTelephone: "+919727644700",
    email: "contact@thedentistsilvassa.com",
    openingHours: {
      weekdays: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "21:00",
      },
      sunday: {
        opens: "10:00",
        closes: "18:00",
      },
    },
    socialProfiles: {
      facebook: "https://www.facebook.com/thedentistsilvassa",
      instagram: "https://www.instagram.com/thedentistsilvassa",
      twitter: "https://twitter.com/thedentistsilvassa",
      linkedin: "https://www.linkedin.com/company/thedentistsilvassa",
    },
  },
}
