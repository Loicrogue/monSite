import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';
import games from '../assets/aboutMePage/games.png';
import searching from '../assets/aboutMePage/searching.png';

const AboutMeComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();
  	const textSizeClass = isMobile || isTablet ? "text-l" : "text-xl";

  // Tableau d’items avec alignement défini :
  const aboutItems = [
    { type: "image", src: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif", align: "center" }, // 1
    { type: "text", value: t('pages.aboutMe.text1'), align: "left" },                                     // 2
    { type: "text", value: t('pages.aboutMe.text2'), align: "right" },                                    // 3
    { type: "image", src: games, align: "center" },                                                       // 4
    { type: "image", src: searching, align: "center" },    // 5
    { type: "text", value: t('pages.aboutMe.text3'), align: "left" },                                     // 6
  ];

  // Réordonner si mobile : [1,2,4,3,5,6]
  const orderedItems = isMobile
    ? [aboutItems[1], aboutItems[0], aboutItems[2], aboutItems[3], aboutItems[5], aboutItems[4]]
    : aboutItems;

  return (
    <div className="flex flex-col w-full">
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

export default AboutMeComponent;
