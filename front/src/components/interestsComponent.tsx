import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const interestsComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <motion.div 
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="justify-items-center w-full p-5"
        >
            <span className='flex w-full justify-center text-monSite'>{t('pages.notFound.workInProgress')}</span>
        </motion.div>
        
    );
};

export default interestsComponent;