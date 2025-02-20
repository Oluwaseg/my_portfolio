import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import projects from '@/data/projects.json';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Code,
  ExternalLink,
  Github,
  Layers,
  Palette,
  Server,
} from 'lucide-react';
import React, { useMemo, useState } from 'react';

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
    <Card className='overflow-hidden h-full flex flex-col group bg-white/0 backdrop-blur-lg shadow-custom'>
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
      <CardContent className='flex-grow p-6  '>
        <h3 className='text-2xl font-bold mb-2 text-gray-50'>
          {project.title}
        </h3>
        <p className='text-gray-100 mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant='secondary'
              className='bg-gray-100/5 text-white hover:bg-white/0 hover:text-primary-600 hover:border-primary-600 px-2 py-1'
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Layers className='h-4 w-4 mr-2' />;
      case 'Frontend':
        return <Palette className='h-4 w-4 mr-2' />;
      case 'Backend':
        return <Server className='h-4 w-4 mr-2' />;
      default:
        return <Code className='h-4 w-4 mr-2' />;
    }
  };

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className='flex justify-center mb-12'>
          <div className='inline-flex flex-wrap justify-center bg-white/5 rounded-full p-2'>
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === category ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 sm:px-6 py-2 m-1 sm:m-2 transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'text-gray-100 hover:bg-gray-100 '
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span className='hidden sm:inline'>{category}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence mode='sync'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
