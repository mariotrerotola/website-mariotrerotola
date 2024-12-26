"use client"
import { useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { it } from '../locales/it'
import { en } from '../locales/en'

export default function Navbar({
  language,
  setLanguage,
  activeSection
}: {
  language: 'it' | 'en',
  setLanguage: (lang: 'it' | 'en') => void,
  activeSection: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const content = language === 'it' ? it : en
  type SectionKey = 'about' | 'experience' | 'education' | 'skills' | 'projects' | 'contact';

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'it' ? 'en' : 'it')
  }, [language, setLanguage])

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="black" />
                <path d="M10 30V10H16L20 22L24 10H30V30H25V17L20 30L15 17V30H10Z" fill="white" />
                <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5" stroke="white" strokeWidth="2" />
              </svg>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['about', 'experience', 'education', 'skills', 'projects', 'contact'].map((section: SectionKey) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative ${activeSection === section ? 'text-white' : ''
                    }`}
                >
                  {content.nav[section]}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                  )}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {language === 'it' ? 'EN' : 'IT'}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['about', 'experience', 'education', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium relative ${activeSection === section ? 'text-white' : ''
                  }`}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                {content.nav[section]}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

