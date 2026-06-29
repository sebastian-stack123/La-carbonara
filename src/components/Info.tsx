import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Info() {
  return (
    <section id="contacto" className="py-24 bg-transparent text-carbonara-ivory">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Horarios */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-carbonara-wine/40 border border-carbonara-wine/60 rounded-xl p-10 text-center shadow-xl flex flex-col justify-center"
        >
          <h3 className="font-cursive text-5xl text-carbonara-gold mb-4">Horarios</h3>
          <div className="w-12 h-px bg-carbonara-gold mx-auto mb-8 opacity-50"></div>
          
          <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-carbonara-gold mb-4">Restaurante</h4>
          <ul className="space-y-4 font-light text-sm mb-8">
            <li className="flex justify-between border-b border-white/10 pb-2 opacity-90"><span>Lun - Jueves</span> <span>12:00 - 22:30</span></li>
            <li className="flex justify-between border-b border-white/10 pb-2 opacity-90"><span>Vie - Sábado</span> <span>12:00 - 23:00</span></li>
            <li className="flex justify-between pb-2 text-carbonara-ivory opacity-90 font-medium"><span>Domingo</span> <span>Cerrado</span></li>
          </ul>

          <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-carbonara-gold mb-4">Almuerzos</h4>
          <ul className="space-y-3 font-light text-sm mb-6">
            <li className="flex justify-between pb-2 opacity-90"><span>Todos los días</span> <span>12:00 - 15:30</span></li>
          </ul>

          <div className="mt-auto bg-black/20 p-4 rounded-lg">
            <p className="text-xs uppercase tracking-widest font-medium text-carbonara-gold">Domingos bajo reserva únicamente</p>
          </div>
        </motion.div>

        {/* Social & Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-between gap-8"
        >
          <div className="bg-carbonara-wine/40 border border-carbonara-wine/60 rounded-xl p-8 shadow-xl flex-grow">
            <h3 className="font-cursive text-4xl text-carbonara-gold mb-2 text-center">Síguenos</h3>
            <div className="w-12 h-px bg-carbonara-gold mx-auto mb-6 opacity-50"></div>
            
            <p className="text-xs opacity-80 text-center mb-8 font-light italic">
              "Un nuevo concepto en cocina Italiana. Creemos en que la buena comida une a las personas."
            </p>

            <div className="flex flex-col gap-4">
              <a href="https://instagram.com/lacarbonaraec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-black/20 hover:bg-carbonara-gold/20 p-4 rounded-xl transition-colors border border-white/5 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm group-hover:text-carbonara-gold transition-colors">Instagram</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">@lacarbonaraec</p>
                </div>
              </a>

              <a href="https://www.facebook.com/Carbonaraec/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-black/20 hover:bg-carbonara-gold/20 p-4 rounded-xl transition-colors border border-white/5 group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm group-hover:text-carbonara-gold transition-colors">Facebook</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">La Carbonara Ecuador</p>
                </div>
              </a>

              <a href="https://www.tiktok.com/@lacarbonaraec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-black/20 hover:bg-carbonara-gold/20 p-4 rounded-xl transition-colors border border-white/5 group">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shrink-0 border border-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.26 6.32 6.33 6.33 0 0 0 6.31-6.24v-6.9a8.16 8.16 0 0 0 5.43 2.16V7.61a5 5 0 0 1-3.41-1.32z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm group-hover:text-carbonara-gold transition-colors">TikTok</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60">La Carbonara 🍝</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Location / Contact Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-carbonara-wine/40 border border-carbonara-wine/60 rounded-xl p-8 shadow-xl flex flex-col justify-center"
        >
          <h3 className="font-cursive text-4xl text-carbonara-gold mb-2 text-center">Visítanos</h3>
          <div className="w-12 h-px bg-carbonara-gold mx-auto mb-8 opacity-50"></div>
          
          <a 
            href="https://maps.app.goo.gl/u11Ju7Gat2QeAdsS7" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Ver ubicación en Google Maps"
            className="block mb-6 overflow-hidden rounded-lg border border-white/10 hover:border-carbonara-gold/50 transition-colors relative group"
          >
            <div className="absolute inset-0 bg-carbonara-wine/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <iframe 
              title="Mapa de ubicación de La Carbonara"
              src="https://maps.google.com/maps?q=-0.1949162,-78.4776268&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="180" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
            ></iframe>
          </a>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
               <MapPin className="w-6 h-6 text-carbonara-gold shrink-0 mt-0.5" />
              <a 
                href="https://maps.app.goo.gl/u11Ju7Gat2QeAdsS7"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm font-light opacity-90 leading-relaxed hover:text-carbonara-gold transition-colors"
              >
                Av González Suárez y Jacinto Bejarano,<br/>170150 Quito
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-carbonara-gold shrink-0" />
              <a href="tel:0998594056" className="text-sm font-light opacity-90 text-xl hover:text-carbonara-gold transition-colors">099 859 4056</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-carbonara-gold shrink-0" />
              <a href="mailto:Lacarbonaraecuador@gmail.com" className="text-sm font-light opacity-90 hover:text-carbonara-gold transition-colors">Lacarbonaraecuador@gmail.com</a>
            </li>
          </ul>
        </motion.div>
        
      </div>
    </section>
  );
}
