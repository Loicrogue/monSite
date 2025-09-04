import React from 'react';
import { useTranslation } from 'react-i18next';

const interestsComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className='flex flex-col w-full items-center text-monSite p-5'>
            <div className="justify-items-center py-8">
                <span>{t('pages.notFound.workInProgress')}</span>
            </div>
        </div>
    );
};

export default interestsComponent;