/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

// Export a new React Hook to detect whether the user has prefers reduced motion enabled
// Taken from https://www.joshwcomeau.com/react/prefers-reduced-motion/#the-hook-5
export const usePrefersReducedMotion = () => {
  const QUERY = '(prefers-reduced-motion: no-preference)';

  const [
    prefersReducedMotion,
    setPrefersReducedMotion,
  ] = useState(true);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    // Set the true initial value, now that we're on the client:
    setPrefersReducedMotion(
      !window.matchMedia(QUERY).matches,
    );
    // Register our event listener
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return prefersReducedMotion;
};
