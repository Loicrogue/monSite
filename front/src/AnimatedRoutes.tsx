// @ts-expect-error react
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import i18n from 'i18next';
import NotFound from './pages/NotFound';
import Home from './pages/Home.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Skills from './pages/Skills.tsx';
import Interests from './pages/Interests.tsx';
import MyProjects from './pages/MyProjects.tsx';
import Contact from './pages/Contact.tsx';
import ContactSuccess from './pages/ContactSuccess.tsx';

function AnimatedRoutes() {
    const location = useLocation();

    function LangRoutesWrapper() {
        const { lang } = useParams();
        useEffect(() => {
            const supported = ['en', 'fr', 'it'];
            if (lang && supported.includes(lang)) {
                i18n.changeLanguage(lang).catch(() => {});
                localStorage.setItem('i18nextLng', lang);
            }
        }, [lang]);

        return (
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="" element={<Home />} />
                    <Route path="aboutMe" element={<AboutMe />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="interests" element={<Interests />} />
                    <Route path="myProjects" element={<MyProjects />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="contact-success" element={<ContactSuccess />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        );
    }

    function getPreferredLang() {
        const supported = ['en', 'fr', 'it'];
        const stored = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null;
        if (stored && supported.includes(stored)) return stored;
        const nav = typeof navigator !== 'undefined' ? navigator.language?.slice(0, 2) : null;
        if (nav && supported.includes(nav)) return nav;
        return 'fr';
    }

    function RedirectToPreferred({ to }: { to: string }) {
        const lang = getPreferredLang();
        return <Navigate to={`/${lang}${to ? `/${to}` : ''}`} replace />;
    }

    function RootRedirect() {
        const lang = getPreferredLang();
        return <Navigate to={`/${lang}`} replace />;
    }

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootRedirect />} />
            <Route path="aboutMe" element={<RedirectToPreferred to="aboutMe" />} />
            <Route path="skills" element={<RedirectToPreferred to="skills" />} />
            <Route path="interests" element={<RedirectToPreferred to="interests" />} />
            <Route path="myProjects" element={<RedirectToPreferred to="myProjects" />} />
            <Route path="contact" element={<RedirectToPreferred to="contact" />} />
            <Route path="contact-success" element={<ContactSuccess />} />
            <Route path=":lang/*" element={<LangRoutesWrapper />} />
            <Route path="*" element={<RedirectToPreferred to="*" />} />
        </Routes>
    );
}

export default AnimatedRoutes;
