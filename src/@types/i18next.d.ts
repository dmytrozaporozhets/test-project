import "i18next";
import resources from "./resourses";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    resources: typeof resources;
  }
}
