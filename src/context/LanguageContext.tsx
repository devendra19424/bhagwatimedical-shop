
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
  const [lang, setLang] = useState<Language>("hi");
  const toggleLanguage = () =>
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
