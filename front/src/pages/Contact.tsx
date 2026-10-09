// @ts-expect-error react
import React from 'react';
import { motion } from 'framer-motion';
import Menu from '../components/menuComponent';
import ContactComponent from '../components/contactComponent';
import useTheme from '../hooks/useTheme';
import useResponsive from '../hooks/useResponsive';
import contact from '../assets/contact/contact.png'

const Contact = () => {
	useTheme();
	const { isMobile, isTablet } = useResponsive();
	const marginClass = isMobile ? "m-2" : isTablet ? "m-3" : "m-5";
  	return (
		<div className="fixed inset-0 bg-background-monSite overflow-auto">
			<motion.div 
				initial={{ opacity: 0, y: 30 }} 
				animate={{ opacity: 1, y: 0 }} 
				exit={{ opacity: 0, y: -30 }} 
				transition={{ duration: 0.3 }} 
				className={`flex flex-col item-center absolute inset-0 bg-container-monSite shadow-xl rounded-xl ${marginClass}`}
			>
				<Menu />
				<div className={`flex flex-row h-full overflow-y-auto scrollbar-child-container-monSite bg-child-container-monSite shadow-xl rounded-xl ${marginClass}`}>
					
					{/* FORMULAIRE */}
					<div className="flex flex-1 items-center justify-center p-6 md:p-10">
						<div className="w-full max-w-md">
							<ContactComponent />
						</div>
					</div>

					{/* IMAGE */}
					<div className="hidden md:flex flex-1 items-center justify-center border-l border-monSite">
						<img 
							src={contact} 
							className="max-w-[50%] max-h-[50%] object-contain"
							alt="contact illustration"
						/>
					</div>

				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
