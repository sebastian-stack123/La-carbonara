import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="reservas" className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop" 
          alt="Restaurant table setup" 
          className="w-full h-full object-cover object-center grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-carbonara-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cursive text-5xl text-carbonara-gold mb-4"
        >
          Ci vediamo presto
        </motion.h4>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight pb-2"
        >
          Vive una verdadera experiencia italiana
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl font-light mb-12"
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
            href="tel:+593998594056" 
            className="pill bg-carbonara-gold text-black border-carbonara-gold text-xs font-bold uppercase tracking-widest hover:bg-[#b09155] transition-colors text-center inline-block"
          >
            Reservar Mesa
          </a>
          <a 
            href="tel:+593998594056" 
            className="pill bg-transparent text-carbonara-ivory border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-center inline-block"
          >
            Llamar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
