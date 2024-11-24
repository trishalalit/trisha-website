'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-light text-white mb-16 relative inline-block"
    >
      {title}
      <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#ff4d4d]" />
    </motion.h2>
  )
}
