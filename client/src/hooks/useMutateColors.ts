import { useEffect } from 'react';

export const useMutateColors = <T>(dependency?: T) => {
  useEffect(() => {
    const storedColors = localStorage.getItem('colors');

    console.log('first');
    if (storedColors) {
      const parsedValue = JSON.parse(storedColors);
      Object.keys(parsedValue).forEach((key) => {
        document.body.style.setProperty(`--${key}-color`, parsedValue[key]);
      });
    }
  }, [dependency]);
};
