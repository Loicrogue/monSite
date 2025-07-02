import React from 'react';

import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="fixed inset-0 bg-background-breezy overflow-auto">
            <div className="absolute inset-0 bg-container-breezy shadow-xl rounded-xl m-5">
                <h1 className="text-2xl font-bold text-center mt-4">{t('pages.home.title')}</h1>
            </div>
        </div>
    );
};

export default Home;
