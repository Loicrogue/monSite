import React from 'react';
import { useTranslation } from 'react-i18next';
import games from '../../assets/aboutMePage/games.png';
import InterestSection from './InterestSection';

const WebDev: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { type: "title" as const, value: `🌐 ${t("pages.interests.bookmarks.webDev")}` },
    { type: "text" as const, value: t("pages.interests.contents.webDev.1") },
    { type: "image" as const, src: games },
    { type: "text" as const, value: t("pages.interests.contents.webDev.2") },
    { type: "image" as const, src: games },
  ];

  return <InterestSection items={items} />;
};

export default WebDev;
