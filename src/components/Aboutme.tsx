import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Terminal } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

function SkillBar({ name, color }: { name: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 
        transition-all duration-300 group'
    >
      <div className='flex items-center space-x-3'>
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span className='text-gray-300 group-hover:text-white transition-colors duration-300'>
          {name}
        </span>
      </div>
    </motion.div>
  );
}

function TechCard({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className='bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors duration-300
        border border-gray-700 hover:border-blue-500 group'
    >
      <Icon className='w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300' />
      <h3 className='text-lg font-medium text-gray-200'>{title}</h3>
    </motion.div>
  );
}

const Aboutme = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className='container mx-auto px-4 py-10 relative'
    >
      {/* Background Accent */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-10' />

      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold mb-4'>About Me</h2>
        <div className='w-20 h-1 bg-blue-500 mx-auto rounded-full' />
      </div>

      <div className='grid lg:grid-cols-2 gap-16 items-start'>
        {/* Left Column - Bio and Skills */}
        <div className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='prose prose-invert'
          >
            <p className='text-lg text-gray-300 leading-relaxed'>
              With over 8 years of experience in software development, I
              specialize in building high-performance web applications and
              scalable backend systems...
            </p>
            <p className='text-lg text-gray-300 leading-relaxed mt-4'>
              I'm constantly learning and exploring new technologies...
            </p>
          </motion.div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Core Competencies</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <SkillBar name='Frontend Development' color='bg-blue-500' />
              <SkillBar name='Backend Development' color='bg-purple-500' />
              <SkillBar name='Cloud Architecture' color='bg-cyan-500' />
              <SkillBar name='DevOps & CI/CD' color='bg-green-500' />
              <SkillBar name='System Design' color='bg-yellow-500' />
              <SkillBar name='API Development' color='bg-red-500' />
            </div>
          </div>
        </div>

        {/* Right Column - Tech Stack */}
        <div className='space-y-8'>
          <h3 className='text-2xl font-semibold'>Tech Stack</h3>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
            <TechCard icon={Terminal} title='Frontend Development' />
            <TechCard icon={Database} title='Backend Systems' />
            <TechCard icon={Globe} title='Cloud Services' />
            <TechCard icon={Cpu} title='DevOps' />
          </div>

          {/* Experience Highlights */}
          <div className='mt-12 space-y-6'>
            <h3 className='text-2xl font-semibold'>Experience Highlights</h3>
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='bg-gray-800 p-6 rounded-xl border border-gray-700'
              >
                <h4 className='text-xl font-medium text-blue-400'>
                  Lead Developer
                </h4>
                <p className='text-gray-400 mt-2'>
                  Led a team of 5 developers in building enterprise-scale
                  applications using React, Node.js, and AWS.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='bg-gray-800 p-6 rounded-xl border border-gray-700'
              >
                <h4 className='text-xl font-medium text-purple-400'>
                  System Architect
                </h4>
                <p className='text-gray-400 mt-2'>
                  Designed and implemented microservices architecture serving
                  millions of users.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
