import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: <Mail className='h-5 w-5 sm:h-6 sm:w-6' />,
      text: 'samueloluwasegun999@gmail.com',
      href: 'mailto:samueloluwasegun999@gmail.com',
    },
    {
      icon: <MessageSquare className='h-5 w-5 sm:h-6 sm:w-6' />,
      text: '+2348100585779',
      href: 'tel:+2348100585779',
    },
    {
      icon: <Linkedin className='h-5 w-5 sm:h-6 sm:w-6' />,
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/samuel-oluwasegun-39ab37253',
    },
    {
      icon: <Github className='h-5 w-5 sm:h-6 sm:w-6' />,
      text: 'GitHub',
      href: 'https://github.com/oluwaseg',
    },
  ];

  return (
    <section id='contact' className='py-10 sm:py-20'>
      <div className='container mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-6xl mx-auto'
        >
          <h2 className='text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200'>
            Get in Touch
          </h2>
          <div className='grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-8 transform hover:scale-105 transition-transform duration-300'
            >
              <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-100'>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                <div>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    required
                    className='w-full bg-gray-50/0 border-2 rounded-lg text-white text-sm sm:text-base'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    required
                    className='w-full bg-gray-50/0 border-2 rounded-lg text-white text-sm sm:text-base'
                    placeholder='your@email.com'
                  />
                </div>
                <div>
                  <Textarea
                    id='message'
                    name='message'
                    required
                    className='w-full bg-gray-50/0 border-2 rounded-lg text-white text-sm sm:text-base'
                    placeholder='Your message here...'
                    rows={4}
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full bg-primary-600 hover:bg-primary-600 text-white rounded-lg py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 transform hover:scale-105'
                >
                  <Send className='mr-2 h-4 w-4 sm:h-5 sm:w-5' /> Send Message
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='bg-gray-50/10 dark:bg-gray-700 rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col justify-between h-full'
            >
              <div>
                <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-100'>
                  Contact Information
                </h3>
                <p className='text-gray-100 mb-6 sm:mb-8 text-sm sm:text-base'>
                  Feel free to reach out through any of the following channels.
                  I'm always excited to connect, collaborate, and discuss new
                  opportunities!
                </p>
                <div className='space-y-4 sm:space-y-6'>
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className='flex items-center text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className='bg-white text-gray-600 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-md'>
                        {item.icon}
                      </div>
                      <span className='break-all'>{item.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className='mt-8 sm:mt-12'>
                <p className='text-xs sm:text-sm text-gray-400 text-center'>
                  Prefer email? Send a message directly to{' '}
                  <a
                    href='mailto:samueloluwasegun999@gmail.com'
                    className='text-primary-500 hover:underline break-all'
                  >
                    samueloluwasegun999@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
