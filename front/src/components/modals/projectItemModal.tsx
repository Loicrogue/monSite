import React from 'react';
import { useTranslation } from 'react-i18next';
import useResponsive from '../../hooks/useResponsive';
import { FaGlobe } from "react-icons/fa";

type Project = {
    title: string;
    description: string;
    imgSrc: string;
    githubLink: string;
    websiteLink?: string;
} | null;

type Props = {
    project: Project;
};

const ProjectItemModal: React.FC<Props> = ({ project }) => {
  if (!project) return null;

  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();

  return (
    <div className="flex flex-col items-center w-full gap-4 p-2">
        <img
            src={project.imgSrc}
            alt={project.title}
            className={`${isMobile ? "max-h-60" : "max-h-120"} object-contain mb-4 rounded-lg shadow-md`}
        />
        <span className={`text-monSite ${isMobile || isTablet ? "text-m" : "text-lg"} font-semibold`}>
            {project.description}
        </span>
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-5`}>
            <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    flex items-center justify-center gap-2
                    bg-background-monSite
                    ${isMobile || isTablet ? "text-m" : "text-lg"}
                    p-2 rounded-lg
                    transition-transform duration-200 hover:scale-110
                `}
            >
                <p className='text-monSite'>{t('pages.myProjects.seeTheProject')}</p>
                <div className="rounded-lg bg-child-child-container-monSite p-1">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className={`${isMobile ? "w-5 h-5" : isTablet ? "w-8 h-8" : "w-10 h-10"}`}
                    />
                </div>
            </a>
            {project?.websiteLink && (
                <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        flex items-center justify-center gap-2
                        bg-background-monSite
                        ${isMobile || isTablet ? "text-m" : "text-lg"}
                        p-2 rounded-lg
                        transition-transform duration-200 hover:scale-110
                    `}
                >
                    <p className='text-monSite'>{t('pages.myProjects.visitTheWebsite')}</p>
                    <div className="rounded-lg bg-child-child-container-monSite p-1">
                        <FaGlobe
                            className={`${isMobile ? "w-4 h-4" : isTablet ? "w-7 h-7" : "w-9 h-9"}`}
                        />
                    </div>
                </a>
            )}
        </div>
    </div>
  );
};

export default ProjectItemModal;
