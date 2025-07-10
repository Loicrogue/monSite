import React from 'react';
import { useTranslation } from 'react-i18next';

const SkillsComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <span className="text-center text-monSite text-2xl font-bold w-full p-5">{t('pages.skills.title')}</span>
        </>
    );
};

export default SkillsComponent;