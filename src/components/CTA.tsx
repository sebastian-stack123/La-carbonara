import { motion } from 'motion/react';
import { IMAGES } from '../config/images';

export default function CTA() {
  return (
    <section id="reservas" className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.ctaBackground} 
          alt="Restaurant table setup" 
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-carbonara-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cursive text-6xl text-carbonara-gold mb-6"
        >
          Ci vediamo presto
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-light tracking-widest uppercase text-3xl md:text-5xl text-white mb-6 leading-tight pb-2"
        >
          Vive una verdadera experiencia italiana
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg font-light mb-12 italic"
        >
          Reserva tu mesa y descubre los sabores auténticos de Italia.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="https://wa.me/593998594056" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-carbonara-wine text-white px-10 py-5 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl shadow-2xl border border-carbonara-wine/50 w-full sm:w-auto text-center"
          >
            Reservar Mesa
          </a>
          <a 
            href="tel:+593998594056" 
            className="bg-carbonara-wine text-white px-10 py-5 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl shadow-2xl border border-carbonara-wine/50 w-full sm:w-auto text-center"
          >
            Llamar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
