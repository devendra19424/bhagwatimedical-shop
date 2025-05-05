
import { Language } from "@/translations";

export interface Product {
  id: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  related?: number[];
  [key: string]: any;
}

export interface RelatedProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
}

export interface FormattedProductData {
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
  deliveryInfo: string;
  usageInstructions: string;
  uses: string[];
  sideEffects: string[];
}

// Format product data according to selected language
export const formatProductData = (product: Product, lang: Language): FormattedProductData => {
  return {
    name: product[`name_${lang}`],
    category: product[`category_${lang}`],
    price: product.price,
    description: product[`description_${lang}`],
    inStock: product.inStock,
    deliveryInfo: product[`deliveryInfo_${lang}`],
    usageInstructions: product[`usageInstructions_${lang}`],
    uses: product[`uses_${lang}`],
    sideEffects: product[`sideEffects_${lang}`],
  };
};

// Format related products based on language
export const formatRelatedProducts = (products: any[], lang: Language): RelatedProduct[] => {
  return products.map(prod => ({
    ...prod,
    name: prod[`name_${lang}`],
    description: prod[`description_${lang}`],
    category: prod[`category_${lang}`]
  }));
};
