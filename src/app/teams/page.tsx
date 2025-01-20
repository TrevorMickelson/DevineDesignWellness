'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

const teamMembers = [
  {
    name: 'Olivia',
    role: 'Practice Manager',
    description: 'Ensuring exceptional patient care and smooth operations.',
    image: '/assets/Olivia.JPEG',
    link: '/team-members/olivia'
  },
  {
    name: 'Kelly',
    role: 'Nurse Practitioner',
    description: 'Specialized in hormone optimization and personalized wellness plans.',
    image: '/assets/Kelly.JPEG',
    link: '/team-members/kelly'
  }
]

export default function Teams() {
  const content = siteContent.teams

  return (
    <main className="pt-16">
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-xl text-white">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <Link 
                href={member.link} 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full pt-[120%] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.name === 'Olivia' ? 'object-[50%_30%] scale-[1.0]' : 'object-[50%_25%] scale-[1.2]'} transition-transform duration-500`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center relative">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <h4 className="text-lg text-blue-600 font-medium mb-3">{member.role}</h4>
                  <p className="text-gray-600 min-h-[48px]">{member.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 