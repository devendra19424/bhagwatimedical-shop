
export interface MedicineReminder {
  id: string;
  medicineName: string;
  time: string;
  frequency: "daily" | "twice_daily" | "weekly" | "monthly";
  dosage: string;
  active: boolean;
  completed: boolean;
}

export interface HealthArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  views: number;
  likes: number;
  content?: string;
}

export interface PrescriptionFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
}

export interface ProductComparisonItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  manufacturer: string;
  dosage: string;
  inStock: boolean;
  features: {
    childSafe: boolean;
    sugarFree: boolean;
    vegan: boolean;
  };
  effectiveFor: string[];
}
