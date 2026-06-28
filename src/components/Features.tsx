import { motion } from 'motion/react';
import { ChefHat, Leaf, UtensilsCrossed, Wine, GlassWater, Wifi, Sun, PawPrint, Users, HeartHandshake, Heart, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <ChefHat className="w-10 h-10" />, title: "Cocina Italiana Artesanal" },
    { icon: <UtensilsCrossed className="w-10 h-10" />, title: "Platos Exquisitos" },
    { icon: <Wine className="w-10 h-10" />, title: "Vinos Exclusivos" },
    { icon: <PawPrint className="w-10 h-10" />, title: "Pet Friendly" },
    { icon: <Leaf className="w-10 h-10" />, title: "Ingredientes Frescos" },
    { icon: <GlassWater className="w-10 h-10" />, title: "Eventos y Celebraciones" },
    { icon: <Wifi className="w-10 h-10" />, title: "Wi-Fi Gratuito" },
    { icon: <Sun className="w-10 h-10" />, title: "Terraza Exterior" },
    { icon: <Users className="w-10 h-10" />, title: "Salón Privado" },
    { icon: <HeartHandshake className="w-10 h-10" />, title: "Atención Personalizada" },
    { icon: <Heart className="w-10 h-10" />, title: "Citas Románticas" },
    { icon: <ShieldCheck className="w-10 h-10" />, title: "Espacio Seguro e Inclusivo" },
  ];

  return (
    <section id="experiencia" className="py-24 bg-transparent text-carbonara-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl md:text-6xl mb-4 text-carbonara-gold">Nuestra Experiencia</h2>
          <div className="w-24 h-px bg-carbonara-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-carbonara-wine/60 backdrop-blur-sm border border-carbonara-wine rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-2xl hover:bg-carbonara-wine/80 transition-colors"
            >
              <div className="text-carbonara-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-sans text-xs md:text-sm uppercase tracking-widest font-semibold">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
