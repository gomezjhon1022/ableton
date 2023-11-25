import { useState } from 'react';

function useResponsive () {
  const [isDesktop, setIsDesktop]=useState(false);

  const handleResize = () => {
    setIsDesktop(window.innerWidth>1279);
  }

  return {setIsDesktop, isDesktop, handleResize};
}

export { useResponsive }