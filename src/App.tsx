import { useRef } from 'react';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import ThreeJSBackground from './components/ThreeBG';

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className='min-h-screen text-white relative'>
      <ThreeJSBackground />
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <section id='home' className='relative'>
        <Hero />
      </section>
      <section id='about' ref={aboutRef} className='relative'>
        <Aboutme />
      </section>
      <section id='projects' ref={projectsRef} className='relative'>
        <Project />
      </section>
      <section id='contact' ref={contactRef} className='relative'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
