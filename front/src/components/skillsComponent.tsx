import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';
import tailwindLogo from '../assets/skills-items/tailwindCSS.png';

const programmingLanguagesSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", label: "C#" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
];

const frameworksAndLibrariesSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", label: "Express.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", label: "Angular" },
  { src: tailwindLogo, label: "Tailwind CSS" },
];

const databasesSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", label: "SQLite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },

];

const toolsAndPlatformsSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", label: "Visual Studio" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: "VS Code" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", label: "Netlify" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", label: "Windows 10" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg", label: "Windows 11" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg", label: "Ubuntu" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "Linux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", label: "Postman" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", label: "Vite" },
];

const SkillsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();

  const textSizeClass = isMobile || isTablet ? "text-l" : "text-xl";

  return (
      <div className='flex flex-col w-full'>
        <div className="flex flex-col flex-1 p-5 text-monSite border-2 border-monSite rounded-lg mx-4 my-2">
          <div className="w-full text-center mb-4 border-b-1 border-monSite pb-4">
            <h2 className={`font-bold ${isMobile || isTablet ? "text-l" : "text-2xl"}`}>{t('pages.skills.programmingLanguages')}</h2>
          </div>
          <div
            className={`grid ${
              isMobile ? "grid-cols-2 gap-6 w-full" : "grid-cols-5 gap-x-6 gap-y-10 w-full mx-auto"
            } justify-items-center py-8`}
          >
            {programmingLanguagesSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="flex flex-col items-center w-full"
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className={`${isMobile || isTablet ? "w-15 h-15" : "w-20 h-20"}`}
                />
                <span className={`mt-2 ${textSizeClass} text-center`}>{t(skill.label)}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 text-monSite border-2 border-monSite rounded-lg mx-4 my-2">
          <div className="w-full text-center mb-4 border-b-1 border-monSite pb-4">
            <h2 className={`font-bold ${isMobile || isTablet ? "text-l" : "text-2xl"}`}>{t('pages.skills.frameworksAndLibraries')}</h2>
          </div>
          <div
            className={`grid ${
              isMobile ? "grid-cols-2 gap-6 w-full" : "grid-cols-5 gap-x-6 gap-y-10 w-full mx-auto"
            } justify-items-center py-8`}
          >
            {frameworksAndLibrariesSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="flex flex-col items-center w-full"
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className={`${isMobile || isTablet ? "w-15 h-15" : "w-20 h-20"}`}
                />
                <span className={`mt-2 ${textSizeClass} text-center`}>{t(skill.label)}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 text-monSite border-2 border-monSite rounded-lg mx-4 my-2">
          <div className="w-full text-center mb-4 border-b-1 border-monSite pb-4">
            <h2 className={`font-bold ${isMobile || isTablet ? "text-l" : "text-2xl"}`}>{t('pages.skills.databases')}</h2>
          </div>
          <div
            className={`grid ${
              isMobile ? "grid-cols-2 gap-6 w-full" : "grid-cols-5 gap-x-6 gap-y-10 w-full mx-auto"
            } justify-items-center py-8`}
          >
            {databasesSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="flex flex-col items-center w-full"
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className={`${isMobile || isTablet ? "w-15 h-15" : "w-20 h-20"}`}
                />
                <span className={`mt-2 ${textSizeClass} text-center`}>{t(skill.label)}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 text-monSite border-2 border-monSite rounded-lg mx-4 my-2">
          <div className="w-full text-center mb-4 border-b-1 border-monSite pb-4">
            <h2 className={`font-bold ${isMobile || isTablet ? "text-l" : "text-2xl"}`}>{t('pages.skills.toolsAndPlatforms')}</h2>
          </div>
          <div
            className={`grid ${
              isMobile ? "grid-cols-2 gap-6 w-full" : "grid-cols-5 gap-x-6 gap-y-10 w-full mx-auto"
            } justify-items-center py-8`}
          >
            {toolsAndPlatformsSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="flex flex-col items-center w-full"
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className={`${isMobile || isTablet ? "w-15 h-15" : "w-20 h-20"}`}
                />
                <span className={`mt-2 ${textSizeClass} text-center`}>{t(skill.label)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SkillsComponent;
