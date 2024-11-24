'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Pet Connect Website',
    description: 'A platform connecting pet enthusiasts through unique profiles and dynamic timelines.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'WATCHDOG',
    description: 'Server monitoring web app ensuring optimal server performance.',
    technologies: ['Python', 'Flask', 'Docker'],
    link: '#',
  },
  {
    title: 'VR-Based Food Supply System Management Post Flood',
    description: 'Revolutionizing post-disaster resource allocation using VR technology.',
    technologies: ['Unity', 'C#', 'VR'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-primary font-sans"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-background px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block bg-accent text-background px-4 py-2 rounded hover:bg-secondary transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

