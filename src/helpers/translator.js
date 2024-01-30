import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uaTranslation from '../assets/translations/ua.json';
import enTranslation from '../assets/translations/en.json';
import ruTranslation from '../assets/translations/ru.json';

const savedLanguage = localStorage.getItem('language');

i18n.use(initReactI18next).init({
  resources: {
    ua: {
      translation: uaTranslation,
    },
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
  fallbackLng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', newLanguage => {
  localStorage.setItem('language', newLanguage);
});

export default i18n;
