import { useState, useEffect, useCallback, useRef } from 'react';

export default function useHandleClickOutside(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (isComponentVisible && ref.current && !ref.current.contains(event.target as Node)) {
        setIsComponentVisible(false);
      }
    },
    [isComponentVisible]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { componentVisibleRef: ref, isComponentVisible, setIsComponentVisible };
}
