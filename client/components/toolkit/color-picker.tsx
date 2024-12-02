'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ChangeEvent } from 'react';

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
    const [_, setColors] = useLocalStorage('colors', DEFAULT);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        document.documentElement.style.setProperty(
            `--${type}-color`,
            e.target.value
        );

        setColors((prev) => ({ ...prev, [`${type}-color`]: e.target.value }));
    };

    return (
        <div className="relative w-full h-12 cursor-pointer flex justify-center items-center">
            <label
                htmlFor={`${type}-color`}
                className="text-color cursor-pointer p-5 text-xs text-accent-color uppercase font-bold relative z-10"
            >
                {label}
            </label>
            <input
                type="color"
                name={`${type}-color`}
                id={`${type}-color`}
                onChange={onChangeHandler}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl h-full w-full border-none outline-none"
            />
        </div>
    );
};

export default ColorPicker;
