import React from 'react';
import { motion } from 'framer-motion';
import useResponsive from '../../hooks/useResponsive';

interface InterestItem {
  type: "title" | "text" | "image";
  value?: string;
  src?: string;
}

interface InterestSectionProps {
  items: InterestItem[];
}

const InterestSection: React.FC<InterestSectionProps> = ({ items }) => {
  const { isMobile, isTablet } = useResponsive();
  const textSizeClass = isMobile || isTablet ? "text-l" : "text-xl";
  const spaceContentClass = isMobile || isTablet ? "gap-2 py-2" : "gap-3 py-6";
  const littleSpaceContentClass = isMobile || isTablet ? "p-2" : "p-6";

  return (
    <div className="flex flex-col w-full">
      <div className={`w-full h-full grid grid-cols-1 ${spaceContentClass}`}>
        {items.map((item, index) => {
          const fromX = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: fromX, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 120,
              }}
              className={`flex w-full ${littleSpaceContentClass} items-center justify-center`}
            >
              {item.type === "title" && (
                <h2 className={`w-full font-bold text-xl mb-3 ${textSizeClass} text-center`}>
                  {item.value}
                </h2>
              )}
              {item.type === "text" && (
                <p className={`w-full text-monSite ${textSizeClass} text-center`}>
                  {item.value}
                </p>
              )}
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={`interest-item-${index + 1}`}
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

export default InterestSection;
