// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const HardSoft = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="font-bold text-xl mb-3">🖥️ {t("pages.interests.bookmarks.hardSoft")}</h2>
      <p className="mb-2">{t("pages.interests.contents.hardSoft.1")}</p>
      <p>{t("pages.interests.contents.hardSoft.2")}</p>
    </div>
  );
};
export default HardSoft;