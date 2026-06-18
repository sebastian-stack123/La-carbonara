import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Info() {
  return (
    <section className="py-24 bg-transparent text-carbonara-ivory">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Horarios */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-10 text-center"
        >
          <h3 className="font-cursive text-4xl text-carbonara-gold mb-2">Horarios</h3>
          <div className="w-12 h-px bg-carbonara-gold mx-auto mb-8 opacity-50"></div>
          
          <h4 className="font-sans font-semibold text-[10px] uppercase tracking-widest text-carbonara-gold mb-4">Restaurante</h4>
          <ul className="space-y-3 opacity-70 font-light text-xs mb-8">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Lunes</span> <span>12:00 PM – 10:30 PM</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Martes</span> <span>12:00 PM – 10:30 PM</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Miércoles</span> <span>12:00 PM – 10:30 PM</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Jueves</span> <span>12:00 PM – 10:30 PM</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Viernes</span> <span>12:00 PM – 11:00 PM</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Sábado</span> <span>12:00 PM – 11:00 PM</span></li>
            <li className="flex justify-between pb-2 text-carbonara-wine font-medium"><span>Domingo</span> <span>Cerrado</span></li>
          </ul>

          <h4 className="font-sans font-semibold text-[10px] uppercase tracking-widest text-carbonara-gold mb-4">Almuerzos</h4>
          <ul className="space-y-3 opacity-70 font-light text-xs">
            <li className="flex justify-between pb-2"><span>Todos los días</span> <span>12:00 PM – 3:30 PM</span></li>
          </ul>
        </motion.div>

        {/* Social & Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          <div className="mb-12">
            <h3 className="font-cursive text-4xl text-carbonara-gold mb-2 text-center lg:text-left">Redes Sociales</h3>
            <div className="w-12 h-px bg-carbonara-gold mx-auto lg:mx-0 mb-8 opacity-50"></div>
            
            <div className="glass p-6 mb-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex justify-between w-full items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-carbonara-ivory">@lacarbonaraec</h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-50">1.7K Seguidores</p>
                  </div>
                </div>
              </div>
              <p className="text-xs opacity-70 font-light mb-4 text-left w-full">
                🇮🇹 Cocina Italiana Orgánica-Artesanal<br/>
                🍷 Vinos Exclusivos<br/>
                🐶 Somos Pet Friendly<br/>
                🎉 Eventos Corporativos
              </p>
              <a href="https://instagram.com/lacarbonaraec" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-medium text-carbonara-gold hover:text-white transition-colors w-full text-left">
                Visitar Instagram →
              </a>
            </div>

            <div className="glass p-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-carbonara-ivory">La Carbonara Ecuador</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">164 Seguidores</p>
                </div>
              </div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-medium text-carbonara-gold hover:text-white transition-colors w-full text-left">
                Visitar Facebook →
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-cursive text-4xl text-carbonara-gold mb-2 text-center lg:text-left">Contacto</h3>
            <div className="w-12 h-px bg-carbonara-gold mx-auto lg:mx-0 mb-6 opacity-50"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-carbonara-gold shrink-0 mt-0.5" />
                <span className="text-xs font-light opacity-70">Av. González Suárez y Jacinto Bejarano,<br/>Edificio Vista Hermosa<br/>Quito, Ecuador 170150</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-carbonara-gold shrink-0" />
                <span className="text-xs font-light opacity-70">099 859 4056</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-carbonara-gold shrink-0" />
                <a href="mailto:Lacarbonaraecuador@gmail.com" className="text-xs font-light opacity-70 hover:text-carbonara-gold transition-colors">Lacarbonaraecuador@gmail.com</a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-full min-h-[400px] w-full bg-white/5 border border-white/10 p-2"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7909337583647!2d-78.48206892416186!3d-0.1983057354388869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a72ad41e3d3%3A0xc3dd6ed3146430af!2sAv.%20Gonz%C3%A1lez%20Su%C3%A1rez%20%26%20Jacinto%20Bejarano%2C%20Quito%20170143!5e0!3m2!1sen!2sec!4v1709148000000!5m2!1sen!2sec" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover filter grayscale-[40%] invert-[90%] hue-rotate-180 contrast-125"
            title="Ubicación de La Carbonara"
          ></iframe>
        </motion.div>
        
      </div>
    </section>
  );
}
