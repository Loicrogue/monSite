// @ts-expect-error react
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");
    const hasRefreshed = sessionStorage.getItem("hasRefreshed");

    if (lng === "fr-FR" && !hasRefreshed) {
      localStorage.setItem("i18nextLng", "fr");
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload();
    }
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
