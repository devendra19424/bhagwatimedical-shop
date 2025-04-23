
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

// Label mapping for Header, Footer, etc. Add as needed!
export const translations: Translations = {
  storeName: {
    en: "Bhagwati Medical Store",
    hi: "भगवती मेडिकल स्टोर",
  },
  searchPlaceholder: {
    en: "Search medicines, treatment, diseases...",
    hi: "खोजें दवाइयां, उपचार, रोग...",
  },
  login: {
    en: "Login / Register",
    hi: "लॉगिन / रजिस्टर",
  },
  cart: {
    en: "Cart",
    hi: "कार्ट",
  },
  admin: {
    en: "Admin",
    hi: "अदमिन",
  },
  about: {
    en: "About Us",
    hi: "हमारे बारे में",
  },
  contact: {
    en: "Contact",
    hi: "संपर्क",
  },
  allMedicines: {
    en: "All Medicines",
    hi: "सभी दवाइयां",
  },
  quickLinks: {
    en: "Quick Links",
    hi: "त्वरित लिंक",
  },
  address: {
    en: "Main Market, Itarsi, Madhya Pradesh",
    hi: "मुख्य बाज़ार, इटारसी, मध्य प्रदेश",
  },
  home: {
    en: "Home",
    hi: "होम",
  },
  call: {
    en: "Call",
    hi: "फोन",
  },
  email: {
    en: "Email",
    hi: "ईमेल",
  },
  location: {
    en: "Location",
    hi: "स्थान",
  },
  copyright: {
    en: "© 2023 Bhagwati Medical Store. All rights reserved.",
    hi: "© 2023 भगवती मेडिकल स्टोर. सर्वाधिकार सुरक्षित.",
  },
  // Hero section translations
  heroTitle: {
    en: "Your Health, Our Responsibility",
    hi: "आपकी स्वास्थ्य सेवा, हमारा उत्तरदायित्व",
  },
  heroDescription: {
    en: "Order essential medicines and health products from Bhagwati Medical Store with home delivery. We provide fast and reliable medicine delivery service in Itarsi.",
    hi: "भगवती मेडिकल स्टोर से आवश्यक दवाइयां और स्वास्थ्य उत्पाद घर बैठे मंगवाएं। हम इटारसी में तीव्र और विश्वसनीय दवा डिलीवरी सेवा प्रदान करते हैं।",
  },
  shopNow: {
    en: "Shop Now",
    hi: "अभी खरीदें",
  },
  createAccount: {
    en: "Create Account",
    hi: "अकाउंट बनाएं",
  },
  // Category section translations
  categories: {
    en: "Categories",
    hi: "श्रेणियां",
  },
  painKillers: {
    en: "Pain Killers",
    hi: "पेन किलर",
  },
  fever: {
    en: "Fever Medicines",
    hi: "बुखार दवाइयां",
  },
  vitamins: {
    en: "Vitamins",
    hi: "विटामिन्स",
  },
  devices: {
    en: "Health Devices",
    hi: "स्वास्थ्य उपकरण",
  },
  skincare: {
    en: "Skin Care",
    hi: "स्किन केयर",
  },
  diabetes: {
    en: "Diabetes",
    hi: "डायबिटीज",
  },
  // Delivery section translations
  whyChooseUs: {
    en: "Why Choose Our Delivery Service?",
    hi: "क्यों चुनें हमारी डिलीवरी सेवा?",
  },
  fastDelivery: {
    en: "Fast Delivery",
    hi: "तीव्र डिलीवरी",
  },
  fastDeliveryDesc: {
    en: "We deliver medicines within 60 minutes in Itarsi city.",
    hi: "इटारसी शहर में 60 मिनट से भी कम समय में दवाइयां आपके घर तक पहुंचाते हैं।",
  },
  service24x7: {
    en: "24x7 Service",
    hi: "24x7 सेवा",
  },
  service24x7Desc: {
    en: "We are at your service 24 hours a day, even in emergencies.",
    hi: "आपात स्थितियों में भी हम 24 घंटे आपकी सेवा में हैं।",
  },
  trackDelivery: {
    en: "Delivery Tracking",
    hi: "डिलीवरी ट्रैकिंग",
  },
  trackDeliveryDesc: {
    en: "Track your order in real-time and know where it is.",
    hi: "रियल-टाइम में अपने ऑर्डर को ट्रैक करें और जानें कि वह कहां है।",
  },
  genuineMeds: {
    en: "Genuine Medicines",
    hi: "असली दवाइयां",
  },
  genuineMedsDesc: {
    en: "We only deliver certified and quality medicines.",
    hi: "हम केवल प्रमाणित और गुणवत्तापूर्ण दवाइयां ही डिलीवर करते हैं।",
  },
  switchToEnglish: {
    en: "English",
    hi: "अंग्रेजी",
  },
  switchToHindi: {
    en: "Hindi",
    hi: "हिन्दी",
  },
};

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be inside LanguageProvider");
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("hi"); // Default to Hindi
  const toggleLanguage = () =>
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
