import { motion } from 'framer-motion';
import { Download, Github, Hand, Linkedin, Twitter } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'React Developer',
  'Node.js Developer',
  'UI/UX Enthusiast',
];
const Hero = () => {
  const currentRole = useTypewriter(roles, 100, 50, 2000);

  return (
    <section className='min-h-screen mt-4 flex items-center justify-center text-white px-6 md:px-12 lg:px-20 pb-28 md:pb-10 lg:pb-0'>
      <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left Column */}
        <div className='space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl md:text-4xl font-extrabold leading-tight flex flex-wrap items-center justify-center lg:justify-start gap-2 whitespace-nowrap'>
            <span>Hi, I'm</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Hand className='w-8 h-8 text-blue-500' />
            </motion.div>
            <span className='text-blue-500'>Samuel Oluwasegun</span>
          </h1>
          <motion.p
            className='text-xl lg:text-2xl mb-2 text-white/90 min-h-[2.5rem] drop-shadow-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {currentRole}
          </motion.p>
          <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
            I’m a developer who loves solving problems with clean, efficient
            code. With experience in both frontend and backend, I build
            seamless, high-performing web apps that deliver real value. Let’s
            make something great together.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
            <a
              href='/Samuel_Oluwasegun_CV.pdf'
              download='Samuel_Oluwasegun_CV.pdf'
              className='flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200'
            >
              <Download className='w-5 h-5 mr-2' />
              Download CV
            </a>

            <div className='flex space-x-5'>
              <SocialIcon href='https://github.com/oluwaseg' icon={Github} />
              <SocialIcon
                href='https://linkedin.com/in/samuel-oluwasegun-39ab37253'
                icon={Linkedin}
              />
              <SocialIcon href='#' icon={Twitter} />
            </div>
          </div>
        </div>

        {/* Right Column - Hidden on Mobile */}
        <div className='hidden lg:flex justify-center lg:justify-end'>
          <div className='relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center'>
            {/* Glowing Background */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-20 animate-pulse'></div>

            {/* Main 3D Circle */}
            <div className='relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl before:absolute before:inset-2 before:rounded-full before:bg-gradient-to-br before:from-gray-800 before:to-gray-900 before:z-10'>
              <img
                src='https://avatars.githubusercontent.com/u/107188941?s=96&v=4'
                className='w-full h-full object-contain rounded-full relative z-20'
                alt=''
              />
            </div>
          </div>
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
    className='text-gray-200 hover:text-white transition-all duration-200 cursor-pointer'
  >
    <Icon size={24} />
  </motion.a>
);

export default Hero;
