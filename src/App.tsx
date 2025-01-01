import React from 'react';
import About from './components/About';
import Hero from './components/common/Hero';
import Navbar from './components/common/Navbar';

const App: React.FC = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
