import i18n, { Callback } from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../assets/locale/en.ts";
import ua from "../../assets/locale/ua.ts";

export const resources = {
  en,
  ua,
} as const;

const config: {
  interpolation: { escapeValue: boolean };
  debug: boolean;
  lng: string;
  compatibilityJSON: string;
  resources: {
    readonly en: {
      auth: {
        sigIn: string;
        or: string;
        sigUp: string;
        noAccount: string;
        forgotPass: string;
        haveAccount: string;
      };
    };
    readonly ua: {
      auth: {
        sigIn: string;
        or: string;
        sigUp: string;
        noAccount: string;
        forgotPass: string;
        haveAccount: string;
      };
    };
  };
  keySeparator: boolean;
  react: { useSuspense: boolean };
  fallbackLng: string;
} = {
  debug: true,
  compatibilityJSON: "v3",
  resources,
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

i18n.use(initReactI18next).init(config);

export default i18n;
