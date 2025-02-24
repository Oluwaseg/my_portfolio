'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import type React from 'react';
import { useRef, useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='space-y-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-300 mb-2'
        >
          Name
        </label>
        <motion.input
          type='text'
          id='name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
            text-white placeholder-gray-400'
          placeholder='John Doe'
          required
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-300 mb-2'
        >
          Email
        </label>
        <motion.input
          type='email'
          id='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
            text-white placeholder-gray-400'
          placeholder='john@example.com'
          required
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-300 mb-2'
        >
          Message
        </label>
        <motion.textarea
          id='message'
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={5}
          className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
            text-white placeholder-gray-400 resize-none'
          placeholder='Your message here...'
          required
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      <motion.button
        type='submit'
        className='w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg
          transition-colors duration-200 transform hover:scale-[1.02]'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) {
  return (
    <div className='flex items-start space-x-4'>
      <div className='p-3 bg-blue-500 bg-opacity-10 rounded-lg'>
        <Icon className='w-6 h-6 text-blue-500' />
      </div>
      <div>
        <h4 className='text-lg font-medium text-gray-200'>{title}</h4>
        <p className='text-gray-400'>{content}</p>
      </div>
    </div>
  );
}

function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className='relative'>
      {/* Contact Section */}
      <div className='container mx-auto px-4 py-20 relative overflow-hidden'>
        {/* Background Accent */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-10' />

        <motion.div className='text-center mb-16 relative z-10' style={{ y }}>
          <h2 className='text-4xl font-bold mb-4'>Get In Touch</h2>
          <div className='w-20 h-1 bg-blue-500 mx-auto rounded-full' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 relative z-10'>
          {/* Contact Information */}
          <motion.div className='space-y-8' style={{ y }}>
            <div className='prose prose-invert'>
              <p className='text-lg text-gray-300 leading-relaxed'>
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className='space-y-6'>
              <ContactInfo
                icon={Mail}
                title='Email'
                content='alex.chen@example.com'
              />
              <ContactInfo
                icon={Phone}
                title='Phone'
                content='+1 (555) 123-4567'
              />
              <ContactInfo
                icon={MapPin}
                title='Location'
                content='San Francisco, CA'
              />
            </div>

            <div className='pt-8'>
              <h4 className='text-lg font-medium text-gray-200 mb-4'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com'
                  className='p-3 bg-gray-800 rounded-lg hover:bg-gray-700 
                  transition-colors duration-200'
                >
                  <Github className='w-5 h-5 text-gray-400 hover:text-white' />
                </a>
                <a
                  href='https://linkedin.com'
                  className='p-3 bg-gray-800 rounded-lg hover:bg-gray-700 
                  transition-colors duration-200'
                >
                  <Linkedin className='w-5 h-5 text-gray-400 hover:text-white' />
                </a>
                <a
                  href='https://twitter.com'
                  className='p-3 bg-gray-800 rounded-lg hover:bg-gray-700 
                  transition-colors duration-200'
                >
                  <Twitter className='w-5 h-5 text-gray-400 hover:text-white' />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className='bg-gray-800 p-8 rounded-xl border border-gray-700'
            style={{ y }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-transparent blur-backdrop-xl border-t border-gray-700 '>
        <div className='container mx-auto px-4 py-12 mb-12 sm:mb-0'>
          <div className='grid md:grid-cols-3 gap-8 mb-8'>
            {/* About */}
            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Alex Chen
              </h3>
              <p className='text-gray-400 mb-4'>
                Full Stack Developer & Software Architect crafting exceptional
                digital experiences.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com'
                  className='text-gray-400 hover:text-white 
                  transition-colors duration-200'
                >
                  <Github className='w-5 h-5' />
                </a>
                <a
                  href='https://linkedin.com'
                  className='text-gray-400 hover:text-white 
                  transition-colors duration-200'
                >
                  <Linkedin className='w-5 h-5' />
                </a>
                <a
                  href='https://twitter.com'
                  className='text-gray-400 hover:text-white 
                  transition-colors duration-200'
                >
                  <Twitter className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Quick Links
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#about'
                    className='text-gray-400 hover:text-white transition-colors duration-200'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#projects'
                    className='text-gray-400 hover:text-white transition-colors duration-200'
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-gray-400 hover:text-white transition-colors duration-200'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Contact Info
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center space-x-2 text-gray-400'>
                  <Mail className='w-4 h-4' />
                  <span>alex.chen@example.com</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-400'>
                  <Phone className='w-4 h-4' />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-400'>
                  <MapPin className='w-4 h-4' />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='pt-8 border-t border-gray-700 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default Contact;
