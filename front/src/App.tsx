// @ts-expect-error react
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import './i18n';
import i18n from 'i18next';

function App() {
  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng');
    if (lng) {
      i18n.changeLanguage(lng).catch(() => {});
    }
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
