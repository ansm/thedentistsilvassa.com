import SectionDivider from "./SectionDivider"
import DoctorCard from "./DoctorCard"

const doctors = [
  {
    id: 1,
    name: "Dr. Ashish Mishra",
    specialty: "Prosthodontist and Maxillofacial Implantologist",
    description:
      "Specializes in restoring and replacing teeth and facial structures using advanced prosthetics and dental implants.",
    image: "/images/doctor-1.png",
  },
  {
    id: 2,
    name: "Dr. Chavi Mishra ",
    specialty: "Root canal specialist & Pediatric Dentist",
    description:
      "Expert in dental pulp issues with precision and providing comprehensive oral care for children and adolescents.",
    image: "/images/doctor-2.png",
  },
  {
    id: 3,
    name: "Dr. Mayur Katariya",
    specialty: "Braces Specialist",
    description:
      "Specializes in diagnosing and correcting misaligned teeth and jaws using braces and other orthodontic treatments.",
    image: "/images/doctor-3.png",
  },
  {
    id: 4,
    name: "Dr. Hitesh Navapariya",
    specialty: "Oral surgeon",
    description:
      "Specializes in performing surgical procedures on the mouth, jaws, and face, including tooth extractions, jaw corrections, and facial trauma treatment.",
    image: "/images/doctor-4.png",
  },
]

export default function DoctorsPage() {
  return (
    <section id="doctors" className="py-24 bg-white relative">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-secondary after:to-primary after:rounded-md">
          Our Doctors
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Meet our team of experienced dental specialists
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      <SectionDivider
        type="curve"
        fill="#f5f9ff"
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
      />
    </section>
  )
}
