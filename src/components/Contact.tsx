import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className='py-20 bg-primary-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl mx-auto'
        >
          <h2 className='text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100'>
            Get in Touch
          </h2>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-custom p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Name
                </label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='w-full'
                  placeholder='Your Name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Email
                </label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='w-full'
                  placeholder='your@email.com'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  required
                  className='w-full'
                  placeholder='Your message here...'
                  rows={4}
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-primary-500 hover:bg-primary-600 text-white'
              >
                <Send className='mr-2 h-4 w-4' /> Send Message
              </Button>
            </form>
          </div>
          <div className='mt-12 flex justify-center space-x-6'>
            <motion.a
              href='mailto:your@email.com'
              className='flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className='mr-2 h-5 w-5' />
              your@email.com
            </motion.a>
            <motion.a
              href='tel:+1234567890'
              className='flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className='mr-2 h-5 w-5' />
              +1 (234) 567-890
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
