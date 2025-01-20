'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function FAQ() {
  const content = siteContent.faq
  const [openCategories, setOpenCategories] = useState<number[]>([0]) // First category open by default
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({
    'What if I\'ve had breast cancer?': true // First question open by default
  })

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }))
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

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {content.categories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                  <span className="transform transition-transform duration-200">
                    <i className={`fas fa-chevron-down ${openCategories.includes(categoryIndex) ? 'rotate-180' : ''}`}></i>
                  </span>
                </button>
                
                {openCategories.includes(categoryIndex) && (
                  <div className="divide-y divide-gray-200">
                    {category.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="border-t border-gray-200">
                        <button
                          onClick={() => toggleQuestion(item.question)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-medium text-gray-900 text-left">{item.question}</h3>
                          <span className="transform transition-transform duration-200">
                            <i className={`fas fa-chevron-down ${openQuestions[item.question] ? 'rotate-180' : ''}`}></i>
                          </span>
                        </button>
                        
                        {openQuestions[item.question] && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 prose max-w-none">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">{content.cta.text}</p>
            <Link
              href={content.cta.link}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {content.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 