import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';
import { IMAGES } from '../config/images';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t } = useTranslation();

  const menuItems = [
    {
      title: t('menu.items.sofia.title'),
      description: t('menu.items.sofia.desc'),
      image: IMAGES.menu.linguiniSofiaLauren
    },
    {
      title: t('menu.items.carbonara.title'),
      description: t('menu.items.carbonara.desc'),
      image: IMAGES.menu.pastaCarbonara
    },
    {
      title: t('menu.items.sinatra.title'),
      description: t('menu.items.sinatra.desc'),
      image: IMAGES.menu.risottoFrankSinatra
    },
    {
      title: t('menu.items.funghi.title'),
      description: t('menu.items.funghi.desc'),
      image: IMAGES.menu.risottoFunghi
    },
    {
      title: t('menu.items.mare.title'),
      description: t('menu.items.mare.desc'),
      image: IMAGES.menu.risottoFruttiDiMare
    },
    {
      title: t('menu.items.formaggi.title'),
      description: t('menu.items.formaggi.desc'),
      isVegetarian: true,
      image: IMAGES.menu.pizza4Formaggi
    },
    {
      title: t('menu.items.salmon.title'),
      description: t('menu.items.salmon.desc'),
      image: IMAGES.menu.pizzaSalmon
    },
    {
      title: t('menu.items.prosciutto.title'),
      description: t('menu.items.prosciutto.desc'),
      image: IMAGES.menu.pizzaProsciutto
    },
    {
      title: t('menu.items.hawaiana.title'),
      description: t('menu.items.hawaiana.desc'),
      image: IMAGES.menu.pizzaHawaiana
    }
  ];

  return (
    <section id="menu" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-carbonara-gold font-cursive text-5xl mb-2">{t('menu.ilNostro')}</h2>
          <h3 className="font-sans font-light tracking-widest uppercase text-2xl md:text-3xl text-carbonara-ivory mb-4">{t('menu.featured')}</h3>
          <div className="w-24 h-px bg-carbonara-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              className="bg-carbonara-wine/40 border border-carbonara-wine/60 rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-carbonara-wine/30 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2 mb-2 w-full">
                  <h3 className="font-sans font-bold text-lg text-carbonara-ivory">{item.title}</h3>
                  {item.isVegetarian && <Leaf className="w-4 h-4 text-green-400" title="Vegetariano" />}
                </div>
                <p className="text-carbonara-ivory opacity-70 text-xs leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/La_Carbonara_menu.pdf" target="_blank" rel="noopener noreferrer" className="bg-carbonara-wine text-white px-12 py-5 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl shadow-2xl border border-carbonara-wine/50 inline-block">
            {t('menu.viewFull')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
