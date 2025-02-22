import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import React from 'react';
import ThreeDBackground from './3D/ThreeDBackground';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Framer Motion',
  'Three.js',
  'SEO',
  'WordPress',
];

const About: React.FC = () => {
  return (
    <section id='about' className='relative py-20 min-h-screen overflow-hidden'>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <ThreeDBackground type='hero' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.h2
          className='text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
          <motion.div
            className='relative w-64 h-64 lg:w-96 lg:h-96 flex-shrink-0'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-lg'></div>
            <Avatar className='w-full h-full border-4 border-white dark:border-gray-800 shadow-xl'>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='Samuel Oluwasegun'
              />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
            <motion.div
              className='absolute -bottom-20 -right-20 z-10'
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThreeDBackground type='cube' width={200} height={200} />
            </motion.div>
          </motion.div>
          <motion.div
            className='flex-1 space-y-8'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='bg-white/5 dark:bg-gray-800/80 backdrop-blur-0 border-primary-700  shadow-md'>
              <CardContent className='p-6 space-y-6'>
                <motion.p
                  className='text-lg leading-relaxed text-gray-100 font-semibold'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Hi! I'm Samuel Oluwasegun, a passionate Full-Stack Developer
                  with expertise in the MERN stack, WordPress, and SEO. With a
                  strong foundation in modern web development, I focus on
                  creating elegant, user-friendly web solutions tailored to
                  client needs.
                </motion.p>
                <motion.p
                  className='text-lg leading-relaxed text-gray-100 font-semibold'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  My journey into tech began from a non-IT background, and I've
                  embraced every challenge to hone my skills in development,
                  problem-solving, and teamwork. I'm always eager to learn and
                  explore new technologies to deliver cutting-edge web
                  experiences.
                </motion.p>
                <motion.p
                  className='text-lg leading-relaxed text-gray-100 font-semibold'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Let's connect and build something amazing together!
                </motion.p>
              </CardContent>
            </Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='space-y-6'
            >
              <h3 className='font-bold text-3xl mb-4 text-primary-600 dark:text-primary-400'>
                My Skills
              </h3>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge
                      variant='secondary'
                      className='cursor-pointer text-sm py-1 px-3 bg-gray-100/5 text-white hover:text-primary-600 hover:bg-white/0 hover:border hover:border-primary-600 transition-colors duration-200'
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <div className='flex gap-4 pt-4'>
                <Button className='font-semibold text-md bg-primary-500/5 hover:bg-gray-100/5 hover:text-primary-600 text-white shadow-md hover:shadow-lg transition-all duration-200'>
                  Contact <ChevronRight className='ml-2 h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  className=' text-gray-50 bg-gray-50/2 transition-all duration-200'
                >
                  Resume <Download className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
