import { useEffect, useState } from 'react';

/**
 * Cross-cutting reusable hook — no domain knowledge. Feature-specific hooks
 * belong inside their feature's `hooks/` folder instead.
 *
 * Subscribes to a CSS media query and returns whether it currently matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
