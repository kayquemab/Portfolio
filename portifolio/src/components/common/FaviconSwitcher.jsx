"use client";

import { useEffect } from "react";

export default function FaviconSwitcher({ lightIcon = "/iconlight.svg", darkIcon = "/icondark.svg" }) {
  
  useEffect(() => {
    
    const updateFavicon = () => {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const favicon = document.querySelector('link[rel="icon"]');

      if (favicon) {
        favicon.href = darkMode ? darkIcon : lightIcon;
      } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = darkMode ? darkIcon : lightIcon;
        document.head.appendChild(link);
      }
    };

    // Atualiza favicon no carregamento
    updateFavicon();

    // Atualiza quando o usuário muda o tema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);

    return () => mediaQuery.removeEventListener('change', updateFavicon);
  }, [lightIcon, darkIcon]);

  return null; // Não renderiza nada no DOM
}
