import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(
    key: string,
    initialValue: T | (() => T)
) => {
    const [state, setState] = useState<T>(() => {
        const val = localStorage.getItem(key);
        if (val === null) {
            if (typeof initialValue === 'function') {
                return (initialValue as () => T)();
            } else {
                return initialValue;
            }
        } else {
            return JSON.parse(val);
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState] as [T, typeof setState];
};
