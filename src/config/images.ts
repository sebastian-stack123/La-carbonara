import heroBg from './hero-bg.jpg';
import galleriaFoto1 from './galleriafoto1.jpg';
import galleriaFoto2 from './galleria2.jpg';
import galleriaFoto4 from './galleria4.jpg';
import galleriaFoto7 from './galleria7.png';
import lasagnaImg from './lasagna.jpg';
import barBg from './bar.jpg';
import laCarbonaraBg from './lacarbonara.jpg';
import logoLaCarbonara from './Logolacarbonara-removebg-preview.png';
import pizzaProsciuttoImg from './pizzaproscioutto.jpg';
import pizzaHawaianaImg from './pizzahawaianna.jpg';
import sofiaLaurenImg from './sofiloren-1.jpg';
import fruttiDiMareImg from './fruttidimare.jpg';
import funghiImg from './rissotofungui.jpg';
import linguineCarbonaraImg from './Linguinelacarbonara.jpg';
import frankSinatraImg from './franksinatra.jpg';
import pizzaSalmonImg from './piztsadesalmonahumado.jpg';

export const IMAGES = {
  // Logo
  logo: logoLaCarbonara,

  // Sección Inicio (Hero)
  heroBackground: heroBg,
  
  // Sección Historia (About)
  aboutChef: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=70&w=600&fm=webp&auto=format&fit=crop",

  // Platos del Menú
  menu: {
    linguiniSofiaLauren: sofiaLaurenImg,
    pastaCarbonara: linguineCarbonaraImg,
    risottoFrankSinatra: frankSinatraImg,
    risottoFunghi: funghiImg,
    risottoFruttiDiMare: fruttiDiMareImg,
    pizza4Formaggi: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=70&w=600&fm=webp&auto=format&fit=crop",
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
