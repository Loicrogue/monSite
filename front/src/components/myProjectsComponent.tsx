import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';
import ModalComponent from './modalComponent';
import ProjectItemModal from './modals/projectItemModal';

import bojob from '../assets/myProjects/bojob.png';
import breezy from '../assets/myProjects/breezy.png';
import easySave from '../assets/myProjects/easySave.png';
import station_meteo from '../assets/myProjects/station_meteo.jpg';
import sunny_enterprise from '../assets/myProjects/sunny_enterprise.png';

type Project = {
  title: string;
  description: string;
  imgSrc: string;
  githubLink: string;
};

const MyProjectsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();
  const textSizeClass = isMobile || isTablet ? "text-l" : "text-xl";

  const [isModalProjectItemOpen, setIsModalProjectItemOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const modalHeightSizeClass = isMobile ? "500px" : "800px";
  const modalWidthSizeClass = isMobile ? "80%" : "60%";

  const aboutItems: Project[] = [
    { title: t('pages.myProjects.breezy.title'), 
      description: t('pages.myProjects.breezy.description'), 
      imgSrc: breezy, 
      githubLink: "https://github.com/Loicrogue/Projet-Developpement-web-avance_Breezy" },
    { title: t('pages.myProjects.easySave.title'), 
      description: t('pages.myProjects.easySave.description'), 
      imgSrc: easySave, 
      githubLink: "https://github.com/Loicrogue/Projet-Genie-logiciel_EasySave" },
    { title: t('pages.myProjects.bojob.title'), 
      description: t('pages.myProjects.bojob.description'), 
      imgSrc: bojob, 
      githubLink: "https://github.com/Loicrogue/Projet-dev-web-BojoB" },
    { title: t('pages.myProjects.station_meteo.title'), 
      description: t('pages.myProjects.station_meteo.description'), 
      imgSrc: station_meteo, 
      githubLink: "https://github.com/Loicrogue/Projet-Systeme-embarque_Station-meteo" },
    { title: t('pages.myProjects.sunny_enterprise.title'), 
      description: t('pages.myProjects.sunny_enterprise.description'), 
      imgSrc: sunny_enterprise, 
      githubLink: "https://github.com/Loicrogue/Projet-POO_Sunny-Enterprise" },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* Grid des projets */}
      <div className={`w-full h-full grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6 p-6`}>
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 == 0 ? -500 : 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.35 }}
            className="flex p-4 cursor-pointer hover:scale-103 transition-transform items-center justify-center flex-col bg-white rounded-lg shadow-lg"
            onClick={() => {
              setSelectedProject(item);
              setIsModalProjectItemOpen(true);
            }}
          >
            <img
              src={item.imgSrc}
              alt={`project ${index + 1}`}
              className={`${isMobile ? "max-h-35" : "max-h-50"} object-contain mb-2 rounded-lg shadow-md`}
            />
            <span className={`text-monSite ${textSizeClass}`}>
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>

      <ModalComponent isOpen={isModalProjectItemOpen} height={modalHeightSizeClass} width={modalWidthSizeClass}
        onClose={() => {
          setIsModalProjectItemOpen(false);
          setSelectedProject(null);
        }}
        title={selectedProject?.title || ""}
      >
        <ProjectItemModal project={selectedProject} />
      </ModalComponent>

    </div>
  );
};

export default MyProjectsComponent;
