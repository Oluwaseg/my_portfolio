import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { Code, ExternalLink, Github, Palette, Server } from 'lucide-react';
import React, { useMemo, useState } from 'react';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    category: 'Full Stack',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    liveLink: 'https://ecommerce-platform-demo.com',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my work',
    category: 'Frontend',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/yourusername/portfolio-website',
    liveLink: 'https://yourportfolio.com',
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'RESTful API for a task management application',
    category: 'Backend',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/yourusername/task-management-api',
    liveLink: 'https://api-docs-task-management.com',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

const ProjectCard: React.FC<{ project: (typeof projects)[0] }> = ({
  project,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className='h-full'
  >
    <Card className='overflow-hidden h-full flex flex-col group bg-white dark:bg-gray-800 shadow-custom'>
      <div className='relative overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-primary-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <div className='space-x-4'>
            <Button variant='secondary' size='sm' asChild>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary-50 text-primary-900 hover:bg-primary-100'
              >
                <Github className='mr-2 h-4 w-4' /> GitHub
              </a>
            </Button>
            <Button variant='secondary' size='sm' asChild>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary-50 text-primary-900 hover:bg-primary-100'
              >
                <ExternalLink className='mr-2 h-4 w-4' /> Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
      <CardContent className='flex-grow p-6'>
        <h3 className='text-2xl font-bold mb-2 text-gray-900 dark:text-gray-50'>
          {project.title}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant='secondary'
              className='bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200'
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id='projects' className='py-20 bg-primary-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className='flex justify-center mb-12'>
          <div className='inline-flex bg-white dark:bg-gray-800 rounded-full p-2 shadow-custom'>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'ghost'}
                size='sm'
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category === 'Full Stack' ? (
                  <Code className='h-4 w-4 mr-2' />
                ) : category === 'Frontend' ? (
                  <Palette className='h-4 w-4 mr-2' />
                ) : category === 'Backend' ? (
                  <Server className='h-4 w-4 mr-2' />
                ) : null}
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
