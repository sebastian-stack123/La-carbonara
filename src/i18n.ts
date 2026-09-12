import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esTranslations from './locales/es.json';
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import ptTranslations from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslations },
      en: { translation: enTranslations },
      de: { translation: deTranslations },
      pt: { translation: ptTranslations },
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
