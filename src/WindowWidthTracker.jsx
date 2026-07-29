import react, { useState, useEffect } from 'react';
const WindowWidthTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const  handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleRseize);
     return () => {
      window.removeEventListener('resize', handleResize);
     };
  }, []);
 return <p> window width: {width}px </p>
};
export default WindowWidthTracker;