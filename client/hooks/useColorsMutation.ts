import { useEffect } from 'react';

export const useColorsMutation = (colors: string[]) => {
    useEffect(() => {
        const storedColors = localStorage.getItem('colors');
        if (storedColors) {
            document.documentElement.style.setProperty(
                '--primary-color',
                colors[7]
            );

            document.documentElement.style.setProperty(
                '--secondary-color',
                colors[5]
            );
            document.documentElement.style.setProperty(
                '--accent-color',
                colors[3]
            );
            document.documentElement.style.setProperty(
                '--text-color',
                colors[0]
            );
        }
    }, [colors]);
};
