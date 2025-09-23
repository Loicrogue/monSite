// @ts-expect-error react
import React from 'react';
import { useTranslation } from 'react-i18next';

const WebDev = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">💻 {t("pages.interests.bookmarks.webDev")}</h2>
      <p className="mb-2">{t("pages.interests.contents.webDev.1")}</p>
      <p>{t("pages.interests.contents.webDev.2")}</p>
    </div>
  );
};
export default WebDev;