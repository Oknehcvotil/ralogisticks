import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import uaTranslation from '../assets/translations/ua.json';
import enTranslation from '../assets/translations/en.json';
import ruTranslation from '../assets/translations/ru.json';

const savedLanguage = JSON.parse(localStorage.getItem('persist:language'));
console.log(savedLanguage);

const currentLanguage = () => {
  return savedLanguage?.value === '"en"'
    ? 'en'
    : savedLanguage?.value === '"ua"'
    ? 'ua'
    : 'ru';
};
// const currentLanguage = () =>
//   savedLanguage.value === undefined ? 'ua' : savedLanguage.value;
// console.log(currentLanguage());

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
  fallbackLng: currentLanguage(),
  interpolation: {
    escapeValue: false,
  },
  detection:{
    order: ['cookie', 'localStorage'],
    cashes: ['cookie']
  }
});

export default i18n;
