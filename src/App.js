import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import MarketAnalysis from './components/MarketAnalysis';
import Strategy from './components/Strategy';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyUs />
      <MarketAnalysis />
      <Strategy />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
