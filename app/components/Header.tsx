'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'About', href: '#about' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20)
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-white/70 hover:text-[#ff4d4d] transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

