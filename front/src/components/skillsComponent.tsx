import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';

import html from '../assets/skills-items/html-logo.png';
import css from '../assets/skills-items/css-logo.png';
import java from '../assets/skills-items/java-logo.png';
import python from '../assets/skills-items/python-logo.png';
import reactLogo from '../assets/skills-items/react-logo.png';
import mySQL from '../assets/skills-items/mySQL-logo.png';
import git from '../assets/skills-items/git-logo.png';
import docker from '../assets/skills-items/docker-logo.png';

const skills = [
  { src: html, label: 'HTML5' },
  { src: css, label: 'CSS' },
  { src: java, label: 'Java' },
  { src: python, label: 'Python' },
  { src: reactLogo, label: 'React' },
  { src: mySQL, label: 'MySQL' },
  { src: git, label: 'Git' },
  { src: docker, label: 'Docker' },
];

const SkillsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();

  const textSizeClass = isMobile || isTablet ? "text-l" : "text-xl";

  return (
    <div className="flex flex-col w-full flex-1 p-5 text-monSite">
      <div
        className={`grid ${
          isMobile ? "grid-cols-2 gap-6 w-full" : "grid-cols-4 gap-x-6 gap-y-10 w-4/5 mx-auto"
        } justify-items-center py-8`}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            className="flex flex-col items-center w-full"
          >
            <img src={skill.src} alt={skill.label} className="w-20 h-20" />
            <span className={`mt-2 ${textSizeClass} text-center`}>{t(skill.label)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
