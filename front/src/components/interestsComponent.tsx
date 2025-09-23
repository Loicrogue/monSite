import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';

const InterestsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();
  const paddingContentZoneClass = isTablet ? "py-5 pr-5" : "py-10 pr-10";
  const textSizeClass = isTablet ? "text-sm" : "text-l";
  const paddingLeftBookmarkTextClass = isTablet ? "pl-2" : "pl-5";
  const widthBookmarkClass = isTablet ? "w-5/20" : "w-3/20";
  const widthContentClass = isTablet ? "w-15/20" : "w-17/20";

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const bookmarks = [
    { id: "1", label: t('pages.interests.bookmarks.1'), content: t('pages.notFound.workInProgress') }, // t('pages.interests.contents.1')
    { id: "2", label: t('pages.interests.bookmarks.2'), content: t('pages.notFound.workInProgress') }, // t('pages.interests.contents.2')
    { id: "3", label: t('pages.interests.bookmarks.3'), content: t('pages.notFound.workInProgress') }, // t('pages.interests.contents.3')
  ];

  return (
    <>            
        {isMobile ? (
            <div className="flex flex-col justify-items-center w-full">
              {/* Colonne des signets */}
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full p-3 pb-0"
              >
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {bookmarks.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedId(s.id)}
                      className={`rounded-lg border border-monSite px-3 py-2 font-bold cursor-pointer text-center text-sm
                        ${selectedId === s.id 
                          ? "bg-monSite text-container-monSite" 
                          : "bg-container-monSite text-monSite"}`}
                    >
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Zone de contenu */}
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full p-3"
              >
                <div className="flex flex-row h-full rounded-lg border border-black shadow-xl p-5">
                  {selectedId ? (
                    <motion.div
                      key={selectedId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-l text-monSite"
                    >
                      {bookmarks.find((s) => s.id === selectedId)?.content}
                    </motion.div>
                  ) : (
                    <span className="text-monSite italic">
                      {t("pages.interests.selectHint")}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
        ) : (
            <div className="flex flex-row justify-items-center w-full">
              {/* Colonne des signets */}
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${widthBookmarkClass} h-full py-5`}
              >
                <div className="flex flex-row">
                  <div className="flex flex-col gap-5 w-full">
                    {bookmarks.map((s) => (
                      <motion.div
                        key={s.id}
                        onClick={() => setSelectedId(s.id)}
                        initial={{ width: "80%" }}
                        animate={{ width: selectedId === s.id ? "95%" : "80%" }}
                        whileHover={{ width: "95%" }}
                        transition={{ duration: 0.3 }}
                        className={`h-[60px] flex items-center ${paddingLeftBookmarkTextClass} 
                        font-bold cursor-pointer px-10 ${textSizeClass} ${selectedId === s.id ? "bg-signets-monSite text-background-signets-monSite" : "bg-background-signets-monSite text-signets-monSite"}`}
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%)",
                        }}
                      >
                        {s.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Zone de contenu */}
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`${widthContentClass} h-full ${paddingContentZoneClass}`}
              >
                <div className="flex flex-row h-full rounded-lg border border-black shadow-xl p-5">
                  {selectedId ? (
                    <motion.div
                      key={selectedId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`${textSizeClass} text-monSite`}
                    >
                      {bookmarks.find((s) => s.id === selectedId)?.content}
                    </motion.div>
                  ) : (
                    <span className="text-monSite italic">
                      {t("pages.interests.selectHint")}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
        )}
    </>
  );
};

export default InterestsComponent;
