'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { siteContent } from '@/content/site-content'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const content = siteContent.header

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-36">
          <Link href="/" className="flex items-center mt-2">
            <div className="relative w-52 h-52">
              <Image
                src="/favicon.png"
                alt={content.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {content.navigation.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-200 ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {content.navigation.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
} 