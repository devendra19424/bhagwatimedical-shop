
import { commonTranslations } from "./common";
import { navigationTranslations } from "./navigation";
import { productTranslations } from "./products";
import { categoryTranslations } from "./categories";
import { homeTranslations } from "./home";
import { deliveryTranslations } from "./delivery";
import { contactTranslations } from "./contact";
import { languageTranslations } from "./language";
import { productImages } from "./productImages";

export const translations = {
  ...commonTranslations,
  ...navigationTranslations,
  ...productTranslations,
  ...categoryTranslations,
  ...homeTranslations,
  ...deliveryTranslations,
  ...contactTranslations,
  ...languageTranslations,
};

export { productImages };

export type Language = "en" | "hi";

export interface TranslationType {
  [key: string]: {
    en: string;
    hi: string;
  };
}
