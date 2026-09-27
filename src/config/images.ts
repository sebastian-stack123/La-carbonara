import galleriaFoto1 from './galleriafoto1.webp';
import galleriaFoto2 from './galleria2.webp';
import galleriaFoto4 from './galleria4.webp';
import galleriaFoto7 from './galleria7.webp';
import lasagnaImg from './lasagna.webp';
import barBg from './bar.webp';
import laCarbonaraBg from './lacarbonara.webp';
import logoLaCarbonara from './logo-carbonara.webp';
import pizzaProsciuttoImg from './pizzaproscioutto.webp';
import pizzaHawaianaImg from './pizzahawaianna.webp';
import sofiaLaurenImg from './sofiloren-1.webp';
import fruttiDiMareImg from './fruttidimare.webp';
import funghiImg from './rissotofungui.webp';
import linguineCarbonaraImg from './Linguinelacarbonara.webp';
import frankSinatraImg from './franksinatra.webp';
import pizzaSalmonImg from './piztsadesalmonahumado.webp';
import pizza4FormaggiImg from './pizza4formeaggui.webp';
import aboutHistoriaImg from './fotolastoria.webp';
import mapLocationImg from './mapadeubicacion.webp';

export const IMAGES = {
  // Logo
  logo: logoLaCarbonara,

  // Sección Inicio (Hero)
  heroBackground: '/images/hero-bg.webp',
  
  // Mapa
  mapLocation: mapLocationImg,
  
  // Sección Historia (About)
  aboutChef: aboutHistoriaImg,

  // Platos del Menú
  menu: {
    linguiniSofiaLauren: sofiaLaurenImg,
    pastaCarbonara: linguineCarbonaraImg,
    risottoFrankSinatra: frankSinatraImg,
    risottoFunghi: funghiImg,
    risottoFruttiDiMare: fruttiDiMareImg,
    pizza4Formaggi: pizza4FormaggiImg,
    pizzaSalmon: pizzaSalmonImg,
    pizzaProsciutto: pizzaProsciuttoImg,
    pizzaHawaiana: pizzaHawaianaImg
  },

  // Galería de fotos (carrusel)
  gallery: [
    galleriaFoto1,
    galleriaFoto2,
    galleriaFoto4,
    galleriaFoto7,
    lasagnaImg
  ],

  // Sección Delivery
  deliveryBackground: barBg,

  // Sección CTA (Reservas - Ci vediamo presto)
  ctaBackground: laCarbonaraBg
};
