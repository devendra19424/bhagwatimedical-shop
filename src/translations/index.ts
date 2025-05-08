
import { commonTranslations } from "./common";
import { navigationTranslations } from "./navigation";
import { productTranslations } from "./products";
import { categoryTranslations } from "./categories";
import { homeTranslations } from "./home";
import { deliveryTranslations } from "./delivery";
import { contactTranslations } from "./contact";
import { languageTranslations } from "./language";
import { authTranslations } from "./auth";
import { productImages } from "./productImages";
import { profileTranslations } from "./profile";
import { adminTranslations } from "./admin";
import { checkoutTranslations } from "./checkout";
import { trackingTranslations } from "./tracking";
import { chatTranslations } from "./chat";

export const translations = {
  ...commonTranslations,
  ...navigationTranslations,
  ...productTranslations,
  ...categoryTranslations,
  ...homeTranslations,
  ...deliveryTranslations,
  ...contactTranslations,
  ...languageTranslations,
  ...authTranslations,
  ...profileTranslations,
  ...adminTranslations,
  ...checkoutTranslations,
  ...trackingTranslations,
  ...chatTranslations,
};

export { productImages };

export type Language = "en" | "hi";

export interface TranslationType {
  [key: string]: {
    en: string;
    hi: string;
  };
}
