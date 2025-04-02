'use client'

import { siteContent } from '@/content/site-content'

export default function Contact() {
  const content = siteContent.contact

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-xl text-white">{content.hero.subtitle}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 pt-1">
                      <i className="fas fa-map-marker-alt text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{content.info.location.title}</h3>
                      <p className="text-gray-700">
                        {content.info.location.address.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 pt-1">
                      <i className="fas fa-phone text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{content.info.phone.title}</h3>
                      <a 
                        href={`tel:${content.info.phone.number.replace(/\D/g,'')}`}
                        className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <i className="fas fa-phone-alt mr-2"></i>
                        <span>Call or Text: {content.info.phone.number}</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <a 
                      href="#booking"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book an Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[400px] w-full rounded-lg overflow-hidden shadow-lg relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.9555466662837!2d-97.58549792439566!3d33.23421617262332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d8555555555555%3A0x555555555555555!2s117%20W%20Main%20St%2C%20Decatur%2C%20TX%2076234!5e0!3m2!1sen!2sus!4v1699392547906!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 