import SectionDivider from "./SectionDivider"
import DoctorCard from "./DoctorCard"

const doctors = [
  {
    id: 1,
    name: "Dr. Ashish Mishra",
    qualifications: ["MDS", "PGDMLS"],
    specialty: "Prosthodontist and Maxillofacial Implantologist",
    description:
      "Specializes in restoring and replacing teeth and facial structures using advanced prosthetics and dental implants.",
    image: "/images/ashish.jpg",
  },
  {
    id: 2,
    name: "Dr. Chavi Mishra ",
    qualifications: ["BDS"],
    specialty: "Root canal specialist & Pediatric Dentist",
    description:
      "Expert in dental pulp issues with precision and providing comprehensive oral care for children and adolescents.",
    image: "/images/chavi.jpg",
  },
  {
    id: 3,
    name: "Dr. Mayur Katariya",
    qualifications: ["BDS"],
    specialty: "Braces Specialist",
    description:
      "Specializes in diagnosing and correcting misaligned teeth and jaws using braces and other orthodontic treatments.",
    image: "/images/mayur.jpg",
  },
  {
    id: 4,
    name: "Dr. Hitesh Navapariya",
    qualifications: ["MDS"],
    specialty: "Oral and Maxillofacial Surgeon",
    description:
      "Specializes in performing surgical procedures on the mouth, jaws, and face, including tooth extractions, jaw corrections, and facial trauma treatment.",
    image: "/images/hitesh.jpg",
  },
  {
    id: 5,
    name: "Dr. Shaildendra Kumar",
    qualifications: ["BDS"],
    specialty: "Cosmetic Dentist",
    description:
      "Specializes in enhancing dental aesthetics through procedures like teeth whitening, veneers, bonding, and smile design.",
    image: "/images/shaildendra.jpg",
  },
  {
    id: 6,
    name: "Dr. Vanraj solanki ",
    qualifications: ["MDS"],
    specialty: "Periodontology & Gum Diseases Specialist",
    description: "Specializes in the prevention, diagnosis, and treatment of gum diseases and conditions affecting the supporting structures of the teeth.",
    image: "/images/vanraj.jpg",
  },
  {
    id: 7,
    name: "Dr. Arun Tiwari ",
    qualifications: ["BDS"],
    specialty: "Conscious Sedation Speacialist",
    description: "Specialist in performing a full range of dental procedures under conscious sedation, providing a comfortable experience for patients with needle anxiety.",
    image: "/images/arun.jpg",
  },
  {
    id: 8,
    name: "Dr. Shruti Jaripatke ",
    qualifications: ["BDS"],
    specialty: "Associate General Dentist",
    description: "Provides comprehensive dental care including diagnosis, treatment, and prevention of a wide range of oral health issues for patients of all ages.",
    image: "/images/shruti.jpg",
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
