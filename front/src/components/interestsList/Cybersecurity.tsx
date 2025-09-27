import React from 'react';
import { useTranslation } from 'react-i18next';
import cyber_1 from '../../assets/interests/cyber_1.jpg'
import cyber_2 from '../../assets/interests/cyber_2.jpg'
import InterestSection from './InterestSection';

const CyberSecurity: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { type: "title" as const, value: `🛡️ ${t("pages.interests.bookmarks.cybersecurity")}` },
    { type: "text" as const, value: t("pages.interests.contents.cybersecurity.1") },
    { type: "image" as const, src: cyber_1 },
    { type: "text" as const, value: t("pages.interests.contents.cybersecurity.2") },
    { type: "image" as const, src: cyber_2 },
  ];

  return <InterestSection items={items} />;
};

export default CyberSecurity;
