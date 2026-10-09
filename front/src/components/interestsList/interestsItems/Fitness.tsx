import React from 'react';
import { useTranslation } from 'react-i18next';
import fitness_1 from '../../../assets/interests/fitness_1.jpg'
import fitness_2 from '../../../assets/interests/fitness_2.jpg'
import InterestSection from '../InterestSection';

const Fitness: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { type: "title" as const, value: `🏋️ ${t("pages.interests.bookmarks.fitness")}` },
    { type: "text" as const, value: t("pages.interests.contents.fitness.1") },
    { type: "image" as const, src: fitness_1 },
    { type: "text" as const, value: t("pages.interests.contents.fitness.2") },
    { type: "image" as const, src: fitness_2 },
  ];

  return <InterestSection items={items} />;
};

export default Fitness;
