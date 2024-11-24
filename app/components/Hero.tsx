'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import NetworkBackground from './NetworkBackground'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      <NetworkBackground />
      <div className="relative z-10 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light text-white"
        >
          Hello, I&apos;m{' '}
          <span className="text-[#ff4d4d]">Trisha</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light text-white/90"
        >
          I&apos;m a Data Scientist & Software Engineer.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#about"
            className="inline-block mt-8 px-8 py-3 border-2 border-[#ff4d4d] text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white transition-colors duration-300 rounded-md text-lg group"
          >
            Learn about me{' '}
            <span className="inline-block transform group-hover:translate-y-1 transition-transform duration-200">↓</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

