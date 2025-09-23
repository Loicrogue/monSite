// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const HardSoft = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">🖥️ {t("pages.interests.bookmarks.hardSoft")}</h2>
      <p className="mb-2">
        Comprendre l’interaction entre le matériel et le logiciel est une
        passion. J’aime explorer l’architecture des composants, assembler et
        optimiser des configurations, tout en étudiant comment les systèmes
        d’exploitation exploitent les ressources disponibles.
      </p>
      <p>
        Cela me permet de mieux appréhender les performances, les
        compatibilités, et d’avoir une vision complète du fonctionnement d’un
        ordinateur, de la couche matérielle jusqu’aux applications.
      </p>
    </div>
  );
};
export default HardSoft;