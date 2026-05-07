import React, { createContext, useContext, useState, useMemo } from 'react';
import en from './locales/en.json';
import ne from './locales/ne.json';

const resources = { en, ne };
const I18nContext = createContext();

export function I18nProvider({ children, defaultLocale = 'en' }) {
  const [locale, setLocale] = useState(defaultLocale);

  const t = useMemo(() => {
    return (key, vars) => {
      const parts = key.split('.');
      let value = resources[locale];
      for (let p of parts) {
        value = value?.[p];
        if (value == null) return key;
      }
      if (vars && typeof value === 'string') {
        Object.keys(vars).forEach((k) => {
          value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
        });
      }
      return value;
    };
  }, [locale]);

  return React.createElement(
    I18nContext.Provider,
    { value: { locale, setLocale, t } },
    children
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}
