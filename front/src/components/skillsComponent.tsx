import React from 'react';
import { useTranslation } from 'react-i18next';

import html from '../assets/skills-items/html-logo.png';
import css from '../assets/skills-items/css-logo.png';
import java from '../assets/skills-items/java-logo.png';
import python from '../assets/skills-items/python-logo.png';

import react from '../assets/skills-items/react-logo.png';
import mySQL from '../assets/skills-items/mySQL-logo.png';

import git from '../assets/skills-items/git-logo.png';
import docker from '../assets/skills-items/docker-logo.png';


const SkillsComponent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className='flex flex-col w-full items-center text-monSite p-5'>
            <div className="grid grid-cols-4 gap-y-10 gap-x-6 justify-items-center items-center py-8">
                {/* Row 1 */}
                <div className="flex flex-col items-center">
                    <img src={html} alt="HTML5" className="w-20 h-20" />
                    <span className="mt-2">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={css} alt="CSS" className="w-20 h-20" />
                    <span className="mt-2">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={java} alt="Java" className="w-20 h-20" />
                    <span className="mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={python} alt="Python" className="w-20 h-20" />
                    <span className="mt-2">Python</span>
                </div>
                {/* Row 2 */}
                <div className="flex flex-col items-center">
                    <img src={react} alt="React" className="w-20 h-20" />
                    <span className="mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={mySQL} alt="MySQL" className="w-20 h-20" />
                    <span className="mt-2">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={git} alt="Git" className="w-20 h-20" />
                    <span className="mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={docker} alt="Docker" className="w-20 h-20" />
                    <span className="mt-2">Docker</span>
                </div>
            </div>
        </div>
    );
};

export default SkillsComponent;