import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reads the URL hash and scrolls to the matching section.
 * Retries up to 10 times (every 100 ms) so it works even when
 * navigating from another route where the target isn't mounted yet.
 */
const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    // Brief delay so the target section has time to mount on first render
    setTimeout(tryScroll, 50);
  }, [hash]);
};

export default useScrollToHash;
