import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { AiOutlineBgColors } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import ModalComponent from './modalComponent';
import ThemeModal from './modals/themeModal';
import LanguageModal from './modals/languageModal';
import useResponsive from '../hooks/useResponsive';

const MenuComponent: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { isMobile, isTablet } = useResponsive();
	const texteSizeClass = isMobile ? "text-l" : isTablet ? "text-l" : "text-xl";
	const modalHeightSizeClass = isMobile ? "190px" : isTablet ? "190px" : "190px";
	const modalWidthSizeClass = isMobile ? "60%" : isTablet ? "40%" : "25%";
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null); // ref sur le conteneur menu
    
    const [isModalThemeOpen, setIsModalThemeOpen] = React.useState(false);
    const [isModalLanguageOpen, setIsModalLanguageOpen] = React.useState(false);

    // Fermer le menu si clic à l’extérieur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    // Récupére la langue actuelle et le drapeau
    const lang = (localStorage.getItem('i18nextLng') as 'fr' | 'en' | 'it' | 'es') || 'fr';
    const flag = lang === 'fr' ? 'https://flagcdn.com/w80/fr.png' : lang === 'en' ? 'https://flagcdn.com/w80/gb.png' : lang === 'it' ? 'https://flagcdn.com/w80/it.png' : 'https://flagcdn.com/w80/es.png';

    return (
        <>
            <div className="flex flex-row items-center gap-5 mt-5 ml-5 mr-5 bg-container-monSite text-monSite">
                <img 
                    src={logo}
                    alt="logo" 
                    className="w-20 h-auto rounded-full border-monSite border-1 shadow-xl transition-transform duration-200 hover:scale-110 cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <div>
                    {isMobile ? (
                        // Mode mobile → liste déroulante
                        <div className="relative" ref={menuRef}>
                        <button
                            className="text-3xl p-2 cursor-pointer"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            <GiHamburgerMenu />
                        </button>

                        {isMenuOpen && (
                            <div className="absolute left-0 mt-2 w-40 border border-background-monSite bg-container-monSite text-monSite rounded-lg shadow-lg flex flex-col">
                            {[
                                { path: '/aboutMe', label: t('pages.menu.aboutMe') },
                                { path: '/skills', label: t('pages.menu.skills') },
                                { path: '/interests', label: t('pages.menu.interests') },
                                { path: '/contact', label: t('pages.menu.contact') },
                            ].map(({ path, label }) => {
                                const isActive = window.location.pathname === path;

                                return (
                                <span
                                    key={path}
                                    className={`px-4 py-2 cursor-pointer transition-colors duration-200 
                                    ${isActive ? 'text-container-monSite bg-monSite rounded-lg' : 'hover:text-container-monSite hover:bg-monSite hover:rounded-lg'}`}
                                    onClick={() => {
                                    navigate(path);
                                    setIsMenuOpen(false);
                                    }}
                                >
                                    {label}
                                </span>
                                );
                            })}
                            </div>
                        )}
                        </div>
                    ) : (
                        // Mode tablette / desktop → liens alignés
                        <div className="flex flex-row gap-5">
                            {[
                                { path: '/aboutMe', label: t('pages.menu.aboutMe') },
                                { path: '/skills', label: t('pages.menu.skills') },
                                { path: '/interests', label: t('pages.menu.interests') },
                                { path: '/contact', label: t('pages.menu.contact') },
                            ].map(({ path, label }) => {
                                const isActive = window.location.pathname === path;
                                return (
                                <span
                                    key={path}
                                    className={`flex ${texteSizeClass} justify-center hover:underline cursor-pointer ${isActive ? 'font-bold underline' : ''}`}
                                    onClick={() => navigate(path)}
                                >
                                    {label}
                                </span>
                                );
                            })}
                        </div>
                    )}
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
            <ModalComponent isOpen={isModalThemeOpen} height={`${modalHeightSizeClass}`} width={`${modalWidthSizeClass}`} onClose={() => setIsModalThemeOpen(false)} title={t('pages.settings.theme')}>
                <ThemeModal />
            </ModalComponent>
            <ModalComponent isOpen={isModalLanguageOpen} height={`${modalHeightSizeClass}`} width={`${modalWidthSizeClass}`} onClose={() => setIsModalLanguageOpen(false)} title={t('pages.settings.language')}>
                <LanguageModal />
            </ModalComponent>
        </>
    );
};

export default MenuComponent;
