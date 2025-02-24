import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import projects from '../data/projects.json';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
  };
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
      className='bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] 
        transition-all duration-300 border border-gray-700 hover:border-blue-500'
    >
      <div className='relative h-48 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10' />
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute bottom-4 left-4 z-20'>
          <span className='px-3 py-1 bg-blue-500 text-sm font-medium rounded-full text-white'>
            {project.category}
          </span>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-semibold text-white mb-2'>
          {project.title}
        </h3>
        <p className='text-gray-400 mb-4'>{project.description}</p>

        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded-md'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex space-x-4'>
          <a
            href={project.githubLink}
            className='flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github className='w-5 h-5' />
            <span>Code</span>
          </a>
          <a
            href={project.liveLink}
            className='flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200'
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
  return (
    <>
      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='container mx-auto px-4 py-20 relative overflow-hidden'
      >
        {/* Background Accent */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-10' />

        <div className='text-center mb-16 relative z-10'>
          <h2 className='text-4xl font-bold mb-4'>Featured Projects</h2>
          <div className='w-20 h-1 bg-blue-500 mx-auto rounded-full' />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Project;
