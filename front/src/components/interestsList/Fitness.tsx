// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const Fitness = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">🏋️ {t("pages.interests.bookmarks.fitness")}</h2>
      <p className="mb-2">
        La musculation est pour moi bien plus qu’un simple sport : c’est une
        discipline qui m’apprend la constance, la rigueur et la patience.
      </p>
      <p>
        J’aime suivre ma progression, ajuster mes programmes et expérimenter de
        nouvelles méthodes d’entraînement. C’est un équilibre entre effort
        physique, mental et hygiène de vie, qui m’apporte énergie et
        détermination au quotidien.
      </p>
    </div>
  );
};
export default Fitness;