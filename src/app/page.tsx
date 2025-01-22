import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/content/site-content'

export default function Home() {
  const content = siteContent.home

  return (
    <main className="min-h-screen pt-24">
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
        <div className="absolute top-0 left-0 w-1/2 h-full md:block hidden">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
            alt="Divine Design Wellness"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            <div className="relative min-h-[50vh] md:h-auto block md:hidden -mx-6">
              <Image
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
                alt="Divine Design Wellness"
                fill
                className="object-cover"
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
                <p className="text-lg text-slate-600 mb-8 text-center leading-relaxed">
                  {content.about.mainText}
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
                    {service.comingSoon && (
                      <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                        Coming {service.availableDate}
                      </span>
                    )}
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
                    {product.comingSoon && (
                      <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                        Coming {product.availableDate}
                      </span>
                    )}
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
                    <a 
                      href={`tel:${content.contact.phone.number.replace(/\D/g,'')}`} 
                      className="text-lg text-gray-700 hover:text-blue-600 transition-colors leading-relaxed inline-block"
                    >
                      {content.contact.phone.number}
                    </a>
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