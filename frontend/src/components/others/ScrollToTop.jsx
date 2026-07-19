import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window back to the top whenever the route changes, so every
// page opens at its first component instead of retaining the previous scroll.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
