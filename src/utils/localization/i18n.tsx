import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../assets/locale/en.ts";
import ua from "../../assets/locale/ua.ts";

export const resources = {
  en,
  ua,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
