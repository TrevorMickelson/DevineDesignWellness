'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/content/site-content'

export default function Footer() {
  const content = siteContent.footer

  return (
    <footer className="bg-black/90 backdrop-blur-md text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src="/favicon.png"
                  alt={siteContent.header.logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{content.brand.title}</h3>
              <p className="text-sm text-gray-300">{content.brand.tagline}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{content.quickLinks.title}</h4>
            <ul className="space-y-2">
              {content.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{content.contactInfo.title}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-gray-300"></i>
                <span className="text-sm text-gray-300">
                  {content.contactInfo.address.lines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < content.contactInfo.address.lines.length - 1 && <br/>}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-gray-300"></i>
                <a 
                  href={`tel:${content.contactInfo.phone.replace(/\D/g,'')}`} 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {content.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-clock text-gray-300"></i>
                <span className="text-sm text-gray-300">
                  {content.contactInfo.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{content.connect.title}</h4>
            <p className="text-sm text-gray-300 mb-4">
              {content.connect.description}
            </p>
            <div className="flex space-x-4">
              {content.connect.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target={link.target}
                  rel={link.rel}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {link.platform === 'Facebook' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <p className="text-sm text-gray-300">
              {content.legal.copyright.replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {content.legal.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 