export default function ContactInfo() {
  return (
    <div
      className="bg-gradient-to-r from-secondary to-primary rounded-xl p-10 text-white relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Dentist"
    >
      <meta itemProp="name" content="The Dentist - Multi-speciality Dental Hospital" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-pattern-contact"></div>

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <i className="fas fa-certificate text-primary mr-3 text-xl" aria-hidden="true"></i>
          <div>
            <h4 className="text-lg font-semibold">ISO 9001:2015 Certified</h4>
            <p className="text-white/80">Quality Management System</p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <i className="fas fa-map-marker-alt text-2xl mt-1 mr-4" aria-hidden="true"></i>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h4 className="text-lg font-semibold mb-1">Our Location</h4>
            <p>
              <span itemProp="streetAddress">
                1st Floor, Commercial Space, Shashikalp Classic Building
                <br />
                Opposite Garden City, Samarvani
              </span>
              , <span itemProp="addressLocality">Silvassa</span> - <span itemProp="postalCode">396230</span>
              <br />
              <span itemProp="addressRegion">Dadra & nagar Haveli</span>, <span itemProp="addressCountry">INDIA</span>
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <i className="fas fa-phone-alt text-2xl mt-1 mr-4" aria-hidden="true"></i>
          <div>
            <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
            <p>
              <a href="tel:0260-2631900" className="hover:underline" itemProp="telephone">
                0260-2631900
              </a>
            </p>
            <p>
              <a href="tel:9824144700" className="hover:underline" itemProp="telephone">
                9824144700
              </a>
            </p>
            <p>
              <a href="tel:9727644700" className="hover:underline" itemProp="telephone">
                9727644700
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <i className="fas fa-envelope text-2xl mt-1 mr-4" aria-hidden="true"></i>
          <div>
            <h4 className="text-lg font-semibold mb-1">Email Address</h4>
            <p itemProp="email">contact@thedentistsilvassa.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <i className="fas fa-clock text-2xl mt-1 mr-4" aria-hidden="true"></i>
          <div>
            <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
            <div itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <meta itemProp="dayOfWeek" content="Monday Tuesday Wednesday Thursday Friday Saturday" />
              <meta itemProp="opens" content="10:00" />
              <meta itemProp="closes" content="21:00" />
              <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
            </div>
            <div itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <meta itemProp="dayOfWeek" content="Sunday" />
              <meta itemProp="opens" content="10:00" />
              <meta itemProp="closes" content="18:00" />
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
