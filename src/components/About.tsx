import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import RotatingCube from './RotatingCube';

const skills = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Redux',
  'Node.js',
  'GitHub',
  'TypeScript',
  'MongoDB',
  'Express.js',
  'WordPress',
  'SEO',
  'GraphQL',
  'Docker',
  'AWS',
  'Jest',
];

const About: React.FC = () => {
  return (
    <section
      id='about'
      className='py-20 bg-primary-50 dark:bg-gray-800 text-gray-300'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-16 text-center text-primary-400'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className='flex flex-col lg:flex-row gap-20 items-center'>
          <motion.div
            className='relative w-64 h-64 lg:w-96 lg:h-96'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute inset-0 bg-primary-500 rounded-full blur-md'></div>
            <Avatar className='w-full h-full border-4 border-primary-400'>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='Samuel Oluwasegun'
              />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
            <motion.div
              className='absolute -bottom-20 -right-20'
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RotatingCube />
            </motion.div>
          </motion.div>
          <motion.div
            className='flex-1'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='bg-primary-300 border-primary-700'>
              <CardContent className='p-6'>
                <motion.p
                  className='text-lg leading-7 mb-6'
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
                  className='text-lg leading-7 mb-6'
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
                  className='text-lg leading-7 mb-8'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Let's connect and build something amazing together!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <h3 className='font-bold text-2xl mb-4 text-primary-400'>
                    My Skills
                  </h3>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Badge
                          variant='secondary'
                          className='bg-gray-700 text-primary-300 hover:bg-primary-700'
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className='flex gap-4'>
                    <Button className='bg-primary-500 hover:bg-primary-600'>
                      Contact <ChevronRight className='ml-2 h-4 w-4' />
                    </Button>
                    <Button
                      variant='outline'
                      className='border-primary-500 text-primary-400 hover:bg-primary-900'
                    >
                      Resume <ChevronRight className='ml-2 h-4 w-4' />
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
