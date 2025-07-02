// src/utils/useResponsive.ts
import { useState, useEffect } from 'react';
import breakpoints from '../utils/breakpoint';

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= breakpoints.mobileMax;
  const isTablet = windowWidth > breakpoints.mobileMax && windowWidth <= breakpoints.tabletMax;
  const isDesktop = windowWidth >= breakpoints.desktopMin;

  return { isMobile, isTablet, isDesktop };
};

export default useResponsive;
