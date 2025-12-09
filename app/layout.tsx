import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title:
    "Elite Towing Missouri | #1 Tow Truck Service St Louis, Arnold, Catawissa MO | 24/7 Emergency Towing 314-599-7558",
  description:
    "Top-rated tow truck service in Missouri! Elite Towing provides 24/7 emergency towing, roadside assistance & vehicle recovery in St Louis, Arnold, Catawissa & surrounding MO areas. Licensed, insured & trusted by customers. Fast response, fair pricing. Call 314-599-7558 now!",
  keywords:
    "Elite Towing, tow truck Missouri, towing service St Louis, emergency towing Missouri, tow truck Arnold MO, towing Catawissa MO, roadside assistance Missouri, accident recovery St Louis, heavy duty towing Missouri, flatbed towing St Louis, 24/7 towing Missouri, tow truck near me Missouri, vehicle recovery St Louis, Missouri towing company, St Louis tow truck, Arnold towing service, Catawissa tow truck, Missouri roadside assistance, emergency tow truck St Louis, professional towing Missouri, licensed tow truck Missouri, insured towing service St Louis, affordable towing Missouri, reliable tow truck St Louis, fast towing Missouri, tow truck driver Missouri, vehicle transport St Louis, motorcycle towing Missouri, luxury car towing St Louis, commercial towing Missouri, Elite Towing Recovery, Missouri towing, St Louis towing, Arnold tow service, Catawissa towing",
  authors: [{ name: "Elite Towing" }],
  creator: "KreativVantage",
  publisher: "Elite Towing",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
  themeColor: "#DC143C",
  alternates: {
    canonical: "https://elitetowing.com",
  },
  verification: {
    google: "Elite-Towing-Verification",
  },
  openGraph: {
    title: "Elite Towing Missouri | #1 Tow Truck Service St Louis & Arnold MO | 24/7 Emergency",
    description:
      "Missouri's most trusted tow truck service! 24/7 emergency towing in St Louis, Arnold, Catawissa & surrounding areas. Licensed & insured with satisfied customers. Fair pricing, fast response. Call 314-599-7558 for immediate assistance!",
    type: "website",
    locale: "en_US",
    url: "https://elitetowing.com",
    siteName: "Elite Towing Missouri",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Elite Towing - Missouri's Premier Tow Truck Service",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Towing Missouri | #1 Tow Truck Service St Louis & Arnold MO",
    description:
      "Missouri's most trusted tow truck service! 24/7 emergency towing in St Louis, Arnold, Catawissa. Licensed & insured. Call 314-599-7558",
    images: ["/images/image.png"],
    creator: "@EliteTowing",
  },
  generator: "v0.app",
  applicationName: "Elite Towing",
  referrer: "origin-when-cross-origin",
  category: "Towing Services",
  classification: "Business",
  other: {
    "geo.region": "US-MO",
    "geo.placename": "Arnold, Missouri",
    "geo.position": "38.4494377;-90.4126701",
    ICBM: "38.4494377, -90.4126701",
    "business:contact_data:street_address": "1190 Missouri State Rd",
    "business:contact_data:locality": "Arnold",
    "business:contact_data:region": "MO",
    "business:contact_data:postal_code": "63010",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": "314-599-7558",
    "business:contact_data:email": "info@elitetowing.com",
    "og:type": "business.business",
    "og:phone_number": "+1-314-599-7558",
    "og:email": "info@elitetowing.com",
    "og:fax_number": "+1-314-599-7558",
    "article:published_time": new Date().toISOString(),
    "article:modified_time": new Date().toISOString(),
    "article:author": "Elite Towing",
    "article:section": "Towing Services",
    "article:tag": "Missouri Towing, St Louis Towing, Emergency Services, Roadside Assistance, Arnold MO, Catawissa MO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/images/image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/image.png" />
        <link rel="shortcut icon" href="/images/image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <meta name="language" content="en-US" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#DC143C" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://elitetowing.com",
              name: "Elite Towing",
              alternateName: "Elite Towing Missouri",
              description:
                "Professional 24/7 tow truck and roadside assistance services in Missouri, serving St Louis, Arnold, Catawissa and surrounding areas.",
              url: "https://elitetowing.com",
              telephone: "314-599-7558",
              email: "info@elitetowing.com",
              priceRange: "$$",
              image: "/images/image.png",
              logo: "/images/image.png",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "1190 Missouri State Rd",
                  addressLocality: "Arnold",
                  addressRegion: "MO",
                  postalCode: "63010",
                  addressCountry: "US",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "1055 Strothmann Road",
                  addressLocality: "Catawissa",
                  addressRegion: "MO",
                  postalCode: "63015",
                  addressCountry: "US",
                },
              ],
              geo: [
                {
                  "@type": "GeoCoordinates",
                  latitude: 38.4494377,
                  longitude: -90.4126701,
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Arnold",
                  containedInPlace: {
                    "@type": "State",
                    name: "Missouri",
                  },
                },
                {
                  "@type": "City",
                  name: "Catawissa",
                  containedInPlace: {
                    "@type": "State",
                    name: "Missouri",
                  },
                },
                {
                  "@type": "City",
                  name: "St Louis",
                  containedInPlace: {
                    "@type": "State",
                    name: "Missouri",
                  },
                },
                {
                  "@type": "State",
                  name: "Missouri",
                },
              ],
              serviceType: [
                "Tow Truck Service",
                "Emergency Towing",
                "Roadside Assistance",
                "Vehicle Recovery",
                "Accident Recovery",
                "Heavy Duty Towing",
                "Flatbed Towing",
                "Motorcycle Towing",
              ],
              openingHours: "Mo-Su 00:00-23:59",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Towing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Emergency Towing",
                      description: "24/7 emergency tow truck services in Missouri",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Roadside Assistance",
                      description:
                        "Professional roadside assistance and vehicle recovery in St Louis, Arnold, and Catawissa areas",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sarah Martinez",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Elite Towing saved me when my car broke down on the highway at night. They arrived within 30 minutes and the driver was professional and courteous. Highly recommended!",
                },
              ],
              sameAs: ["https://elitetowing.com"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-314-599-7558",
                  contactType: "Customer Service",
                  areaServed: "US-MO",
                  availableLanguage: ["en"],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elite Towing",
              url: "https://elitetowing.com",
              logo: "/images/image.png",
              description:
                "Professional towing and roadside assistance services in Missouri including St Louis, Arnold, and Catawissa",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "314-599-7558",
                email: "info@elitetowing.com",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
