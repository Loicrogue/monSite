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
        document.documentElement.classList.toggle('blue', theme === 'blue');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');
    const setRedTheme = () => setTheme('red');
    const setBlueTheme = () => setTheme('blue');

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
                    className="w-8 h-8 border-2 border-monSite bg-red-500 transition-transform duration-200 hover:scale-110 cursor-pointer rounded-full"
                    onClick={setRedTheme}
                ></button>
                <button 
                    className="w-8 h-8 border-2 border-monSite bg-blue-500 transition-transform duration-200 hover:scale-110 cursor-pointer rounded-full"
                    onClick={setBlueTheme}
                ></button>
            </div>
        </div>
    );
};

export default ThemeModal;
