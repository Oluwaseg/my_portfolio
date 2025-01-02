import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary-100 dark:bg-gray-800 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              © {currentYear} Your Name. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex space-x-4 mt-4 md:mt-0'
          >
            <SocialLink href='https://github.com/yourusername' icon={Github} />
            <SocialLink
              href='https://linkedin.com/in/yourusername'
              icon={Linkedin}
            />
            <SocialLink
              href='https://twitter.com/yourusername'
              icon={Twitter}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-8 text-center'
        >
          <p className='text-gray-500 dark:text-gray-400 text-sm'>
            Made with ❤️ using React,Shadcn, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ElementType }> = ({
  href,
  icon: Icon,
}) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className='h-6 w-6' />
  </motion.a>
);

export default Footer;
