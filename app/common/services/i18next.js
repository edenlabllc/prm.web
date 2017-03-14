import i18n from 'i18next';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';
import { LANG_COOKIE_NAME } from 'config';

import uk from '../locales/uk.po';
import ru from '../locales/ru.po';

const ServerLanguageMiddleware = require('i18next-express-middleware');

const LanguageDetector = __CLIENT__ ? BrowserLanguageDetector : ServerLanguageMiddleware.LanguageDetector; // eslint-disable-line

const service = i18n;
service.use(new LanguageDetector(null, {
  order: ['querystring', 'cookie', 'navigator', 'htmlTag'],
  caches: ['cookie'],
  lookupCookie: LANG_COOKIE_NAME,
  lookupQuerystring: 'lang',
}));

service.init({
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: 'uk',
  whitelist: ['uk', 'ru'],
  resources: {
    uk: {
      translation: uk,
    },
    ru: {
      translation: ru,
    },
  },
});

export default service;
