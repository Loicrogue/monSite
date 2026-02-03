import React from 'react';
import { useTranslation } from 'react-i18next';
import useResponsive from '../../hooks/useResponsive';

type Project = {
    title: string;
    description: string;
    imgSrc: string;
    githubLink: string;
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
        <button
            type="button"
            className={`cursor-pointer flex items-center gap-2 bg-background-monSite text-monSite ${isMobile || isTablet ? "text-m" : "text-lg"} p-2 rounded-lg transition-transform duration-200 hover:scale-110`}
        >
            <a href={project.githubLink} className='flex items-center gap-2'>
                {t('pages.myProjects.seeTheProject')}
                <div className='rounded-lg bg-child-container-monSite'>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className={`${isMobile ? "w-5 h-5" : isTablet ? "w-8 h-8" : "w-10 h-10"}`}
                        />
                </div>
            </a>
        </button>
    </div>
  );
};

export default ProjectItemModal;
