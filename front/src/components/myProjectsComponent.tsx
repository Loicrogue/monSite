import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';
import sharelink from '../assets/myProjects/sharelink.png';

const myProjectsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();
  	const textSizeClass = isMobile || isTablet ? "text-l" : "text-xl";

  // Tableau d’items avec alignement défini :
  const aboutItems = [
    { type: "text", value: t('pages.myProjects.text1'), align: "right" },       // 1
    { type: "image", src: sharelink, align: "center" },                         // 2
  ];

  // Réordonner si mobile : [1,2,4,3,5,6]
  const orderedItems = isMobile
    ? [aboutItems[0], aboutItems[1]]
    : aboutItems;

  return (
    <div className="flex flex-col w-full">
        {/* en cours */}
        <motion.div 
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="justify-items-center w-full p-5"
        >
            <span className='flex w-full justify-center text-monSite'>{t('pages.notFound.workInProgress')}</span>
        </motion.div>
        {/* en cours */}

      <div className={`w-full h-full grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6 p-6`}>
        {orderedItems.map((item, index) => {
          // Utilisation de la clé align, sauf en mobile où tout est centré
          let alignment = "justify-center";
          if (!isMobile) {
            if (item.align === "left") alignment = "justify-start";
            else if (item.align === "right") alignment = "justify-end";
          }

          // Déterminer l'alignement du texte
          const getTextAlignClass = () => {
            if (isMobile) return "text-center";
            if (item.align === "left") return "text-left";
            if (item.align === "right") return "text-right";
            return "text-center";
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.35 }}
              className={`flex w-full p-4 items-center ${alignment}`}
            >
              {item.type === "text" ? (
                <span className={`w-full text-monSite ${textSizeClass} ${getTextAlignClass()}`}>
                  {item.value}
                </span>
              ) : (
                <img
                  src={item.src}
                  alt={`about-item-${index+1}`}
                  className="max-h-55 object-contain shadow-lg rounded-lg"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default myProjectsComponent;
