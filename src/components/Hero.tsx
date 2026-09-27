import { IMAGES } from '../config/images';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBackground} 
          alt="Ambiente elegante de La Carbonara, restaurante italiano en Quito"
          width="821"
          height="613"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-carbonara-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-carbonara-ivory px-4 w-full max-w-5xl mx-auto flex flex-col items-center pt-20">
        <h2 className="font-cursive text-7xl md:text-9xl text-carbonara-gold mb-4 leading-none">
          {t('hero.title')}
        </h2>
        
        <h1 className="text-xl md:text-3xl font-light tracking-widest uppercase mb-6">
          {t('hero.subtitle')}
        </h1>
        
        <p className="opacity-80 text-sm md:text-base leading-relaxed mb-8 italic max-w-2xl">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mt-4">
          <a href="#delivery" className="bg-carbonara-wine text-white px-10 py-5 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl text-center shadow-2xl border border-carbonara-wine/50">
            {t('hero.bookNow')}
          </a>
          <a href="#sugerencias" className="bg-carbonara-gold text-black px-10 py-5 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#b09155] transition-colors rounded-xl text-center shadow-2xl border border-carbonara-gold">
            {t('hero.feedback')}
          </a>
        </div>
      </div>
    </section>
  );
}
