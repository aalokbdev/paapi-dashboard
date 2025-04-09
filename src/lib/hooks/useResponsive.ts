import { useState, useEffect } from 'react';

export function useResponsive() {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    if(typeof window !== undefined){
      const checkDeviceType = () => {
  
        const width = window.innerWidth;
        if (width < 640) {
          setDeviceType('mobile');
        } else if (width < 1024) {
          setDeviceType('tablet');
        } else {
          setDeviceType('desktop');
        }
      };
  
      checkDeviceType();
      window.addEventListener('resize', checkDeviceType);
      return () => window.removeEventListener('resize', checkDeviceType);

    }
  }, []);

  return {
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    deviceType
  };
}
