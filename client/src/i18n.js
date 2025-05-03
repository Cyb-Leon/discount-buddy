import * as i18nLang from 'i18next';
import { initReactI18next } from 'react-i18next';


i18nLang.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'DiscountBuddy',
        searchLabel: 'Ask for deals (e.g., grocery deals under R200)',
        budgetTitle: 'Budget Tracker',
      },
    },
    zu: {
      translation: {
        title: 'IsaphuleloBuddy',
        searchLabel: 'Buza ngezaphulelo (e.g., izaphulelo zokudla ngaphansi kwe-R200)',
        budgetTitle: 'Isilawuli Sesabelomali',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});


export default i18nLang;