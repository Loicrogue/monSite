import React from 'react';
import { useTranslation } from 'react-i18next';
import profilPicture from '../assets/pp/profil_picture.png';
import useResponsive from '../hooks/useResponsive';

const ProfilComponent: React.FC = () => {
    const { t } = useTranslation();
    const { isMobile, isTablet } = useResponsive();
	const titleSizeClass = isMobile ? "text-2xl pb-2" : isTablet ? "text-3xl pb-2" : "text-5xl pb-2";
	const subTitleSizeClass = isMobile ? "text-xl pb-2" : isTablet ? "text-xl pb-2" : "text-3xl pb-2";
	const textSizeClass = isMobile ? "text-m " : isTablet ? "text-l" : "text-xl";
    const pictureSizeClass = isMobile ? "w-50 h-50" : isTablet ? "w-60 h-60" : "w-80 h-80";

    return (
        <>            
            {isMobile || isTablet ? (
                <div className='flex flex-col item-center w-full gap-5'>
                    <div className="flex flex-col justify-center w-full p-10 gap-4">
                        <h1 className={`font-bold text-monSite ${titleSizeClass}`}>Loïc HOARAU</h1>
                        <h1 className={`text-monSite ${subTitleSizeClass}`}>{t('pages.home.profilDescription')}</h1>
                        <h1 className={`text-monSite ${textSizeClass}`}>{t('pages.home.otherDescription')}</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <img
                            src={profilPicture}
                            alt="profil picture"
                            className={`rounded-full ${pictureSizeClass} shadow-xl shadow-gray-500/50`}
                        />
                    </div>
                    <div className="flex w-full p-10 gap-4">
                        <h1 className={`text-monSite ${textSizeClass}`}>{t('pages.home.inviteToVisit')}</h1>
                    </div>
                </div>
            ) : (
                <div className='flex flex-row w-full items-center p-5 gap-5'>
                    <div className="flex flex-col justify-center w-full gap-4 m-5 p-10">
                        <h1 className={`font-bold text-monSite ${titleSizeClass}`}>Loïc HOARAU</h1>
                        <h1 className={`text-monSite ${subTitleSizeClass}`}>{t('pages.home.profilDescription')}</h1>
                        <h1 className={`text-monSite ${textSizeClass}`}>{t('pages.home.otherDescription')}</h1>
                        <h1 className={`text-monSite ${textSizeClass}`}>{t('pages.home.inviteToVisit')}</h1>
                    </div>
                    <div className='flex items-center justify-center w-full m-5'>
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