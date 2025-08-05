'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'Food Delievary Application',
    description:
      'A full-stack food delivery application where users can browse pizzas, filter by category, add items to cart, and place orders. Built using Next.js, MongoDB, and Tailwind CSS, with secure authentication, dynamic routing, and responsive UI.Tech Stack: Next.js, React, MongoDB, Tailwind CSS, JWT, Bcrypt, Axios',
    image: '/images/projects/4.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/rajat7014/Pizza-hub',
    previewUrl: 'https://pizza-hub-dzg1.vercel.app/',
  },
  {
    id: 2,
    title: 'Social Media Application',
    description:
      'A minimal Instagram-inspired app with login, post viewing, and redirection features. Focused on backend functionality using Next.js, MongoDB, and JWT authentication.',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description:
      'A modern online shopping platform with product listings, category filters, cart functionality, and secure user authentication. Built using Next.js, MongoDB, and Tailwind CSS.',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Our Portfolio',
    description:
      'A clean, responsive portfolio showcasing my projects, skills, and contact information. Built with HTML, CSS, JavaScript, and enhanced using Next.js for dynamic routing and modern performance.',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Netflix Clone',
    description:
      'A sleek clone of Netflix with sign-in functionality, dynamic movie pages, and a responsive design. Frontend built with React/Next.js, backend with MongoDB and API integration.',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  // {
  //   id: 6,
  //   title: 'Full-stack Roadmap',
  //   description: 'Project 5 description',
  //   image: '/images/projects/6.png',
  //   tag: ['All', 'Web'],
  //   gitUrl: '/',
  //   previewUrl: '/',
  // },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        /> */}
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
