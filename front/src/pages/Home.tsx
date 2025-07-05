import React from 'react';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';
const Home = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className="fixed inset-0 bg-background-monSite overflow-auto">
      <div className="absolute inset-0 bg-container-monSite shadow-xl rounded-xl m-5">
        <h1 className={`font-bold text-monSite text-center mt-4 
            ${isMobile ? 'text-xs' : ''} 
            ${isTablet ? 'text-md' : ''} 
            ${isDesktop ? 'text-3xl' : ''}`}
        >
            {t('pages.home.title')}
        </h1>
        {/* {isMobile && <p className="text-center text-sm text-gray-500">Affichage Mobile</p>}
        {isTablet && <p className="text-center text-sm text-gray-500">Affichage Tablette</p>}
        {isDesktop && <p className="text-center text-sm text-gray-500">Affichage PC</p>} */}
      </div>
    </div>
  );
};

export default Home;
