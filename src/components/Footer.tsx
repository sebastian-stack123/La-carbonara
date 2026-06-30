import React from 'react';
import FlagHandshake from './FlagHandshake';

export default function Footer() {
  return (
    <footer className="bg-carbonara-wine/20 border-t border-white/5 pt-16 pb-8 text-carbonara-ivory relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <h2 className="font-cursive text-5xl text-carbonara-gold mb-2">La Carbonara</h2>
          <div className="mb-4">
            <p className="font-cursive text-lg text-carbonara-gold/90 border-b border-carbonara-wine/50 inline-block pb-1">
              La carbonara, momentos de magia para tu paladar.
            </p>
          </div>
          <p className="opacity-60 font-light text-xs leading-relaxed mb-6">
            Auténtica cocina italiana artesanal. Ingredientes frescos, vinos exclusivos y atención excepcional en Quito.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-carbonara-gold mb-6 font-bold">Contacto</h3>
          <ul className="space-y-4 opacity-80 font-light text-xs">
            <li>N32-90 Edificio Patiño,<br/>Quito, Ecuador</li>
            <li><a href="tel:+593998594056" className="hover:text-carbonara-gold transition-colors">099 859 4056</a></li>
            <li><a href="mailto:Lacarbonaraecuador@gmail.com" className="hover:text-carbonara-gold transition-colors">Lacarbonaraecuador@gmail.com</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-carbonara-gold mb-6 font-bold">Horarios</h3>
          <ul className="space-y-3 font-light text-xs">
            <li className="flex justify-between opacity-80"><span>Lun - Jueves:</span> <span>12:00 - 22:30</span></li>
            <li className="flex justify-between opacity-80"><span>Vie - Sábado:</span> <span>12:00 - 23:00</span></li>
            <li className="flex justify-between text-carbonara-ivory opacity-90 font-medium"><span>Domingo:</span> <span>Cerrado</span></li>
            <li className="pt-2 border-t border-white/10 mt-2 opacity-80">De Lunes a Viernes menú ejecutivo</li>
            <li className="pt-2 border-t border-white/10 opacity-80 text-carbonara-gold">Domingos bajo reserva únicamente</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-carbonara-gold mb-6 font-bold">Enlaces</h3>
          <ul className="space-y-3 opacity-80 font-light text-xs flex flex-col">
            <li><a href="https://instagram.com/lacarbonaraec" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Instagram</a></li>
            <li><a href="https://www.facebook.com/Carbonaraec/" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@lacarbonaraec" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">TikTok</a></li>
            <li><a href="https://www.ubereats.com/ec/store/la-carbonara-ec/YvgImavdX3q70WYG2UuKzQ" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Uber Eats</a></li>
            <li><a href="https://www.rappi.com.ec/restaurantes/35749-la-carbonara" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Rappi</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-[10px] opacity-70 uppercase tracking-widest flex flex-col gap-1">
            <span>© 2024 LA CARBONARA. TUTTI I DIRITTI RISERVATI.</span>
            <span>Nos reservamos el derecho de admisión.</span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] opacity-70 uppercase tracking-widest">
            <a href="#privacy" className="hover:opacity-100 hover:text-carbonara-gold transition-colors">Política de Privacidad</a>
            <a href="#terms" className="hover:opacity-100 hover:text-carbonara-gold transition-colors">Términos y Condiciones</a>
            <a href="#cookies" className="hover:opacity-100 hover:text-carbonara-gold transition-colors">Política de Cookies</a>
          </div>
        </div>
        <FlagHandshake className="scale-75 md:scale-90" />
        <div className="text-[10px] uppercase tracking-widest text-carbonara-gold">
          CREADO POR <a href="https://mantaiweb.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">MANTAI WEB DESIGNER COMPANY</a>
        </div>
      </div>
    </footer>
  );
}
