import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (e: Event) => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
};
