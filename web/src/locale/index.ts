import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import cn from "./cn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    cn: {
      translation: cn,
    },
  },
  lng: "cn",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
