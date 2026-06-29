import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LegalProps = {
  view: 'privacy' | 'terms' | 'cookies';
};

export default function Legal({ view }: LegalProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-carbonara-black font-sans text-carbonara-ivory selection:bg-carbonara-gold selection:text-black relative">
      <div className="atmospheric-bg fixed top-0 left-0 w-full h-full pointer-events-none"></div>
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="bg-carbonara-wine/20 backdrop-blur-md p-8 md:p-12 border border-carbonara-wine/40 rounded-2xl shadow-2xl">
          {view === 'privacy' && <PrivacyPolicy />}
          {view === 'terms' && <TermsAndConditions />}
          {view === 'cookies' && <CookiePolicy />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-6 opacity-90 font-light leading-relaxed">
      <h1 className="font-cursive text-4xl text-carbonara-gold mb-8 text-center">Política de Privacidad</h1>
      
      <p><strong>Última actualización:</strong> 28 de junio de 2026</p>
      
      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">1. Identidad del Responsable</h2>
      <p>
        La Carbonara, con domicilio en Av González Suárez y Jacinto Bejarano, Quito, Ecuador, es el responsable del uso y protección de sus datos personales.
      </p>
      
      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">2. Datos que Recopilamos</h2>
      <p>Para llevar a cabo las finalidades descritas en esta política, recabaremos datos personales mediante:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Formularios de reserva o sugerencias en el sitio web (si aplica).</li>
        <li>Contacto directo a través de WhatsApp.</li>
        <li>Datos enviados voluntariamente por los clientes.</li>
      </ul>
      <p className="mt-4">Los datos recabados pueden incluir:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Nombre y apellidos</li>
        <li>Teléfono de contacto</li>
        <li>Correo electrónico</li>
        <li>Información sobre reservas o requerimientos dietéticos</li>
      </ul>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">3. Datos Técnicos y Servicios de Terceros</h2>
      <p>Nuestro sitio web utiliza herramientas de terceros para mejorar la experiencia del usuario y el rendimiento del sitio. Estas herramientas pueden recopilar datos técnicos de forma automática, tales como:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Tipo de dispositivo y sistema operativo.</li>
        <li>Tipo de navegador utilizado.</li>
        <li>Páginas visitadas y tiempo de permanencia.</li>
        <li>Datos generales de navegación.</li>
      </ul>
      <p className="mt-4">Los servicios que utilizamos incluyen:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Google Analytics:</strong> Para analizar el tráfico y el comportamiento general de los usuarios en el sitio.</li>
        <li><strong>Google Search Console:</strong> Para el monitoreo y optimización del posicionamiento del sitio web en los motores de búsqueda.</li>
        <li><strong>Vercel:</strong> Como plataforma tecnológica para el alojamiento y funcionamiento de nuestro sitio web.</li>
      </ul>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">4. Finalidad del Tratamiento</h2>
      <p>Los datos personales que recabamos los utilizaremos para las siguientes finalidades necesarias para el servicio:</p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Gestión y confirmación de reservas.</li>
        <li>Atención al cliente y resolución de quejas o sugerencias.</li>
        <li>Envío de promociones y boletines informativos (solo si ha dado su consentimiento).</li>
      </ul>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">5. Transferencia de Datos</h2>
      <p>
        Sus datos personales no serán compartidos con terceros sin su consentimiento, salvo las excepciones previstas por la ley o el uso de los servicios técnicos mencionados anteriormente necesarios para el funcionamiento del sitio.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">6. Medios de Contacto</h2>
      <p>
        Usted puede acceder, rectificar o cancelar sus datos personales en cualquier momento comunicándose con nosotros a través de:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Correo electrónico: Lacarbonaraecuador@gmail.com</li>
        <li>Teléfono: 099 859 4056</li>
      </ul>
    </div>
  );
}

function TermsAndConditions() {
  return (
    <div className="space-y-6 opacity-90 font-light leading-relaxed">
      <h1 className="font-cursive text-4xl text-carbonara-gold mb-8 text-center">Términos y Condiciones</h1>
      
      <p><strong>Última actualización:</strong> 28 de junio de 2026</p>
      
      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">1. Aceptación de los Términos</h2>
      <p>
        Al acceder y utilizar el sitio web de La Carbonara, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo, le rogamos no utilizar nuestros servicios en línea.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">2. Uso del Sitio Web</h2>
      <p>
        Usted se compromete a utilizar el sitio web de manera diligente y lícita. Queda prohibido el uso con fines fraudulentos o para dañar el funcionamiento del sitio o a terceros.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">3. Políticas de Reserva</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Las reservas están sujetas a disponibilidad y confirmación por parte del restaurante.</li>
        <li>Nos reservamos el derecho de retener su mesa por un tiempo máximo de 15 minutos desde la hora pautada; después de este tiempo, la reserva puede ser cancelada.</li>
        <li>Nos reservamos el derecho de aplicar políticas de cancelación para reservas grupales o fechas especiales.</li>
      </ul>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">4. Propiedad Intelectual</h2>
      <p>
        Todo el contenido, diseños, logotipos e imágenes en este sitio web pertenecen a La Carbonara o sus licenciantes. Queda prohibida su reproducción sin autorización previa y por escrito.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">5. Limitación de Responsabilidad</h2>
      <p>
        La Carbonara no será responsable de ningún daño directo o indirecto resultante del uso o la imposibilidad de uso del sitio web o de los servicios de reserva.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">6. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en el sitio web.
      </p>
    </div>
  );
}

function CookiePolicy() {
  return (
    <div className="space-y-6 opacity-90 font-light leading-relaxed">
      <h1 className="font-cursive text-4xl text-carbonara-gold mb-8 text-center">Política de Cookies</h1>
      
      <p><strong>Última actualización:</strong> 28 de junio de 2026</p>
      
      <p>
        El sitio web de La Carbonara utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o móvil) cuando visita un sitio web. Estas permiten recordar sus preferencias y acciones a lo largo del tiempo.
      </p>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">¿Qué tipo de cookies utilizamos?</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Cookies Técnicas y Necesarias:</strong> Son estrictamente necesarias para el correcto funcionamiento del sitio web, como la navegación o la seguridad. Sin estas cookies, el sitio web podría no funcionar correctamente.</li>
        <li><strong>Cookies Analíticas:</strong> Nos permiten medir el número de visitas y conocer cómo navegan los usuarios (por ejemplo, Google Analytics). Esta información es anónima y nos ayuda a mejorar nuestros servicios y la experiencia en línea.</li>
      </ul>

      <h2 className="text-xl font-medium text-carbonara-gold mt-8 mb-4">Gestión de Cookies</h2>
      <p>
        Usted puede configurar su navegador para aceptar, bloquear o eliminar las cookies. Consulte las instrucciones de su navegador para modificar estas preferencias:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
        <li>Safari: Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
        <li>Firefox: Opciones &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
      </ul>
      <p className="mt-4 text-sm opacity-80">
        Tenga en cuenta que deshabilitar ciertas cookies puede afectar el funcionamiento de algunas secciones de nuestro sitio web.
      </p>
    </div>
  );
}
