import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import frTranslation from './locales/fr/translation.json';
import enTranslation from './locales/en/translation.json';
import itTranslation from './locales/it/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      },
      it: {
        translation: itTranslation
      },
      es: {
        translation: esTranslation
      }
    }
  });

export default i18n;