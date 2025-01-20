'use client'

import { useState } from 'react'
import Image from 'next/image'
import { siteContent } from '@/content/site-content'

export default function Contact() {
  const content = siteContent.contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

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
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{content.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {content.form.fields.name.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={content.form.fields.name.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {content.form.fields.phone.label}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={content.form.fields.phone.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.form.fields.email.placeholder}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content.form.fields.message.placeholder}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  {content.form.submitButton}
                </button>
              </form>
            </div>

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
                        className="text-gray-700 hover:text-blue-600 transition-colors inline-block"
                      >
                        {content.info.phone.number}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="#booking"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book an Appointment
                    </a>
                    <a 
                      href={`tel:${content.info.phone.number.replace(/\D/g,'')}`}
                      className="block w-full bg-gray-50 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      Call Us Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[300px] rounded-lg overflow-hidden shadow-lg">
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
        </div>
      </section>
    </main>
  )
} 