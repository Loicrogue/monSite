// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const Cybersecurity = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">🛡️ {t("pages.interests.bookmarks.cybersecurity")}</h2>
      <p className="mb-2">
        La cybersécurité est pour moi un domaine essentiel : comprendre comment
        protéger les systèmes, anticiper les menaces et analyser les failles
        potentielles.
      </p>
      <p>
        Mon objectif est de toujours renforcer ma capacité à
        penser comme un attaquant pour mieux sécuriser mes développements, 
        ainsi que mes activités personnelles.
      </p>
    </div>
  );
};
export default Cybersecurity;