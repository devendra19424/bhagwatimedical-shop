
import { Product, Category } from "@/types/admin";

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "पैरासिटामोल",
    price: 25.99,
    stock: 45,
    category: "पेन किलर",
    description: "बुखार और दर्द निवारक टैबलेट",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    price: 299.99,
    stock: 23,
    category: "विटामिन्स",
    description: "दैनिक पोषण सप्लीमेंट",
  },
  {
    id: 3,
    name: "डिजिटल थर्मामीटर",
    price: 399.99,
    stock: 15,
    category: "स्वास्थ्य उपकरण",
    description: "त्वरित और सटीक तापमान माप",
  },
  {
    id: 4,
    name: "हैंड सैनिटाइज़र",
    price: 149.99,
    stock: 32,
    category: "स्किन केयर",
    description: "99.9% जीवाणु नाशक",
  },
  {
    id: 5,
    name: "कफ सिरप",
    price: 99.99,
    stock: 18,
    category: "कफ और सर्दी",
    description: "खांसी निवारक सिरप",
  },
];

export const categories: Category[] = [
  { id: "pain-killers", name: "पेन किलर" },
  { id: "fever", name: "बुखार दवाइयां" },
  { id: "vitamins", name: "विटामिन्स" },
  { id: "devices", name: "स्वास्थ्य उपकरण" },
  { id: "skincare", name: "स्किन केयर" },
  { id: "cough-cold", name: "कफ और सर्दी" },
  { id: "diabetes", name: "डायबिटीज" },
  { id: "heart", name: "हृदय स्वास्थ्य" },
  { id: "nutrition", name: "पोषण" },
];

export const initialFormData = {
  id: 0,
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
  imageUrl: "",
  usageInstructions: "",
  uses: "",
  sideEffects: "",
};
