import { useState, useEffect } from 'react';

const useResponsive = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileMax = 710;
    const tabletMax = 1024;
    const desktopMin = 1025;

    const isMobile = windowWidth <= mobileMax;
    const isTablet = windowWidth > mobileMax && windowWidth <= tabletMax;
    const isDesktop = windowWidth >= desktopMin;

    return { isMobile, isTablet, isDesktop, windowWidth };
};

export default useResponsive;
