// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const Fitness = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="font-bold text-xl mb-3">🏋️ {t("pages.interests.bookmarks.fitness")}</h2>
      <p className="mb-2">{t("pages.interests.contents.fitness.1")}</p>
      <p>{t("pages.interests.contents.fitness.2")}</p>
    </div>
  );
};
export default Fitness;