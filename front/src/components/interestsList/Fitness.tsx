import React from 'react';
import { useTranslation } from 'react-i18next';
import games from '../../assets/aboutMePage/games.png';
import InterestSection from './InterestSection';

const Fitness: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { type: "title" as const, value: `🏋️ ${t("pages.interests.bookmarks.fitness")}` },
    { type: "text" as const, value: t("pages.interests.contents.fitness.1") },
    { type: "image" as const, src: games },
    { type: "text" as const, value: t("pages.interests.contents.fitness.2") },
    { type: "image" as const, src: games },
  ];

  return <InterestSection items={items} />;
};

export default Fitness;
