import heroBg from './hero-bg.jpg';
import galleriaFoto1 from './galleriafoto1.jpg';
import galleriaFoto2 from './galleria2.jpg';
import galleriaFoto4 from './galleria4.jpg';
import galleriaFoto7 from './galleria7.png';
import barBg from './bar.jpg';
import laCarbonaraBg from './lacarbonara.jpg';
import logoLaCarbonara from './Logolacarbonara-removebg-preview.png';
import pizzaProsciuttoImg from './pizzaproscioutto.jpg';
import pizzaHawaianaImg from './pizzahawaianna.jpg';
import sofiaLaurenImg from './sofiloren.jpg';
import fruttiDiMareImg from './fruttidimare.jpg';
import funghiImg from './funghi.jpg';
import linguineCarbonaraImg from './Linguinelacarbonara.jpg';

export const IMAGES = {
  // Logo
  logo: logoLaCarbonara,

  // Sección Inicio (Hero)
  heroBackground: heroBg,
  
  // Sección Historia (About)
  aboutChef: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2732&auto=format&fit=crop",

  // Platos del Menú
  menu: {
    linguiniSofiaLauren: sofiaLaurenImg,
    pastaCarbonara: linguineCarbonaraImg,
    risottoFrankSinatra: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2680&auto=format&fit=crop",
    risottoFunghi: funghiImg,
    risottoFruttiDiMare: fruttiDiMareImg,
    pizza4Formaggi: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop",
    pizzaSalmon: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=2574&auto=format&fit=crop",
    pizzaProsciutto: pizzaProsciuttoImg,
    pizzaHawaiana: pizzaHawaianaImg
  },

  // Galería de fotos (carrusel)
  gallery: [
    galleriaFoto1,
    galleriaFoto2,
    galleriaFoto4,
    galleriaFoto7
  ],

  // Sección Delivery
  deliveryBackground: barBg,

  // Sección CTA (Reservas - Ci vediamo presto)
  ctaBackground: laCarbonaraBg
};
