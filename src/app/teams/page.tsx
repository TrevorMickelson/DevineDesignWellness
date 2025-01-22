'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function Teams() {
  const content = siteContent.teams

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-xl text-white">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Team Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {content.teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100"
              >
                <div className="relative w-full pt-[120%] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.name === 'Olivia' ? 'object-[50%_30%] scale-[1.0]' : 'object-[50%_25%] scale-[1.2]'} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                    <h4 className="text-lg text-blue-600 font-medium mb-4">{member.role}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                    <Link 
                      href="/contact#booking"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow"
                    >
                      Book Appointment
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowered Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.empoweredTeam.title}</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {content.empoweredTeam.members.map((member, index) => (
              <a 
                key={index}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 