'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import projects from '../data/projects.json';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className='bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] 
        transition-all duration-300 border border-gray-700 hover:border-blue-500 shadow-lg'
    >
      <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10' />
        <img
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute bottom-4 left-4 z-20'>
          <span className='px-3 py-1 bg-blue-500 text-xs font-semibold tracking-wide uppercase rounded-full text-white'>
            {project.category}
          </span>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-bold text-white mb-2 leading-tight'>
          {project.title}
        </h3>
        <p className='text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-md'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex space-x-4'>
          <a
            href={project.githubLink}
            className='flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github className='w-5 h-5' />
            <span>Code</span>
          </a>
          <a
            href={project.liveLink}
            className='flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ExternalLink className='w-5 h-5' />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  useEffect(() => {
    setFilteredProjects(
      activeTab === 'All'
        ? projects
        : projects.filter((project) => project.category === activeTab)
    );
  }, [activeTab]);

  return (
    <div className='container mx-auto px-4 py-20 relative overflow-hidden'>
      {/* Background Accent */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[228px] opacity-10' />

      <div className='text-center mb-16 relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-5xl font-extrabold mb-4 tracking-tight'
        >
          My Projects
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='w-20 h-1 bg-blue-500 mx-auto rounded-full mb-12'
        />

        {/* Tabs */}
        <div className='relative mb-8 overflow-x-auto'>
          <div className='flex justify-start items-center space-x-2 md:space-x-4 px-4 md:px-0 py-2 w-max mx-auto'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm md:text-base font-semibold whitespace-nowrap rounded-full transition-colors duration-200 ${
                  activeTab === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          layout
          className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Project;
