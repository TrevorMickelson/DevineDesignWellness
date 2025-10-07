'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function Teams() {
  const content = siteContent.teams

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-black mt-16">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.hero.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Team Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {content.teamMembers.map((member, index) => (
              <article 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover object-[55%_2%]`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="text-center border-b border-gray-100 pb-6 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                    <h3 className="text-xl text-blue-600">{member.role}</h3>
                  </div>
                  
                  {/* Bio Sections */}
                  <div className="space-y-8 text-gray-600">
                    {member.name === "Kelly" && (
                      <>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Education & Early Career</h4>
                          <p className="leading-relaxed">
                            Kelly completed her undergraduate studies at Texas Christian University (Go Frogs!) with a bachelor of science in nursing in 2011. As an RN, she worked at Parkland hospital in the Burn ICU for several years, then moved over to the Fort Worth side and worked at Harris Methodist Ft Worth in the Trauma ICU and then finished her time as an RN at Cook Childrens in the Cardiac ICU/PICU.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Journey</h4>
                          <p className="leading-relaxed mb-4">
                            During her time at Cook Childrens, she started her Masters of Science in Nursing. During her graduate program, God had bigger plans and she welcomed her first son, Noah, into the world- 6 weeks early. She became a patient in her own job space (being a NICU mom on the other side definitely gives some new perspective!) and wrote many papers from the NICU while Noah was there for 6 weeks.
                          </p>
                          <p className="leading-relaxed">
                            Not but 18 months later, she welcomed her second son, Logan, into the world (God does have a sense of humor!). This pregnancy came with hospital bedrest after 22 weeks until he was born at 35 weeks- so obviously school had to go on hold and momming a 1 year old when you're stuck in the hospital- was HARD but thank God for family that brought Noah to visit almost daily. Logan was also a NICU baby and we got to spend a month at Cooks again.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Development</h4>
                          <p className="leading-relaxed mb-4">
                            Finally, in 2017, she completed her Masters of Science in Nursing and passed her national boards to become a Family Nurse Practitioner.
                          </p>
                          <p className="leading-relaxed">
                            The first job offer came from her womens health/OBGYN preceptor, Dr Edwards, and she hoped on it- not knowing a thing about womens health, other than she had delivered her own 2 babies and had suffered postpartum depression greatly. She developed a love for womens health and pregnant mommas and babies but always leaned on the more holistic route for care. This love drove her to yet again, go back to school and get her post-graduate certification to be a Certified Nurse Midwife (CNM). Since then, her love for holistic wellness and primary care for an individual person has always thrived.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Community Involvement</h4>
                          <p className="leading-relaxed">
                            Kelly also runs a special group for moms of stillborn children/infant loss- called Still Hopeful, that meets in Decatur. She has always had a heart for these mamas and has a story dear to her heart that likely motivates why she feels so passionate about bringing this group together to link hands together through that journey.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Note</h4>
                          <p className="leading-relaxed">
                            Outside of being and NP/CNM, she finds her main identity in being a Jesus loving mama and enjoys running and baking sourdough. God is so good and leads every interaction she has with her patients, so she is so excited to meet you!
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Specialties */}
                  {member.specialties && member.specialties.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                    <Link 
                      href="/contact#booking"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Schedule a Consultation
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Empowered Team Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.empoweredTeam.title}</h2>
            <p className="text-gray-600">Meet our extended team of wellness professionals dedicated to your comprehensive care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.empoweredTeam.members.map((member, index) => (
              member.link === '#' ? (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="relative w-full pt-[100%]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ) : (
                <a 
                  key={index}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                >
                  <div className="relative w-full pt-[100%]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 text-sm">{member.role}</p>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 