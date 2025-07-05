import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const BannerComponent: React.FC = () => {
    const { t } = useTranslation();    

    return (
        <div className="flex flex-row justify-start items-center w-full mt-5 ml-5 md-5 gap-5 text-monSite">
            <img 
                src={logo}
                alt="logo" 
                className="w-20 h-auto rounded-full border-monSite border-1 shadow-xl shadow-gray-300/20"
            />
            <span>{t('pages.home.menu.aboutMe')}</span>
            <span>{t('pages.home.menu.skills')}</span>
            <span>{t('pages.home.menu.interests')}</span>
            <span>{t('pages.home.menu.contact')}</span>
        </div>
    );
};

export default BannerComponent;