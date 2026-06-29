import { motion } from 'motion/react';
import { IMAGES } from '../config/images';
import FlagHandshake from './FlagHandshake';

export default function About() {
  return (
    <section id="historia" className="py-24 md:py-32 bg-transparent overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-carbonara-wine/50 translate-x-4 translate-y-4 z-0 rounded-xl"></div>
          <img 
            src={IMAGES.aboutChef} 
            alt="Chef preparing pasta" 
            className="w-full h-auto aspect-[4/5] object-cover relative z-10 shadow-2xl grayscale-[20%] rounded-xl"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-carbonara-gold font-cursive text-8xl mb-4 leading-none">La Storia</h2>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-carbonara-ivory mb-8 leading-tight tracking-widest uppercase font-light">
            Benvenuti a <br />
            La Carbonara
          </h3>
          <div className="w-16 h-px bg-carbonara-wine mb-8 mx-auto md:mx-0"></div>
          <p className="text-lg opacity-80 leading-relaxed font-light mb-4">
            Somos un restaurante italiano dedicado a ofrecer exquisita cocina italiana artesanal, elaborada con ingredientes frescos seleccionados y recetas tradicionales.
          </p>
          <p className="text-lg opacity-80 leading-relaxed font-light mb-8">
            Creemos experiencias memorables y formidables a través de la gastronomía, vinos exclusivos y una atención excepcional.
          </p>
          
          <div className="mb-10 text-center md:text-left">
             <p className="text-2xl font-cursive text-carbonara-gold border-b border-carbonara-wine inline-block pb-1">
               La carbonara, momentos de magia para tu paladar.
             </p>
          </div>
          
          <div className="mt-12 flex flex-col items-center md:items-start">
            <FlagHandshake className="mb-4" />
            <p className="text-sm tracking-widest uppercase opacity-50 mb-2">Operando desde septiembre del 2024.</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
