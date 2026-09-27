import { IMAGES } from '../config/images';
import { useTranslation } from 'react-i18next';

export default function OrderOnline() {
  const { t } = useTranslation();

  return (
    <section id="delivery" className="relative py-32 overflow-hidden flex items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.deliveryBackground} 
          alt="Ambiente de bar y pizzas de La Carbonara" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-carbonara-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-cursive text-5xl text-carbonara-gold mb-2">
          {t('order.title')}
        </h2>
        
        <h3 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight uppercase font-light tracking-widest">
          {t('order.subtitle')}
        </h3>

        <p className="font-cursive text-2xl md:text-3xl text-carbonara-gold/90 mb-12 max-w-2xl mx-auto">
          {t('order.desc')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="https://www.ubereats.com/ec/store/la-carbonara-ec/YvgImavdX3q70WYG2UuKzQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-carbonara-wine text-white px-10 py-4 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl shadow-2xl border border-carbonara-wine/50 w-full sm:w-auto text-center"
          >
            {t('order.uber')}
          </a>
          <a 
            href="https://www.rappi.com.ec/restaurantes/35749-la-carbonara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-carbonara-wine text-white px-10 py-4 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl shadow-2xl border border-carbonara-wine/50 w-full sm:w-auto text-center"
          >
            {t('order.rappi')}
          </a>
          <a 
            href="tel:+593998594056" 
            className="bg-carbonara-wine text-white px-10 py-4 text-sm font-serif tracking-[0.15em] uppercase hover:bg-[#60141e] transition-colors rounded-xl shadow-2xl border border-carbonara-wine/50 w-full sm:w-auto text-center"
          >
            {t('order.call')}
          </a>
        </div>
      </div>
    </section>
  );
}
