import React from 'react';
import ThreeDBackground from './components/3D/ThreeDBackground';
import About from './components/About';
import Hero from './components/common/Hero';
import Navbar from './components/common/Navbar';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <>
      <div className='fixed inset-0 z-[-1]'>
        <ThreeDBackground type='bg1' />
      </div>
      <div className='min-h-screen overflow-hidden relative'>
        {/* <div className='absolute inset-0 z-0 pointer-events-none'>
        <ThreeDBackground type='bg2' />
        </div> */}
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
