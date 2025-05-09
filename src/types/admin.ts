
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  imageUrl?: string;
  usageInstructions?: string;
  uses?: string;
  sideEffects?: string;
}

export interface ProductFormData {
  id: number;
  name: string;
  price: string;
  stock: string;
  category: string;
  description: string;
  imageUrl: string;
  usageInstructions: string;
  uses: string;
  sideEffects: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface NavigationSubItem {
  name: string;
  href: string;
  current: boolean;
}

export interface NavigationBadge {
  count: number;
  color: string;
}
