import Image from 'next/image'
import { motion } from 'framer-motion'
import { it } from '../locales/it'
import { en } from '../locales/en'

export default function About({ language, id }: { language: 'it' | 'en'; id: string }) {
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
          {content.about.title}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/profile-image.png"
              alt="Mario Trerotola"
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </motion.div>
          <div className="flex-grow">
            <div className="text-xl text-gray-300 space-y-4">
              {content.about.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

