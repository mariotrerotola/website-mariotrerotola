import { motion } from 'framer-motion'
import { it } from '../locales/it'
import { en } from '../locales/en'

export default function Skills({ language, id }: { language: 'it' | 'en', id: string }) {
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-extrabold text-center mb-12 title-serif"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {content.skills.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.skills.categories.map((skillCategory, index) => (
            <motion.div 
              key={index} 
              className="border border-gray-700 rounded-lg p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 title-serif">{skillCategory.category}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

