import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutMeComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className='flex flex-col w-full items-center text-monSite p-5'>
            <span className="text-center text-monSite text-2xl font-bold w-full p-5 block">{t('pages.aboutMe.title')}</span>
            <div className="justify-items-center items-center py-8">
                <span>a</span>
            </div>
        </div>
    );
};

export default AboutMeComponent;