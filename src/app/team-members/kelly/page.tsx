import Image from 'next/image'
import Link from 'next/link'
import { siteContent } from '@/content/site-content'

export default function KellyPage() {
  const member = siteContent.teams.teamMembers[0] // Kelly's info

  return (
    <main className="pt-16">
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white text-center mb-2">{member.name}</h1>
          <p className="text-xl text-blue-400 text-center">{member.role}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/assets/kelly-hero.JPEG"
                    alt={member.name}
                    fill
                    className="object-cover object-[55%_2%]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="text-center">
                  <Link 
                    href="/contact#booking"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Book Appointment
                  </Link>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialties</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {member.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">
                          <i className="fas fa-check-circle"></i>
                        </span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 