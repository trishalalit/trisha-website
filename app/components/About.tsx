'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

const technologies = [
  { name: 'HTML', icon: '/icons/html5.svg' },
  { name: 'CSS', icon: '/icons/css3.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express.js', icon: '/icons/express.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Java', icon: null },
  { name: 'C/C++', icon: null },
  { name: 'Python', icon: null },
  { name: 'R', icon: null },
  { name: 'MATLAB', icon: null },
  { name: 'MySQL', icon: null },
  { name: 'Oracle SQL', icon: null },
  { name: 'PostgreSQL', icon: null },
  { name: 'T-SQL', icon: null },
  { name: 'Snowflake', icon: null },
  { name: 'DBT', icon: null },
  { name: 'ETL', icon: null },
  { name: 'Data Pipelines', icon: null },
  { name: 'Tableau', icon: null },
  { name: 'Microsoft Power BI', icon: null },
  { name: 'AWS QuickSight', icon: null },
  { name: 'AWS Redshift', icon: null },
  { name: 'Data Lakes', icon: null },
  { name: 'ServiceNow', icon: null },
  { name: 'Jira', icon: null },
  { name: 'GitHub', icon: null },
  { name: 'Kanban', icon: null },
  { name: 'Alteryx', icon: null },
  { name: 'KNIME', icon: null },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <SectionTitle title="About" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff4d4d] to-[#457B9D] p-1">
                  <div className="rounded-full overflow-hidden w-full h-full">
                    <Image
                      src="/trisha.jpg"
                      alt="Trisha Lalit"
                      width={256}
                      height={256}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                I am currently pursuing a Master's in Computer Science at Boston University, with a strong foundation in data science, AI, and software engineering. My professional journey spans impactful roles in research and industry, where I've led innovative projects and delivered measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white/60">
                  <span className="text-[#ff4d4d] mr-2">📍</span>
                  Boston, MA
                </div>
                <div className="flex items-center text-white/60">
                  <span className="text-[#ff4d4d] mr-2">📧</span>
                  <a href="mailto:trishala@bu.edu" className="hover:text-[#ff4d4d] transition-colors">
                    trishala@bu.edu
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 md:grid-cols-4 gap-4"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d4d] to-[#457B9D] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-[#1a1a1a] p-4 rounded-lg border border-white/10">
                   
                    <p className="text-center text-white/60 text-sm mt-2">{tech.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
