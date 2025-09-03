// @ts-expect-error react
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import useResponsive from '../hooks/useResponsive';

function NotFound() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isMobile, isTablet } = useResponsive();
	const marginClass = isMobile ? "m-2" : isTablet ? "m-3" : "m-5";
    const titleSizeClass = isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl";
	const subTitleSizeClass = isMobile ? "text-l" : isTablet ? "text-xl" : "text-l";

    return (
        <div className="fixed inset-0 bg-background-monSite overflow-auto">
            <div className={`absolute inset-0 bg-container-monSite shadow-xl rounded-xl ${marginClass}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="flex h-full rounded-xl shadow-xl bg-child-container-monSite overflow-hidden">
                        <div className="w-full flex flex-col items-center justify-center p-8">
                            <span className={`font-bold text-monSite ${titleSizeClass} mb-10 select-none text-center w-full`}>{t('pages.notFound.title')}</span>
                            <span className={`text-monSite ${subTitleSizeClass} mb-8 select-none text-center w-full`}>{t('pages.notFound.message')}</span>
                            <button
                                className="cursor-pointer bg-background-monSite text-monSite px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-110"
                                
                                onClick={() => navigate("/")}
                            >
                                {t('pages.notFound.backToHome')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default NotFound;