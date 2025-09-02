import React from 'react';
import { useTranslation } from 'react-i18next';
import profilPicture from '../assets/pp/profil_picture.png';
import useResponsive from '../hooks/useResponsive';

const ProfilComponent: React.FC = () => {
    const { t } = useTranslation();
    const { isMobile, isTablet } = useResponsive();
	const titleSizeClass = isMobile ? "text-2xl pb-2" : isTablet ? "text-3xl" : "text-5xl";
	const subTitleSizeClass = isMobile ? "text-xl pb-2" : isTablet ? "text-xl" : "text-3xl";
	const textSizeClass = isMobile ? "text-m pb-2" : isTablet ? "text-l" : "text-xl";
    const pictureSizeClass = isMobile || isTablet ? "w-65 h-65" : "w-95 h-95";

    return (
        <>            
            {isMobile ? (
                <div className='flex flex-col w-full'>
                    <div className="flex flex-col justify-center w-full p-10 text-monSite">
                        <h1 className={`font-bold ${titleSizeClass}`}>Loïc HOARAU</h1>
                        <h1 className={`${subTitleSizeClass}`}>{t('pages.home.profilDescription')}</h1>
                        <h1 className={`${textSizeClass}`}>{t('pages.home.otherDescription')}</h1>
                        <h1 className={`${textSizeClass}`}>{t('pages.home.incommingProgress')}</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <img
                            src={profilPicture}
                            alt="profil picture"
                            className={`rounded-full ${pictureSizeClass} shadow-xl shadow-gray-500/50`}
                        />
                    </div>
                </div>
            ) : (
                <div className='flex flex-row w-full'>
                    <div className="flex flex-col justify-center w-full gap-4 m-5 p-10 text-monSite">
                        <h1 className={`font-bold ${titleSizeClass}`}>Loïc HOARAU</h1>
                        <h1 className={`${subTitleSizeClass}`}>{t('pages.home.profilDescription')}</h1>
                        <h1 className={`${textSizeClass}`}>{t('pages.home.otherDescription')}</h1>
                        <h1 className={`${textSizeClass}`}>{t('pages.home.incommingProgress')}</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full m-5'>
                        <img
                            src={profilPicture}
                            alt="profil picture"
                            className={`rounded-full ${pictureSizeClass} shadow-xl shadow-gray-500/50`}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfilComponent;