'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function Nutraceuticals() {
  const content = siteContent.nutraceuticals

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-xl text-white">{content.hero.subtitle}</p>
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
                  <Link
                    href="/contact"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Inquire About This Product
                  </Link>
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