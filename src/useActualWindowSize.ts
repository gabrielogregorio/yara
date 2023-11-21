import { useState, useEffect } from 'react';

export const useActualWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  useEffect(() => {
    const handleUpdateWindowSize = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };

    handleUpdateWindowSize();

    window.addEventListener('resize', handleUpdateWindowSize);

    return () => {
      window.removeEventListener('resize', handleUpdateWindowSize);
    };
  }, []);

  return windowSize;
};
