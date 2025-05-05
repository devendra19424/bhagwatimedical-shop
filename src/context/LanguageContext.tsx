
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationType } from "@/translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be inside LanguageProvider");
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Load saved language preference or default to Hindi
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem("preferred-language");
    return (savedLang === "en" || savedLang === "hi") ? savedLang as Language : "hi";
  });

  // Save language preference whenever it changes
  useEffect(() => {
    localStorage.setItem("preferred-language", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translations[key][lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
