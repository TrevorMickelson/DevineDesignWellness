'use client'

import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function Services() {
  const content = siteContent.services

  // Add the price comparison data
  const hrtComparisonData = {
    title: "SAMPLE - TESTOSTERONE PELLET VS INJECTABLE CASH COMPARISON CHART",
    treatments: [
      {
        name: "Pellet Therapy (male @ five months)",
        price: "$725.00",
        monthly: "$145.00",
        yearly: "$1,812.50",
        annualSavings: "$287.50"
      },
      {
        name: "Testosterone Injection (Clinic)",
        price: "$70.00",
        monthly: "$280.00",
        yearly: "$3,360.00",
        annualSavings: "$1,547.50"
      },
      {
        name: "Testosterone Injection (Take Home)",
        price: "$175.00",
        monthly: "$175.00",
        yearly: "$2,100.00",
        annualSavings: null
      }
    ]
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">{content.hero.subtitle}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {content.servicesList.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    {service.comingSoon && (
                      <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full whitespace-nowrap">
                        Coming {service.availableDate}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  {/* Add price comparison chart for BHRT service */}
                  {service.id === 'bhrt' && (
                    <div className="mt-8 mb-12">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                        {hrtComparisonData.title}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Treatment Type</th>
                              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Price</th>
                              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Monthly</th>
                              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Yearly</th>
                              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Annual Savings</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {hrtComparisonData.treatments.map((treatment, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{treatment.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-right">{treatment.price}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-right">{treatment.monthly}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-right">{treatment.yearly}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-right">
                                  {treatment.annualSavings ? treatment.annualSavings : '-'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                    {service.link && (
                      <div className="flex flex-col gap-4">
                        <Link 
                          href={service.link}
                          target="_blank"
                          className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-12"
                        >
                          <i className="fas fa-link text-xl"></i>
                          <span>Click to view</span>
                        </Link>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 