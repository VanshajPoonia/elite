"use client"

import React from "react"
import Image from "next/image"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Wrench,
  Truck,
  Car,
  PowerCircle as Motorcycle,
  AlertTriangle,
  Star,
  Users,
  Award,
  Menu,
  X,
  Mail,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [currentStatIndex, setCurrentStatIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const fullText = "FAST & RELIABLE ROADSIDE ASSISTANCE AND TOWING SERVICE"
  const stats = [
    { number: "24/7", label: "Emergency Service", icon: Clock },
    { number: "500+", label: "Vehicles Recovered", icon: Truck },
    { number: "5★", label: "Customer Rating", icon: Star },
    { number: "10+", label: "Years Experience", icon: Award },
  ]

  useEffect(() => {
    setIsVisible(true)

    let index = 0
    const typewriterInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typewriterInterval)
      }
    }, 50)

    const statsInterval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length)
    }, 2000)

    return () => {
      clearInterval(typewriterInterval)
      clearInterval(statsInterval)
    }
  }, [])

  const services = [
    {
      title: "LIGHT-DUTY TOWING",
      description: "Cars, SUVs, and small trucks up to 10,000 lbs",
      icon: Car,
    },
    {
      title: "MEDIUM-DUTY TOWING",
      description: "Box trucks, RVs, and commercial vehicles",
      icon: Truck,
    },
    {
      title: "ROADSIDE ASSISTANCE",
      description: "Tire changing, jump starting, and emergency roadside support",
      icon: Wrench,
    },
    {
      title: "FLATBED TOWING",
      description: "Safe transport for luxury and damaged vehicles",
      icon: Truck,
    },
    {
      title: "HIGH END VEHICLE TRANSPORT",
      description: "Specialized transport for luxury and exotic vehicles",
      icon: Car,
    },
    {
      title: "EQUIPMENT AND MATERIALS HAULING",
      description: "Construction equipment and machinery transport",
      icon: Wrench,
    },
    {
      title: "MOTORCYCLE TOWING",
      description: "Specialized equipment for motorcycle transport",
      icon: Motorcycle,
    },
    {
      title: "LONG DISTANCE TOWING",
      description: "Interstate and cross-country vehicle transport",
      icon: MapPin,
    },
    {
      title: "ACCIDENT RECOVERY",
      description: "24/7 emergency accident scene cleanup",
      icon: AlertTriangle,
    },
    {
      title: "WINCH OUTS",
      description: "Vehicle recovery from ditches and difficult terrain",
      icon: Shield,
    },
  ]

  const locations = [
    { city: "Arnold", state: "MO", phone: "314-599-7558", address: "1190 Missouri State Rd Arnold, MO 63010" },
    { city: "Catawissa", state: "MO", phone: "314-599-7558", address: "1055 Strothmann Road Catawissa MO 63015" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background border-b border-primary">
        <div className="bg-primary/10 border-b border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 py-2">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-foreground">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="font-semibold">314-599-7558</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span>info@elitetowing.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-primary font-semibold">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/elite-logo.png" alt="Elite Towing Logo" className="h-16 sm:h-20 lg:h-24 w-auto" />
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-bold">
                HOME
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-bold">
                ABOUT
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-bold">
                SERVICES
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-bold">
                CONTACT
              </a>
            </nav>

            <div className="hidden lg:flex items-center space-x-2 text-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">314-599-7558</span>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
              <nav className="flex flex-col space-y-4 pt-4">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a
                  href="#services"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVICES
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
                <div className="flex items-center space-x-2 text-foreground pt-2 border-t border-primary/20">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">314-599-7558</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-primary rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full animate-bounce"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
          <div className="bg-black flex items-center relative order-2 lg:order-1">
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary animate-pulse"></div>

            <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12 w-full">
              <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                <div className="mb-6 sm:mb-8">
                  <div className="text-primary text-xs sm:text-sm font-bold tracking-widest mb-2 animate-fade-in">
                    ⚡ EMERGENCY TOWING SERVICES
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-white min-h-[120px] sm:min-h-[160px] lg:min-h-[200px]">
                    <span className="inline-block">
                      {typewriterText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </h2>
                </div>

                <div className="mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <h3 className="text-white text-sm sm:text-base font-bold mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    SERVICE LOCATIONS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {locations.map((location, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="text-primary font-bold text-sm sm:text-base mb-1">
                          {location.city}, {location.state}
                        </div>
                        <div className="text-white text-xs sm:text-sm font-semibold mb-1">{location.phone}</div>
                        <div className="text-white/70 text-xs">{location.address}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p
                    className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Available 24/7 for all your towing needs. Elite Towing is your trusted partner for professional,
                    affordable roadside assistance and emergency towing services.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                    Call Now
                  </Button>

                  <div
                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-white/70 text-xs sm:text-sm animate-fade-in-up"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Licensed & Insured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
            <div className="w-full h-full flex items-center justify-center bg-black">
              <Image
                src="/images/image.jpeg"
                alt="Welcome to Elite Towing - Professional towing services"
                width={800}
                height={800}
                className="w-[80%] h-[80%] object-contain"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none">
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <div className="bg-primary/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
                  <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                    {React.createElement(stats[currentStatIndex].icon, { className: "h-4 w-4 sm:h-6 sm:w-6" })}
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">{stats[currentStatIndex].number}</div>
                      <div className="text-xs sm:text-sm opacity-90">{stats[currentStatIndex].label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Service Locations</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve Arnold, Catawissa, and surrounding areas in Missouri with 24/7 towing and roadside
              assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 sm:p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {location.city}, {location.state}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm sm:text-base">{location.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm sm:text-base font-semibold">{location.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mt-8">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h4 className="font-bold text-foreground">Arnold Location</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.8!2d-90.3763!3d38.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8ca7d6e8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s1190%20Missouri%20State%20Rd%2C%20Arnold%2C%20MO%2063010!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h4 className="font-bold text-foreground">Catawissa Location</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.2!2d-90.4821!3d38.3847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d1e8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2s1055%20Strothmann%20Rd%2C%20Catawissa%2C%20MO%2063015!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base lg:text-lg text-foreground mb-8 max-w-4xl mx-auto px-4">
              From cars and trucks to motorcycles and specialty vehicles, we can handle all of your towing needs. Our
              services include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-primary text-primary-foreground p-4 sm:p-6 flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[200px] hover:bg-primary/90 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3 sm:mb-4">
                  {React.createElement(service.icon, { className: "h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" })}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold leading-tight mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4"
            >
              VIEW ALL SERVICES
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative min-h-[50vh] lg:min-h-full">
            <img src="/images/image.png" alt="Elite Towing service truck" className="w-full h-full object-cover" />
          </div>
          <div className="bg-black flex items-center">
            <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-8 sm:space-y-12 w-full">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-primary text-primary-foreground p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">ABOUT US</h3>
                </div>
                <div className="bg-primary text-primary-foreground p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">We Treat Your Vehicle Like Our Own</h3>
                </div>
                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                  At Elite Towing, we understand that your vehicle is more than just transportation; it's an investment.
                  That's why we treat every vehicle with the care and respect it deserves. Our experienced drivers are
                  committed to providing safe and efficient towing services.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start space-x-3">
                    <div className="bg-primary p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">Fair pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-primary p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">24/7 emergency response available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-primary p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">Professional and courteous staff</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-primary p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">Fully insured and licensed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-primary p-1 rounded-full mt-1">
                      <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">Modern equipment and vehicles</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="bg-black flex items-center order-2 lg:order-1">
            <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-primary text-primary-foreground p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">What Our Customers Say</h2>
                </div>
                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                  Join thousands of satisfied customers who trust Elite Towing
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm mb-2">
                      Elite Towing saved me when my car broke down on the highway at night. They arrived within 30
                      minutes and the driver was professional and courteous. Highly recommended!
                    </p>
                    <span className="text-white/80 text-xs sm:text-sm font-semibold">Sarah Martinez</span>
                  </div>

                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm mb-2">
                      Best towing service in the area. Fair prices, quick response time, and excellent customer service.
                      Used them twice and will definitely use again.
                    </p>
                    <span className="text-white/80 text-xs sm:text-sm font-semibold">John Anderson</span>
                  </div>

                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm mb-2">
                      Had a minor accident and Elite Towing handled everything perfectly. The team was compassionate and
                      made a stressful situation much easier to deal with.
                    </p>
                    <span className="text-white/80 text-xs sm:text-sm font-semibold">Maria Garcia</span>
                  </div>

                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm mb-2">
                      Professional drivers and well-maintained trucks. They treated my vintage car with the utmost care
                      during transport. Worth every penny!
                    </p>
                    <span className="text-white/80 text-xs sm:text-sm font-semibold">Robert Chen</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  CALL NOW
                </Button>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
            <img
              src="/images/image.jpeg"
              alt="Elite Towing professional service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Need towing services? Contact us today for fast, reliable assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-card border-2 border-primary p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-primary mb-2">314-599-7558</p>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
            </div>

            <div className="bg-card border-2 border-primary p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-lg font-bold text-primary mb-2">info@elitetowing.com</p>
              <p className="text-sm text-muted-foreground">We'll respond promptly</p>
            </div>

            <div className="bg-card border-2 border-primary p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Serving</h3>
              <p className="text-lg font-bold text-primary mb-2">Arnold & Catawissa, MO</p>
              <p className="text-sm text-muted-foreground">And surrounding areas</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Request Service</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Select a service</option>
                    <option>Light-Duty Towing</option>
                    <option>Medium-Duty Towing</option>
                    <option>Roadside Assistance</option>
                    <option>Flatbed Towing</option>
                    <option>High End Vehicle Transport</option>
                    <option>Equipment and Materials Hauling</option>
                    <option>Motorcycle Towing</option>
                    <option>Long Distance Towing</option>
                    <option>Accident Recovery</option>
                    <option>Winch Outs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your towing needs..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <div className="rounded-lg overflow-hidden shadow-lg border-4 border-primary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50043.45!2d-90.3763!3d38.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI2JzA5LjAiTiA5MMKwMjInMzQuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/images/elite-logo.png" alt="Elite Towing Logo" className="h-16 w-auto brightness-0 invert" />
              </div>
              <p className="text-white/70 text-sm">Professional towing and roadside assistance available 24/7.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#locations" className="text-white/70 hover:text-primary transition-colors">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2 text-white/70">
                  <Phone className="h-4 w-4" />
                  <span>314-599-7558</span>
                </li>
                <li className="flex items-center space-x-2 text-white/70">
                  <Mail className="h-4 w-4" />
                  <span>info@elitetowing.com</span>
                </li>
                <li className="flex items-center space-x-2 text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span>Arnold & Catawissa, MO</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.072 4.947c-.06 1.277-.256 2.149-.558 2.913-.306.789-.718 1.459-1.384 2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2025 Elite Towing. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
