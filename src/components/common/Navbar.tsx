import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Home, Mail, Menu, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle';

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: User },
  { name: 'Projects', icon: Briefcase },
  { name: 'Contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md shadow-custom'>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between h-20'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center space-x-4'
          >
            <img
              src='https://sos-tech.netlify.app/assets/team-b6y8WSTK.jpg'
              alt='Logo'
              className='h-10 w-10 rounded-full'
            />
            <span className='text-2xl font-extrabold text-primary-600 dark:text-primary-400 tracking-tight'>
              SOS Tech
            </span>
          </motion.div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-6'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className='text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
          <div className='hidden md:block'>
            <ThemeToggle />
          </div>
          <div className='md:hidden flex items-center'>
            <ThemeToggle />
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500'
                >
                  <span className='sr-only'>Open main menu</span>
                  {isOpen ? (
                    <X className='block h-6 w-6' />
                  ) : (
                    <Menu className='block h-6 w-6' />
                  )}
                </motion.button>
              </Dialog.Trigger>
              <AnimatePresence>
                {isOpen && (
                  <Dialog.Portal forceMount>
                    <Dialog.Overlay asChild>
                      <motion.div
                        className='fixed inset-0 bg-black/40 backdrop-blur-sm'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    </Dialog.Overlay>
                    <Dialog.Content
                      className='fixed inset-0 top-0 left-0 w-full max-w-full bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl'
                      aria-describedby={undefined}
                    >
                      <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.4,
                        }}
                        className='h-full flex flex-col pt-6 pb-8 px-6'
                      >
                        <div className='flex justify-between items-center'>
                          <Dialog.Title className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                            Menu
                          </Dialog.Title>
                          <Dialog.Close asChild>
                            <motion.button
                              className='rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <span className='sr-only'>Close</span>
                              <X className='h-6 w-6' />
                            </motion.button>
                          </Dialog.Close>
                        </div>

                        <div className='mt-8 flex flex-col space-y-4'>
                          {navItems.map((item) => (
                            <motion.a
                              key={item.name}
                              href={`#${item.name.toLowerCase()}`}
                              className='flex items-center px-3 py-3 text-lg font-medium rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200'
                              whileHover={{ scale: 1.03, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsOpen(false)}
                            >
                              <item.icon className='mr-4 h-6 w-6 text-primary-600 dark:text-primary-400' />
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
