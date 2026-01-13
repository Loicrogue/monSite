import React from 'react';
import { useTranslation } from 'react-i18next';
import web_1 from '../../assets/interests/web_1.jpg'
import web_2 from '../../assets/interests/web_2.jpg'
import InterestSection from '../InterestSection';

const WebDev: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { type: "title" as const, value: `🌐 ${t("pages.interests.bookmarks.webDev")}` },
    { type: "text" as const, value: t("pages.interests.contents.webDev.1") },
    { type: "image" as const, src: web_1 },
    { type: "text" as const, value: t("pages.interests.contents.webDev.2") },
    { type: "image" as const, src: web_2 },
  ];

  return <InterestSection items={items} />;
};

export default WebDev;
