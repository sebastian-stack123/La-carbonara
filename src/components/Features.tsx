import { motion } from 'motion/react';
import { ChefHat, Wine, PawPrint, Leaf, GlassWater, Wifi, Sun, UtensilsCrossed } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <ChefHat className="w-8 h-8" />, title: "Cocina Italiana Auténtica" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: "Platos Gourmet Artesanales" },
    { icon: <Wine className="w-8 h-8" />, title: "Vinos Exclusivos" },
    { icon: <PawPrint className="w-8 h-8" />, title: "Pet Friendly" },
    { icon: <Leaf className="w-8 h-8" />, title: "Ingredientes Frescos" },
    { icon: <GlassWater className="w-8 h-8" />, title: "Eventos y Celebraciones" },
    { icon: <Wifi className="w-8 h-8" />, title: "Wi-Fi Gratuito" },
    { icon: <Sun className="w-8 h-8" />, title: "Terraza Exterior" },
  ];

  return (
    <section className="py-24 bg-transparent text-carbonara-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-4xl md:text-5xl mb-4 text-carbonara-gold">Nuestra Experiencia</h2>
          <div className="w-24 h-px bg-carbonara-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-carbonara-gold/30 flex items-center justify-center text-carbonara-gold mb-4 group-hover:bg-carbonara-gold group-hover:text-carbonara-black transition-all duration-500 glass">
                {feature.icon}
              </div>
              <h3 className="font-sans text-[10px] md:text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-carbonara-gold transition-colors duration-300">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
