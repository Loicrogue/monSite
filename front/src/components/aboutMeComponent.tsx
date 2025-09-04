import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutMeComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className='flex flex-col w-full items-center text-monSite p-5 gap-5'>
            <motion.div 
				initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
				className="justify-items-center w-full"
			>
                <span className='flex w-full justify-center'>{t('pages.notFound.workInProgress')}</span>
            </motion.div>
            <motion.div 
				initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
				className="justify-items-center flex w-full"
			>
                <span className='flex w-full justify-center'>{t('pages.notFound.workInProgress')}</span>
            </motion.div>
            <motion.div 
				initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
				className="justify-items-center flex w-full"
			>
                <span className='flex w-full justify-center'>{t('pages.notFound.workInProgress')}</span>
            </motion.div>
        </div>
    );
};

export default AboutMeComponent;