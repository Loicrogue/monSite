import React from 'react';
import { useTranslation } from 'react-i18next';
import profilPicture from '../assets/profil_picture2.png';

const ProfilComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="flex flex-col justify-center w-full gap-4 m-5 p-10 text-monSite">
                <h1 className='font-bold text-5xl'>Loïc HOARAU</h1>
                <h1 className='text-3xl'>{t('pages.home.profilDescription')}</h1>
                <h1 className='text-xl'>{t('pages.home.otherDescription')}</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full m-5'>
                <img
                    src={profilPicture}
                    alt="profil picture"
                    className="rounded-full w-95 h-95 shadow-xl shadow-gray-500/50"
                />
            </div>
        </>
    );
};

export default ProfilComponent;