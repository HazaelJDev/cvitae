import { useEffect, useState } from 'react';
export const useLang = () => {
  const [lang, setLang] = useState("en");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('lang', mode)
    setLang(mode)
  };

  const toggleLang = () => {
    if (lang === 'en') {
      setMode('es');
    } else {
      setMode('en');
    }
  };

  useEffect(() => {
    const localLang = window.localStorage.getItem('lang');
    if (localLang) {
      setLang(localLang);
    } else {
      setMode('en');
    }
    setComponentMounted(true);
  }, []);

  return [lang, toggleLang, componentMounted];
};