'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function FAQ() {
  const content = siteContent.faq
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({
    'What is EvexiPEL?': true // First question open by default
  })

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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {content.questions.map((item, questionIndex) => (
                <div key={questionIndex} className="border-t first:border-t-0">
                  <button
                    onClick={() => toggleQuestion(item.question)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h2 className="text-lg font-medium text-gray-900 text-left">{item.question}</h2>
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