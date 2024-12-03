'use client';

import { ChangeEvent, useEffect } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { Input } from '../ui/input';

interface Props {
    label: string;
    type: 'primary' | 'secondary' | 'text' | 'accent';
}

const DEFAULT = {
    'primary-color': '#141414',
    'secondary-main': '#080808',
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
        <div className={`relative w-full h-12 cursor-pointer rounded-xl`}>
            <label
                htmlFor={`${type}-color`}
                className={`block text-accent-main text-center cursor-pointer text-sm uppercase font-bold relative`}
            >
                {label}
            </label>
            <Input
                type="color"
                name={`${type}-color`}
                id={`${type}-color`}
                onChange={onChangeHandler}
                className="border-none rounded-xl -z-10 h-8 w-full cursor-pointer"
                value={colors[`${type}-color`]}
            />
        </div>
    );
};

export default ColorPicker;
