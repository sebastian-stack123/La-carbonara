import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../config/images';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Historia', href: '#historia' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Menú', href: '#menu' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-carbonara-black/95 backdrop-blur-md py-4 border-b border-white/10 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex-shrink-0 transition-opacity hover:opacity-80 flex items-center relative h-12 md:h-16 w-40 md:w-48">
          <img 
            src={IMAGES.logo} 
            alt="La Carbonara Logo" 
            className="absolute top-1/2 left-0 -translate-y-1/2 h-24 md:h-32 w-auto object-contain max-w-none"
          />
        </a>
        
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs uppercase tracking-widest text-carbonara-ivory/80 hover:text-carbonara-gold transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="lg:hidden text-carbonara-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-carbonara-black/95 backdrop-blur-md border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-carbonara-ivory hover:text-carbonara-gold transition-colors block"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
