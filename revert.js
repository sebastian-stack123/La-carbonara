const fs = require('fs');

function replaceInFile(file, replacements) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(file, content);
}

// src/main.tsx
replaceInFile('src/main.tsx', [
    ["import './i18n';\n", ""]
]);

// src/App.tsx
replaceInFile('src/App.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n", ""],
    ["{t('loading')}", "Cargando..."]
]);

// src/components/Navbar.tsx
replaceInFile('src/components/Navbar.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["import LanguageSwitcher from './LanguageSwitcher';\n", ""],
    ["  const { t } = useTranslation();\n", ""],
    ["{ name: t('nav.home'), href: '#inicio' }", "{ name: 'Inicio', href: '#inicio' }"],
    ["{ name: t('nav.history'), href: '#historia' }", "{ name: 'Historia', href: '#historia' }"],
    ["{ name: t('nav.experience'), href: '#experiencia' }", "{ name: 'Experiencia', href: '#experiencia' }"],
    ["{ name: t('nav.menu'), href: '#menu' }", "{ name: 'Menú', href: '#menu' }"],
    ["{ name: t('nav.delivery'), href: '#delivery' }", "{ name: 'Delivery', href: '#delivery' }"],
    ["{ name: t('nav.reservations'), href: '#reservas' }", "{ name: 'Reservas', href: '#reservas' }"],
    ["{ name: t('nav.contact'), href: '#contacto' }", "{ name: 'Contacto', href: '#contacto' }"],
    ["          <LanguageSwitcher />\n", ""],
    ["        <div className=\"flex items-center gap-4 lg:hidden\">\n          <button \n            className=\"text-carbonara-gold\"\n            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n            aria-label={isMobileMenuOpen ? \"Cerrar menú\" : \"Abrir menú\"}\n          >\n            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}\n          </button>\n        </div>", "        <button \n          className=\"lg:hidden text-carbonara-gold\"\n          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n          aria-label={isMobileMenuOpen ? \"Cerrar menú\" : \"Abrir menú\"}\n        >\n          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}\n        </button>"]
]);

// src/components/Hero.tsx
replaceInFile('src/components/Hero.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('hero.title')}", "La Carbonara"],
    ["{t('hero.subtitle')}", "Ristorante & Bar"],
    ["{t('hero.description')}", "“Una experiencia gastronómica inspirada en la tradición italiana, ingredientes seleccionados, vinos exclusivos y platos elaborados artesanalmente.”"],
    ["{t('hero.bookNow')}", "Reservar Ahora"],
    ["{t('hero.feedback')}", "Cuéntanos tu experiencia"]
]);

// src/components/About.tsx
replaceInFile('src/components/About.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('about.title')}", "La Storia"],
    ["<h3 className=\"font-serif text-2xl md:text-3xl lg:text-4xl text-carbonara-ivory mb-8 leading-tight tracking-widest uppercase font-light\" dangerouslySetInnerHTML={{ __html: t('about.welcome') }}></h3>", "<h3 className=\"font-serif text-2xl md:text-3xl lg:text-4xl text-carbonara-ivory mb-8 leading-tight tracking-widest uppercase font-light\">\n            Benvenuti a <br />\n            La Carbonara\n          </h3>"],
    ["{t('about.p1')}", "Somos un restaurante italiano dedicado a ofrecer exquisita cocina italiana artesanal, elaborada con ingredientes frescos seleccionados y recetas tradicionales."],
    ["{t('about.p2')}", "Creamos experiencias memorables y formidables a través de la gastronomía, vinos exclusivos y una atención excepcional."],
    ["{t('about.quote')}", "La carbonara, momentos de magia para tu paladar."],
    ["{t('about.operatingSince')}", "Operando desde septiembre del 2024."]
]);

// src/components/Features.tsx
replaceInFile('src/components/Features.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["title: t('features.f1')", "title: \"Cocina Italiana Artesanal\""],
    ["title: t('features.f2')", "title: \"Platos Exquisitos\""],
    ["title: t('features.f3')", "title: \"Vinos Exclusivos\""],
    ["title: t('features.f4')", "title: \"Pet Friendly\""],
    ["title: t('features.f5')", "title: \"Coctelería de Autor\""],
    ["title: t('features.f6')", "title: \"Eventos y Celebraciones\""],
    ["title: t('features.f7')", "title: \"Wi-Fi Gratuito\""],
    ["title: t('features.f8')", "title: \"Terraza Exterior\""],
    ["title: t('features.f9')", "title: \"Salón Privado\""],
    ["title: t('features.f10')", "title: \"Atención Personalizada\""],
    ["title: t('features.f11')", "title: \"Citas Románticas\""],
    ["title: t('features.f12')", "title: \"Espacio Seguro e Inclusivo\""],
    ["{t('features.title')}", "Nuestra Experiencia"]
]);

// src/components/Menu.tsx
replaceInFile('src/components/Menu.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["title: t('menu.items.sofia.title')", "title: \"Fettuccine Sofia Lauren\""],
    ["description: t('menu.items.sofia.desc')", "description: \"(camarón, pollo, napoli y mamamia)\""],
    ["title: t('menu.items.carbonara.title')", "title: \"Linguinne a la carbonara\""],
    ["description: t('menu.items.carbonara.desc')", "description: \"(linguine, tocino, jamón serrano)\""],
    ["title: t('menu.items.sinatra.title')", "title: \"Risotto Frank Sinatra\""],
    ["description: t('menu.items.sinatra.desc')", "description: \"(lomo fino, camarón, napoli y mamamia)\""],
    ["title: t('menu.items.funghi.title')", "title: \"Risotto Funghi\""],
    ["description: t('menu.items.funghi.desc')", "description: \"(setas, portobellos, champiñon, hongos shiitake)\""],
    ["title: t('menu.items.mare.title')", "title: \"Fruto di Mare\""],
    ["description: t('menu.items.mare.desc')", "description: \"(Calamar, camarón, mejillón, pulpo)\""],
    ["title: t('menu.items.formaggi.title')", "title: \"Pizza 4 Formaggui\""],
    ["description: t('menu.items.formaggi.desc')", "description: \"(salsa blanca)\""],
    ["title: t('menu.items.salmon.title')", "title: \"Pizza de Salmón Ahumado\""],
    ["description: t('menu.items.salmon.desc')", "description: \"Finas láminas de salmón ahumado, alcaparras y queso crema.\""],
    ["title: t('menu.items.prosciutto.title')", "title: \"Pizza Prosciutto Crudo\""],
    ["description: t('menu.items.prosciutto.desc')", "description: \"Mozzarella y auténtico prosciutto crudo importado.\""],
    ["title: t('menu.items.hawaiana.title')", "title: \"Pizza Hawaiana\""],
    ["description: t('menu.items.hawaiana.desc')", "description: \"Salsa roja, mozzarella, jamón, tocino y piña.\""],
    ["{t('menu.ilNostro')}", "Il nostro"],
    ["{t('menu.featured')}", "Menú Destacado"],
    ["{t('menu.viewFull')}", "Ver Menú Completo"]
]);

// src/components/OrderOnline.tsx
replaceInFile('src/components/OrderOnline.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('order.title')}", "Delivery"],
    ["{t('order.subtitle')}", "Disfruta La Carbonara donde quieras"],
    ["{t('order.desc')}", "Contamos con delivery gratuito a toda la González Suárez."],
    ["{t('order.uber')}", "Uber Eats"],
    ["{t('order.rappi')}", "Rappi"],
    ["{t('order.call')}", "Llamar Ahora"]
]);

// src/components/Feedback.tsx
replaceInFile('src/components/Feedback.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('feedback.title')}", "Sugerencias"],
    ["{t('feedback.subtitle')}", "Cuéntanos tu experiencia"],
    ["{t('feedback.desc')}", "Tus comentarios nos ayudan a mejorar y seguir ofreciendo experiencias memorables y formidables."],
    ["{t('feedback.name')}", "Nombre"],
    ["{t('feedback.email')}", "Email"],
    ["{t('feedback.message')}", "Mensaje / Sugerencia"],
    ["{t('feedback.submit')}", "Enviar Sugerencia"]
]);

// src/components/CTA.tsx
replaceInFile('src/components/CTA.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('cta.title')}", "Ci vediamo presto"],
    ["{t('cta.subtitle')}", "Vive una verdadera experiencia italiana"],
    ["{t('cta.desc')}", "Reserva tu mesa y descubre los sabores auténticos de Italia."],
    ["{t('cta.book')}", "Reservar Mesa"],
    ["{t('cta.call')}", "Llamar Ahora"]
]);

// src/components/Info.tsx
replaceInFile('src/components/Info.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('contact.hoursTitle')}", "Horarios"],
    ["{t('contact.restaurant')}", "Restaurante"],
    ["{t('contact.days1')}", "Lun - Jueves"],
    ["{t('contact.hours1')}", "12:00 - 22:30"],
    ["{t('contact.days2')}", "Vie - Sábado"],
    ["{t('contact.hours2')}", "12:00 - 23:00"],
    ["{t('contact.days3')}", "Domingo"],
    ["<span className=\"text-right text-carbonara-gold text-[10px] leading-tight\" dangerouslySetInnerHTML={{ __html: t('contact.hours3') }}></span>", "<span className=\"text-right text-carbonara-gold text-[10px] leading-tight\">Bajo reserva<br/>únicamente</span>"],
    ["{t('contact.lunch')}", "Almuerzos"],
    ["{t('contact.lunchDays')}", "Todos los días"],
    ["{t('contact.lunchHours')}", "12:00 - 15:30"],
    ["{t('contact.sundayOnly')}", "Domingos bajo reserva únicamente"],
    ["{t('contact.followUs')}", "Síguenos"],
    ["{t('contact.quote')}", "\"Un nuevo concepto en cocina Italiana. Creemos en que la buena comida une a las personas.\""],
    ["{t('contact.visitUs')}", "Visítanos"]
]);

// src/components/Footer.tsx
replaceInFile('src/components/Footer.tsx', [
    ["import { useTranslation } from 'react-i18next';\n", ""],
    ["  const { t } = useTranslation();\n\n", ""],
    ["{t('footer.quote')}", "La carbonara, momentos de magia para tu paladar."],
    ["{t('footer.desc')}", "Auténtica cocina italiana artesanal. Ingredientes frescos, vinos exclusivos y atención excepcional en Quito."],
    ["{t('footer.contact')}", "Contacto"],
    ["{t('footer.hours')}", "Horarios"],
    ["{t('footer.days1')}", "Lun - Jueves:"],
    ["{t('footer.days2')}", "Vie - Sábado:"],
    ["{t('footer.days3')}", "Domingo:"],
    ["<span className=\"text-right text-carbonara-gold text-[10px] leading-tight\" dangerouslySetInnerHTML={{ __html: t('contact.hours3') }}></span>", "<span className=\"text-right text-carbonara-gold text-[10px] leading-tight\">Bajo reserva<br/>únicamente</span>"],
    ["{t('footer.execMenu')}", "De Lunes a Viernes menú ejecutivo"],
    ["{t('footer.links')}", "Enlaces"],
    ["{t('footer.rights')}", "© 2024 LA CARBONARA. TUTTI I DIRITTI RISERVATI."],
    ["{t('footer.admission')}", "Nos reservamos el derecho de admisión."],
    ["{t('footer.privacy')}", "Política de Privacidad"],
    ["{t('footer.terms')}", "Términos y Condiciones"],
    ["{t('footer.cookies')}", "Política de Cookies"],
    ["{t('footer.created')}", "CREADO POR"]
]);

console.log("Revert complete.");
