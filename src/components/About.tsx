import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-transparent overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-carbonara-gold/30 translate-x-4 translate-y-4 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2732&auto=format&fit=crop" 
            alt="Chef preparing pasta" 
            className="w-full h-auto aspect-[4/5] object-cover relative z-10 shadow-2xl grayscale-[20%]"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h4 className="text-carbonara-gold font-cursive text-8xl mb-4 leading-none">La Storia</h4>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-carbonara-ivory mb-8 leading-tight tracking-widest uppercase font-light">
            Benvenuti a <br />
            <span className="text-carbonara-gold italic">&</span> La Carbonara
          </h2>
          <div className="w-16 h-px bg-carbonara-gold mb-8 mx-auto md:mx-0"></div>
          <p className="text-lg opacity-60 leading-relaxed italic mb-4">
            "Somos un restaurante italiano dedicado a ofrecer auténtica cocina italiana artesanal, elaborada con ingredientes seleccionados y recetas tradicionales."
          </p>
          <p className="text-lg opacity-60 leading-relaxed italic">
            "Nuestra pasión es crear experiencias memorables a través de la gastronomía, los vinos exclusivos y una atención excepcional."
          </p>
          
          <div className="mt-12">
            <p className="font-cursive text-5xl text-carbonara-ivory/40 mt-4">La Carbonara</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
