import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';

const ThemeModal: React.FC = () => {
    const { t } = useTranslation();

    const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
        document.documentElement.classList.toggle('red', theme === 'red');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');
    const setRedTheme = () => setTheme('red');

    return (
        <div>
            <h2 className="text-2xl text-monSite font-bold mb-4">{t('pages.settings.theme')}</h2>
            <div className="flex w-full justify-around items-center">
                <AiOutlineSun
                    className="text-3xl text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                    onClick={setLightTheme}
                />
                <AiOutlineMoon
                    className="text-3xl text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                    onClick={setDarkTheme}
                />
                <button 
                    className="w-8 h-8 bg-red-500 transition-transform duration-200 hover:scale-110 cursor-pointer rounded-full"
                    onClick={setRedTheme}
                ></button>
            </div>
        </div>
    );
};

export default ThemeModal;
