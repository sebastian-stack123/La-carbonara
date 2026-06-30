import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const OrderOnline = lazy(() => import('./components/OrderOnline'));
const Feedback = lazy(() => import('./components/Feedback'));
const Info = lazy(() => import('./components/Info'));
const Footer = lazy(() => import('./components/Footer'));
const CTA = lazy(() => import('./components/CTA'));
const Legal = lazy(() => import('./components/Legal'));

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'cookies'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') setCurrentView('privacy');
      else if (hash === '#terms') setCurrentView('terms');
      else if (hash === '#cookies') setCurrentView('cookies');
      else setCurrentView('home');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView !== 'home') {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-carbonara-gold opacity-50 bg-carbonara-black">Cargando...</div>}>
        <Legal view={currentView} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-carbonara-black font-sans text-carbonara-ivory selection:bg-carbonara-gold selection:text-black relative">
      <div className="atmospheric-bg fixed top-0 left-0 w-full h-full pointer-events-none"></div>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-24 flex items-center justify-center text-carbonara-gold opacity-50">Cargando...</div>}>
        <About />
        <Features />
        <Menu />
        <Gallery />
        <OrderOnline />
        <Feedback />
        <Info />
        <CTA />
        <Footer />
      </Suspense>
      
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
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
