import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { AiOutlineSetting} from 'react-icons/ai';
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

    return (
        <>
            <div className="flex flex-row items-center gap-5 mt-5 ml-5 mr-5 cursor-pointer bg-container-monSite text-monSite">
                <img 
                    src={logo}
                    alt="logo" 
                    className="w-20 h-auto rounded-full border-monSite border-1 shadow-xl transition-transform duration-200 hover:scale-110"
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
                    <button 
                        className="text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                        onClick={() => setIsModalThemeOpen(true)}
                    >
                        <AiOutlineBgColors className='text-3xl text-monSite transition-transform duration-300 hover:scale-110 cursor-pointer' />
                    </button>
                    <button 
                        className="text-monSite transition-transform duration-200 hover:scale-120 cursor-pointer"
                        onClick={() => setIsModalLanguageOpen(true)}
                    >
                        <AiOutlineSetting className='text-3xl text-monSite transition-transform duration-300 hover:scale-110 cursor-pointer hover:animate-spin' />
                    </button>
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