import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, GraduationCap } from 'lucide-react';
import React from 'react';
import ThreeDBackground from './3D/ThreeDBackground';

const education = [
  {
    degree: 'Bachelor of Science (BSc)',
    institution: 'Bangabashi Morning College',
    year: '2018 - 2021',
    description:
      'Graduated with a strong foundation in critical thinking and problem-solving.',
    icon: <GraduationCap className='w-8 h-8 text-primary-400' />,
  },
  {
    degree: 'Higher Secondary (11th-12th)',
    institution: 'Adarsh Madhyamik Vidhyalaya',
    year: '2016 - 2018',
    description:
      'Completed higher secondary education with a focus on science and mathematics.',
    icon: <GraduationCap className='w-8 h-8 text-primary-400' />,
  },
  {
    degree: 'Secondary (10th)',
    institution: 'A.R.N.C Vidhyalya',
    year: '2016',
    description:
      'Completed secondary education with distinction in core subjects.',
    icon: <GraduationCap className='w-8 h-8 text-primary-400' />,
  },
];

const experience = [
  {
    role: 'Founder & Developer',
    company: 'Webelite Builders',
    year: '2024 - Present',
    description:
      'Founded a digital marketing and web development agency, delivering tailored solutions.',
    icon: <Briefcase className='w-8 h-8 text-primary-400' />,
  },
  {
    role: 'MERN Stack Developer (Intern)',
    company: 'Company Name',
    year: '2023',
    description:
      'Developed and optimized MERN stack applications, enhancing user experience.',
    icon: <Briefcase className='w-8 h-8 text-primary-400' />,
  },
];

const MotionCard = motion(Card);

const Education: React.FC = () => {
  return (
    <section
      id='education'
      className='relative bg-primary-50 dark:bg-gray-800 blur-0 py-24 px-6 overflow-hidden min-h-screen'
    >
      <div className='absolute inset-0 -z-10'>
        <ThreeDBackground type='edu' />
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.h2
          className='text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-16'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Experience
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Education section */}
          <div>
            <motion.h3
              className='text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Education
            </motion.h3>
            {education.map((edu, index) => (
              <MotionCard
                key={index}
                className='mb-6 bg-white dark:bg-gray-800 border border-primary-200 dark:border-primary-700 overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <CardContent className='p-6'>
                  <div className='flex items-start'>
                    <div className='mr-4 mt-1'>{edu.icon}</div>
                    <div>
                      <h4 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
                        {edu.degree}
                      </h4>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {edu.institution}
                      </p>
                      <Badge
                        variant='secondary'
                        className='mt-2 mb-2 bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200'
                      >
                        {edu.year}
                      </Badge>
                      <p className='text-gray-600 dark:text-gray-400 mt-2'>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            ))}
          </div>
          {/* Experience Section */}
          <div>
            <motion.h3
              className='text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-8'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience
            </motion.h3>
            {experience.map((exp, index) => (
              <MotionCard
                key={index}
                className='mb-6 bg-white dark:bg-gray-800 border border-primary-200 dark:border-primary-700 overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.03 }}
              >
                <CardContent className='p-6'>
                  <div className='flex items-start'>
                    <div className='mr-4 mt-1'>{exp.icon}</div>
                    <div>
                      <h4 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
                        {exp.role}
                      </h4>
                      <p className='text-gray-700 dark:text-gray-300'>
                        {exp.company}
                      </p>
                      <Badge
                        variant='secondary'
                        className='mt-2 mb-2 bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200'
                      >
                        {exp.year}
                      </Badge>
                      <p className='text-gray-600 dark:text-gray-400 mt-2'>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>
        <motion.div
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button className='bg-primary-500 hover:bg-primary-600 text-white'>
            View Full Resume <ChevronRight className='ml-2 h-4 w-4' />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
