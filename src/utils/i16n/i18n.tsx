import i18n, { Callback } from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../assets/locale/en.ts";
import ua from "../../assets/locale/ua.ts";

const config = {
  debug: false,
  compatibilityJSON: "v3",
  resources: {
    en,
    ua,
  },
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
};

i18n.use(initReactI18next).init(config as Callback);

export default i18n;
