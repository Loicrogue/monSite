// @ts-expect-error react
import React from 'react';
import { motion } from 'framer-motion';
import Menu from '../components/menuComponent';
import SkillsComponent from '../components/skillsComponent';
import useTheme from '../hooks/useTheme';

const Skills = () => {
	useTheme();
  	return (
		<div className="fixed inset-0 bg-background-monSite overflow-auto">
			<motion.div 
				initial={{ opacity: 0, y: 30 }} 
				animate={{ opacity: 1, y: 0 }} 
				exit={{ opacity: 0, y: -30 }} 
				transition={{ duration: 0.3 }} 
				className="flex flex-col item-center absolute inset-0 bg-container-monSite shadow-xl rounded-xl m-5"
			>
				<Menu />
				<div className="flex flex-row h-full bg-child-container-monSite shadow-xl rounded-xl m-5">
                    <SkillsComponent />
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
