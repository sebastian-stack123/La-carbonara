import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop" 
          alt="Restaurant ambiance" 
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-carbonara-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-carbonara-ivory px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-cursive text-7xl md:text-9xl text-carbonara-gold mb-4 leading-none"
        >
          La Carbonara
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl font-light tracking-widest uppercase mb-6"
        >
          Auténtica Cocina Italiana<br/>Artesanal en Quito
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="opacity-60 text-sm md:text-base leading-relaxed mb-8 italic max-w-2xl"
        >
          “Una experiencia gastronómica inspirada en la tradición italiana, ingredientes seleccionados, vinos exclusivos y platos elaborados artesanalmente.”
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mt-4"
        >
          <a href="#reservas" className="bg-carbonara-gold text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#b09155] transition-colors rounded-full text-center shadow-lg">
            Reserva Ahora
          </a>
          <a href="https://www.ubereats.com/ec/store/la-carbonara-ec/YvgImavdX3q70WYG2UuKzQ" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-full text-center">
            Uber Eats
          </a>
        </motion.div>
      </div>
    </section>
  );
}
