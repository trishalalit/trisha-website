'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Research Assistant',
    company: 'Boston University',
    duration: 'Sep 2023 - Present',
    description: [
      'Conducting research in data science and AI',
      'Collaborating with faculty on cutting-edge projects',
    ],
  },
  {
    title: 'Software Engineer - Data Analyst',
    company: 'Accenture',
    duration: 'Aug 2021 - Aug 2023',
    description: [
      'Enhanced predictive accuracy by 30%',
      'Contributed to an estimated business value of $250 million',
    ],
  },
  {
    title: 'Business Analyst',
    company: 'Intellipaat',
    duration: 'Jan 2021 - Jul 2021',
    description: [
      'Analyzed business processes and recommended improvements',
      'Developed data-driven insights for decision-making',
    ],
  },
  {
    title: 'Intern',
    company: 'DRDO',
    duration: 'May 2020 - Jul 2020',
    description: [
      'Assisted in research and development projects',
      'Gained hands-on experience in defense technology',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-primary font-sans"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-secondary pl-4"
            >
              <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
              <p className="text-secondary">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-text">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

