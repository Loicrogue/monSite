// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const Cybersecurity = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="font-bold text-xl mb-3">🛡️ {t("pages.interests.bookmarks.cybersecurity")}</h2>
     <p className="mb-2">{t("pages.interests.contents.cybersecurity.1")}</p>
      <p>{t("pages.interests.contents.cybersecurity.2")}</p>
    </div>
  );
};
export default Cybersecurity;