'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/content/site-content'
import { useEffect, useState } from 'react'

export default function Home() {
  const content = siteContent.home
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === content.reviews.testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [content.reviews.testimonials.length])

  return (
    <main className="min-h-screen pt-24">
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
        <div className="absolute top-0 left-0 w-1/2 h-[calc(100vh-6rem)] md:block hidden">
          <Image
            src="/assets/Kelly_And_Olivia_1.JPEG"
            alt="Divine Design Wellness"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-6rem)]">
            <div className="relative min-h-[50vh] md:h-auto block md:hidden -mx-6">
              <Image
                src="/assets/Kelly_And_Olivia_1.JPEG"
                alt="Divine Design Wellness"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="hidden md:block" aria-hidden="true"></div>
            <div className="flex flex-col justify-center items-center h-full md:pl-16 lg:pl-24 py-12 md:py-0">
              <div className="max-w-lg w-full">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 text-center">{content.hero.title}</h1>
                <p className="text-xl text-slate-600 mb-6 text-center">
                  {content.hero.description}
                </p>
                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
                  >
                    {content.hero.ctaButton}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            {content.reviews.title}
          </h2>
          <div className="max-w-4xl mx-auto mt-12 relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {content.reviews.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-6"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                      <p className="text-blue-600 font-semibold">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {content.reviews.testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    index === currentTestimonialIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.about.title}</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                {content.about.description}
              </p>
              <Link 
                href={content.about.ctaLink}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {content.about.ctaButton}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.services.title}</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              {content.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.services.featured.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {content.services.viewAllText}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Nutraceuticals Section */}
      <section className="py-24 bg-white" id="nutraceuticals">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.nutraceuticals.title}</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              {content.nutraceuticals.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.nutraceuticals.featured.map((product, index) => (
              <Link 
                key={index}
                href={product.link}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/nutraceuticals"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {content.nutraceuticals.viewAllText}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hormone Therapy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">{content.hormoneTherapy.title}</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">{content.hormoneTherapy.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {content.hormoneTherapy.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href={content.hormoneTherapy.ctaLink}
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {content.hormoneTherapy.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="team">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{content.team.title}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            {content.team.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {content.team.teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-96">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/teams"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              {content.team.viewMoreText}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{content.faq.title}</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            {content.faq.subtitle}
          </p>
          <div className="max-w-3xl mx-auto">
            {content.faq.featuredQuestions.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-all hover:shadow-xl"
              >
                <Link href={item.link} className="block p-6 hover:bg-gray-50">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </Link>
              </div>
            ))}
            <div className="text-center mt-8">
              <Link 
                href="/faq"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                {content.faq.viewAllText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="text-blue-600 pt-1">
                    <i className="fas fa-map-marker-alt text-3xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-3">{content.contact.location.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {content.contact.location.address.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="text-blue-600 pt-1">
                    <i className="fas fa-phone text-3xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-3">{content.contact.phone.title}</h3>
                    <div className="flex flex-col space-y-2">
                      <a 
                        href={`tel:${content.contact.phone.number.replace(/\D/g,'')}`}
                        className="inline-flex items-center text-lg text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <i className="fas fa-phone-alt mr-2"></i>
                        <span>Call or Text: {content.contact.phone.number}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 pt-6">
                  <Link 
                    href="/contact#booking"
                    className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                  >
                    {content.contact.ctaButton}
                  </Link>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-50 text-gray-700 text-center py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.9555466662837!2d-97.58549792439566!3d33.23421617262332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d8555555555555%3A0x555555555555555!2s100%20W%20Walnut%20St%2C%20Decatur%2C%20TX%2076234!5e0!3m2!1sen!2sus!4v1699392547906!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 