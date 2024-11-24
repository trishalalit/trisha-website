'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['Java', 'C/C++', 'Python', 'R', 'HTML/CSS', 'JavaScript', 'MATLAB'],
  },
  {
    name: 'Frameworks & Technologies',
    skills: ['MySQL', 'Oracle SQL', 'PostgreSQL', 'T-SQL', 'Snowflake', 'DBT', 'ETL', 'Data Pipelines'],
  },
  {
    name: 'Data Visualization & BI Tools',
    skills: ['Tableau', 'Microsoft Power BI', 'AWS QuickSight'],
  },
  {
    name: 'Cloud & Big Data',
    skills: ['AWS Redshift', 'Data Lakes'],
  },
  {
    name: 'Other Tools',
    skills: ['ServiceNow', 'Jira', 'Git', 'GitHub', 'Kanban', 'Alteryx', 'KNIME'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-primary font-sans"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">{category.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-background text-text px-3 py-1 rounded-full text-sm hover:bg-secondary hover:text-background transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

