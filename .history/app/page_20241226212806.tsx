"use client"

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Education from '../components/Education'
import LoadingScreen from '../components/LoadingScreen'
import CustomParticleBackground from '../components/CustomParticleBackground'
import { useActiveSection } from '../hooks/useActiveSection'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [language, setLanguage] = useState<'it' | 'en'>('it')
  const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact']
  const activeSection = useActiveSection(sections)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <div
        className="min-h-screen bg-black text-white relative overflow-hidden"
      >
        <CustomParticleBackground />
        <div className="relative z-10">
          <Navbar language={language} setLanguage={setLanguage} activeSection={activeSection} />
          <Hero language={language} />
          <About id="about" language={language} />
          <Experience id="experience" language={language} />
          <Education id="education" language={language} />
          <Skills id="skills" language={language} />
          <Projects id="projects" language={language} />
          <Contact id="contact" language={language} />
        </div>
      </div>
    </>
  )
}

