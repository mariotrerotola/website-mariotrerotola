import { motion } from 'framer-motion'
import { it } from '../locales/it'
import { en } from '../locales/en'

export default function Education({ language, id }: { language: 'it' | 'en'; id: string }) {
  const content = language === 'it' ? it : en

  return (
    <motion.section 
      id={id}
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-extrabold text-center mb-12 title-serif"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {content.education.title}
        </motion.h2>
        <div className="space-y-12">
          {content.education.degrees.map((edu, index) => (
            <motion.div 
              key={index} 
              className="border-l-2 border-gray-700 pl-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-1 title-serif">{edu.degree}</h3>
              <p className="text-xl text-gray-400 mb-2">{edu.institution}</p>
              <p className="text-gray-500 mb-2">{edu.period} | {edu.location}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {Array.isArray(edu.description) ? (
                  edu.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))
                ) : (
                  <li>{edu.description}</li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

