import { motion } from 'framer-motion'
import { it } from '../locales/it'
import { en } from '../locales/en'

export default function Hero({ language }: { language: 'it' | 'en' }) {
  const content = language === 'it' ? it : en

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 title-serif"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {content.hero.title}
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {content.hero.subtitle}
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.a 
          href="#contact"
          className="border border-white text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-white hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content.hero.cta}
        </motion.a>
        <motion.a 
          href={language === 'it' ? '/CV_Mario_Trerotola_IT.pdf' : '/CV_Mario_Trerotola_EN.pdf'}
          download
          className="bg-white text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content.hero.downloadCV}
        </motion.a>
      </motion.div>
    </div>
  )
}

