import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Lang = { code: 'fr' | 'en'; name: string; flag: string };

const languages: Lang[] = [
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w80/fr.png' },
  { code: 'en', name: 'English',  flag: 'https://flagcdn.com/w80/gb.png' },
];

const LanguageModal: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState<'fr' | 'en'>(
    () => (localStorage.getItem('i18nextLng') as 'fr' | 'en') || 'fr',
  );

  /* Applique la langue sélectionnée */
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('i18nextLng', lang);
  }, [lang, i18n]);

  const choose = (code: 'fr' | 'en') => () => setLang(code);

  return (
    <div>
      <h2 className="text-2xl font-bold text-monSite mb-4">
        {t('pages.settings.language')}
      </h2>

      <div className="flex w-full justify-around items-center">
        {languages.map(({ code, flag, name }) => (
          <img
            key={code}
            src={flag}
            alt={name}
            className={`w-16 h-9 object-cover transition-transform duration-200 cursor-pointer rounded-md shadow
                        ${code === lang ? 'ring-2 ring-monSite' : ''}
                        hover:scale-110`}
            onClick={choose(code)}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageModal;
