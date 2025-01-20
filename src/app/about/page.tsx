'use client'

import Image from 'next/image'
import { siteContent } from '@/content/site-content'

export default function About() {
  const content = siteContent.about

  return (
    <main className="about-page pt-16">
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">About Divine Design Wellness</h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">Excellence in Integrative Healthcare</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                alt="Divine Design Wellness Facility"
                fill
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {content.mainText}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
                <ul className="space-y-3">
                  {content.values.map((value, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 