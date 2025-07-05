import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../components/menuComponent';
import Profil from '../components/profilComponent';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-background-monSite overflow-auto">
      <div className="flex flex-col item-center absolute inset-0 bg-container-monSite shadow-xl rounded-xl m-5">
        <Menu />
        <div className="flex flex-row h-full bg-child-container-monSite shadow-xl rounded-xl m-5">
          <Profil />
        </div>
        {/* {isMobile && <p className="text-center text-sm text-gray-500">Affichage Mobile</p>}
        {isTablet && <p className="text-center text-sm text-gray-500">Affichage Tablette</p>}
        {isDesktop && <p className="text-center text-sm text-gray-500">Affichage PC</p>} */}
      </div>
    </div>
  );
};

export default Home;
