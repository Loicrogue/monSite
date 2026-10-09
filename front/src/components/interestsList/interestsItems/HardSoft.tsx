import React from 'react';
import { useTranslation } from 'react-i18next';
import hardsoft_1 from '../../../assets/interests/hardsoft_1.jpg'
import hardsoft_2 from '../../../assets/interests/hardsoft_2.jpg'
import InterestSection from '../InterestSection';

const HardSoft: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { type: "title" as const, value: `🖥️ ${t("pages.interests.bookmarks.hardSoft")}` },
    { type: "text" as const, value: t("pages.interests.contents.hardSoft.1") },
    { type: "image" as const, src: hardsoft_1 },
    { type: "text" as const, value: t("pages.interests.contents.hardSoft.2") },
    { type: "image" as const, src: hardsoft_2 },
  ];

  return <InterestSection items={items} />;
};

export default HardSoft;
