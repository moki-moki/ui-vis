'use client';

import { ChangeEvent, useEffect } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { Input } from '../ui/input';

interface Props {
    label: string;
    type: 'primary' | 'secondary' | 'text' | 'accent';
}

const DEFAULT = {
    'primary-main': '#141414',
    'secondary-main': '#080808',
    background: '#0a0a0a',
    'primary-color': '#141414',
    'secondary-color': '#080808',
    'text-color': '#666666',
    'accent-color': '#fffcfa',
};

const ColorPicker = ({ label, type }: Props) => {
    const [colors, setColors] = useLocalStorage('colors', DEFAULT);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        document.documentElement.style.setProperty(
            `--${type}-color`,
            e.target.value
        );

        setColors((prev) => ({ ...prev, [`${type}-color`]: e.target.value }));
    };

    useEffect(() => {
        const storedColors = localStorage.getItem('colors');

        if (storedColors) {
            document.documentElement.style.setProperty(
                '--primary-color',
                colors['primary-color']
            );
            document.documentElement.style.setProperty(
                '--secondary-color',
                colors['secondary-color']
            );
            document.documentElement.style.setProperty(
                '--accent-color',
                colors['accent-color']
            );
            document.documentElement.style.setProperty(
                '--text-color',
                colors['text-color']
            );
        }
    }, []);

    return (
        <div
            className={`relative w-full h-12 cursor-pointer rounded-xl overflow-hidden bg-${type}-color`}
        >
            <label
                htmlFor={`${type}-color`}
                className={`block text-color text-center cursor-pointer text-sm text-background uppercase font-bold relative w-full h-full z-10`}
            >
                {label}
            </label>
            <Input
                type="color"
                name={`${type}-color`}
                id={`${type}-color`}
                onChange={onChangeHandler}
                className="border-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl -z-10 h-full w-full"
            />
        </div>
    );
};

export default ColorPicker;
