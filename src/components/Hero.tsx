import { Code2, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className='min-h-screen mt-4 flex items-center justify-center text-white px-6 md:px-12 lg:px-20 pb-28 md:pb-10 lg:pb-0'>
      <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left Column */}
        <div className='space-y-6 text-center lg:text-left'>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
            Hi, I'm <span className='text-blue-500'>Alex Chen</span>
          </h1>
          <h2 className='text-lg md:text-xl text-gray-400 font-light'>
            Full Stack Developer & Software Architect
          </h2>

          <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
            I'm passionate about crafting elegant solutions to complex problems.
            With expertise in React, Node.js, and cloud architecture, I help
            businesses build scalable applications that users love. Let's turn
            your ideas into reality.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
            <button className='flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200'>
              <Download className='w-5 h-5 mr-2' />
              Download CV
            </button>

            <div className='flex space-x-5'>
              <a
                href='https://github.com'
                className='text-gray-400 hover:text-white transition-all duration-200'
              >
                <Github className='w-6 h-6' />
              </a>
              <a
                href='https://linkedin.com'
                className='text-gray-400 hover:text-white transition-all duration-200'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='https://twitter.com'
                className='text-gray-400 hover:text-white transition-all duration-200'
              >
                <Twitter className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex justify-center lg:justify-end'>
          <div className='relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center'>
            {/* Glowing Background */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-20 animate-pulse'></div>

            {/* Main 3D Circle */}
            <div className='relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl before:absolute before:inset-2 before:rounded-full before:bg-gradient-to-br before:from-gray-800 before:to-gray-900 before:z-10'>
              <Code2 className='w-24 h-24 text-blue-500 relative z-20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
