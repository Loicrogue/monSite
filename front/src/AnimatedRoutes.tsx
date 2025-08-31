// @ts-expect-error react
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from './pages/NotFound';
import Home from './pages/Home.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Skills from './pages/Skills.tsx';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
