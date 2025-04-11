import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HomePage from "@/components/HomePage"
import DoctorsPage from "@/components/DoctorsPage"
import ServicesPage from "@/components/ServicesPage"
import ContactPage from "@/components/ContactPage"
import BackToTop from "@/components/BackToTop"
import CalendlyWidget from "@/components/CalendlyWidget"
import ClientSEOWrapper from "@/components/ClientSEOWrapper"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientSEOWrapper />
      <Header />
      <HomePage />
      <DoctorsPage />
      <ServicesPage />
      <ContactPage />
      <Footer />
      <BackToTop />
      <CalendlyWidget />
    </main>
  )
}
