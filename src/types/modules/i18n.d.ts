import ua from "../../assets/locale/ua";
import en from "../../assets/locale/ua";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    resources: {
      ns1: typeof en;
      ns2: typeof ua;
    };
    lng: "en";
    fallbackLng: "en";
    interpolation: {
      escapeValue: false; // not needed for react as it escapes by default
    };
    react: {
      useSuspense: true;
    };
  }
}
