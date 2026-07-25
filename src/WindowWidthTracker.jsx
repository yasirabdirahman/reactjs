import react, { useState, useEffect } from 'react';

const WindowWidthTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
};

export default WindowWidthTracker;