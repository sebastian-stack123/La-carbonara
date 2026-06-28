import { motion } from 'motion/react';

export default function Feedback() {
  return (
    <section id="sugerencias" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-carbonara-gold font-cursive text-5xl mb-2">Sugerencias</h4>
          <h2 className="font-sans font-light tracking-widest uppercase text-2xl md:text-3xl text-carbonara-ivory mb-4">Cuéntanos tu experiencia</h2>
          <div className="w-24 h-px bg-carbonara-gold mx-auto opacity-50 mb-8"></div>
          <p className="opacity-60 font-light max-w-2xl mx-auto italic">
            Tus comentarios nos ayudan a mejorar y seguir ofreciendo experiencias memorables y formidables.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-carbonara-wine/40 backdrop-blur-md p-8 md:p-12 border border-carbonara-wine/60 rounded-2xl shadow-2xl"
        >
          <form action="https://formsubmit.co/Lacarbonaraecuador@gmail.com" method="POST" className="flex flex-col gap-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nueva sugerencia de La Carbonara" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest opacity-80">Nombre</label>
                <input type="text" id="name" name="Nombre" required className="bg-black/20 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-carbonara-gold transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest opacity-80">Email</label>
                <input type="email" id="email" name="Email" required className="bg-black/20 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-carbonara-gold transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest opacity-80">Mensaje / Sugerencia</label>
              <textarea id="message" name="Mensaje" rows={4} required className="bg-black/20 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-carbonara-gold transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="mt-4 bg-carbonara-gold text-black px-10 py-4 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#b09155] transition-all duration-300 rounded-xl shadow-lg w-full md:w-auto self-center">
              Enviar Sugerencia
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
