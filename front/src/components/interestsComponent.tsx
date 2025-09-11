import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InterestsComponent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.div 
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full py-5"
        >
            <div className='flex flex-row'>
                <div className="w-[200px] h-[60px] bg-monSite flex items-center justify-center text-black font-bold"
                    style={{clipPath: "polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%)"}}>
                Mon texte
                </div>
            </div>
        </motion.div>
    );
};

export default InterestsComponent;
