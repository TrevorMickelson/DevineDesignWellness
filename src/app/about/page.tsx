'use client'

import Image from 'next/image'
import { siteContent } from '@/content/site-content'

export default function About() {
  return (
    <main className="about-page pt-16">
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Divine Design Wellness</h1>
          <p className="text-xl text-white">Excellence in Integrative Healthcare</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="welcome-content space-y-6">
              <p className="text-lg">
                At Divine Design Wellness, we are committed to redefining healthcare through an integrative approach that harmoniously combines advanced medical science with personalized attention. Our state-of-the-art wellness center serves as a sanctuary where cutting-edge treatments meet compassionate care.
              </p>
              
              <p className="text-lg">
                Under the leadership of our board-certified medical professionals, we deliver evidence-based treatments tailored to your unique health profile. Our approach focuses on identifying and addressing root causes rather than just managing symptoms, ensuring sustainable health outcomes.
              </p>
              
              <p className="text-lg font-semibold mt-8">What distinguishes our practice:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive Health Assessment & Monitoring</li>
                <li>Advanced Diagnostic Technologies</li>
                <li>Integrative Treatment Protocols</li>
                <li>Board-Certified Medical Team</li>
                <li>Evidence-Based Therapeutic Approaches</li>
              </ul>
              
              <p className="text-lg mt-8">
                Our expertise spans hormone optimization, regenerative medicine, aesthetic treatments, and wellness therapies. We leverage the latest medical advancements while maintaining a patient-centered approach, ensuring that each treatment plan is as unique as the individual it serves.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                alt="Divine Design Wellness Facility"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 