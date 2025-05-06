import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Recommendations from './components/Recommendations';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Recommendations />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
