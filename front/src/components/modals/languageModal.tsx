import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useResponsive from '../../hooks/useResponsive';

type Lang = { code: 'fr' | 'en' | 'it'; name: string; flag: string };

const LanguageModal: React.FC = () => {
  const { t, i18n } = useTranslation();
    const { isMobile } = useResponsive();

  const languages: Lang[] = [
    { code: 'fr', name: t('pages.settings.languageOptions.fr'), flag: 'https://flagcdn.com/w80/fr.png' },
    { code: 'en', name: t('pages.settings.languageOptions.en'), flag: 'https://flagcdn.com/w80/gb.png' },
    { code: 'it', name: t('pages.settings.languageOptions.it'), flag: 'https://flagcdn.com/w80/it.png' },
  ];

  const [lang, setLang] = useState<'fr' | 'en' | 'it'>(
    () => (localStorage.getItem('i18nextLng') as 'fr' | 'en' | 'it') || 'fr'
  );

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('i18nextLng', lang);
  }, [lang, i18n]);

  return (
    <>
        {isMobile ? (
                <div className="flex flex-wrap w-full justify-center">
                    {languages.map(({ code, flag, name }) => (
                        <div key={code} className="basis-1/2 flex justify-center mt-2 mb-2">
                        <img
                            src={flag}
                            alt={name}
                            className={`w-16 h-10 object-cover cursor-pointer rounded-md shadow transition-transform duration-200 
                                        hover:scale-110 border-2 
                                        ${code === lang ? 'border-monSite ring-2 ring-monSite' : 'border-transparent'}`}
                            onClick={() => setLang(code)}
                        />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-wrap w-full justify-center">
                    {languages.map(({ code, flag, name }) => (
                        <div key={code} className="basis-1/3 flex justify-center mt-2 mb-2">
                        <img
                            src={flag}
                            alt={name}
                            className={`w-16 h-10 object-cover cursor-pointer rounded-md shadow transition-transform duration-200 
                                        hover:scale-110 border-2 
                                        ${code === lang ? 'border-monSite ring-2 ring-monSite' : 'border-transparent'}`}
                            onClick={() => setLang(code)}
                        />
                        </div>
                    ))}
                </div>
            )}
    </>
  );
};

export default LanguageModal;
