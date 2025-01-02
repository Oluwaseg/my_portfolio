import React from 'react';
import About from './components/About';
import Hero from './components/common/Hero';
import Navbar from './components/common/Navbar';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
