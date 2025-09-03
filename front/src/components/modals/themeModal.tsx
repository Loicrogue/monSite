import React, { useState, useEffect } from 'react';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';

const ThemeModal: React.FC = () => {
    const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
        document.documentElement.classList.toggle('red', theme === 'red');
        document.documentElement.classList.toggle('blue', theme === 'blue');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="flex flex-wrap w-full justify-center">
            <div className="basis-1/4 flex justify-center mt-2 mb-2">
                <AiOutlineSun
                    className="text-3xl text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                    onClick={() => setTheme('light')}
                />
            </div>

            <div className="basis-1/4 flex justify-center mt-2 mb-2">
                <AiOutlineMoon
                    className="text-3xl text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                    onClick={() => setTheme('dark')}
                />
            </div>

            <div className="basis-1/4 flex justify-center mt-2 mb-2">
                <button 
                    className="w-8 h-8 border-2 border-monSite bg-red-500 transition-transform duration-200 hover:scale-110 cursor-pointer rounded-full"
                    onClick={() => setTheme('red')}
                />
            </div>

            <div className="basis-1/4 flex justify-center mt-2 mb-2">
                <button 
                    className="w-8 h-8 border-2 border-monSite bg-blue-500 transition-transform duration-200 hover:scale-110 cursor-pointer rounded-full"
                    onClick={() => setTheme('blue')}
                />
            </div>
        </div>
    );

};

export default ThemeModal;
