'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'
import { useState, useEffect } from 'react'

export default function Nutraceuticals() {
  const content = siteContent.nutraceuticals
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-xl text-white">{content.hero.subtitle}</p>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-50 rounded-2xl shadow-lg">
            <div className="w-64 h-64 relative bg-white p-4 rounded-xl shadow-md border-2 border-blue-100">
              <Image
                src="/assets/nutra_qr_code.png"
                alt="Scan to order nutraceuticals"
                width={256}
                height={256}
                className="object-contain"
                priority
                onError={(e) => {
                  console.error('QR Code image failed to load at path:', '/assets/nutra_qr_code.png');
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('QR Code image loaded successfully');
                }}
              />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Order</h2>
              <p className="text-xl text-gray-600 mb-6">
                Access our complete nutraceutical catalog and place your order:
              </p>
              <div className="flex flex-col gap-4">
                <Link 
                  href="https://fullscript.com/wellevate/devine-design-wellness"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <i className="fas fa-link text-xl"></i>
                  <span>{isMobile ? 'Tap here' : 'Click here'} to order now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">{content.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team can help you select the right supplements for your wellness goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 