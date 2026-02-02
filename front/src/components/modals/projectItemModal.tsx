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
  const { isMobile } = useResponsive();

  return (
    <div className="flex flex-col items-center w-full gap-4 p-2">
        <img
            src={project.imgSrc}
            alt={project.title}
            className={`${isMobile ? "max-h-60" : "max-h-120"} object-contain mb-4 rounded-lg shadow-md`}
        />
        <span className="text-monSite text-lg font-semibold">
            {project.description}
        </span>
        <button
            type="button"
            className="cursor-pointer bg-background-monSite text-monSite text-lg px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-110"
            onClick={() => {window.open(project.githubLink);}}
        >
            {t('pages.myProjects.seeTheProject')}
        </button>
    </div>
  );
};

export default ProjectItemModal;
