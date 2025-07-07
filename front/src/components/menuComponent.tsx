import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const BannerComponent: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-start items-center w-full mt-5 ml-5 md-5 gap-5 text-monSite cursor-pointer">
            <img 
            src={logo}
            alt="logo" 
            className="w-20 h-auto rounded-full border-monSite border-1 shadow-xl shadow-gray-300/15 transition-transform duration-200 hover:scale-110"
            onClick={() => navigate('/')}
            />
            <span className="transition-transform duration-200 hover:scale-110" onClick={() => navigate('/')}>
                {t('pages.home.menu.aboutMe')}
            </span>
            <span className="transition-transform duration-200 hover:scale-110" onClick={() => navigate('/skills')}>
                {t('pages.home.menu.skills')}
            </span>
            <span className="transition-transform duration-200 hover:scale-110" onClick={() => navigate('/interests')}>
                {t('pages.home.menu.interests')}
            </span>
            <span className="transition-transform duration-200 hover:scale-110" onClick={() => navigate('/contact')}>
                {t('pages.home.menu.contact')}
            </span>
        </div>
    );
};

export default BannerComponent;