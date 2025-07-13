import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { AiOutlineBgColors } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ModalComponent from './modalComponent';
import ThemeModal from './modals/themeModal';
import LanguageModal from './modals/languageModal';

const BannerComponent: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    const [isModalThemeOpen, setIsModalThemeOpen] = React.useState(false);
    const [isModalLanguageOpen, setIsModalLanguageOpen] = React.useState(false);

    // Récupérer la langue actuelle et le drapeau
    const lang = (localStorage.getItem('i18nextLng') as 'fr' | 'en') || 'fr';
    const flag = lang === 'fr' ? 'https://flagcdn.com/w80/fr.png' : 'https://flagcdn.com/w80/gb.png';

    return (
        <>
            <div className="flex flex-row items-center gap-5 mt-5 ml-5 mr-5 bg-container-monSite text-monSite">
                <img 
                    src={logo}
                    alt="logo" 
                    className="w-20 h-auto rounded-full border-monSite border-1 shadow-xl transition-transform duration-200 hover:scale-110 cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <div className='flex flex-row gap-5'>
                    {[
                        { path: '/', label: t('pages.menu.aboutMe') },
                        { path: '/skills', label: t('pages.menu.skills') },
                        { path: '/interests', label: t('pages.menu.interests') },
                        { path: '/contact', label: t('pages.menu.contact') },
                    ].map(({ path, label }) => {
                        const isActive = window.location.pathname === path;
                        return (
                            <span
                                key={path}
                                className={`flex text-xl justify-center transition-transform duration-200 hover:underline cursor-pointer ${isActive ? 'font-bold underline' : ''}`}
                                onClick={() => navigate(path)}
                            >
                                {label}
                            </span>
                        );
                    })}
                </div>
                <div className="ml-auto flex items-center gap-5">
                    <button 
                        className="text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                        onClick={() => setIsModalThemeOpen(true)}
                    >
                        <AiOutlineBgColors className='text-3xl text-monSite transition-transform duration-300 hover:scale-110 cursor-pointer' />
                    </button>
                    <img
                        src={flag}
                        alt={lang}
                        className="w-16 h-9 object-cover transition-transform duration-200 cursor-pointer rounded-md shadow hover:scale-120"
                        onClick={() => setIsModalLanguageOpen(true)}
                    />
                </div>
            </div>
            <ModalComponent isOpen={isModalThemeOpen} height="18%" width="25%" onClose={() => setIsModalThemeOpen(false)}>
                <ThemeModal />
            </ModalComponent>
            <ModalComponent isOpen={isModalLanguageOpen} height="18%" width="25%" onClose={() => setIsModalLanguageOpen(false)}>
                <LanguageModal />
            </ModalComponent>
        </>
    );
};

export default BannerComponent;