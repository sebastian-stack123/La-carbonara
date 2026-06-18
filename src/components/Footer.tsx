import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/5 pt-16 pb-8 text-carbonara-ivory relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <h2 className="font-cursive text-5xl text-carbonara-gold mb-4">La Carbonara</h2>
          <p className="opacity-60 font-light text-xs leading-relaxed mb-6">
            Auténtica cocina italiana artesanal. Ingredientes seleccionados, vinos exclusivos y platos elaborados con pasión en Quito.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-carbonara-gold mb-6">Contacto</h3>
          <ul className="space-y-4 opacity-60 font-light text-xs">
            <li>Av. González Suárez y Jacinto Bejarano,<br/>Edificio Vista Hermosa<br/>Quito, Ecuador</li>
            <li><a href="tel:+593998594056" className="hover:text-carbonara-gold transition-colors">099 859 4056</a></li>
            <li><a href="mailto:Lacarbonaraecuador@gmail.com" className="hover:text-carbonara-gold transition-colors">Lacarbonaraecuador@gmail.com</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-carbonara-gold mb-6">Horarios</h3>
          <ul className="space-y-3 opacity-60 font-light text-xs">
            <li className="flex justify-between"><span>Lun - Jueves:</span> <span>12:00 - 22:30</span></li>
            <li className="flex justify-between"><span>Vie - Sábado:</span> <span>12:00 - 23:00</span></li>
            <li className="flex justify-between text-carbonara-wine font-medium"><span>Domingo:</span> <span>Cerrado</span></li>
            <li className="pt-2 border-t border-white/10 mt-2">Almuerzos diarios: 12:00 - 15:30</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-carbonara-gold mb-6">Enlaces</h3>
          <ul className="space-y-3 opacity-60 font-light text-xs flex flex-col">
            <li><a href="https://instagram.com/lacarbonaraec" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Facebook</a></li>
            <li><a href="https://www.ubereats.com/ec/store/la-carbonara-ec/YvgImavdX3q70WYG2UuKzQ" target="_blank" rel="noopener noreferrer" className="hover:text-carbonara-gold transition-colors">Uber Eats</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-[10px] opacity-40 uppercase tracking-widest">
          © 2026 LA CARBONARA. TUTTI I DIRITTI RISERVATI.
        </p>
        <div className="text-[10px] uppercase tracking-widest text-carbonara-gold">
          CREADO POR <a href="https://mantaiweb.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">MANTAI WEB DESIGNER COMPANY</a>
        </div>
      </div>
    </footer>
  );
}
