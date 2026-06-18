import { motion } from 'motion/react';

export default function OrderOnline() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop" 
          alt="Pizza background" 
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-carbonara-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cursive text-4xl text-carbonara-gold mb-2"
        >
          Delivery
        </motion.h4>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
        >
          Disfruta La Carbonara donde quieras
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl font-light mb-12"
        >
          Pide tus platos favoritos desde Uber Eats.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://www.ubereats.com/ec/store/la-carbonara-ec/YvgImavdX3q70WYG2UuKzQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pill inline-flex items-center bg-[#06C167] text-white border-[#06C167] text-xs font-bold uppercase tracking-widest hover:bg-[#05a357] transition-all duration-300"
          >
            Pedir Ahora por Uber Eats
          </a>
        </motion.div>
      </div>
    </section>
  );
}
