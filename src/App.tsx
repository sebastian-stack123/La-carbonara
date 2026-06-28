import React from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import OrderOnline from './components/OrderOnline';
import Feedback from './components/Feedback';
import Info from './components/Info';
import Footer from './components/Footer';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-carbonara-black font-sans text-carbonara-ivory selection:bg-carbonara-gold selection:text-black relative">
      <div className="atmospheric-bg fixed top-0 left-0 w-full h-full pointer-events-none"></div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <OrderOnline />
      <Feedback />
      <Info />
      <CTA />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/593998594056" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
      </a>
    </div>
  );
}
