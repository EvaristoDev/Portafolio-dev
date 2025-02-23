
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '@/i18n/locales/en.json';
import spanish from '@/i18n/locales/es.json';

const resources = {
  en: {
    translation: english
  },
  es: {
    translation: spanish
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

export const getTranslation = async (language) => {
    const response = await fetch(`/locales/cv.${language}.json`);
    return await response.json();
  };
  