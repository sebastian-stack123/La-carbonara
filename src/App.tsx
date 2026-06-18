import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import OrderOnline from './components/OrderOnline';
import Info from './components/Info';
import Footer from './components/Footer';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-carbonara-black font-sans text-carbonara-ivory selection:bg-carbonara-gold selection:text-black relative">
      <div className="atmospheric-bg fixed top-0 left-0 w-full h-full pointer-events-none"></div>
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <OrderOnline />
      <Info />
      <CTA />
      <Footer />
    </div>
  );
}
