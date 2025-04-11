import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import { seoConfig } from "./seo-config"

// SEO metadata
export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  authors: [{ name: seoConfig.businessInfo.name }],
  creator: seoConfig.businessInfo.name,
  publisher: seoConfig.businessInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(seoConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: seoConfig.socialMedia.image,
        width: 1200,
        height: 630,
        alt: seoConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    images: [seoConfig.socialMedia.image],
    creator: seoConfig.socialMedia.twitterHandle,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { businessInfo } = seoConfig

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Calendly widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/td-logo.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}

        {/* Structured data for dental practice */}
        <Script
          id="dental-practice-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: businessInfo.name,
              image: `${seoConfig.siteUrl}/images/logo-2.png`,
              "@id": seoConfig.siteUrl,
              url: seoConfig.siteUrl,
              telephone: businessInfo.telephone,
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: businessInfo.address.streetAddress,
                addressLocality: businessInfo.address.addressLocality,
                postalCode: businessInfo.address.postalCode,
                addressRegion: businessInfo.address.addressRegion,
                addressCountry: businessInfo.address.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 20.2705,
                longitude: 73.0183,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: businessInfo.openingHours.weekdays.days,
                  opens: businessInfo.openingHours.weekdays.opens,
                  closes: businessInfo.openingHours.weekdays.closes,
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: businessInfo.openingHours.sunday.opens,
                  closes: businessInfo.openingHours.sunday.closes,
                },
              ],
              sameAs: [
                businessInfo.socialProfiles.facebook,
                businessInfo.socialProfiles.instagram,
                businessInfo.socialProfiles.twitter,
                businessInfo.socialProfiles.linkedin,
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dental Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "General Dentistry",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Dental Check-ups",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Teeth Cleaning",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Cosmetic Dentistry",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Teeth Whitening",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Dental Veneers",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Dental Implants",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Full Mouth Implant Rehabilitation",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />

        {/* Calendly widget scripts */}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

        {/* Calendly initialization script */}
        <Script id="calendly-init" strategy="lazyOnload">
          {`
            (function() {
              function initCalendly() {
                if (window.Calendly) {
                  window.Calendly.initBadgeWidget({
                    url: 'https://calendly.com/contact-thedentistsilvassa/new-meeting',
                    text: 'Book Appointment',
                    color: '#02aced',
                    textColor: '#ffffff'
                  });
                  console.log("Calendly initialized from script");
                } else {
                  console.log("Calendly not available yet, retrying...");
                  setTimeout(initCalendly, 1000);
                }
              }
              
              if (document.readyState === 'complete') {
                initCalendly();
              } else {
                window.addEventListener('load', initCalendly);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}


import './globals.css'