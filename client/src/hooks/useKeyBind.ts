import { useCallback, useEffect } from 'react';

export const useKeyBind = (key: string, callback: () => void) => {
  const handleKeybind = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === key) {
        e.preventDefault();
        callback();
      }
    },
    [callback, key],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeybind);

    return () => {
      window.removeEventListener('keydown', handleKeybind);
    };
  }, [handleKeybind]);
};
