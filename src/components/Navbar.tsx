import { motion } from 'framer-motion';
import { BadgeInfo, Briefcase, Contact, Home } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: BadgeInfo, label: 'About', id: 'about' },
  { icon: Briefcase, label: 'Projects', id: 'projects' },
  { icon: Contact, label: 'Contact', id: 'contact' },
];

interface NavbarProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { id: 'home', ref: document.getElementById('home') },
        { id: 'about', ref: aboutRef.current },
        { id: 'projects', ref: projectsRef.current },
        { id: 'contact', ref: contactRef.current },
      ];

      for (const section of sections) {
        if (section.ref) {
          const { offsetTop, offsetHeight } = section.ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutRef, projectsRef, contactRef]);

  const scrollToSection = (id: string) => {
    let targetElement: HTMLElement | null = document.getElementById(id);

    if (id === 'about' && aboutRef.current) targetElement = aboutRef.current;
    if (id === 'projects' && projectsRef.current)
      targetElement = projectsRef.current;
    if (id === 'contact' && contactRef.current)
      targetElement = contactRef.current;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav className='fixed top-0 left-0 right-0 z-50  text-white'>
          <div className='container mx-auto px-6 py-3'>
            <div className='flex items-center justify-between h-16'>
              <div className='text-2xl font-bold text-teal-400'>
                My Portfolio
              </div>
              <div className='flex space-x-6'>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 flex items-center space-x-2 
                      ${
                        activeSection === item.id
                          ? 'text-teal-400'
                          : 'text-gray-300 hover:text-teal-400'
                      }`}
                  >
                    <item.icon className='w-6 h-6' />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <motion.nav
          className='fixed bottom-0 left-0 right-0 z-50 bg-transparent/90 text-white shadow-md'
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className='flex justify-around items-center h-16 px-4'>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium flex flex-col items-center transition-colors duration-300
                  ${
                    activeSection === item.id
                      ? 'text-teal-400'
                      : 'text-gray-300 hover:text-teal-400'
                  }`}
              >
                <item.icon className='w-7 h-7 mb-1' />
                {item.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
