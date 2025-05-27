'use client';

import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import type React from 'react';
import { useRef, useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId =
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID ||
        'template_24krlbk';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.'
        );
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Samuel Oluwasegun',
      };

      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Samuel Oluwasegun',
        reply_to: 'samueloluwasegun999@gmail.com',
      };

      // Send the main email to you
      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } catch (mainEmailError) {
        throw new Error(
          'Failed to send main email: ' +
            (mainEmailError instanceof Error
              ? mainEmailError.message
              : String(mainEmailError))
        );
      }

      // Send auto-reply to the sender
      try {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          autoReplyParams,
          publicKey
        );
      } catch {
        // Don't throw here - main email was successful
        // Auto-reply failed, but main email was sent successfully
      }

      setStatus('success');
      setStatusMessage(
        "Message sent successfully! You'll receive a confirmation email shortly."
      );
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage(
        'Failed to send message. Please try again or contact me directly.'
      );
    } finally {
      setIsLoading(false);
    }
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
          className='block text-sm font-medium text-white mb-2'
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
            text-white placeholder-gray-50'
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
          className='block text-sm font-medium text-white mb-2'
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
          className='block text-sm font-medium text-white mb-2'
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

      {/* Status Message */}
      {status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center space-x-2 p-3 rounded-lg ${
            status === 'success'
              ? 'bg-green-500 bg-opacity-10 text-green-400 border border-green-500 border-opacity-20'
              : 'bg-red-500 bg-opacity-10 text-red-400 border border-red-500 border-opacity-20'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className='w-5 h-5' />
          ) : (
            <AlertCircle className='w-5 h-5' />
          )}
          <span className='text-sm'>{statusMessage}</span>
        </motion.div>
      )}

      <motion.button
        type='submit'
        disabled={isLoading}
        className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 transform
          ${
            isLoading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]'
          }`}
        whileHover={!isLoading ? { scale: 1.05 } : {}}
        whileTap={!isLoading ? { scale: 0.95 } : {}}
      >
        {isLoading ? (
          <div className='flex items-center justify-center space-x-2'>
            <Loader2 className='w-5 h-5 animate-spin' />
            <span>Sending...</span>
          </div>
        ) : (
          'Send Message'
        )}
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
        <h4 className='text-lg font-medium text-white'>{title}</h4>
        <p className='text-white'>{content}</p>
      </div>
    </div>
  );
}

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
    className='text-white hover:text-white transition-all duration-200 cursor-pointer'
  >
    <Icon size={24} />
  </motion.a>
);

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
        <div className='text-center mb-16 relative z-10'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-5xl font-extrabold mb-4 tracking-tight'
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='w-20 h-1 bg-blue-500 mx-auto rounded-full mb-12'
          />
        </div>

        <div className='grid lg:grid-cols-2 gap-12 relative z-10'>
          {/* Contact Information */}
          <motion.div className='space-y-8' style={{ y }}>
            <div className='prose prose-invert'>
              <p className='text-lg text-white leading-relaxed'>
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className='space-y-6'>
              <ContactInfo
                icon={Mail}
                title='Email'
                content='samueloluwasegun999@gmail.com'
              />
              <ContactInfo
                icon={Phone}
                title='Phone'
                content='+2349048095407'
              />
              <ContactInfo
                icon={MapPin}
                title='Location'
                content='Lagos, Nigeria'
              />
            </div>

            <div className='pt-8'>
              <h4 className='text-lg font-medium text-white mb-4'>Follow Me</h4>
              <div className='flex space-x-5'>
                <SocialIcon href='https://github.com/oluwaseg' icon={Github} />
                <SocialIcon
                  href='https://linkedin.com/in/samuel-oluwasegun-39ab37253'
                  icon={Linkedin}
                />
                <SocialIcon href='#' icon={Twitter} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className=' p-8 rounded-xl border border-gray-700'
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
                Samuel Oluwasegun
              </h3>
              <p className='text-gray-400 mb-4'>
                Full Stack Developer & Software Architect crafting exceptional
                digital experiences.
              </p>
              <div className='flex space-x-5'>
                <SocialIcon href='https://github.com/oluwaseg' icon={Github} />
                <SocialIcon
                  href='https://linkedin.com/in/samuel-oluwasegun-39ab37253'
                  icon={Linkedin}
                />
                <SocialIcon href='#' icon={Twitter} />
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
                  <span>samueloluwasegun999@gmail.com</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-400'>
                  <Phone className='w-4 h-4' />
                  <span>+2349048095407</span>
                </li>
                <li className='flex items-center space-x-2 text-gray-400'>
                  <MapPin className='w-4 h-4' />
                  <span>Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='pt-8 border-t border-gray-700 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} Samuel Oluwasegun. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default Contact;
