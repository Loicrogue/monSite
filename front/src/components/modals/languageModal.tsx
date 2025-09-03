import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Lang = { code: 'fr' | 'en'; name: string; flag: string };

const LanguageModal: React.FC = () => {
  const { t, i18n } = useTranslation();

  const languages: Lang[] = [
      { code: 'fr', name: t('pages.settings.languageOptions.fr'), flag: 'https://flagcdn.com/w80/fr.png' },
      { code: 'en', name: t('pages.settings.languageOptions.en'), flag: 'https://flagcdn.com/w80/gb.png' },
  ];

  const [lang, setLang] = useState<'fr' | 'en'>(
      () => (localStorage.getItem('i18nextLng') as 'fr' | 'en') || 'fr',
  );

  useEffect(() => {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
      localStorage.setItem('i18nextLng', lang);
  }, [lang, i18n]);

  return (
      <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
          {languages.map(({ code, flag, name }) => (
              <img
                  key={code}
                  src={flag}
                  alt={name}
                  className={`w-16 h-9 object-cover transition-transform duration-200 cursor-pointer rounded-md shadow
                              ${code === lang ? 'ring-2 ring-monSite' : ''}
                              hover:scale-110`}
                  onClick={() => setLang(code)}
              />
          ))}
      </div>
  );

};

export default LanguageModal;
