
import { commonTranslations } from "./common";
import { navigationTranslations } from "./navigation";
import { productTranslations } from "./products";
import { categoryTranslations } from "./categories";
import { homeTranslations } from "./home";
import { deliveryTranslations } from "./delivery";
import { contactTranslations } from "./contact";
import { languageTranslations } from "./language";

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

export type Language = "en" | "hi";

export interface TranslationType {
  [key: string]: {
    en: string;
    hi: string;
  };
}
