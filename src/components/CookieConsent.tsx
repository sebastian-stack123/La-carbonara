import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('carbonara_cookie_consent');
    if (!saved) {
      // Delay showing slightly so it does not interfere with the initial view
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    } else if (saved === 'accepted') {
      applyConsent(true);
    } else {
      applyConsent(false);
    }
  }, []);

  const applyConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      });
      if (granted && typeof (window as any).loadGTM === 'function') {
        (window as any).loadGTM();
      }
    }
  };

  const handleAccept = () => {
    localStorage.setItem('carbonara_cookie_consent', 'accepted');
    applyConsent(true);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('carbonara_cookie_consent', 'rejected');
    applyConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      role="region" 
      aria-label="Consentimiento de cookies" 
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[9999] bg-carbonara-black/95 border border-carbonara-gold/40 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-carbonara-ivory text-xs font-sans transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-4">
        <Cookie className="w-5 h-5 text-carbonara-gold flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed opacity-90 text-[11px] sm:text-xs">
          {t('cookieConsent.text')}{' '}
          <a href="#cookies" className="text-carbonara-gold underline hover:text-white transition-colors">
            {t('cookieConsent.moreInfo')}
          </a>
        </p>
      </div>

      <div className="flex items-center justify-end gap-2.5">
        <button
          onClick={handleReject}
          className="px-3.5 py-2 rounded-lg border border-white/20 text-carbonara-ivory/80 hover:text-white hover:border-white/40 transition-colors text-[11px] font-medium uppercase tracking-wider"
        >
          {t('cookieConsent.reject')}
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-lg bg-carbonara-gold text-black hover:bg-[#b09155] transition-colors text-[11px] font-bold uppercase tracking-wider shadow-md"
        >
          {t('cookieConsent.accept')}
        </button>
      </div>
    </div>
  );
}
