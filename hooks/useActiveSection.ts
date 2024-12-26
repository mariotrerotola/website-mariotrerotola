import { useState, useEffect } from 'react'

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = sections.map(section => {
      const element = document.getElementById(section)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      return observer
    }).filter(Boolean)

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [sections])

  return activeSection
}

