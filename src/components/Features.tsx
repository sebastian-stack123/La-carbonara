import { motion } from 'motion/react';
import { ChefHat, Leaf, UtensilsCrossed, Wine, GlassWater, Wifi, Sun, PawPrint, Users, HeartHandshake, Heart, ShieldCheck, Martini } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    { icon: <ChefHat className="w-10 h-10" />, title: t('features.f1') },
    { icon: <UtensilsCrossed className="w-10 h-10" />, title: t('features.f2') },
    { icon: <Wine className="w-10 h-10" />, title: t('features.f3') },
    { icon: <PawPrint className="w-10 h-10" />, title: t('features.f4') },
    { icon: <Martini className="w-10 h-10" />, title: t('features.f5') },
    { icon: <GlassWater className="w-10 h-10" />, title: t('features.f6') },
    { icon: <Wifi className="w-10 h-10" />, title: t('features.f7') },
    { icon: <Sun className="w-10 h-10" />, title: t('features.f8') },
    { icon: <Users className="w-10 h-10" />, title: t('features.f9') },
    { icon: <HeartHandshake className="w-10 h-10" />, title: t('features.f10') },
    { icon: <Heart className="w-10 h-10" />, title: t('features.f11') },
    { icon: <ShieldCheck className="w-10 h-10" />, title: t('features.f12') },
  ];

  return (
    <section id="experiencia" className="py-24 bg-transparent text-carbonara-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-5xl md:text-6xl mb-4 text-carbonara-gold">{t('features.title')}</h2>
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
