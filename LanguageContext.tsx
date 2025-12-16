import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { DATA_EN, DATA_TR, DATA_DE, DATA_ES } from './constants';

// Define the shape based on the English data structure
export type DataShape = typeof DATA_EN;

export type Language = 'en' | 'tr' | 'de' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: DataShape;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved === 'en' || saved === 'tr' || saved === 'de' || saved === 'es') ? (saved as Language) : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
  };
  
  const getData = (lang: Language) => {
    switch (lang) {
      case 'tr': return DATA_TR;
      case 'de': return DATA_DE;
      case 'es': return DATA_ES;
      default: return DATA_EN;
    }
  };

  const data = getData(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
