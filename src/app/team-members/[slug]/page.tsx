'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'

const teamMembers = {
  'sarah-johnson': {
    name: 'Dr. Sarah Johnson',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    description: `
      Board Certified in Internal Medicine with over 15 years of experience in functional and integrative medicine. 
      Dr. Johnson leads our medical team with a focus on comprehensive wellness and preventive care.
    `,
    specialties: [
      'Hormone Optimization',
      'Functional Medicine',
      'Preventive Care',
      'Anti-Aging Medicine'
    ],
    education: [
      'Medical Doctorate - Johns Hopkins University',
      'Residency - Mayo Clinic',
      'Board Certification - American Board of Internal Medicine'
    ]
  },
  'michael-chen': {
    name: 'Dr. Michael Chen',
    role: 'Wellness Specialist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d',
    description: `
      Specializing in hormone optimization and regenerative medicine with a focus on holistic wellness approaches.
      Dr. Chen brings innovative treatment protocols and extensive research experience to our practice.
    `,
    specialties: [
      'Regenerative Medicine',
      'Hormone Therapy',
      'Nutritional Medicine',
      'Integrative Health'
    ],
    education: [
      'Medical Doctorate - Stanford University',
      'Fellowship - Harvard Medical School',
      'Certification - Institute for Functional Medicine'
    ]
  },
  'amanda-martinez': {
    name: 'Amanda Martinez',
    role: 'Nurse Practitioner',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
    description: `
      Expert in IV therapy and aesthetic treatments with a passion for helping patients achieve their wellness goals.
      Amanda specializes in creating personalized treatment plans that combine medical expertise with aesthetic excellence.
    `,
    specialties: [
      'IV Therapy',
      'Aesthetic Treatments',
      'Weight Management',
      'Wellness Coaching'
    ],
    education: [
      'Master of Science in Nursing - University of Pennsylvania',
      'Advanced Practice Certification',
      'Aesthetic Medicine Certification'
    ]
  },
  'emily-parker': {
    name: 'Dr. Emily Parker',
    role: 'Nutrition Specialist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
    description: `
      Dedicated to creating personalized nutrition plans and helping patients achieve optimal health through dietary excellence.
      Dr. Parker combines clinical nutrition with functional medicine approaches.
    `,
    specialties: [
      'Clinical Nutrition',
      'Metabolic Health',
      'Food Sensitivity Testing',
      'Dietary Planning'
    ],
    education: [
      'Ph.D. in Clinical Nutrition - Columbia University',
      'Certified Nutrition Specialist',
      'Functional Medicine Practitioner'
    ]
  },
  'james-wilson': {
    name: 'Dr. James Wilson',
    role: 'Physical Medicine Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    description: `
      Expert in physical medicine and rehabilitation, focusing on non-surgical treatments and pain management.
      Dr. Wilson specializes in integrative approaches to musculoskeletal health.
    `,
    specialties: [
      'Physical Medicine',
      'Pain Management',
      'Rehabilitation',
      'Sports Medicine'
    ],
    education: [
      'Medical Doctorate - UCLA',
      'Residency in Physical Medicine',
      'Sports Medicine Fellowship'
    ]
  },
  'rachel-thompson': {
    name: 'Rachel Thompson',
    role: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    description: `
      Certified wellness coach specializing in lifestyle modification and stress management techniques.
      Rachel helps patients develop sustainable health habits and achieve their wellness goals.
    `,
    specialties: [
      'Lifestyle Coaching',
      'Stress Management',
      'Behavioral Change',
      'Wellness Planning'
    ],
    education: [
      'Master\'s in Health Psychology',
      'Certified Health Coach',
      'Mindfulness-Based Stress Reduction Instructor'
    ]
  }
}

export default function TeamMemberPage() {
  const params = useParams()
  const slug = params.slug as string
  const member = teamMembers[slug as keyof typeof teamMembers]

  if (!member) {
    notFound()
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
            alt="Team header background"
            fill
            className="object-cover mix-blend-overlay opacity-50"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-8">
              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{member.name}</h1>
            <div className="inline-block bg-blue-600 px-6 py-2 rounded-full">
              <p className="text-lg text-white font-medium">{member.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-blue-600 mr-3">
                  <i className="fas fa-user-md text-2xl"></i>
                </span>
                About {member.name.split(' ')[0]}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{member.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Specialties Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-600 mr-3">
                    <i className="fas fa-star text-2xl"></i>
                  </span>
                  Specialties
                </h3>
                <ul className="space-y-4">
                  {member.specialties.map((specialty, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <span className="text-lg text-gray-700">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-blue-600 mr-3">
                    <i className="fas fa-graduation-cap text-2xl"></i>
                  </span>
                  Education & Certifications
                </h3>
                <ul className="space-y-4">
                  {member.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">
                        <i className="fas fa-award"></i>
                      </span>
                      <span className="text-lg text-gray-700">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <a 
                href="/contact#booking" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-calendar-alt mr-3"></i>
                Schedule with {member.name.split(' ')[0]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 