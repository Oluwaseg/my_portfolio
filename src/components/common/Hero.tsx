import { Button } from '@/components/ui/button';
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Github, Hand, Linkedin, Twitter } from 'lucide-react';
import React, { useEffect } from 'react';
import { useTypewriter } from '../../hook/useTypewriter';
import ThreeDBackground from '../3D/ThreeDBackground';

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'React Specialist',
  'Node.js Expert',
  'UI/UX Enthusiast',
];

const Hero: React.FC = () => {
  const currentRole = useTypewriter(roles, 100, 50, 2000);
  const descriptionControls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const intervalId = setInterval(() => {
      descriptionControls.start({
        opacity: 1,
        scale: [1, 1.02, 1],
        transition: { duration: 2, ease: 'easeInOut' },
      });
    }, 3500);

    return () => clearInterval(intervalId);
  }, [descriptionControls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.1);
    mouseY.set((e.clientY - centerY) * 0.1);
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-24 p-2'>
      <ThreeDBackground type='hero' />
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left'
          >
            <h1 className='text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
              Hi <Hand className='inline-block animate-wave' />, I'm{' '}
              <motion.span
                className='text-primary-600 dark:text-primary-400'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Samuel Oluwasegun
              </motion.span>
            </h1>
            <motion.p
              className='text-xl lg:text-2xl mb-4 text-gray-700 dark:text-gray-300 min-h-[2.5rem]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {currentRole}
            </motion.p>
            <motion.p
              className='text-base lg:text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'
              initial={{ opacity: 0 }}
              animate={descriptionControls}
              transition={{ duration: 0.5, delay: 1.5 }}
              style={{ zIndex: 10 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              voluptas maxime, sit, nulla unde explicabo ex obcaecati minima
              vero aperiam eos, corporis consequatur facere quos aut modi?
              Voluptas, ipsam est?
            </motion.p>
            <Button
              size='lg'
              className='mb-6 hover:scale-105 transition-transform'
            >
              Download CV
            </Button>
            <div className='flex justify-center lg:justify-start space-x-6 mt-8'>
              <SocialIcon href='#' icon={Github} />
              <SocialIcon href='#' icon={Linkedin} />
              <SocialIcon href='#' icon={Twitter} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center lg:justify-end'
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
          >
            <motion.div
              className='relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl'
              style={{
                x,
                y,
                rotateX: useTransform(mouseY, [-100, 100], [30, -30]),
                rotateY: useTransform(mouseX, [-100, 100], [-30, 30]),
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className='absolute inset-0 border-4 border-primary-500 shadow-2xl opacity-0 hover:opacity-20 transition-opacity duration-300' />
              <motion.img
                src='https://sos-tech.netlify.app/assets/team-b6y8WSTK.jpg'
                alt='Profile'
                className='w-full h-full object-cover object-center'
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ElementType }> = ({
  href,
  icon: Icon,
}) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className='text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors'
  >
    <Icon size={24} />
  </motion.a>
);

export default Hero;
