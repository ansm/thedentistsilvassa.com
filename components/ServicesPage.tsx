import SectionDivider from "./SectionDivider"
import ServiceCard from "./ServiceCard"

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description: "Regular check-ups, cleanings, fillings, and preventive care to maintain your oral health.",
    icon: "tooth",
  },
  {
    id: 3,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, bonding, and smile makeovers to enhance your smile.",
    icon: "smile",
  },
  {
    id: 2,
    title: "Dental Implants",
    description: "Full mouth implant rehabilitation and fixed teeth in 72 hours with implants.",
    icon: "bone",
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Traditional braces, clear aligners, and other treatments to straighten your teeth.",
    icon: "teeth-open",
  },
  {
    id: 5,
    title: "Oral Surgery",
    description: "Tooth extractions, wisdom teeth removal, and other surgical procedures.",
    icon: "user-md",
  },
  {
    id: 6,
    title: "Emergency Care",
    description: "Prompt treatment for dental emergencies, including toothaches and injuries.",
    icon: "heartbeat",
  },
]

export default function ServicesPage() {
  return (
    <section id="services" className="py-24 bg-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-pattern-services"></div>
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-primary after:rounded-md">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Comprehensive dental care for the whole family
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <SectionDivider
        type="zigzag"
        fill="#ffffff"
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
      />
    </section>
  )
}
