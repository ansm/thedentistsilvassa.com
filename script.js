// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 50) {
    header.style.padding = "10px 0"
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.padding = "15px 0"
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")

mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active")
  const spans = this.querySelectorAll("span")

  if (mobileMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a")
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Active menu item based on scroll position
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".menu li a")
const mobileNavLinks = document.querySelectorAll(".mobile-menu li a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })

  mobileNavLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Form Submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const service = document.getElementById("service").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For demonstration, we'll just log it and show an alert
    console.log({
      name,
      email,
      phone,
      service,
      message,
    })

    // Show success message
    const formContainer = contactForm.parentElement
    const successMessage = document.createElement("div")
    successMessage.className = "success-message"
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Thank you for your message!</h3>
        <p>We will get back to you soon, ${name}.</p>
        <button class="btn" id="resetForm">Send Another Message</button>
    `

    // Hide the form and show success message
    contactForm.style.display = "none"
    formContainer.appendChild(successMessage)

    // Add event listener to reset button
    document.getElementById("resetForm").addEventListener("click", () => {
      contactForm.reset()
      contactForm.style.display = "block"
      successMessage.remove()
    })
  })
}

// Google Map Initialization
let google // Declare google variable
function initMap() {
  // Replace with your dental clinic's coordinates
  const location = { lat: 40.7128, lng: -74.006 }

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: "2.00",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#9c9c9c",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7b7b7b",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c8d7d4",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#070707",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
    ],
  })

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "DentalCare Clinic",
    animation: google.maps.Animation.DROP,
  })

  const infoWindow = new google.maps.InfoWindow({
    content: `
            <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 10px; color: #1a91ff;">DentalCare</h3>
                <p style="margin: 0 0 5px;">123 Dental Street, Medical District</p>
                <p style="margin: 0 0 5px;">New York, NY 10001</p>
                <p style="margin: 0;"><a href="tel:+15551234567" style="color: #1a91ff; text-decoration: none;">+1 (555) 123-4567</a></p>
            </div>
        `,
  })

  marker.addListener("click", () => {
    infoWindow.open(map, marker)
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const headerHeight = document.getElementById("header").offsetHeight
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Animation on scroll (simple implementation)
function animateOnScroll() {
  const elements = document.querySelectorAll(".doctor-card, .service-card")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Set initial styles for animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".doctor-card, .service-card")

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(50px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger animation for elements in view on page load
  animateOnScroll()

  // Back to top button functionality
  const backToTopButton = document.getElementById("backToTop")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
})

// Listen for scroll to trigger animations
window.addEventListener("scroll", animateOnScroll)

// Add testimonial slider functionality
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll(".testimonial")
  const prevBtn = document.querySelector(".testimonial-prev")
  const nextBtn = document.querySelector(".testimonial-next")

  if (!testimonials.length || !prevBtn || !nextBtn) return

  let currentIndex = 0

  // Show initial testimonial
  testimonials[currentIndex].classList.add("active")

  // Function to show testimonial at index
  function showTestimonial(index) {
    testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
    testimonials[index].classList.add("active")
  }

  // Previous button click
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    showTestimonial(currentIndex)
  })

  // Next button click
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length
    showTestimonial(currentIndex)
  })

  // Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length
    showTestimonial(currentIndex)
  }, 5000)
}
