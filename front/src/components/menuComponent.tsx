import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { AiFillSun } from 'react-icons/ai';
import { AiOutlineMoon } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from './languageSelector';

const BannerComponent: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
    }, [theme]);


    return (
        <div className="flex flex-row items-center gap-5 mt-5 ml-5 mr-5 cursor-pointer bg-container-monSite text-monSite">
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
            <div className="ml-auto flex items-center gap-5">
                {theme === 'dark' && (
                    <AiFillSun
                        className="text-3xl text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                        onClick={toggleTheme}
                    />
                )}
                {theme === 'light' && (
                    <AiOutlineMoon
                        className="text-3xl text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                        onClick={toggleTheme}
                    />
                )}
                <LanguageSelector onSelect={(langCode: string) => console.log("Langue choisie :", langCode)} />
            </div>
        </div>
    );
};

export default BannerComponent;