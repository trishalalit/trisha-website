'use client'

import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Boston University',
    duration: 'Sep 2023 - May 2025',
    courses: ['Data Mining', 'Machine Learning', 'Analytics', 'OS'],
  },
  {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    institution: 'SRM Institute',
    duration: 'Jul 2017 - Jul 2021',
    courses: ['Web Development', 'Database Management Systems'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-primary font-sans"
        >
          Education
        </motion.h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-accent pl-4"
            >
              <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
              <p className="text-secondary">{edu.institution}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
              <p className="text-text">Key Courses: {edu.courses.join(', ')}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

